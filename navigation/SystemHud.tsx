"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Menu as MenuIcon, X, ArrowUpRight } from "lucide-react";

export default function SystemHud() {
  const [coords, setCoords] = useState({ x: "000.000", y: "000.000" });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const targetCoords = useRef({ x: 0, y: 0 });
  const currentCoords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to 0 - 1000 range for systematic look
      const normX = (e.clientX / window.innerWidth) * 999;
      const normY = (e.clientY / window.innerHeight) * 999;
      targetCoords.current = { x: normX, y: normY };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let animId: number;
    let lastUpdate = 0;

    const updateLoop = (timestamp: number) => {
      // Smooth lerp
      currentCoords.current.x += (targetCoords.current.x - currentCoords.current.x) * 0.08;
      currentCoords.current.y += (targetCoords.current.y - currentCoords.current.y) * 0.08;

      if (timestamp - lastUpdate > 60) {
        setCoords({
          x: currentCoords.current.x.toFixed(3).padStart(7, "0"),
          y: currentCoords.current.y.toFixed(3).padStart(7, "0"),
        });
        lastUpdate = timestamp;
      }

      animId = requestAnimationFrame(updateLoop);
    };

    animId = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Track active section for highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["work", "capabilities", "universe", "method", "about", "contact"];
      const scrollPos = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-ivory/10 bg-ink-deep/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left: Brand Logo */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="group flex items-center gap-2 font-mono text-sm tracking-widest text-ivory hover:text-gold transition-colors focus:outline-none focus:ring-1 focus:ring-gold"
              data-cursor="hover"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-sage group-hover:scale-125 transition-transform" />
              <span className="font-semibold">{PORTFOLIO_DATA.identity.shortName.toUpperCase()}</span>
            </Link>

            <span className="hidden md:inline-block h-3 w-px bg-ivory/15" />

            {/* Technical Metadata */}
            <div className="hidden sm:flex items-center gap-4 font-mono text-xs text-ivory/50">
              <span className="tabular-nums">
                x {coords.x} / y {coords.y}
              </span>
              <span className="h-2 w-px bg-ivory/20" />
              <span className="text-gold/80">{PORTFOLIO_DATA.identity.systemId}</span>
            </div>
          </div>

          {/* Center / Right: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {PORTFOLIO_DATA.navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-mono text-xs uppercase tracking-wider transition-colors focus:outline-none focus:ring-1 focus:ring-gold ${
                    isActive
                      ? "text-gold font-semibold"
                      : "text-ivory/70 hover:text-ivory"
                  }`}
                  data-cursor="hover"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Mobile Menu Toggle / Status */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-1.5 border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-xs text-gold hover:bg-gold/20 hover:border-gold transition-colors focus:outline-none focus:ring-1 focus:ring-gold"
              data-cursor="hover"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex md:hidden items-center gap-2 border border-ivory/20 bg-ink-card px-3 py-1.5 font-mono text-xs text-ivory hover:border-gold transition-colors focus:outline-none focus:ring-1 focus:ring-gold"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span>MENU</span>
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex flex-col justify-between bg-ink-deep/98 px-6 py-8 md:hidden backdrop-blur-xl animate-in fade-in duration-200"
        >
          <div className="flex items-center justify-between border-b border-ivory/10 pb-4">
            <span className="font-mono text-xs text-gold">{PORTFOLIO_DATA.identity.systemId}</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-1 font-mono text-xs text-ivory hover:text-gold"
              aria-label="Close menu"
            >
              <span>CLOSE</span>
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex flex-col gap-6 py-12">
            {PORTFOLIO_DATA.navItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-baseline justify-between border-b border-ivory/10 pb-3"
              >
                <span className="font-mono text-xs text-ivory/40">0{idx + 1}</span>
                <span className="font-serif text-3xl font-light tracking-wide text-ivory group-hover:text-gold transition-colors">
                  {item.label}
                </span>
                <ArrowUpRight className="h-5 w-5 text-ivory/40 group-hover:text-gold transition-colors" />
              </a>
            ))}
          </div>

          <div className="border-t border-ivory/10 pt-4 font-mono text-xs text-ivory/60 space-y-2">
            <div>{PORTFOLIO_DATA.identity.name}</div>
            <div className="text-gold">{PORTFOLIO_DATA.identity.statusText}</div>
          </div>
        </div>
      )}
    </>
  );
}
