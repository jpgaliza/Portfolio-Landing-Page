import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        "accent-strong": "rgb(var(--color-accent-strong) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)"
      },
      boxShadow: {
        glow: "0 24px 80px rgb(37 99 235 / 0.18)",
        glass: "0 18px 60px rgb(0 0 0 / 0.32)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top left, rgb(37 99 235 / 0.28), transparent 34%), radial-gradient(circle at 78% 12%, rgb(14 165 233 / 0.16), transparent 26%), linear-gradient(180deg, rgb(5 8 17), rgb(8 13 28))",
        "accent-line":
          "linear-gradient(90deg, transparent, rgb(96 165 250 / 0.52), transparent)"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        mono: ["Menlo", "monospace"]
      }
    }
  },
  plugins: []
};

export default config;
