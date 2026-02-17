// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#E4E4E4", // The light grey/beige in your image
        foreground: "#211E1E",
        accent: "#32CD32",     // Your Terminal Green
      },
      fontFamily: {
        // You'll need to import these in your layout.tsx via Google Fonts
        pixel: ["'VT323'", "monospace"], 
        heading: ["'Inter'", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;