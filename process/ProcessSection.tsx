"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ProcessSection() {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const stages = PORTFOLIO_DATA.processStages;
  const current = stages[activeStageIndex];

  // Arrow key navigation listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only navigate if focus is within process container or user presses arrow keys
      if (document.activeElement?.closest("#process-stepper")) {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          setActiveStageIndex((prev) => (prev + 1) % stages.length);
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          setActiveStageIndex((prev) => (prev - 1 + stages.length) % stages.length);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [stages.length]);

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-ivory/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-gold/80 tracking-widest uppercase mb-3">
            <span className="h-1.5 w-1.5 bg-gold rounded-full" />
            <span>Process / Eight stages</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-ivory tracking-tight">
            FROM IDEA <span className="text-sage italic">TO SHIPPED.</span>
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-sm sm:text-base text-ivory/70 font-light leading-relaxed mb-2">
            Select a stage, or use the arrow keys, to see what happens there.
          </p>
          <div className="font-mono text-xs text-gold tracking-widest uppercase">
            [ ← / → arrow navigation enabled ]
          </div>
        </div>
      </div>

      {/* Process Stepper Container */}
      <div id="process-stepper" tabIndex={0} className="space-y-8 focus:outline-none focus:ring-1 focus:ring-gold/30 p-2 rounded-lg">
        {/* Horizontal Progress Timeline */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
          {stages.map((stage, idx) => {
            const isSelected = activeStageIndex === idx;
            const isPast = activeStageIndex > idx;

            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageIndex(idx)}
                className={`p-3 rounded border text-left font-mono transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "border-gold bg-gold text-ink font-bold shadow-lg scale-102"
                    : isPast
                    ? "border-sage/40 bg-sage/10 text-sage hover:border-sage"
                    : "border-ivory/10 bg-ink-deep/50 text-ivory/40 hover:text-ivory hover:border-ivory/25"
                }`}
                aria-label={`Stage ${stage.number}: ${stage.title}`}
                data-cursor="hover"
              >
                <div className="text-[10px] opacity-75">{stage.number}</div>
                <div className="text-xs uppercase tracking-wider font-semibold truncate mt-0.5">
                  {stage.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Showcase Box */}
        <div className="bg-ink-card border border-ivory/15 p-8 sm:p-12 rounded-xl shadow-xl min-h-[300px] flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-ivory/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-gold/15 text-gold border border-gold/30">
                  STAGE {current.number}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-light text-ivory tracking-wide">
                  {current.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveStageIndex((prev) => (prev - 1 + stages.length) % stages.length)}
                  className="p-2 rounded border border-ivory/15 hover:border-gold hover:text-gold text-ivory/60 transition-colors"
                  aria-label="Previous Stage"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setActiveStageIndex((prev) => (prev + 1) % stages.length)}
                  className="p-2 rounded border border-ivory/15 hover:border-gold hover:text-gold text-ivory/60 transition-colors"
                  aria-label="Next Stage"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <p className="text-xl sm:text-2xl text-ivory font-light leading-relaxed border-l-2 border-sage/50 pl-6 py-1">
              &ldquo;{current.shortDesc}&rdquo;
            </p>

            <p className="text-base text-ivory/70 font-light leading-relaxed max-w-3xl">
              {current.fullDesc}
            </p>
          </div>

          <div className="mt-8 border-t border-ivory/10 pt-4 flex flex-wrap items-center justify-between font-mono text-xs text-ivory/50 gap-4">
            <div className="flex items-center gap-2 text-sage">
              <CheckCircle2 className="h-4 w-4" />
              <span>Rigorous engineering milestone</span>
            </div>
            <div className="text-gold">
              Next: {current.nextStageTitle}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
