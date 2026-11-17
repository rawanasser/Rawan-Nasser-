"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import QrMenuDemo from "./QrMenuDemo";
import MobileAppDemo from "./MobileAppDemo";
import AiPipelineDemo from "./AiPipelineDemo";
import { ArrowUpRight, ChevronRight, Layers } from "lucide-react";

export default function SelectedWorkSection() {
  const [activeExhibit, setActiveExhibit] = useState<number>(0);
  const exhibits = PORTFOLIO_DATA.exhibits;

  return (
    <section id="work" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-ivory/10">
      {/* Section Header & Repeated Typographic Echo */}
      <div className="mb-16">
        <div className="flex items-center gap-2 font-mono text-xs text-gold/80 tracking-widest uppercase mb-3">
          <span className="h-1.5 w-1.5 bg-gold rounded-full" />
          <span>01 / Selected work</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-ivory tracking-tight">
          WORK YOU CAN <span className="text-gold italic font-normal">TOUCH.</span>
        </h2>

        <div
          aria-hidden="true"
          className="font-mono text-xs sm:text-sm text-ivory/20 tracking-[0.35em] uppercase select-none mt-2"
        >
          W O R K &nbsp; Y O U &nbsp; C A N &nbsp; T O U C H .
        </div>

        <p className="mt-4 text-base sm:text-lg text-ivory/70 font-light leading-relaxed max-w-2xl">
          Three exhibits, each with a working demonstration built for this portfolio. Change things, switch languages, step through the pipeline.
        </p>

        {/* Exhibit Selector Switcher */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-ivory/10 pb-4">
          {exhibits.map((ex, idx) => {
            const isSelected = activeExhibit === idx;
            return (
              <button
                key={ex.id}
                onClick={() => setActiveExhibit(idx)}
                className={`flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all rounded ${
                  isSelected
                    ? "bg-gold text-ink font-semibold shadow-md"
                    : "text-ivory/60 hover:text-ivory hover:bg-ivory/5 border border-transparent"
                }`}
                data-cursor="hover"
              >
                <span className={isSelected ? "text-ink" : "text-gold"}>{ex.number}</span>
                <span>{ex.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* EXHIBIT 01: DIGITAL QR MENU SYSTEMS */}
      {activeExhibit === 0 && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-ivory/10 pb-8">
            <div className="lg:col-span-8 space-y-3">
              <span className="font-mono text-xs text-gold tracking-widest uppercase">
                {exhibits[0].label}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-ivory">
                {exhibits[0].title}
              </h3>
              <p className="font-mono text-sm text-sage">
                {exhibits[0].subtitle}
              </p>
              <p className="text-base text-ivory/80 font-light leading-relaxed max-w-2xl">
                {exhibits[0].description}
              </p>
            </div>

            <div className="lg:col-span-4 space-y-2 font-mono text-xs bg-ink-card p-5 border border-ivory/10">
              <div className="flex justify-between py-1 border-b border-ivory/5">
                <span className="text-ivory/40">Type:</span>
                <span className="text-ivory">{exhibits[0].type}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-ivory/5">
                <span className="text-ivory/40">Platform:</span>
                <span className="text-ivory">{exhibits[0].platform}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-ivory/5">
                <span className="text-ivory/40">For:</span>
                <span className="text-ivory">{exhibits[0].audience}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-ivory/40">Focus:</span>
                <span className="text-gold">{exhibits[0].focus}</span>
              </div>

              <div className="pt-3">
                <Link
                  href={exhibits[0].route}
                  className="w-full flex items-center justify-center gap-2 border border-gold/40 bg-gold/10 px-4 py-2 font-mono text-xs text-gold hover:bg-gold/20 hover:border-gold transition-colors"
                  data-cursor="view"
                >
                  <span>READ COMPLETE CASE STUDY</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Working Interactive Component */}
          <QrMenuDemo />
        </div>
      )}

      {/* EXHIBIT 02: MOBILE APPLICATION DEVELOPMENT */}
      {activeExhibit === 1 && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-ivory/10 pb-8">
            <div className="lg:col-span-8 space-y-3">
              <span className="font-mono text-xs text-sage tracking-widest uppercase">
                {exhibits[1].label}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-ivory">
                {exhibits[1].title}
              </h3>
              <p className="font-mono text-sm text-sage">
                {exhibits[1].subtitle}
              </p>
              <p className="text-base text-ivory/80 font-light leading-relaxed max-w-2xl">
                {exhibits[1].description}
              </p>
            </div>

            <div className="lg:col-span-4 space-y-2 font-mono text-xs bg-ink-card p-5 border border-ivory/10">
              <div className="flex justify-between py-1 border-b border-ivory/5">
                <span className="text-ivory/40">Type:</span>
                <span className="text-ivory">{exhibits[1].type}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-ivory/5">
                <span className="text-ivory/40">Built with:</span>
                <span className="text-ivory">{exhibits[1].platform}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-ivory/5">
                <span className="text-ivory/40">Languages:</span>
                <span className="text-ivory">{exhibits[1].languages}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-ivory/40">Focus:</span>
                <span className="text-sage">{exhibits[1].focus}</span>
              </div>

              <div className="pt-3">
                <Link
                  href={exhibits[1].route}
                  className="w-full flex items-center justify-center gap-2 border border-sage/40 bg-sage/10 px-4 py-2 font-mono text-xs text-sage hover:bg-sage/20 hover:border-sage transition-colors"
                  data-cursor="view"
                >
                  <span>READ COMPLETE CASE STUDY</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Working Interactive Component */}
          <MobileAppDemo />
        </div>
      )}

      {/* EXHIBIT 03: MACHINE LEARNING & COMPUTER VISION */}
      {activeExhibit === 2 && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-ivory/10 pb-8">
            <div className="lg:col-span-8 space-y-3">
              <span className="font-mono text-xs text-rose tracking-widest uppercase">
                {exhibits[2].label}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-ivory">
                {exhibits[2].title}
              </h3>
              <p className="font-mono text-sm text-rose">
                {exhibits[2].subtitle}
              </p>
              <p className="text-base text-ivory/80 font-light leading-relaxed max-w-2xl">
                {exhibits[2].description}
              </p>
            </div>

            <div className="lg:col-span-4 space-y-2 font-mono text-xs bg-ink-card p-5 border border-ivory/10">
              <div className="flex justify-between py-1 border-b border-ivory/5">
                <span className="text-ivory/40">Type:</span>
                <span className="text-ivory">{exhibits[2].type}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-ivory/5">
                <span className="text-ivory/40">Domain:</span>
                <span className="text-ivory">{exhibits[2].domain}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-ivory/5">
                <span className="text-ivory/40">Framework:</span>
                <span className="text-ivory">{exhibits[2].framework}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-ivory/40">Focus:</span>
                <span className="text-rose">{exhibits[2].focus}</span>
              </div>

              <div className="pt-3">
                <Link
                  href={exhibits[2].route}
                  className="w-full flex items-center justify-center gap-2 border border-rose/40 bg-rose/10 px-4 py-2 font-mono text-xs text-rose hover:bg-rose/20 hover:border-rose transition-colors"
                  data-cursor="view"
                >
                  <span>READ COMPLETE CASE STUDY</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Working Interactive Component */}
          <AiPipelineDemo />
        </div>
      )}
    </section>
  );
}
