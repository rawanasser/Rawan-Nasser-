"use client";

import React, { useEffect, useState } from "react";

export default function SystemLoader({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<number>(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if reduced motion or already loaded in this session
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasBooted = sessionStorage.getItem("rawan_booted");

    if (prefersReducedMotion || hasBooted) {
      setIsDone(true);
      onComplete?.();
      return;
    }

    const t1 = setTimeout(() => setPhase(1), 500); // RAWAN NASSER
    const t2 = setTimeout(() => setPhase(2), 1100); // Initializing / Portfolio
    const t3 = setTimeout(() => setPhase(3), 1700); // Rawan Nasser / Software Developer
    const t4 = setTimeout(() => {
      setIsDone(true);
      sessionStorage.setItem("rawan_booted", "true");
      onComplete?.();
    }, 2200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div
      role="progressbar"
      aria-label="System Initialization"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink-deep text-ivory transition-opacity duration-500"
    >
      <div className="relative flex flex-col items-center text-center px-4">
        {/* Subtle coordinate ticks */}
        <div className="mb-6 flex items-center gap-3 font-mono text-[10px] tracking-widest text-ivory/40">
          <span>SYS BOOT</span>
          <span className="h-1 w-1 rounded-full bg-sage animate-ping" />
          <span>PORTFOLIO v1.0</span>
        </div>

        {/* Phase Text Transitions */}
        <div className="h-16 flex items-center justify-center">
          {phase === 0 && (
            <div className="font-mono text-xs tracking-widest text-ivory/60 animate-pulse">
              [ ACCESSING COGNITIVE ENVIRONMENT ]
            </div>
          )}

          {phase === 1 && (
            <h1 className="font-serif text-3xl sm:text-4xl font-light tracking-widest text-ivory animate-in fade-in duration-300">
              RAWAN NASSER
            </h1>
          )}

          {phase === 2 && (
            <div className="font-mono text-sm tracking-widest text-gold animate-in fade-in duration-300">
              Initializing / Portfolio
            </div>
          )}

          {phase === 3 && (
            <div className="flex flex-col items-center gap-1 animate-in fade-in duration-300">
              <span className="font-serif text-xl sm:text-2xl text-ivory tracking-wider">
                Rawan Nasser
              </span>
              <span className="font-mono text-xs tracking-widest text-sage">
                Software Developer
              </span>
            </div>
          )}
        </div>

        {/* Minimal Progress Bar Rule */}
        <div className="mt-8 h-0.5 w-48 overflow-hidden bg-ivory/10">
          <div
            className="h-full bg-gradient-to-r from-sage via-gold to-rose transition-all duration-500 ease-out"
            style={{
              width: phase === 0 ? "15%" : phase === 1 ? "45%" : phase === 2 ? "80%" : "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
