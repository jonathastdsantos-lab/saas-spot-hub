import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        foreground: "var(--text)",
        neon: "var(--acc)",
        acc: {
          DEFAULT: "var(--acc)",
          ink: "var(--acc-ink)",
          soft: "var(--acc-soft)",
          glow: "var(--acc-glow)"
        },
        ai: {
          DEFAULT: "var(--ai)",
          soft: "var(--ai-soft)",
          glow: "var(--ai-glow)"
        },
        surface: {
          DEFAULT: "var(--surface)",
          2: "var(--surface-2)",
          3: "var(--surface-3)"
        },
        border: {
          DEFAULT: "var(--border)",
          strong: "var(--border-strong)"
        },
        pos: "var(--pos)",
        neg: "var(--neg)",
        dim: "var(--text-dim)",
        muted: "var(--text-muted)"
      },
      fontFamily: {
        space: ["var(--font-space)"],
        mono: ["var(--font-mono)"],
      }
    },
  },
  plugins: [],
};
export default config;
