"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function VerbStrip() {
  const [activeVerb, setActiveVerb] = useState<string | null>(null);
  const verbs = PORTFOLIO_DATA.verbs;

  return (
    <div className="relative border-y border-ivory/10 bg-ink-deep/60 py-6 overflow-hidden my-16 select-none">
      <div className="flex w-[200%] animate-marquee hover:[animation-play-state:paused]">
        {/* Double array for infinite seamless looping */}
        {[...verbs, ...verbs, ...verbs, ...verbs].map((verb, idx) => {
          const isHovered = activeVerb === verb;
          return (
            <div
              key={`${verb}-${idx}`}
              onMouseEnter={() => setActiveVerb(verb)}
              onMouseLeave={() => setActiveVerb(null)}
              className="flex items-center gap-8 mx-6 cursor-pointer transition-transform duration-300 hover:scale-105"
              data-cursor="hover"
            >
              <span
                className={`font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-widest transition-colors duration-300 ${
                  isHovered ? "text-gold italic font-normal" : "text-ivory/40 hover:text-ivory"
                }`}
              >
                {verb.toUpperCase()}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-sage/60" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
