"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function PhilosophySection() {
  const [activeStep, setActiveStep] = useState(0);
  const data = PORTFOLIO_DATA.philosophy;

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-ivory/10">
      {/* Editorial Label & Counter */}
      <div className="flex items-center justify-between font-mono text-xs text-gold/80 mb-12 tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 bg-gold rounded-full" />
          <span>{data.label}</span>
        </div>
        <span className="text-ivory/40">EXPLORE / SEQUENTIAL METHOD</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Primary Statement & Animated Echo */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <div className="font-mono text-xs text-sage tracking-[0.25em] mb-2 uppercase">
              Core Axiom
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-ivory tracking-tight leading-[1.1]">
              I LEARN BY <br />
              <span className="text-gold font-normal">BUILDING.</span>
            </h2>
          </div>

          {/* Repeated typography echo */}
          <div
            aria-hidden="true"
            className="font-serif text-2xl sm:text-3xl text-ivory/15 tracking-widest select-none italic"
          >
            I learn by building.
          </div>

          <p className="text-lg sm:text-xl text-ivory/80 font-light leading-relaxed max-w-xl border-l-2 border-sage/40 pl-6 py-2">
            {data.supporting}
          </p>
        </div>

        {/* Right Column: Progressive Sequential Statements */}
        <div className="lg:col-span-5 space-y-4">
          <div className="font-mono text-xs text-ivory/40 uppercase tracking-widest mb-6">
            Iterative Loop / Click or Hover
          </div>

          {data.sequential.map((statement, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={statement}
                onMouseEnter={() => setActiveStep(idx)}
                onClick={() => setActiveStep(idx)}
                onFocus={() => setActiveStep(idx)}
                tabIndex={0}
                role="button"
                aria-pressed={isSelected}
                className={`group p-6 border transition-all duration-300 cursor-pointer focus:outline-none focus:ring-1 focus:ring-gold ${
                  isSelected
                    ? "border-gold/60 bg-ink-card shadow-lg translate-x-2"
                    : "border-ivory/10 bg-ink-deep/50 hover:border-ivory/30"
                }`}
                data-cursor="hover"
              >
                <div className="flex items-center justify-between font-mono text-xs mb-2">
                  <span className={isSelected ? "text-gold" : "text-ivory/40"}>
                    STEP 0{idx + 1}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-ivory/20 group-hover:bg-gold transition-colors" />
                </div>
                <h3
                  className={`font-serif text-xl sm:text-2xl font-light tracking-wide transition-colors ${
                    isSelected ? "text-ivory" : "text-ivory/50"
                  }`}
                >
                  {statement}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
