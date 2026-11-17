export interface TechNode {
  id: string;
  name: string;
  category: "Frontend" | "Languages" | "Design" | "Tools" | "Backend & Systems" | "AI & Data";
  whatRawanUsesItFor: string;
  connections: string[];
}

export interface CapabilityArea {
  id: string;
  title: string;
  role: string;
  description: string;
  tools: string[];
  concepts: string[];
  connections: string[];
}

export interface ProcessStage {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  nextStageTitle: string;
}

export const PORTFOLIO_DATA = {
  identity: {
    name: "RAWAN NASSER",
    shortName: "Rawan",
    title: "Software Developer · AI & Product Development",
    coreStatement: "I BUILD IDEAS INTO SYSTEMS.",
    supportingStatement: "Software development, intelligent systems, product design, and digital experiences.",
    systemId: "SYS 01 / 2026",
    statusText: "System status: Curious",
    statusClarification: "A mood, not a server.",
    copyright: "© 2026 Rawan Nasser",
    worksWith: "Works with TypeScript · React · Next.js · React Native · Python · PyTorch",
    email: "rawanasser07@gmail.com", // Configurable
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
  },

  navItems: [
    { label: "Work", href: "#work" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Universe", href: "#universe" },
    { label: "Method", href: "#method" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  philosophy: {
    label: "A working philosophy 01 / 04",
    primary: "I LEARN BY BUILDING.",
    sequential: [
      "I BUILD TO UNDERSTAND.",
      "I DESIGN TO SOLVE.",
      "I CODE TO CREATE.",
    ],
    supporting:
      "Start small, see what it teaches, then build the next version better. That loop is how I learn, and how I make things.",
  },

  capabilities: [
    {
      id: "web",
      title: "Web",
      role: "Architecture & Frontend",
      description: "Modern, performant web applications engineered with modular component hierarchies, server-side capabilities, and typed APIs.",
      tools: ["React", "Next.js", "TypeScript", "APIs", "HTML & CSS"],
      concepts: ["Server Components", "State Management", "Responsive Systems", "Accessibility (a11y)"],
      connections: ["mobile", "interfaces", "systems"],
    },
    {
      id: "mobile",
      title: "Mobile",
      role: "Cross-Platform Ecosystems",
      description: "Multilingual, native-feel mobile experiences engineered with structured navigation, i18n support, and reusable atomic primitives.",
      tools: ["React Native", "Expo", "i18n", "Navigation", "Reusable components"],
      concepts: ["RTL Layouts", "Offline-first sync", "Platform abstractions", "Gestures"],
      connections: ["web", "interfaces", "products"],
    },
    {
      id: "ai",
      title: "AI",
      role: "Applied Deep Learning",
      description: "Hands-on machine learning workflows focusing on computer vision pipelines, neural network training, and honest model evaluation.",
      tools: ["Python", "PyTorch", "Computer Vision", "Deep Learning", "NumPy & Pandas"],
      concepts: ["Data Curation", "Transfer Learning", "Confusion Matrices", "Validation Loops"],
      connections: ["systems", "products"],
    },
    {
      id: "products",
      title: "Products",
      role: "Systems & Architecture",
      description: "Translating conceptual requirements into cohesive software architectures, multi-tenant schemas, and intuitive digital tools.",
      tools: ["Architecture", "SaaS", "Multi-tenant systems"],
      concepts: ["Tenant Isolation", "Config-driven UX", "Scalable Models", "User Flows"],
      connections: ["web", "mobile", "systems", "interfaces"],
    },
    {
      id: "interfaces",
      title: "Interfaces",
      role: "Human-Centric Interaction",
      description: "Designing interfaces with strict typographic hierarchies, nuanced motion cues, design systems, and inclusive usability.",
      tools: ["UI/UX", "Responsive design", "Design systems", "Visual design"],
      concepts: ["Design Tokens", "Micro-interactions", "Color Theory", "Keyboard Nav"],
      connections: ["web", "mobile", "products"],
    },
    {
      id: "systems",
      title: "Systems",
      role: "Reliability & Integration",
      description: "Connecting databases, authentication tiers, automated CI/CD pipelines, and secure API boundaries to power robust applications.",
      tools: ["APIs", "Databases", "Authentication", "Automation", "GitHub Actions"],
      concepts: ["REST/GraphQL", "Relational Schemas", "Role-based Access", "Workflow CI/CD"],
      connections: ["web", "ai", "products"],
    },
  ] as CapabilityArea[],

  verbs: ["Build", "Design", "Learn", "Solve", "Experiment", "Ship"],

  exhibits: [
    {
      id: "qr-menu",
      number: "01",
      slug: "qr-menu-systems",
      label: "Exhibit 01 / Product capability",
      title: "DIGITAL QR MENU SYSTEMS",
      subtitle: "Restaurant & Café Digital Experiences",
      description:
        "I can design and develop complete digital QR menu systems for restaurants and cafés, from the management interface to the customer-facing menu experience.",
      type: "A system I design and build",
      platform: "Web, mobile-first",
      audience: "Venue teams and their guests",
      focus: "Architecture, product, UI/UX",
      route: "/work/qr-menu-systems",
    },
    {
      id: "mobile-apps",
      number: "02",
      slug: "mobile-applications",
      label: "Exhibit 02 / Mobile application",
      title: "MOBILE APPLICATIONS",
      subtitle: "Multilingual Applications & Interactive Experiences",
      description:
        "Designed and developed a multilingual mobile application with structured content, interactive functionality, reusable components, and intelligent assistance.",
      type: "Mobile application",
      platform: "React Native and Expo",
      audience: "Learners & Global Users",
      languages: "Multilingual, through i18n",
      focus: "Architecture, content, AI",
      route: "/work/mobile-applications",
    },
    {
      id: "machine-learning",
      number: "03",
      slug: "machine-learning-computer-vision",
      label: "Exhibit 03 / Applied AI",
      title: "MACHINE LEARNING & COMPUTER VISION",
      subtitle: "Applied AI Development",
      description:
        "Practical experience exploring and implementing machine-learning workflows, with a focus on deep learning and computer vision.",
      type: "Applied AI",
      domain: "Computer vision",
      framework: "PyTorch",
      focus: "Data, training, evaluation",
      route: "/work/machine-learning-computer-vision",
    },
  ],

  // 25 Technologies with clear categorization and connections
  technologies: [
    { id: "js", name: "JavaScript", category: "Languages", whatRawanUsesItFor: "Modern asynchronous web scripting and dynamic DOM manipulation.", connections: ["ts", "react", "html", "css", "apis"] },
    { id: "ts", name: "TypeScript", category: "Languages", whatRawanUsesItFor: "Type-safe product development across full-stack applications.", connections: ["js", "react", "nextjs", "react-native", "apis"] },
    { id: "python", name: "Python", category: "Languages", whatRawanUsesItFor: "Machine learning workflows, PyTorch scripting, and data pipelines.", connections: ["pytorch", "numpy", "pandas", "cv"] },
    { id: "html", name: "HTML", category: "Frontend", whatRawanUsesItFor: "Semantic document structure and accessible interface outlines.", connections: ["css", "js", "react", "responsive"] },
    { id: "css", name: "CSS", category: "Frontend", whatRawanUsesItFor: "Design tokens, modern flex/grid layouts, and responsive styling.", connections: ["html", "responsive", "design-systems"] },
    { id: "react", name: "React", category: "Frontend", whatRawanUsesItFor: "Component-driven user interfaces with reactive declarative state.", connections: ["ts", "nextjs", "react-native", "design-systems"] },
    { id: "nextjs", name: "Next.js", category: "Frontend", whatRawanUsesItFor: "Production web applications with SSR, API routing, and performance optimization.", connections: ["react", "ts", "apis", "multi-tenant"] },
    { id: "react-native", name: "React Native", category: "Frontend", whatRawanUsesItFor: "Cross-platform mobile applications for iOS and Android.", connections: ["expo", "react", "ts", "ui-ux"] },
    { id: "expo", name: "Expo", category: "Tools", whatRawanUsesItFor: "Managed mobile workflows, native modules, and fast iteration.", connections: ["react-native", "ts"] },
    { id: "pytorch", name: "PyTorch", category: "AI & Data", whatRawanUsesItFor: "Defining neural network architectures, loss optimization, and evaluation loops.", connections: ["python", "dl", "cv", "numpy"] },
    { id: "dl", name: "Deep Learning", category: "AI & Data", whatRawanUsesItFor: "Convolutional networks, representation learning, and parameter tuning.", connections: ["pytorch", "cv", "python"] },
    { id: "cv", name: "Computer Vision", category: "AI & Data", whatRawanUsesItFor: "Image preprocessing, classification architectures, and visual feature extraction.", connections: ["pytorch", "dl", "numpy"] },
    { id: "numpy", name: "NumPy", category: "AI & Data", whatRawanUsesItFor: "Matrix transformations, tensor math, and dataset numerical manipulations.", connections: ["python", "pandas", "pytorch"] },
    { id: "pandas", name: "Pandas", category: "AI & Data", whatRawanUsesItFor: "Dataset inspection, tabular structuring, and exploratory data analysis.", connections: ["python", "numpy"] },
    { id: "apis", name: "APIs", category: "Backend & Systems", whatRawanUsesItFor: "Architecting clean RESTful interfaces and client-server communication.", connections: ["nextjs", "auth", "databases", "ts"] },
    { id: "databases", name: "Databases", category: "Backend & Systems", whatRawanUsesItFor: "Relational data modeling, schema definition, and query efficiency.", connections: ["apis", "multi-tenant", "auth"] },
    { id: "auth", name: "Authentication", category: "Backend & Systems", whatRawanUsesItFor: "Session management, token verification, and role-based access control.", connections: ["apis", "databases", "multi-tenant"] },
    { id: "multi-tenant", name: "Multi-Tenant Architecture", category: "Backend & Systems", whatRawanUsesItFor: "Isolating customer configuration and tenant data within unified systems.", connections: ["databases", "apis", "nextjs"] },
    { id: "git", name: "Git", category: "Tools", whatRawanUsesItFor: "Atomic version control, branching strategies, and codebase maintenance.", connections: ["github", "github-actions", "vscode"] },
    { id: "github", name: "GitHub", category: "Tools", whatRawanUsesItFor: "Code collaboration, issue triage, and repository lifecycle management.", connections: ["git", "github-actions"] },
    { id: "github-actions", name: "GitHub Actions", category: "Tools", whatRawanUsesItFor: "Continuous integration, automated testing, and deployment workflows.", connections: ["github", "git"] },
    { id: "vscode", name: "VS Code", category: "Tools", whatRawanUsesItFor: "Configured IDE environment, linting extensions, and rapid debugging.", connections: ["git", "ts", "python"] },
    { id: "ui-ux", name: "UI/UX", category: "Design", whatRawanUsesItFor: "Information hierarchy, user journeys, wireframing, and interaction design.", connections: ["design-systems", "responsive", "react"] },
    { id: "design-systems", name: "Design Systems", category: "Design", whatRawanUsesItFor: "Consistent component tokens, typography scales, and modular pattern libraries.", connections: ["ui-ux", "css", "react"] },
    { id: "responsive", name: "Responsive Design", category: "Design", whatRawanUsesItFor: "Fluid multi-device layouts, fluid typography, and touch-ready ergonomics.", connections: ["css", "html", "ui-ux"] },
  ] as TechNode[],

  methodology: [
    { step: "01", statement: "I start by understanding the problem.", desc: "Digging into why a tool needs to exist before typing any code." },
    { step: "02", statement: "Break it into smaller systems.", desc: "Decomposing complex requirements into decoupled, testable components." },
    { step: "03", statement: "Design a practical solution.", desc: "Balancing technical feasibility with immediate user clarity and ergonomic flow." },
    { step: "04", statement: "Build it.", desc: "Writing clean, typed, modular code that reflects the architecture." },
    { step: "05", statement: "Test it.", desc: "Verifying edge cases, real user interactions, and performance benchmarks." },
    { step: "06", statement: "Refine it.", desc: "Polishing micro-interactions, reducing friction, and hardening the implementation." },
  ],

  processStages: [
    {
      id: "idea",
      number: "01",
      title: "IDEA",
      shortDesc: "Every product starts as a question worth answering. I write the question down before I write any code.",
      fullDesc: "Clarifying the purpose, defining who will touch the system, and examining why existing approaches fall short.",
      nextStageTitle: "Problem",
    },
    {
      id: "problem",
      number: "02",
      title: "PROBLEM",
      shortDesc: "Isolating constraints, operational bottlenecks, and core user goals.",
      fullDesc: "Framing the explicit failure modes and functional requirements that will govern architectural choices.",
      nextStageTitle: "Architecture",
    },
    {
      id: "architecture",
      number: "03",
      title: "ARCHITECTURE",
      shortDesc: "Structuring the data flow, state hierarchy, API contracts, and tenant models.",
      fullDesc: "Ensuring the backbone can scale cleanly without needing rewrite cycles as feature depth expands.",
      nextStageTitle: "Design",
    },
    {
      id: "design",
      number: "04",
      title: "DESIGN",
      shortDesc: "Crafting wireframes, ergonomic UI layouts, and cohesive design tokens.",
      fullDesc: "Iterating on typographic clarity, color contrast, touch targets, and accessible interaction patterns.",
      nextStageTitle: "Build",
    },
    {
      id: "build",
      number: "05",
      title: "BUILD",
      shortDesc: "Constructing typed frontend components, reactive pipelines, and integrations.",
      fullDesc: "Translating wireframes and schemas into production-grade, maintainable codebases.",
      nextStageTitle: "Test",
    },
    {
      id: "test",
      number: "06",
      title: "TEST",
      shortDesc: "Stress-testing edge cases, multi-language nuances, and input variations.",
      fullDesc: "Verifying keyboard accessibility, responsive breakpoints, network resilience, and error boundaries.",
      nextStageTitle: "Refine",
    },
    {
      id: "refine",
      number: "07",
      title: "REFINE",
      shortDesc: "Fine-tuning motion curves, micro-feedback, and latency bottlenecks.",
      fullDesc: "Removing friction so the interface feels instantaneous, calm, and deliberate under hand.",
      nextStageTitle: "Ship",
    },
    {
      id: "ship",
      number: "08",
      title: "SHIP",
      shortDesc: "Delivering a clean, verified, production-ready artifact to the world.",
      fullDesc: "Configuring automated builds, verifying SEO and metadata, and maintaining documentation.",
      nextStageTitle: "Idea (Cycle restarts)",
    },
  ] as ProcessStage[],

  fieldNotes: [
    {
      title: "CURIOUS BY NATURE.",
      sub: "why before how",
      text: "I ask why a system behaves the way it does before reaching for quick fixes. Understanding root behavior is where real engineering begins.",
    },
    {
      title: "TECHNICAL BY PRACTICE.",
      sub: "built, tested, refined",
      text: "Theory is only proven when made tangible. I learn frameworks and algorithms by building working implementations with them.",
    },
    {
      title: "CREATIVE BY INSTINCT.",
      sub: "form follows the problem",
      text: "Interfaces should be calm, legible, and respectful of the human mind using them. Beauty emerges from functional clarity.",
    },
  ],

  openTo: [
    { num: "01", title: "Software development", desc: "Full-stack web applications, TypeScript architectures, robust frontend systems, and API design." },
    { num: "02", title: "AI & machine learning", desc: "Applied computer vision pipelines, PyTorch implementations, data preprocessing, and model integration." },
    { num: "03", title: "Product development", desc: "Translating business requirements into functioning digital tools, multi-tenant services, and SaaS prototypes." },
    { num: "04", title: "Freelance projects", desc: "Bespoke digital experiences, specialized web/mobile systems, and interactive technical portfolios." },
  ],
};
