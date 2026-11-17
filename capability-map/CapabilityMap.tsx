"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, CapabilityArea } from "@/data/portfolio";
import { ArrowRight, Layers, Cpu, Globe, Smartphone, Box, ShieldCheck } from "lucide-react";

const ICONS: Record<string, React.ReactNode> = {
  web: <Globe className="h-5 w-5" />,
  mobile: <Smartphone className="h-5 w-5" />,
  ai: <Cpu className="h-5 w-5" />,
  products: <Box className="h-5 w-5" />,
  interfaces: <Layers className="h-5 w-5" />,
  systems: <ShieldCheck className="h-5 w-5" />,
};

export default function CapabilityMap() {
  const [activeId, setActiveId] = useState<string>("web");
  const areas = PORTFOLIO_DATA.capabilities;
  const currentArea = areas.find((a) => a.id === activeId) || areas[0];

  return (
    <section id="capabilities" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-ivory/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-gold/80 tracking-widest uppercase mb-3">
            <span className="h-1.5 w-1.5 bg-gold rounded-full" />
            <span>Map / What I build</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-ivory tracking-tight">
            SIX AREAS, <span className="text-sage italic">ONE SYSTEM.</span>
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-sm sm:text-base text-ivory/70 font-light leading-relaxed mb-2">
            The things I work on are connected. Hover or tap an area to see the tools and ideas behind it, and how it links to the rest.
          </p>
          <div className="font-mono text-xs text-sage/80 tracking-widest uppercase">
            [ hover · tap · tab ]
          </div>
        </div>
      </div>

      {/* Main Grid: Interactive Graph Nodes & Dynamic Inspection Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: 6 Interactive Nodes Grid */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {areas.map((area, idx) => {
            const isSelected = area.id === activeId;
            const isConnected = currentArea.connections.includes(area.id);

            return (
              <div
                key={area.id}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                onMouseEnter={() => setActiveId(area.id)}
                onClick={() => setActiveId(area.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveId(area.id);
                  }
                }}
                className={`relative p-6 border transition-all duration-300 cursor-pointer focus:outline-none focus:ring-1 focus:ring-gold ${
                  isSelected
                    ? "border-gold bg-ink-card shadow-[0_0_20px_rgba(182,154,105,0.15)] ring-1 ring-gold/50"
                    : isConnected
                    ? "border-sage/40 bg-ink-deep/90 hover:border-sage"
                    : "border-ivory/10 bg-ink-deep/40 opacity-70 hover:opacity-100 hover:border-ivory/30"
                }`}
                data-cursor="explore"
              >
                {/* Node Status Indicator */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded ${isSelected ? "text-gold bg-gold/10" : "text-ivory/50"}`}>
                    {ICONS[area.id]}
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-ivory/40">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-light text-ivory mb-1">
                  {area.title}
                </h3>
                <p className="font-mono text-xs text-ivory/50 mb-4">
                  {area.role}
                </p>

                {/* Micro Connection Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-ivory/10">
                  {area.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-ivory/5 text-ivory/60"
                    >
                      {tool}
                    </span>
                  ))}
                  {area.tools.length > 3 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 text-ivory/40">
                      +{area.tools.length - 3}
                    </span>
                  )}
                </div>

                {isConnected && !isSelected && (
                  <div className="absolute top-2 right-2 flex items-center gap-1 font-mono text-[9px] text-sage">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage animate-ping" />
                    <span>LINKED</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right: Detailed Connected System Inspector */}
        <div className="lg:col-span-6 bg-ink-card border border-gold/30 p-8 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-ivory/10 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded bg-gold/10 text-gold">
                {ICONS[currentArea.id]}
              </span>
              <div>
                <span className="font-mono text-[10px] text-gold tracking-widest uppercase">
                  Active Area System
                </span>
                <h3 className="font-serif text-3xl font-light text-ivory">
                  {currentArea.title}
                </h3>
              </div>
            </div>
            <span className="font-mono text-xs text-sage">
              {currentArea.role}
            </span>
          </div>

          <p className="text-base text-ivory/80 font-light leading-relaxed mb-8">
            {currentArea.description}
          </p>

          {/* Tools & Technologies */}
          <div className="mb-6">
            <span className="font-mono text-xs text-ivory/40 tracking-widest uppercase block mb-3">
              Core Technologies & Tools
            </span>
            <div className="flex flex-wrap gap-2">
              {currentArea.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 font-mono text-xs border border-ivory/20 bg-ivory/5 text-ivory rounded"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Architectural Concepts */}
          <div className="mb-8">
            <span className="font-mono text-xs text-ivory/40 tracking-widest uppercase block mb-3">
              Architectural Ideas & Patterns
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentArea.concepts.map((concept) => (
                <div
                  key={concept}
                  className="flex items-center gap-2 text-xs font-mono text-ivory/70 border-l border-sage/40 pl-3 py-1"
                >
                  <ArrowRight className="h-3 w-3 text-sage" />
                  <span>{concept}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connected Network Links */}
          <div className="border-t border-ivory/10 pt-4 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-ivory/40">Connected to:</span>
            {currentArea.connections.map((connId) => {
              const connArea = areas.find((a) => a.id === connId);
              if (!connArea) return null;
              return (
                <button
                  key={connId}
                  onClick={() => setActiveId(connId)}
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-gold hover:text-ivory border border-gold/30 hover:border-ivory px-2.5 py-1 transition-colors"
                >
                  <span>{connArea.title}</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
