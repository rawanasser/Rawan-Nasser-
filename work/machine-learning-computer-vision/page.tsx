import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import SystemHud from "@/components/navigation/SystemHud";
import LiveCanvas from "@/components/canvas/LiveCanvas";
import CustomCursor from "@/components/cursor/CustomCursor";
import AiPipelineDemo from "@/components/work/AiPipelineDemo";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Machine Learning & Computer Vision — Case Study | Rawan Nasser",
  description:
    "Applied AI case study detailing deep learning pipelines, computer vision architectures, PyTorch implementations, and validation protocols.",
};

export default function MachineLearningCaseStudy() {
  const contents = [
    { num: "01", label: "The problem", href: "#problem" },
    { num: "02", label: "What I built", href: "#what-i-built" },
    { num: "03", label: "Technical decisions", href: "#decisions" },
    { num: "04", label: "Computer-vision workflow", href: "#workflow" },
    { num: "05", label: "Technologies", href: "#technologies" },
    { num: "06", label: "What I learned", href: "#learning" },
  ];

  return (
    <div className="min-h-screen bg-ink-deep text-ivory selection:bg-rose selection:text-ink">
      <CustomCursor />
      <SystemHud />
      <LiveCanvas sectionMode="ai" />

      <main className="relative z-10 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-rose hover:text-ivory uppercase tracking-widest transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>ALL WORK</span>
          </Link>
        </div>

        {/* Hero Section */}
        <header className="border-b border-ivory/10 pb-12 mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-rose/80 tracking-widest uppercase mb-3">
            <span className="h-1.5 w-1.5 bg-rose rounded-full" />
            <span>03 Applied AI / Featured</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-ivory tracking-tight mb-4">
            MACHINE LEARNING &amp; COMPUTER VISION
          </h1>

          <p className="font-mono text-base text-rose mb-6">
            Applied AI Development
          </p>

          <p className="text-lg text-ivory/80 font-light leading-relaxed max-w-2xl mb-8">
            Practical experience exploring and implementing machine-learning workflows, with a focus on deep learning and computer vision.
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-ink-card border border-ivory/10 font-mono text-xs">
            <div>
              <span className="text-ivory/40 block">Type</span>
              <span className="text-ivory mt-0.5 block">Applied AI</span>
            </div>
            <div>
              <span className="text-ivory/40 block">Domain</span>
              <span className="text-ivory mt-0.5 block">Computer vision</span>
            </div>
            <div>
              <span className="text-ivory/40 block">Framework</span>
              <span className="text-ivory mt-0.5 block">PyTorch</span>
            </div>
            <div>
              <span className="text-ivory/40 block">Focus</span>
              <span className="text-rose mt-0.5 block">Data, training, evaluation</span>
            </div>
          </div>
        </header>

        {/* Interactive Working Component */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs text-rose tracking-widest uppercase">
              Interactive 5-Stage Pipeline
            </span>
            <span className="font-mono text-xs text-ivory/40">
              Select any stage to inspect code &amp; tensors
            </span>
          </div>
          <AiPipelineDemo />
        </div>

        {/* Contents Bar */}
        <nav aria-label="Case Study Contents" className="p-6 bg-ink-card/60 border border-ivory/15 rounded-lg mb-20">
          <span className="font-mono text-xs text-rose tracking-widest uppercase block mb-4">
            Contents Navigation
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 font-mono text-xs">
            {contents.map((item) => (
              <a
                key={item.num}
                href={item.href}
                className="flex items-center gap-2 text-ivory/70 hover:text-rose transition-colors py-1"
              >
                <span className="text-rose/60">{item.num}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </nav>

        {/* 01: THE PROBLEM */}
        <section id="problem" className="py-12 border-b border-ivory/10 space-y-6">
          <span className="font-mono text-xs text-rose tracking-widest uppercase">01 / Challenge</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-ivory">THE PROBLEM</h2>
          <div className="space-y-4 text-base sm:text-lg text-ivory/80 font-light leading-relaxed max-w-3xl">
            <p>
              Machine learning models are frequently treated as opaque black boxes. In production software engineering, building reliable AI systems requires rigorous data curation, disciplined training pipelines, and honest multi-metric evaluation.
            </p>
            <p>
              Without proper validation loops, models easily overfit to artifacts in the dataset or fail when encountering real-world noise, illumination shifts, or unseen class distributions.
            </p>
          </div>
        </section>

        {/* 02: WHAT I BUILT */}
        <section id="what-i-built" className="py-12 border-b border-ivory/10 space-y-6">
          <span className="font-mono text-xs text-rose tracking-widest uppercase">02 / Implementation</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-ivory">WHAT I BUILT</h2>
          <p className="text-base sm:text-lg text-ivory/80 font-light leading-relaxed max-w-3xl">
            Hands-on machine learning architectures implemented in PyTorch, structured from raw tensor preprocessing through to backpropagation optimization and confusion matrix evaluation:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "ImageFolder dataset ingestion & stratified splits",
              "Custom PyTorch transforms & data augmentation",
              "Residual convolutional neural networks (CNNs)",
              "Multi-epoch training loops with autograd backprop",
              "Cross-entropy loss calculation and learning rate decay",
              "Confusion matrices and per-class precision/recall metrics",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 p-3 bg-ink-card border border-ivory/10 rounded font-mono text-xs text-ivory/80">
                <CheckCircle2 className="h-4 w-4 text-rose flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 03: TECHNICAL DECISIONS */}
        <section id="decisions" className="py-12 border-b border-ivory/10 space-y-6">
          <span className="font-mono text-xs text-rose tracking-widest uppercase">03 / Engineering Notes</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-ivory">TECHNICAL DECISIONS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Data comes first", desc: "No architecture can compensate for noisy or unbalanced ground truth. Investing time into dataset cleaning and stratified splits sets the foundation." },
              { title: "Neural networks in PyTorch", desc: "Using PyTorch's idiomatic torch.nn.Module abstractions, explicit tensor shapes, and clean DataLoader batching." },
              { title: "Evaluation is part of the work", desc: "Measuring true-positive density across every class with confusion matrices rather than relying purely on top-line accuracy." },
              { title: "Repeatable workflows", desc: "Fixing random seeds, logging hyperparameter configurations, and isolating inference passes under torch.no_grad()." },
            ].map((d) => (
              <div key={d.title} className="p-5 bg-ink-card border border-ivory/10 rounded-lg space-y-1.5">
                <h3 className="font-serif text-lg font-light text-ivory">{d.title}</h3>
                <p className="font-mono text-xs text-ivory/60 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 04: COMPUTER-VISION WORKFLOW */}
        <section id="workflow" className="py-12 border-b border-ivory/10 space-y-6">
          <span className="font-mono text-xs text-rose tracking-widest uppercase">04 / Pipeline</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-ivory">COMPUTER-VISION WORKFLOW</h2>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-6 bg-ink-card border border-ivory/15 rounded-lg text-center font-mono text-xs">
            <div className="p-3 border border-rose/40 bg-rose/10 rounded flex-1 w-full">
              <span className="text-rose block font-bold">PREPARE</span>
            </div>
            <span className="text-ivory/30">→</span>
            <div className="p-3 border border-ivory/20 bg-ivory/5 rounded flex-1 w-full">
              <span className="text-ivory block font-bold">PREPROCESS</span>
            </div>
            <span className="text-ivory/30">→</span>
            <div className="p-3 border border-sage/40 bg-sage/10 rounded flex-1 w-full">
              <span className="text-sage block font-bold">TRAIN</span>
            </div>
            <span className="text-ivory/30">→</span>
            <div className="p-3 border border-gold/40 bg-gold/10 rounded flex-1 w-full">
              <span className="text-gold block font-bold">EVALUATE</span>
            </div>
            <span className="text-ivory/30">→</span>
            <div className="p-3 border border-rose/40 bg-rose/10 rounded flex-1 w-full">
              <span className="text-rose block font-bold">PREDICT</span>
            </div>
          </div>
        </section>

        {/* 05: TECHNOLOGIES */}
        <section id="technologies" className="py-12 border-b border-ivory/10 space-y-6">
          <span className="font-mono text-xs text-rose tracking-widest uppercase">05 / Stack & Capabilities</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-ivory">TECHNOLOGIES</h2>
          <div className="flex flex-wrap gap-2">
            {["Python", "PyTorch", "NumPy", "Pandas", "Deep Learning", "Computer Vision"].map((tech) => (
              <span key={tech} className="px-3.5 py-1.5 font-mono text-xs bg-ink-card border border-ivory/20 text-ivory rounded">
                {tech}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-4">
            {[
              "Neural networks",
              "Image classification",
              "Data preparation",
              "Training and evaluation",
              "PyTorch workflows",
            ].map((cap) => (
              <div key={cap} className="p-2.5 bg-ink-deep border border-ivory/10 font-mono text-[11px] text-ivory/70 rounded">
                {cap}
              </div>
            ))}
          </div>
        </section>

        {/* 06: WHAT I LEARNED */}
        <section id="learning" className="py-12 border-b border-ivory/10 space-y-6">
          <span className="font-mono text-xs text-rose tracking-widest uppercase">06 / Field Reflection</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-ivory">WHAT I LEARNED</h2>
          <blockquote className="p-8 border-l-2 border-rose bg-ink-card text-lg sm:text-xl font-serif text-ivory/90 italic leading-relaxed">
            &ldquo;This work gave me hands-on experience with how deep learning behaves in practice: how much depends on data preparation, how training choices shape results, and how to read evaluation honestly. It is the foundation I bring to building AI into real software.&rdquo;
          </blockquote>
        </section>

        {/* Circular Case Study Footer Navigation */}
        <div className="pt-16 flex flex-wrap items-center justify-between gap-6 border-t border-ivory/10 font-mono text-xs">
          <Link
            href="/"
            className="flex items-center gap-2 text-ivory/70 hover:text-rose uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>ALL WORK</span>
          </Link>

          <Link
            href="/work/qr-menu-systems"
            className="flex items-center gap-2 bg-rose px-5 py-2.5 text-ink font-semibold uppercase tracking-wider hover:bg-rose-light transition-colors"
          >
            <span>NEXT CASE STUDY: DIGITAL QR MENU SYSTEMS</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
