import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          950: "#0F1113",
          900: "#17191C", // Main graphite/coal
          850: "#1E2226",
          800: "#272C32",
          700: "#3E4651",
          600: "#5A6575",
          500: "#758396",
          400: "#98A4B5",
          300: "#BDC7D4",
          200: "#DDE3EB",
          100: "#EEF1F5",
          50: "#F5F5F2",  // Off-white surface
        },
        steel: {
          blue: "#0284C7",
          darkblue: "#0369A1",
          light: "#E0F2FE",
        },
        accent: {
          DEFAULT: "#0284C7",
          hover: "#0369A1",
          amber: "#D97706",
          subtle: "#F0F9FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        "screen-corporate": "1360px",
      },
    },
  },
  plugins: [],
};
export default config;
