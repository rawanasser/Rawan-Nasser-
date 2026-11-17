import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import SystemHud from "@/components/navigation/SystemHud";
import LiveCanvas from "@/components/canvas/LiveCanvas";
import CustomCursor from "@/components/cursor/CustomCursor";
import MobileAppDemo from "@/components/work/MobileAppDemo";
import { ArrowLeft, ArrowRight, CheckCircle2, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile Application Development — Case Study | Rawan Nasser",
  description:
    "Mobile application architecture case study exploring React Native, Expo, i18n multilingual design, and component-driven engineering.",
};

export default function MobileAppCaseStudy() {
  const contents = [
    { num: "01", label: "The problem", href: "#problem" },
    { num: "02", label: "What I built", href: "#what-i-built" },
    { num: "03", label: "Technical decisions", href: "#decisions" },
    { num: "04", label: "How the app is layered", href: "#layers" },
    { num: "05", label: "Technologies", href: "#technologies" },
    { num: "06", label: "What I learned", href: "#learning" },
  ];

  return (
    <div className="min-h-screen bg-ink-deep text-ivory selection:bg-sage selection:text-ink">
      <CustomCursor />
      <SystemHud />
      <LiveCanvas sectionMode="mobile" />

      <main className="relative z-10 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-sage hover:text-ivory uppercase tracking-widest transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>ALL WORK</span>
          </Link>
        </div>

        {/* Hero Section */}
        <header className="border-b border-ivory/10 pb-12 mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-sage/80 tracking-widest uppercase mb-3">
            <span className="h-1.5 w-1.5 bg-sage rounded-full" />
            <span>02 Mobile application / Featured</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-ivory tracking-tight mb-4">
            MOBILE APPLICATIONS
          </h1>

          <p className="font-mono text-base text-sage mb-6">
            Multilingual Applications &amp; Interactive Experiences
          </p>

          <p className="text-lg text-ivory/80 font-light leading-relaxed max-w-2xl mb-8">
            Designed and developed a multilingual mobile application with structured content, interactive functionality, reusable components, and intelligent assistance.
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-ink-card border border-ivory/10 font-mono text-xs">
            <div>
              <span className="text-ivory/40 block">Type</span>
              <span className="text-ivory mt-0.5 block">Mobile application</span>
            </div>
            <div>
              <span className="text-ivory/40 block">Built with</span>
              <span className="text-ivory mt-0.5 block">React Native and Expo</span>
            </div>
            <div>
              <span className="text-ivory/40 block">Languages</span>
              <span className="text-ivory mt-0.5 block">Multilingual, through i18n</span>
            </div>
            <div>
              <span className="text-ivory/40 block">Focus</span>
              <span className="text-sage mt-0.5 block">Architecture, content, AI</span>
            </div>
          </div>
        </header>

        {/* Interactive Working Component */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs text-sage tracking-widest uppercase">
              Live Phone Prototype Frame
            </span>
            <span className="font-mono text-xs text-ivory/40">
              Switch languages to see full RTL translation
            </span>
          </div>
          <MobileAppDemo />
        </div>

        {/* Contents Bar */}
        <nav aria-label="Case Study Contents" className="p-6 bg-ink-card/60 border border-ivory/15 rounded-lg mb-20">
          <span className="font-mono text-xs text-sage tracking-widest uppercase block mb-4">
            Contents Navigation
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 font-mono text-xs">
            {contents.map((item) => (
              <a
                key={item.num}
                href={item.href}
                className="flex items-center gap-2 text-ivory/70 hover:text-sage transition-colors py-1"
              >
                <span className="text-sage/60">{item.num}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </nav>

        {/* 01: THE PROBLEM */}
        <section id="problem" className="py-12 border-b border-ivory/10 space-y-6">
          <span className="font-mono text-xs text-sage tracking-widest uppercase">01 / Challenge</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-ivory">THE PROBLEM</h2>
          <div className="space-y-4 text-base sm:text-lg text-ivory/80 font-light leading-relaxed max-w-3xl">
            <p>
              Content-heavy mobile products must remain simple and responsive under touch. When users navigate deep learning sequences, complex lesson curriculums easily become overwhelming if unstructured.
            </p>
            <p>
              The application needed:
            </p>
            <ul className="list-disc pl-6 space-y-1 font-mono text-xs text-ivory/80">
              <li>Structured educational content models</li>
              <li>Multiple languages including bidirectional RTL (Arabic)</li>
              <li>Integration with external knowledge services</li>
              <li>Interactive learning loops and progress persistence</li>
              <li>Long-term code maintainability across platforms</li>
            </ul>
          </div>
        </section>

        {/* 02: WHAT I BUILT */}
        <section id="what-i-built" className="py-12 border-b border-ivory/10 space-y-6">
          <span className="font-mono text-xs text-sage tracking-widest uppercase">02 / Solution</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-ivory">WHAT I BUILT</h2>
          <p className="text-base sm:text-lg text-ivory/80 font-light leading-relaxed max-w-3xl">
            A cohesive React Native &amp; Expo application designed around atomic components, seamless i18n language routing, and integrated assistant queries:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "Modular card and progress primitives",
              "Bi-directional RTL mirroring for Arabic",
              "Lesson resume and completion tracking",
              "Dynamic question answering assistant",
              "Offline-ready state hydration",
              "Cross-platform parity for iOS & Android",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 p-3 bg-ink-card border border-ivory/10 rounded font-mono text-xs text-ivory/80">
                <CheckCircle2 className="h-4 w-4 text-sage flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 03: TECHNICAL DECISIONS */}
        <section id="decisions" className="py-12 border-b border-ivory/10 space-y-6">
          <span className="font-mono text-xs text-sage tracking-widest uppercase">03 / Principles</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-ivory">TECHNICAL DECISIONS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Architecture before screens", desc: "Modeling state boundaries, navigation stacks, and cache schemas before rendering visual pixels." },
              { title: "Reusable components", desc: "Constructing atomic UI blocks (LessonHeader, ProgressTracker, ActionPill) that compose cleanly across any curriculum." },
              { title: "Multilingual by design", desc: "Decoupling text from templates via an i18n registry, allowing on-the-fly RTL mirroring without breaking constraints." },
              { title: "Connected content", desc: "Structuring lesson data into normalized entities to support search, bookmarking, and incremental downloads." },
              { title: "Assistance where it helps", desc: "Embedding intelligent assistance within context so learners can clarify concepts directly inside the lesson flow." },
              { title: "Accessible and responsive", desc: "Maintaining high-contrast typography, large hit-targets for touch ergonomics, and dynamic font sizing." },
            ].map((d) => (
              <div key={d.title} className="p-5 bg-ink-card border border-ivory/10 rounded-lg space-y-1.5">
                <h3 className="font-serif text-lg font-light text-ivory">{d.title}</h3>
                <p className="font-mono text-xs text-ivory/60 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 04: HOW THE APP IS LAYERED */}
        <section id="layers" className="py-12 border-b border-ivory/10 space-y-6">
          <span className="font-mono text-xs text-sage tracking-widest uppercase">04 / System Hierarchy</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-ivory">HOW THE APP IS LAYERED</h2>
          <div className="space-y-3">
            {[
              { num: "01", name: "Interface Layer", detail: "Atomic presentation components, design tokens, gestures, and animations." },
              { num: "02", name: "Experience Layer", detail: "Navigation flow, active lesson routing, progress bars, and modal sheets." },
              { num: "03", name: "Language Layer", detail: "i18n string dictionaries, pluralization rules, and bidirectional RTL formatting." },
              { num: "04", name: "Content Layer", detail: "Structured curriculums, lesson modules, quiz states, and local persistence." },
              { num: "05", name: "Sources Layer", detail: "External knowledge APIs, AI service endpoints, and cache sync." },
            ].map((layer) => (
              <div key={layer.num} className="p-4 bg-ink-card border border-sage/20 rounded-lg flex items-center justify-between gap-4 font-mono text-xs">
                <span className="text-sage font-bold">{layer.num}</span>
                <span className="text-ivory font-semibold">{layer.name}</span>
                <span className="text-ivory/60 text-right max-w-md hidden sm:inline">{layer.detail}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 05: TECHNOLOGIES */}
        <section id="technologies" className="py-12 border-b border-ivory/10 space-y-6">
          <span className="font-mono text-xs text-sage tracking-widest uppercase">05 / Stack & Capabilities</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-ivory">TECHNOLOGIES</h2>
          <div className="flex flex-wrap gap-2">
            {["React Native", "Expo", "JavaScript", "APIs", "i18n", "AI Integration"].map((tech) => (
              <span key={tech} className="px-3.5 py-1.5 font-mono text-xs bg-ink-card border border-ivory/20 text-ivory rounded">
                {tech}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-4">
            {[
              "Mobile architecture",
              "Reusable components",
              "Navigation and state",
              "Multilingual content",
              "API integration",
              "AI-assisted features",
            ].map((cap) => (
              <div key={cap} className="p-2.5 bg-ink-deep border border-ivory/10 font-mono text-[11px] text-ivory/70 rounded">
                {cap}
              </div>
            ))}
          </div>
        </section>

        {/* 06: WHAT I LEARNED */}
        <section id="learning" className="py-12 border-b border-ivory/10 space-y-6">
          <span className="font-mono text-xs text-sage tracking-widest uppercase">06 / Field Reflection</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-ivory">WHAT I LEARNED</h2>
          <blockquote className="p-8 border-l-2 border-sage bg-ink-card text-lg sm:text-xl font-serif text-ivory/90 italic leading-relaxed">
            &ldquo;This project deepened my understanding of mobile architecture, internationalization, and bringing external services and AI into an interactive product. Above all, it showed me how much good structure matters as content and features grow.&rdquo;
          </blockquote>
        </section>

        {/* Case Study Footer Navigation */}
        <div className="pt-16 flex flex-wrap items-center justify-between gap-6 border-t border-ivory/10 font-mono text-xs">
          <Link
            href="/"
            className="flex items-center gap-2 text-ivory/70 hover:text-sage uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>ALL WORK</span>
          </Link>

          <Link
            href="/work/machine-learning-computer-vision"
            className="flex items-center gap-2 bg-sage px-5 py-2.5 text-ink font-semibold uppercase tracking-wider hover:bg-sage-light transition-colors"
          >
            <span>NEXT CASE STUDY: APPLIED AI &amp; CV</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
