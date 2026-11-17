"use client";

import React, { useEffect, useState, useRef } from "react";

export type CursorMode = "default" | "hover" | "view" | "drag" | "explore";

export default function CustomCursor() {
  const [mode, setMode] = useState<CursorMode>("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const posRef = useRef({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Check if device is touch-primary
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Check target element for custom cursor attributes
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const customMode = cursorTarget.getAttribute("data-cursor") as CursorMode;
        setMode(customMode || "hover");
      } else if (
        target.closest("button, a, input, textarea, select, [role='button'], [tabindex='0']")
      ) {
        setMode("hover");
      } else {
        setMode("default");
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    let frameId: number;
    const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

    const loop = () => {
      posRef.current.x = lerp(posRef.current.x, targetRef.current.x, 0.2);
      posRef.current.y = lerp(posRef.current.y, targetRef.current.y, 0.2);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
      }
      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-50 -ml-4 -mt-4 transition-[width,height,background-color,border-color] duration-200 ease-out"
      style={{
        transform: `translate3d(-100px, -100px, 0)`,
      }}
    >
      {mode === "default" && (
        <div className="flex h-8 w-8 items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-sage shadow-[0_0_8px_rgba(155,175,154,0.6)]" />
        </div>
      )}

      {mode === "hover" && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/70 bg-gold/10 backdrop-blur-[1px] transition-all">
          <div className="h-1.5 w-1.5 rounded-full bg-gold" />
        </div>
      )}

      {mode === "view" && (
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-ivory/60 bg-ink/90 text-[10px] font-mono tracking-widest text-ivory shadow-lg backdrop-blur-sm">
          VIEW
        </div>
      )}

      {mode === "drag" && (
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-sage/60 bg-ink/90 text-[10px] font-mono tracking-widest text-sage shadow-lg backdrop-blur-sm">
          DRAG
        </div>
      )}

      {mode === "explore" && (
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/60 bg-ink/90 text-[10px] font-mono tracking-widest text-gold shadow-lg backdrop-blur-sm">
          EXPLORE
        </div>
      )}
    </div>
  );
}
