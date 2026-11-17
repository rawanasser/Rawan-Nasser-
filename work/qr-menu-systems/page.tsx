import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import SystemHud from "@/components/navigation/SystemHud";
import LiveCanvas from "@/components/canvas/LiveCanvas";
import CustomCursor from "@/components/cursor/CustomCursor";
import QrMenuDemo from "@/components/work/QrMenuDemo";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, Layers, ArrowUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital QR Menu Systems — Case Study | Rawan Nasser",
  description:
    "Product capability case study on designing and developing multi-tenant digital QR menu systems for restaurant and café environments.",
};

export default function QrMenuCaseStudy() {
  const contents = [
    { num: "01", label: "The problem", href: "#problem" },
    { num: "02", label: "What I can build", href: "#what-i-build" },
    { num: "03", label: "Technical decisions", href: "#decisions" },
    { num: "04", label: "System flow", href: "#flow" },
    { num: "05", label: "Technologies", href: "#technologies" },
    { num: "06", label: "What building this taught me", href: "#learning" },
  ];

  return (
    <div className="min-h-screen bg-ink-deep text-ivory selection:bg-gold selection:text-ink">
      <CustomCursor />
      <SystemHud />
      <LiveCanvas sectionMode="qr" />

      <main className="relative z-10 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-gold hover:text-ivory uppercase tracking-widest transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>ALL WORK</span>
          </Link>
        </div>

        {/* Hero Section */}
        <header className="border-b border-ivory/10 pb-12 mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-gold/80 tracking-widest uppercase mb-3">
            <span className="h-1.5 w-1.5 bg-gold rounded-full" />
            <span>01 Product capability / Featured</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-ivory tracking-tight mb-4">
            DIGITAL QR MENU SYSTEMS
          </h1>

          <p className="font-mono text-base text-gold mb-6">
            Restaurant &amp; Café Digital Experiences
          </p>

          <p className="text-lg text-ivory/80 font-light leading-relaxed max-w-2xl mb-8">
            I can design and develop complete digital QR menu systems for restaurants and cafés, from the management interface to the customer-facing menu experience.
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-ink-card border border-ivory/10 font-mono text-xs">
            <div>
              <span className="text-ivory/40 block">Type</span>
              <span className="text-ivory mt-0.5 block">A system I design and build</span>
            </div>
            <div>
              <span className="text-ivory/40 block">Platform</span>
              <span className="text-ivory mt-0.5 block">Web, mobile-first</span>
            </div>
            <div>
              <span className="text-ivory/40 block">Audience</span>
              <span className="text-ivory mt-0.5 block">Venue teams &amp; guests</span>
            </div>
            <div>
              <span className="text-ivory/40 block">Focus</span>
              <span className="text-gold mt-0.5 block">Architecture, product, UI/UX</span>
            </div>
          </div>
        </header>

        {/* Working Interactive Demonstration */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs text-sage tracking-widest uppercase">
              Live Interactive Prototype
            </span>
            <span className="font-mono text-xs text-ivory/40">
              Try configuring brand &amp; editing dishes
            </span>
          </div>
          <QrMenuDemo />
        </div>

        {/* Table of Contents Navigation Bar */}
        <nav aria-label="Case Study Contents" className="p-6 bg-ink-card/60 border border-ivory/15 rounded-lg mb-20">
          <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-4">
            Contents Navigation
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 font-mono text-xs">
            {contents.map((item) => (
              <a
                key={item.num}
                href={item.href}
                className="flex items-center gap-2 text-ivory/70 hover:text-gold transition-colors py-1"
              >
                <span className="text-gold/60">{item.num}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </nav>

        {/* 01: THE PROBLEM */}
        <section id="problem" className="py-12 border-b border-ivory/10 space-y-6">
          <span className="font-mono text-xs text-gold tracking-widest uppercase">01 / Challenge</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-ivory">THE PROBLEM</h2>
          <div className="space-y-4 text-base sm:text-lg text-ivory/80 font-light leading-relaxed max-w-3xl">
            <p>
              Restaurants and cafés operate under dynamic operational pressure. They need menus that are quick to update, reflect their unique brand personality, and open instantly on guests&apos; phones without requiring app downloads.
            </p>
            <p>
              Printed menus become outdated whenever prices shift or dishes sell out, leading to costly reprints and diner frustration. On the other hand, maintaining custom bespoke websites for every single venue does not scale.
            </p>
          </div>
        </section>

        {/* 02: WHAT I CAN BUILD */}
        <section id="what-i-build" className="py-12 border-b border-ivory/10 space-y-6">
          <span className="font-mono text-xs text-gold tracking-widest uppercase">02 / Solution Architecture</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-ivory">WHAT I CAN BUILD</h2>
          <p className="text-base sm:text-lg text-ivory/80 font-light leading-relaxed max-w-3xl">
            A cohesive digital menu platform delivering an administrative venue dashboard paired with an instant customer-facing mobile menu:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "Venue administrative dashboard",
              "Dynamic category & dish builder",
              "Real-time price & description updates",
              "Promotional offers & timed banners",
              "Config-driven brand theming (colors, typography, light/dark)",
              "Table-level QR code access & routing",
              "High-performance mobile-first guest interface",
              "Multi-tenant tenant isolation",
            ].map((f) => (
              <div key={f} className="flex items-center gap-2 p-3 bg-ink-card border border-ivory/10 rounded font-mono text-xs text-ivory/80">
                <CheckCircle2 className="h-4 w-4 text-sage flex-shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
          <p className="text-sm font-mono text-gold/90 border-l-2 border-gold pl-4 py-1">
            One platform can support many venues while keeping each venue&apos;s settings, content, and branding strictly isolated.
          </p>
        </section>

        {/* 03: TECHNICAL DECISIONS */}
        <section id="decisions" className="py-12 border-b border-ivory/10 space-y-6">
          <span className="font-mono text-xs text-gold tracking-widest uppercase">03 / Engineering Rationale</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-ivory">TECHNICAL DECISIONS</h2>
          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "Multi-tenant from the start",
                desc: "Data models incorporate tenant isolation from day zero. Menus, categories, and items are scoped by venue ID, ensuring no cross-contamination between distinct venues.",
              },
              {
                num: "02",
                title: "Structured content model",
                desc: "Categories, items, pricing rules, and allergen flags are treated as structured atomic records rather than unstructured WYSIWYG text, allowing instant filtering and search.",
              },
              {
                num: "03",
                title: "Branding as configuration",
                desc: "Rather than building separate codebases for each venue aesthetic, visual styles (accent colors, fonts, surface modes) are serialized as CSS variables dynamically injected on load.",
              },
              {
                num: "04",
                title: "QR as the entry point",
                desc: "URLs embedded in table QR codes encode table numbers and venue tokens, letting guests open the exact menu context instantaneously in sub-second load times without signups.",
              },
              {
                num: "05",
                title: "Two audiences, one product",
                desc: "Designing ergonomics for both the hurried café manager editing inventory on a laptop behind the counter and the guest casually reading on a smartphone in dim dining light.",
              },
            ].map((card) => (
              <div key={card.num} className="p-6 bg-ink-card border border-ivory/15 rounded-lg space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs text-gold">
                  <span>DECISION {card.num}</span>
                </div>
                <h3 className="font-serif text-xl font-light text-ivory">{card.title}</h3>
                <p className="text-sm text-ivory/70 font-light leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 04: SYSTEM FLOW */}
        <section id="flow" className="py-12 border-b border-ivory/10 space-y-6">
          <span className="font-mono text-xs text-gold tracking-widest uppercase">04 / Lifecycle</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-ivory">FROM SETUP TO THE GUEST&apos;S SCREEN</h2>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-6 bg-ink-card border border-ivory/15 rounded-lg text-center font-mono text-xs">
            <div className="p-3 border border-gold/40 bg-gold/10 rounded flex-1 w-full">
              <span className="text-gold block">SET UP VENUE</span>
            </div>
            <span className="text-ivory/30">↓</span>
            <div className="p-3 border border-sage/40 bg-sage/10 rounded flex-1 w-full">
              <span className="text-sage block">BUILD MENU</span>
            </div>
            <span className="text-ivory/30">↓</span>
            <div className="p-3 border border-ivory/20 bg-ivory/5 rounded flex-1 w-full">
              <span className="text-ivory block">APPLY BRAND</span>
            </div>
            <span className="text-ivory/30">↓</span>
            <div className="p-3 border border-rose/40 bg-rose/10 rounded flex-1 w-full">
              <span className="text-rose block">SHARE BY QR</span>
            </div>
            <span className="text-ivory/30">↓</span>
            <div className="p-3 border border-gold/40 bg-gold/10 rounded flex-1 w-full">
              <span className="text-gold block">GUESTS BROWSE</span>
            </div>
          </div>
        </section>

        {/* 05: TECHNOLOGIES */}
        <section id="technologies" className="py-12 border-b border-ivory/10 space-y-6">
          <span className="font-mono text-xs text-gold tracking-widest uppercase">05 / Stack & Capabilities</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-ivory">TECHNOLOGIES</h2>
          <div className="flex flex-wrap gap-2 pt-2">
            {["React", "Next.js", "JavaScript", "APIs", "Database Systems", "UI/UX"].map((tech) => (
              <span key={tech} className="px-3.5 py-1.5 font-mono text-xs bg-ink-card border border-ivory/20 text-ivory rounded">
                {tech}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4">
            {[
              "Frontend development",
              "Backend integration",
              "Database design",
              "Multi-tenant systems",
              "API integration",
              "UI/UX implementation",
              "Product architecture",
            ].map((cap) => (
              <div key={cap} className="p-2.5 bg-ink-deep border border-ivory/10 font-mono text-[11px] text-ivory/70 rounded">
                {cap}
              </div>
            ))}
          </div>
        </section>

        {/* 06: WHAT BUILDING THIS TAUGHT ME */}
        <section id="learning" className="py-12 border-b border-ivory/10 space-y-6">
          <span className="font-mono text-xs text-gold tracking-widest uppercase">06 / Field Reflection</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-ivory">WHAT BUILDING THIS TAUGHT ME</h2>
          <blockquote className="p-8 border-l-2 border-gold bg-ink-card text-lg sm:text-xl font-serif text-ivory/90 italic leading-relaxed">
            &ldquo;Designing menu systems pushed me to think beyond a single interface: shaping data and access around many tenants, keeping branding flexible without making the product complicated, and designing for two very different people at once, the team running the venue and the guest reading the menu.&rdquo;
          </blockquote>
        </section>

        {/* Case Study Footer Navigation */}
        <div className="pt-16 flex flex-wrap items-center justify-between gap-6 border-t border-ivory/10 font-mono text-xs">
          <Link
            href="/"
            className="flex items-center gap-2 text-ivory/70 hover:text-gold uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>ALL WORK</span>
          </Link>

          <Link
            href="/work/mobile-applications"
            className="flex items-center gap-2 bg-gold px-5 py-2.5 text-ink font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors"
          >
            <span>NEXT CASE STUDY: MOBILE APPLICATIONS</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
