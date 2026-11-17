"use client";

import React, { useEffect, useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowDown, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Decorative repeated typography layer behind hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex flex-col justify-center items-center opacity-[0.035] select-none"
        style={{
          transform: `translate3d(${mouseOffset.x * -0.5}px, ${mouseOffset.y * -0.5}px, 0)`,
        }}
      >
        <span className="font-serif text-6xl sm:text-8xl md:text-9xl whitespace-nowrap tracking-widest text-ivory">
          I BUILD IDEAS INTO SYSTEMS
        </span>
        <span className="font-serif text-6xl sm:text-8xl md:text-9xl whitespace-nowrap tracking-widest text-gold mt-4">
          I BUILD IDEAS INTO SYSTEMS
        </span>
      </div>

      {/* Top Eyebrow & Status */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ivory/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-sage" />
          <span className="font-mono text-xs tracking-widest text-ivory/70">
            RAWAN NASSER / SOFTWARE DEVELOPER
          </span>
        </div>
        <div className="font-mono text-xs text-gold/80 flex items-center gap-2">
          <span>COGNITIVE CANVAS</span>
          <span className="h-1 w-1 bg-ivory/30 rounded-full" />
          <span>EST. 2026</span>
        </div>
      </div>

      {/* Main Hero Typographic Centerpiece */}
      <div className="my-auto py-12 md:py-16 relative z-10">
        <div
          className="transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px, 0)`,
          }}
        >
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-sage mb-4">
            Rawan Nasser, software developer.
          </h2>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-ivory tracking-tight leading-[1.05] max-w-5xl">
            I BUILD IDEAS <br className="hidden sm:inline" />
            <span className="text-gold italic font-normal">INTO SYSTEMS.</span>
          </h1>
        </div>

        {/* Secondary Title & Description */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
          <div className="md:col-span-5">
            <p className="font-mono text-sm tracking-wide text-ivory/90 border-l border-gold/40 pl-4 py-1">
              {PORTFOLIO_DATA.identity.title}
            </p>
          </div>
          <div className="md:col-span-7">
            <p className="text-base sm:text-lg text-ivory/70 font-light leading-relaxed max-w-xl">
              {PORTFOLIO_DATA.identity.supportingStatement}
            </p>
          </div>
        </div>

        {/* CTAs & Socials */}
        <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 bg-gold px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink font-semibold hover:bg-gold-light transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
            data-cursor="view"
          >
            <span>VIEW MY WORK</span>
            <ArrowDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-ivory/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-ivory hover:border-gold hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
            data-cursor="hover"
          >
            <span>CONTACT ME</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <div className="flex items-center gap-4 ml-auto pt-2 sm:pt-0">
            <a
              href={PORTFOLIO_DATA.identity.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-ivory/60 hover:text-gold transition-colors focus:outline-none focus:ring-1 focus:ring-gold"
              data-cursor="hover"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.identity.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-ivory/60 hover:text-gold transition-colors focus:outline-none focus:ring-1 focus:ring-gold"
              data-cursor="hover"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.identity.email}`}
              aria-label="Email Rawan Nasser"
              className="p-2 text-ivory/60 hover:text-gold transition-colors focus:outline-none focus:ring-1 focus:ring-gold"
              data-cursor="hover"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Technology Bar */}
      <div className="border-t border-ivory/10 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs text-ivory/50">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-sage/60" />
          <span>{PORTFOLIO_DATA.identity.worksWith}</span>
        </div>
        <div className="flex items-center gap-2 text-ivory/40">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="h-3 w-3 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
