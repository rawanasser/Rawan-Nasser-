"use client";

import React, { useState, useMemo } from "react";
import { PORTFOLIO_DATA, TechNode } from "@/data/portfolio";
import { ArrowRight, Sparkles, Filter, Link as LinkIcon } from "lucide-react";

type CategoryFilter = "All" | "Frontend" | "Languages" | "Design" | "Tools" | "Backend & Systems" | "AI & Data";

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Languages: { bg: "bg-gold/15", text: "text-gold", border: "border-gold/40" },
  Frontend: { bg: "bg-sage/15", text: "text-sage", border: "border-sage/40" },
  Design: { bg: "bg-ivory/15", text: "text-ivory", border: "border-ivory/40" },
  Tools: { bg: "bg-rose/15", text: "text-rose", border: "border-rose/40" },
  "Backend & Systems": { bg: "bg-amber-400/15", text: "text-amber-400", border: "border-amber-400/40" },
  "AI & Data": { bg: "bg-emerald-400/15", text: "text-emerald-400", border: "border-emerald-400/40" },
};

export default function TechnologyUniverse() {
  const [selectedTechId, setSelectedTechId] = useState<string>("ts");
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  const technologies = PORTFOLIO_DATA.technologies;

  // Calculate dynamic connections count accurately
  const totalConnections = useMemo(() => {
    let count = 0;
    technologies.forEach((t) => {
      count += t.connections.length;
    });
    // Each undirected edge is listed on both sides, so unique edges = count / 2 (or approximate unique pairs)
    return Math.round(count / 2);
  }, [technologies]);

  const activeTech = technologies.find((t) => t.id === selectedTechId) || technologies[0];

  const filteredTechnologies = useMemo(() => {
    if (activeCategory === "All") return technologies;
    return technologies.filter((t) => t.category === activeCategory);
  }, [technologies, activeCategory]);

  const categories: CategoryFilter[] = [
    "All",
    "Frontend",
    "Languages",
    "Design",
    "Tools",
    "Backend & Systems",
    "AI & Data",
  ];

  return (
    <section id="universe" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-ivory/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-gold/80 tracking-widest uppercase mb-3">
            <span className="h-1.5 w-1.5 bg-gold rounded-full" />
            <span>Stack / Technology universe</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-ivory tracking-tight">
            TOOLS, AND HOW <span className="text-gold italic font-normal">THEY CONNECT.</span>
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-base text-ivory/70 font-light leading-relaxed mb-3">
            Not a list of logos: each technology sits next to the ones I use it with. Hover or tap to light up its connections, drag to rearrange.
          </p>
          <div className="flex items-center gap-4 font-mono text-xs text-gold">
            <span>{technologies.length} TECHNOLOGIES</span>
            <span className="h-1 w-1 rounded-full bg-ivory/30" />
            <span>{totalConnections} CONNECTIONS</span>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-ivory/10">
        <span className="font-mono text-xs text-ivory/40 mr-2 flex items-center gap-1.5">
          <Filter className="h-3 w-3" />
          <span>Filter:</span>
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 font-mono text-xs rounded transition-colors ${
              activeCategory === cat
                ? "bg-gold text-ink font-semibold"
                : "bg-ink-card border border-ivory/10 text-ivory/60 hover:border-ivory/30 hover:text-ivory"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Grid: Visual Constellation & Active Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Constellation Grid (7 cols) */}
        <div className="lg:col-span-7 bg-ink-card/60 border border-ivory/15 p-6 rounded-lg relative overflow-hidden">
          <div className="font-mono text-[10px] text-ivory/40 tracking-widest uppercase mb-4 flex items-center justify-between">
            <span>Interactive Constellation Matrix</span>
            <span className="text-sage">Select any node</span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {filteredTechnologies.map((tech) => {
              const isSelected = tech.id === selectedTechId;
              const isConnected = activeTech.connections.includes(tech.id);
              const color = CATEGORY_COLORS[tech.category] || CATEGORY_COLORS.Languages;

              return (
                <button
                  key={tech.id}
                  onClick={() => setSelectedTechId(tech.id)}
                  onMouseEnter={() => setSelectedTechId(tech.id)}
                  tabIndex={0}
                  className={`px-3.5 py-2 font-mono text-xs rounded transition-all duration-200 border cursor-pointer ${
                    isSelected
                      ? "border-gold bg-gold text-ink font-bold shadow-lg scale-105 z-10"
                      : isConnected
                      ? "border-sage bg-sage/20 text-ivory ring-1 ring-sage/40 scale-102"
                      : "border-ivory/10 bg-ink-deep/60 text-ivory/70 hover:border-ivory/30 hover:text-ivory"
                  }`}
                  data-cursor="hover"
                >
                  <span className="flex items-center gap-1.5">
                    {isConnected && !isSelected && (
                      <span className="h-1.5 w-1.5 rounded-full bg-sage animate-ping" />
                    )}
                    <span>{tech.name}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Node Details Inspector (5 cols) */}
        <div className="lg:col-span-5 bg-ink-card border border-gold/40 p-6 sm:p-8 rounded-lg shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-ivory/10 pb-4">
            <div>
              <span className="font-mono text-[10px] text-gold tracking-widest uppercase block mb-1">
                Technology Inspector
              </span>
              <h3 className="font-serif text-3xl font-light text-ivory">
                {activeTech.name}
              </h3>
            </div>
            <span
              className={`font-mono text-xs px-2.5 py-1 rounded border ${
                CATEGORY_COLORS[activeTech.category]?.bg || "bg-ivory/10"
              } ${CATEGORY_COLORS[activeTech.category]?.text || "text-ivory"} ${
                CATEGORY_COLORS[activeTech.category]?.border || "border-ivory/20"
              }`}
            >
              {activeTech.category}
            </span>
          </div>

          <div>
            <span className="font-mono text-xs text-ivory/40 tracking-widest uppercase block mb-2">
              What Rawan Uses It For
            </span>
            <p className="text-base text-ivory/90 font-light leading-relaxed border-l-2 border-gold/60 pl-4 py-1">
              {activeTech.whatRawanUsesItFor}
            </p>
          </div>

          <div>
            <span className="font-mono text-xs text-ivory/40 tracking-widest uppercase block mb-3 flex items-center gap-1.5">
              <LinkIcon className="h-3 w-3 text-sage" />
              <span>Connected Technologies ({activeTech.connections.length})</span>
            </span>

            <div className="flex flex-wrap gap-2">
              {activeTech.connections.map((connId) => {
                const conn = technologies.find((t) => t.id === connId);
                if (!conn) return null;
                return (
                  <button
                    key={connId}
                    onClick={() => setSelectedTechId(connId)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-ink-deep border border-ivory/15 font-mono text-xs text-ivory hover:border-gold hover:text-gold transition-colors"
                  >
                    <span>{conn.name}</span>
                    <ArrowRight className="h-3 w-3 text-gold/70" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
