import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#17232D",
          deep: "#0F1820",
          card: "#1C2A36",
          surface: "#213240",
          hover: "#2A3E4E",
          border: "#293A48",
          subtle: "#1F2D39",
        },
        sage: {
          DEFAULT: "#9BAF9A",
          light: "#B2C4B1",
          dark: "#7A9079",
          muted: "rgba(155, 175, 154, 0.15)",
        },
        ivory: {
          DEFAULT: "#EAE5D9",
          pure: "#F7F5F0",
          muted: "#C5C0B3",
          subtle: "rgba(234, 229, 217, 0.08)",
        },
        gold: {
          DEFAULT: "#B69A69",
          light: "#CCB285",
          dark: "#987E50",
          muted: "rgba(182, 154, 105, 0.15)",
        },
        rose: {
          DEFAULT: "#B98F91",
          light: "#CFA7A9",
          dark: "#9B7274",
          muted: "rgba(185, 143, 145, 0.15)",
        },
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "Courier New", "monospace"],
      },
      letterSpacing: {
        ultra: "0.25em",
        mega: "0.35em",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        marquee: "marquee 25s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
