"use client";

import React, { useState } from "react";
import { Globe, Eye, BookOpen, Sparkles, Compass, CheckCircle2, Award, ChevronRight } from "lucide-react";

type Language = "en" | "fr" | "ar";

interface LocalizedStrings {
  greeting: string;
  continueLabel: string;
  moduleProgress: string;
  currentLesson: string;
  continueBtn: string;
  dailyQuestion: string;
  questionTitle: string;
  modulesTitle: string;
  modules: { title: string; lessons: string; pct: number }[];
  nav: { home: string; lesson: string; practice: string; assistant: string };
}

const LOCALIZATION: Record<Language, LocalizedStrings> = {
  en: {
    greeting: "Good evening",
    continueLabel: "Continue where you left off",
    moduleProgress: "Module 1 of 3",
    currentLesson: "How orbits work",
    continueBtn: "Continue lesson",
    dailyQuestion: "Daily question",
    questionTitle: "Why does the moon stay in geosynchronous orbit?",
    modulesTitle: "Learning Modules",
    modules: [
      { title: "Orbits", lessons: "4 lessons", pct: 38 },
      { title: "Light & color", lessons: "3 lessons", pct: 0 },
      { title: "Telescopes", lessons: "5 lessons", pct: 0 },
    ],
    nav: { home: "Home", lesson: "Lesson", practice: "Practice", assistant: "Assistant" },
  },
  fr: {
    greeting: "Bonsoir",
    continueLabel: "Reprenez là où vous vous étiez arrêté",
    moduleProgress: "Module 1 sur 3",
    currentLesson: "Comment fonctionnent les orbites",
    continueBtn: "Continuer la leçon",
    dailyQuestion: "Question du jour",
    questionTitle: "Pourquoi la lune reste-t-elle en orbite géosynchrone ?",
    modulesTitle: "Modules d'apprentissage",
    modules: [
      { title: "Orbites", lessons: "4 leçons", pct: 38 },
      { title: "Lumière & couleur", lessons: "3 leçons", pct: 0 },
      { title: "Télescopes", lessons: "5 leçons", pct: 0 },
    ],
    nav: { home: "Accueil", lesson: "Leçon", practice: "Exercice", assistant: "Assistant" },
  },
  ar: {
    greeting: "مساء الخير",
    continueLabel: "تابع من حيث توقفت",
    moduleProgress: "الوحدة ١ من ٣",
    currentLesson: "كيف تعمل المدارات الفلكية",
    continueBtn: "متابعة الدرس",
    dailyQuestion: "سؤال اليوم",
    questionTitle: "لماذا يبقى القمر في مدار متزامن مع الأرض؟",
    modulesTitle: "الوحدات التعليمية",
    modules: [
      { title: "المدارات", lessons: "٤ دروس", pct: 38 },
      { title: "الضوء والألوان", lessons: "٣ دروس", pct: 0 },
      { title: "التلسكوبات", lessons: "٥ دروس", pct: 0 },
    ],
    nav: { home: "الرئيسية", lesson: "الدروس", practice: "تدريب", assistant: "المساعد" },
  },
};

export default function MobileAppDemo() {
  const [lang, setLang] = useState<Language>("en");
  const [showComponents, setShowComponents] = useState(false);
  const [activeTab, setActiveTab] = useState<"home" | "lesson" | "practice" | "assistant">("home");

  const t = LOCALIZATION[lang];
  const isRtl = lang === "ar";

  return (
    <div className="border border-ivory/15 bg-ink-card shadow-2xl overflow-hidden rounded-lg">
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-ivory/10 bg-ink-deep px-6 py-4 gap-4">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-sage animate-pulse" />
          <span className="font-mono text-xs text-sage uppercase tracking-widest font-semibold">
            React Native & Expo Runtime Frame
          </span>
          <span className="text-xs text-ivory/30 font-mono hidden sm:inline">|</span>
          <span className="font-mono text-xs text-ivory/60 hidden sm:inline">
            i18n & Reusable Component System
          </span>
        </div>

        {/* Action Toggles */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex items-center bg-ink/70 p-1 rounded border border-ivory/10 font-mono text-xs">
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded transition-colors ${
                lang === "en" ? "bg-sage text-ink font-bold" : "text-ivory/60 hover:text-ivory"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("fr")}
              className={`px-2.5 py-1 rounded transition-colors ${
                lang === "fr" ? "bg-sage text-ink font-bold" : "text-ivory/60 hover:text-ivory"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLang("ar")}
              className={`px-2.5 py-1 rounded transition-colors font-sans ${
                lang === "ar" ? "bg-sage text-ink font-bold" : "text-ivory/60 hover:text-ivory"
              }`}
            >
              العربية
            </button>
          </div>

          {/* Component Inspection Toggle */}
          <button
            onClick={() => setShowComponents(!showComponents)}
            className={`flex items-center gap-1.5 px-3 py-1 font-mono text-xs rounded border transition-colors ${
              showComponents
                ? "border-gold bg-gold/20 text-gold font-semibold"
                : "border-ivory/15 text-ivory/60 hover:border-ivory/30"
            }`}
          >
            <Eye className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Show components</span>
            <span className="sm:hidden">Inspect</span>
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="p-6 sm:p-12 flex flex-col items-center justify-center bg-gradient-to-b from-ink-deep/90 to-ink-deep">
        {/* Device Frame */}
        <div
          dir={isRtl ? "rtl" : "ltr"}
          className={`w-full max-w-[340px] rounded-[38px] border-[7px] border-[#253543] bg-[#0E151B] text-ivory shadow-[0_30px_70px_rgba(0,0,0,0.7)] overflow-hidden transition-all duration-300 relative ${
            isRtl ? "font-sans" : "font-sans"
          }`}
        >
          {/* Phone Status Bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-2 text-[10px] font-mono text-ivory/50">
            <span>9:41</span>
            <div className="h-4 w-20 rounded-full bg-black/60" />
            <span className="uppercase">{lang}</span>
          </div>

          {/* Screen Content Viewport */}
          <div className="p-4 space-y-4 max-h-[500px] overflow-y-auto">
            {/* Header / User Greeting */}
            <div className="relative">
              {showComponents && (
                <span className="absolute -top-2 left-0 font-mono text-[9px] text-gold bg-ink-deep px-1 border border-gold/40 z-20">
                  &lt;UserGreeting /&gt;
                </span>
              )}
              <div
                className={`p-3 rounded-xl bg-ink-card/60 border ${
                  showComponents ? "border-gold/60 border-dashed" : "border-ivory/10"
                }`}
              >
                <span className="text-xs font-mono text-sage block">{t.greeting}</span>
                <h4 className="text-lg font-serif font-light text-ivory mt-0.5">
                  {isRtl ? "أهلاً بك مجدداً" : "Welcome back, Learner"}
                </h4>
              </div>
            </div>

            {/* Featured Active Lesson Card */}
            <div className="relative">
              {showComponents && (
                <span className="absolute -top-2 left-0 font-mono text-[9px] text-gold bg-ink-deep px-1 border border-gold/40 z-20">
                  &lt;ActiveLessonTracker /&gt;
                </span>
              )}
              <div
                className={`p-4 rounded-xl bg-gradient-to-br from-ink-card to-ink-surface border transition-all ${
                  showComponents ? "border-gold/60 border-dashed" : "border-sage/30 shadow-md"
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-ivory/60 mb-1">
                  <span>{t.continueLabel}</span>
                  <span className="text-sage">{t.moduleProgress}</span>
                </div>
                <h5 className="font-serif text-base font-medium text-ivory mb-3">
                  {t.currentLesson}
                </h5>

                <div className="h-1.5 w-full bg-ink rounded-full overflow-hidden mb-3">
                  <div className="h-full bg-sage w-[38%]" />
                </div>

                <button className="w-full py-2 bg-sage hover:bg-sage-light text-ink font-mono text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors">
                  <span>{t.continueBtn}</span>
                  <ChevronRight className={`h-3.5 w-3.5 ${isRtl ? "rotate-180" : ""}`} />
                </button>
              </div>
            </div>

            {/* Modules List */}
            <div className="relative space-y-2">
              {showComponents && (
                <span className="absolute -top-2 left-0 font-mono text-[9px] text-gold bg-ink-deep px-1 border border-gold/40 z-20">
                  &lt;CurriculumModulesList /&gt;
                </span>
              )}
              <div
                className={`p-3 rounded-xl border ${
                  showComponents ? "border-gold/60 border-dashed" : "border-transparent"
                }`}
              >
                <span className="font-mono text-xs text-ivory/50 block mb-2">
                  {t.modulesTitle}
                </span>

                <div className="space-y-2">
                  {t.modules.map((m, i) => (
                    <div
                      key={m.title}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-ink-card/80 border border-ivory/5 text-xs"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="h-2 w-2 rounded-full bg-ivory/30" />
                        <div>
                          <div className="font-medium text-ivory">{m.title}</div>
                          <div className="text-[10px] text-ivory/50 font-mono">{m.lessons}</div>
                        </div>
                      </div>
                      <span className="font-mono text-[11px] text-sage">{m.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Daily Assistant Feature */}
            <div className="relative">
              {showComponents && (
                <span className="absolute -top-2 left-0 font-mono text-[9px] text-gold bg-ink-deep px-1 border border-gold/40 z-20">
                  &lt;AiAssistantPrompt /&gt;
                </span>
              )}
              <div
                className={`p-3.5 rounded-xl bg-ink-surface/60 border ${
                  showComponents ? "border-gold/60 border-dashed" : "border-rose/20"
                }`}
              >
                <div className="flex items-center gap-1.5 text-rose text-xs font-mono mb-1">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{t.dailyQuestion}</span>
                </div>
                <p className="text-xs text-ivory/80 leading-snug">
                  {t.questionTitle}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Native Tab Bar */}
          <div className="border-t border-ivory/10 bg-ink-deep px-4 py-3 flex items-center justify-around text-[10px] font-mono text-ivory/60">
            <button
              onClick={() => setActiveTab("home")}
              className={`flex flex-col items-center gap-1 ${
                activeTab === "home" ? "text-sage font-bold" : "hover:text-ivory"
              }`}
            >
              <Compass className="h-4 w-4" />
              <span>{t.nav.home}</span>
            </button>
            <button
              onClick={() => setActiveTab("lesson")}
              className={`flex flex-col items-center gap-1 ${
                activeTab === "lesson" ? "text-sage font-bold" : "hover:text-ivory"
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span>{t.nav.lesson}</span>
            </button>
            <button
              onClick={() => setActiveTab("practice")}
              className={`flex flex-col items-center gap-1 ${
                activeTab === "practice" ? "text-sage font-bold" : "hover:text-ivory"
              }`}
            >
              <CheckCircle2 className="h-4 w-4" />
              <span>{t.nav.practice}</span>
            </button>
            <button
              onClick={() => setActiveTab("assistant")}
              className={`flex flex-col items-center gap-1 ${
                activeTab === "assistant" ? "text-sage font-bold" : "hover:text-ivory"
              }`}
            >
              <Sparkles className="h-4 w-4" />
              <span>{t.nav.assistant}</span>
            </button>
          </div>

          {/* Bottom Bar indicator */}
          <div className="h-3 flex items-center justify-center">
            <div className="h-1 w-20 rounded-full bg-ivory/20" />
          </div>
        </div>
      </div>
    </div>
  );
}
