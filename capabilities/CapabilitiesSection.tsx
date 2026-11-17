"use client";

import React, { useState } from "react";
import { ArrowRight, Code2, Palette, Brain, Lightbulb, Wrench } from "lucide-react";

interface CapabilityItem {
  num: string;
  verb: string;
  title: string;
  summary: string;
  details: string[];
  icon: React.ReactNode;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    num: "01",
    verb: "BUILD",
    title: "Software Development",
    summary:
      "Web and mobile applications, component architecture, APIs, responsive interfaces, and maintainable systems.",
    details: [
      "Web applications with Next.js and React",
      "Cross-platform mobile applications with React Native",
      "Typed component architecture and clean state modeling",
      "Resilient REST & GraphQL API consumption and integration",
    ],
    icon: <Code2 className="h-6 w-6 text-gold" />,
  },
  {
    num: "02",
    verb: "DESIGN",
    title: "UI/UX",
    summary:
      "Designing interfaces around clarity, usability, visual hierarchy, and user experience.",
    details: [
      "Strict typographic hierarchy and ergonomic spatial rhythm",
      "Design systems with systematic color tokens and variants",
      "Full keyboard accessibility and internationalization (i18n)",
      "Purposeful micro-motion that informs without distracting",
    ],
    icon: <Palette className="h-6 w-6 text-sage" />,
  },
  {
    num: "03",
    verb: "LEARN",
    title: "AI & Machine Learning",
    summary:
      "Deep learning, computer vision, data preparation, model training, and AI-assisted applications.",
    details: [
      "PyTorch neural network architectures and validation loops",
      "Computer vision preprocessing, augmentation, and classification",
      "Honest metrics evaluation using confusion heatmaps and loss curves",
      "Practical integration of AI capabilities into user products",
    ],
    icon: <Brain className="h-6 w-6 text-rose" />,
  },
  {
    num: "04",
    verb: "SOLVE",
    title: "Product Development",
    summary:
      "Turning ideas and real-world problems into functional digital products.",
    details: [
      "Translating ambiguous requirements into crisp technical specs",
      "Multi-tenant data isolation and scalable schema planning",
      "Bridging administrative operators and customer mobile guests",
      "Balancing pragmatic speed with long-term code maintainability",
    ],
    icon: <Lightbulb className="h-6 w-6 text-gold" />,
  },
  {
    num: "05",
    verb: "EXPERIMENT",
    title: "Automation & Integration",
    summary:
      "Connecting APIs, services, workflows, and automation.",
    details: [
      "Automated GitHub Actions CI/CD validation pipelines",
      "Asynchronous webhook handlers and state synchronization",
      "Rapid prototyping of experimental interaction patterns",
      "Scripting automated data normalization and asset transforms",
    ],
    icon: <Wrench className="h-6 w-6 text-sage" />,
  },
];

export default function CapabilitiesSection() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const active = CAPABILITIES[selectedIndex];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-ivory/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-gold/80 tracking-widest uppercase mb-3">
            <span className="h-1.5 w-1.5 bg-gold rounded-full" />
            <span>02 / Capabilities</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-ivory tracking-tight">
            WHAT <span className="text-gold italic font-normal">I DO.</span>
          </h2>
        </div>

        <p className="max-w-md text-base text-ivory/70 font-light leading-relaxed">
          Five verbs, five kinds of work. Hover, tap or tab through them.
        </p>
      </div>

      {/* Interactive Editorial Stepper */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Five Verbs Nav List (5 cols) */}
        <div className="lg:col-span-5 space-y-2">
          {CAPABILITIES.map((cap, idx) => {
            const isSelected = selectedIndex === idx;
            return (
              <button
                key={cap.verb}
                onClick={() => setSelectedIndex(idx)}
                onMouseEnter={() => setSelectedIndex(idx)}
                onFocus={() => setSelectedIndex(idx)}
                className={`w-full text-left p-5 border transition-all duration-300 flex items-center justify-between group ${
                  isSelected
                    ? "border-gold bg-ink-card shadow-lg translate-x-2"
                    : "border-ivory/10 bg-ink-deep/40 hover:border-ivory/30"
                }`}
                data-cursor="hover"
              >
                <div className="flex items-center gap-4">
                  <span className={`font-mono text-xs ${isSelected ? "text-gold font-bold" : "text-ivory/40"}`}>
                    {cap.num}
                  </span>
                  <div>
                    <h3 className={`font-serif text-2xl font-light ${isSelected ? "text-ivory" : "text-ivory/60 group-hover:text-ivory"}`}>
                      {cap.verb}
                    </h3>
                    <span className="font-mono text-xs text-ivory/40 block">
                      {cap.title}
                    </span>
                  </div>
                </div>

                <ArrowRight className={`h-4 w-4 transition-transform ${isSelected ? "text-gold translate-x-1" : "text-ivory/20 group-hover:text-ivory/50"}`} />
              </button>
            );
          })}
        </div>

        {/* Right: Detailed Inspection Panel (7 cols) */}
        <div className="lg:col-span-7 bg-ink-card border border-gold/30 p-8 sm:p-10 shadow-xl relative min-h-[380px] flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-ivory/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded bg-ivory/5 border border-ivory/10">
                  {active.icon}
                </div>
                <div>
                  <span className="font-mono text-xs text-gold tracking-widest uppercase">
                    Capability Detail / {active.num}
                  </span>
                  <h4 className="font-serif text-3xl font-light text-ivory">
                    {active.verb} — {active.title}
                  </h4>
                </div>
              </div>
            </div>

            <p className="text-lg text-ivory/80 font-light leading-relaxed">
              {active.summary}
            </p>

            <div className="pt-2">
              <span className="font-mono text-xs text-ivory/40 tracking-widest uppercase block mb-3">
                Core Competencies & Execution
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {active.details.map((detail) => (
                  <div
                    key={detail}
                    className="p-3 bg-ink-deep/60 border border-ivory/10 rounded font-mono text-xs text-ivory/70 flex items-start gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-sage mt-1.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-ivory/10 pt-4 flex items-center justify-between font-mono text-xs text-ivory/40">
            <span>DISCIPLINE {active.num} OF 05</span>
            <span className="text-gold">INTEGRATED WORKFLOW</span>
          </div>
        </div>
      </div>
    </section>
  );
}
