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
        background: "#0A0A0C",
        foreground: "#F5F5F7",
        neon: "#C8FF3E"
      },
      fontFamily: {
        space: ["var(--font-space)"],
        mono: ["var(--font-mono)"],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
