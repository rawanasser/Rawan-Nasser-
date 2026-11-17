"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Copy, Check, Mail, ArrowUpRight, Github, Linkedin, ArrowUp } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = PORTFOLIO_DATA.identity.email;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-ivory/10">
      {/* Editorial Eyebrow */}
      <div className="flex items-center gap-2 font-mono text-xs text-gold/80 tracking-widest uppercase mb-6">
        <span className="h-1.5 w-1.5 bg-gold rounded-full" />
        <span>04 / Contact</span>
      </div>

      {/* Main Heading & Repeated Typographic Echo */}
      <div className="mb-14">
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-ivory tracking-tight leading-[1.05]">
          LET&apos;S BUILD <br />
          <span className="text-gold italic font-normal">SOMETHING USEFUL.</span>
        </h2>

        {/* Typographic Universe Echo */}
        <div
          aria-hidden="true"
          className="font-mono text-xs sm:text-sm text-ivory/15 tracking-[0.35em] uppercase select-none mt-3"
        >
          L E T &apos; S &nbsp; B U I L D &nbsp; S O M E T H I N G &nbsp; U S E F U L .
        </div>

        <p className="mt-6 text-base sm:text-xl text-ivory/70 font-light leading-relaxed max-w-2xl">
          I&apos;m open to software development, AI/ML, product development, and technical opportunities where I can contribute, learn, and grow.
        </p>
      </div>

      {/* Interactive Communication Hub Box */}
      <div className="p-8 sm:p-12 border border-gold/30 bg-ink-card rounded-xl shadow-2xl space-y-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Email Address & Copy Trigger */}
          <div className="md:col-span-8 space-y-2">
            <span className="font-mono text-xs text-ivory/40 uppercase tracking-widest block">
              Direct Communication Channel
            </span>
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-mono text-lg sm:text-2xl text-ivory font-light select-all">
                {email}
              </span>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 border border-ivory/20 bg-ivory/5 px-3 py-1.5 font-mono text-xs text-ivory hover:border-gold hover:text-gold transition-all rounded"
                data-cursor="hover"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-sage" />
                    <span className="text-sage font-bold">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Email Me Direct Action Button */}
          <div className="md:col-span-4 flex md:justify-end">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2.5 bg-gold px-7 py-3.5 font-mono text-xs text-ink font-semibold uppercase tracking-widest hover:bg-gold-light transition-colors shadow-lg"
              data-cursor="hover"
            >
              <Mail className="h-4 w-4" />
              <span>EMAIL ME</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Social Links Row */}
        <div className="border-t border-ivory/10 pt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <span className="text-ivory/40">Network Profiles:</span>
          <div className="flex items-center gap-6">
            <a
              href={PORTFOLIO_DATA.identity.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-ivory/70 hover:text-gold transition-colors"
              data-cursor="hover"
            >
              <Github className="h-3.5 w-3.5" />
              <span>GITHUB</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href={PORTFOLIO_DATA.identity.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-ivory/70 hover:text-gold transition-colors"
              data-cursor="hover"
            >
              <Linkedin className="h-3.5 w-3.5" />
              <span>LINKEDIN</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer System Status & Ticks */}
      <div className="border-t border-ivory/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono text-xs text-ivory/50">
        <div>
          <div className="font-serif text-lg font-light text-ivory">
            {PORTFOLIO_DATA.identity.name}
          </div>
          <div className="text-[11px] text-ivory/40 mt-0.5">
            {PORTFOLIO_DATA.identity.title}
          </div>
        </div>

        {/* Playful Personality System Status */}
        <div className="border border-ivory/10 bg-ink-deep/60 px-4 py-2 rounded">
          <div className="flex items-center gap-2 text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span>{PORTFOLIO_DATA.identity.statusText}</span>
          </div>
          <span className="text-[10px] text-ivory/30 block mt-0.5">
            {PORTFOLIO_DATA.identity.statusClarification}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span>{PORTFOLIO_DATA.identity.copyright}</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gold hover:text-ivory transition-colors border border-gold/30 hover:border-ivory px-3 py-1 rounded"
            aria-label="Back to top of page"
            data-cursor="hover"
          >
            <span>TOP</span>
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
