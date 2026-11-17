"use client";

import React, { useEffect, useRef } from "react";

interface LiveCanvasProps {
  sectionMode?: "default" | "qr" | "mobile" | "ai" | "calm";
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  baseAlpha: number;
  layer: number;
}

export default function LiveCanvas({ sectionMode = "default" }: LiveCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, prevX: -1000, prevY: -1000, vx: 0, vy: 0 });
  const sectionModeRef = useRef(sectionMode);

  useEffect(() => {
    sectionModeRef.current = sectionMode;
  }, [sectionMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Reduced motion check
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Handle resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Track pointer
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const dx = clientX - mouseRef.current.prevX;
      const dy = clientY - mouseRef.current.prevY;
      mouseRef.current.vx = dx * 0.2;
      mouseRef.current.vy = dy * 0.2;
      mouseRef.current.prevX = clientX;
      mouseRef.current.prevY = clientY;
      mouseRef.current.x = clientX;
      mouseRef.current.y = clientY;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Initialize particles
    const particleCount = window.innerWidth < 768 ? 30 : 65;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0.05 : 0.4),
        vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0.05 : 0.4),
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.4 + 0.15,
        baseAlpha: Math.random() * 0.35 + 0.1,
        layer: Math.floor(Math.random() * 3),
      });
    }

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      const mode = sectionModeRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Draw subtle background grid for QR mode
      if (mode === "qr") {
        ctx.strokeStyle = "rgba(182, 154, 105, 0.04)";
        ctx.lineWidth = 1;
        const step = 48;
        for (let x = 0; x < width; x += step) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        for (let y = 0; y < height; y += step) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
      }

      // Draw subtle neural layer guides for AI mode
      if (mode === "ai") {
        ctx.strokeStyle = "rgba(185, 143, 145, 0.05)";
        ctx.lineWidth = 1;
        for (let i = 1; i <= 5; i++) {
          const colX = (width / 6) * i;
          ctx.beginPath();
          ctx.moveTo(colX, 0);
          ctx.lineTo(colX, height);
          ctx.stroke();
        }
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          // React slightly to mouse proximity
          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140 && dist > 0) {
            const force = (140 - dist) / 140;
            p.x -= (dx / dist) * force * 1.5;
            p.y -= (dy / dist) * force * 1.5;
          }

          // Wrap around borders
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        // Color based on section theme
        let pColor = `rgba(155, 175, 154, ${p.alpha})`; // sage
        if (mode === "qr") {
          pColor = `rgba(182, 154, 105, ${p.alpha * 1.2})`; // gold
        } else if (mode === "mobile") {
          pColor = `rgba(155, 175, 154, ${p.alpha * 1.3})`; // sage
        } else if (mode === "ai") {
          pColor = `rgba(185, 143, 145, ${p.alpha * 1.3})`; // rose
        } else if (mode === "calm") {
          pColor = `rgba(234, 229, 217, ${p.alpha * 0.7})`; // ivory
        }

        ctx.fillStyle = pColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles with subtle lines
        const maxDist = mode === "mobile" ? 140 : 100;
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distSq = (p.x - p2.x) ** 2 + (p.y - p2.y) ** 2;
          if (distSq < maxDist * maxDist) {
            const d = Math.sqrt(distSq);
            const lineAlpha = (1 - d / maxDist) * 0.12;
            ctx.strokeStyle =
              mode === "ai"
                ? `rgba(185, 143, 145, ${lineAlpha})`
                : mode === "qr"
                ? `rgba(182, 154, 105, ${lineAlpha})`
                : `rgba(155, 175, 154, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [sectionMode]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-60"
    />
  );
}
