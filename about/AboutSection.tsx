"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowUpRight, BookOpen } from "lucide-react";

export default function AboutSection() {
  const [hoveredOpenTo, setHoveredOpenTo] = useState<string | null>(null);
  const openToList = PORTFOLIO_DATA.openTo;

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-ivory/10">
      {/* Header & Field Notes Label */}
      <div className="flex items-center justify-between font-mono text-xs text-gold/80 mb-16 tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 bg-gold rounded-full" />
          <span>03 / About me</span>
        </div>
        <div className="flex items-center gap-2 text-ivory/50">
          <BookOpen className="h-3.5 w-3.5 text-sage" />
          <span>Field notes · page 03</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: The Three Large Field Notes Statements (7 cols) */}
        <div className="lg:col-span-7 space-y-12">
          {PORTFOLIO_DATA.fieldNotes.map((note) => (
            <div key={note.title} className="group border-l-2 border-ivory/15 hover:border-gold pl-6 py-1 transition-colors">
              <h3 className="font-serif text-3xl sm:text-5xl font-light text-ivory tracking-tight group-hover:text-gold transition-colors">
                {note.title}
              </h3>
              <div className="font-mono text-xs text-sage tracking-widest uppercase my-2">
                [{note.sub}]
              </div>
              <p className="text-base sm:text-lg text-ivory/70 font-light leading-relaxed max-w-xl">
                {note.text}
              </p>
            </div>
          ))}

          {/* Narrative Body Passages */}
          <div className="pt-8 border-t border-ivory/10 space-y-6 text-base sm:text-lg text-ivory/80 font-light leading-relaxed">
            <p>
              I&apos;m a software developer interested in the intersection of technology, intelligent systems, and product design.
            </p>
            <p>
              I learn by building. My work has given me experience across application development, SaaS architecture, AI and machine learning, interface design, APIs, automation, and problem-solving.
            </p>
            <p>
              I&apos;m interested in opportunities where I can contribute to real products, collaborate with experienced developers, and continue developing my technical abilities.
            </p>
          </div>
        </div>

        {/* Right: "Open To" Opportunities List (5 cols) */}
        <div className="lg:col-span-5 bg-ink-card border border-ivory/15 p-8 rounded-xl shadow-xl space-y-6">
          <div className="border-b border-ivory/10 pb-4">
            <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-1">
              Engagements & Opportunities
            </span>
            <h4 className="font-serif text-2xl font-light text-ivory">
              OPEN TO
            </h4>
          </div>

          <div className="space-y-3">
            {openToList.map((item) => {
              const isHovered = hoveredOpenTo === item.num;
              return (
                <div
                  key={item.num}
                  onMouseEnter={() => setHoveredOpenTo(item.num)}
                  onMouseLeave={() => setHoveredOpenTo(null)}
                  className={`p-4 border rounded transition-all duration-200 cursor-pointer ${
                    isHovered
                      ? "border-gold bg-gold/10 translate-x-1.5"
                      : "border-ivory/10 bg-ink-deep/60 hover:border-ivory/30"
                  }`}
                  data-cursor="hover"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`font-mono text-xs ${isHovered ? "text-gold font-bold" : "text-ivory/40"}`}>
                      {item.num}
                    </span>
                    <ArrowUpRight className={`h-3.5 w-3.5 ${isHovered ? "text-gold" : "text-ivory/20"}`} />
                  </div>
                  <h5 className="font-serif text-lg font-light text-ivory mb-1">
                    {item.title}
                  </h5>
                  <p className="font-mono text-xs text-ivory/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-ivory/10 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-mono text-xs text-gold hover:text-ivory tracking-widest uppercase transition-colors"
            >
              <span>DISCUSS AN OPPORTUNITY</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
