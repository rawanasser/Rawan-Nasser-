"use client";

import React, { useState } from "react";
import SystemLoader from "@/components/loader/SystemLoader";
import CustomCursor from "@/components/cursor/CustomCursor";
import SystemHud from "@/components/navigation/SystemHud";
import LiveCanvas from "@/components/canvas/LiveCanvas";
import HeroSection from "@/components/hero/HeroSection";
import PhilosophySection from "@/components/philosophy/PhilosophySection";
import CapabilityMap from "@/components/capability-map/CapabilityMap";
import VerbStrip from "@/components/typography/VerbStrip";
import SelectedWorkSection from "@/components/work/SelectedWorkSection";
import CapabilitiesSection from "@/components/capabilities/CapabilitiesSection";
import TechnologyUniverse from "@/components/technology-universe/TechnologyUniverse";
import MethodSection from "@/components/methodology/MethodSection";
import ProcessSection from "@/components/process/ProcessSection";
import AboutSection from "@/components/about/AboutSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  const [booted, setBooted] = useState(false);

  return (
    <div className="relative min-h-screen bg-ink-deep text-ivory">
      {/* 07: Loading / Initialization Sequence */}
      <SystemLoader onComplete={() => setBooted(true)} />

      {/* 08: Custom Cursor (Desktop Only) */}
      <CustomCursor />

      {/* 06: Global System HUD & Navigation */}
      <SystemHud />

      {/* 73: Dynamic Live Canvas */}
      <LiveCanvas sectionMode="default" />

      {/* Main Exhibition Sequence */}
      <main className="relative z-10 space-y-0">
        {/* 10-11: Hero Section */}
        <HeroSection />

        {/* 12: Working Philosophy */}
        <PhilosophySection />

        {/* 13-14: Interactive Capability Map */}
        <CapabilityMap />

        {/* 15: Animated Verb Strip */}
        <VerbStrip />

        {/* 16-22, 30-32, 39-42: Selected Work Exhibits */}
        <SelectedWorkSection />

        {/* 49-54: Capabilities (What I Do) */}
        <CapabilitiesSection />

        {/* 55-57: Technology Universe */}
        <TechnologyUniverse />

        {/* 58-59: Method & Product Philosophy */}
        <MethodSection />

        {/* 60-61: Process (From Idea to Shipped) */}
        <ProcessSection />

        {/* 62-63: Editorial About (Field Notes) */}
        <AboutSection />

        {/* 64-70: Contact & Footer */}
        <ContactSection />
      </main>
    </div>
  );
}
