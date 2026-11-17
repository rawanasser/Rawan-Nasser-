"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function MethodSection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const steps = PORTFOLIO_DATA.methodology;

  return (
    <section id="method" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-ivory/10">
      {/* Header */}
      <div className="mb-20">
        <div className="flex items-center gap-2 font-mono text-xs text-gold/80 tracking-widest uppercase mb-3">
          <span className="h-1.5 w-1.5 bg-gold rounded-full" />
          <span>Method / How I think</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-ivory tracking-tight max-w-4xl leading-[1.1]">
          I DON&apos;T SEE DEVELOPMENT AS <br />
          <span className="text-gold italic font-normal">SIMPLY WRITING CODE.</span>
        </h2>
      </div>

      {/* Six Sequential Method Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((st, idx) => {
          const isHovered = hoveredStep === idx;
          return (
            <div
              key={st.step}
              onMouseEnter={() => setHoveredStep(idx)}
              onMouseLeave={() => setHoveredStep(null)}
              className={`p-8 border rounded-lg transition-all duration-300 relative ${
                isHovered
                  ? "border-gold bg-ink-card shadow-xl -translate-y-1"
                  : "border-ivory/10 bg-ink-deep/40 hover:border-ivory/30"
              }`}
              data-cursor="hover"
            >
              <div className="flex items-center justify-between font-mono text-xs mb-6">
                <span className={`px-2 py-0.5 rounded ${isHovered ? "bg-gold text-ink font-bold" : "text-gold/80 bg-gold/10"}`}>
                  STAGE {st.step}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-ivory/20" />
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-light text-ivory mb-3 leading-snug">
                {st.statement}
              </h3>

              <p className="font-mono text-xs text-ivory/60 leading-relaxed">
                {st.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Section 59: Product Philosophy Dual Typographic Interaction */}
      <div className="mt-28 p-8 sm:p-14 border border-ivory/15 bg-gradient-to-b from-ink-card to-ink-deep rounded-xl overflow-hidden relative">
        <div className="max-w-2xl mb-8">
          <span className="font-mono text-xs text-sage tracking-widest uppercase block mb-2">
            Dual Philosophy
          </span>
          <p className="text-lg sm:text-xl text-ivory/80 font-light">
            I care about both sides of a product:
          </p>
        </div>

        {/* Visual Typographic Interaction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 items-center border-t border-ivory/10">
          <div className="group p-6 border border-transparent hover:border-gold/30 rounded transition-all">
            <span className="font-mono text-xs text-gold/80 uppercase tracking-widest block mb-2">
              System Backbone
            </span>
            <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-ivory tracking-tight group-hover:text-gold transition-colors">
              HOW IT WORKS
            </h3>
            <p className="mt-4 font-mono text-xs text-ivory/50 leading-relaxed">
              Resilient architecture, typed data contracts, multi-tenant boundaries, efficient query paths, and automated builds.
            </p>
          </div>

          <div className="group p-6 border border-transparent hover:border-sage/30 rounded transition-all md:border-l md:border-ivory/10">
            <span className="font-mono text-xs text-sage uppercase tracking-widest block mb-2">
              Human Experience
            </span>
            <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-ivory tracking-tight group-hover:text-sage transition-colors">
              HOW PEOPLE EXPERIENCE IT.
            </h3>
            <p className="mt-4 font-mono text-xs text-ivory/50 leading-relaxed">
              Fluid responsiveness, instant feedback loops, zero clutter, accessible contrasts, and delightful tactile clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
