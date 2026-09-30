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
        // Brand Palette (Emek Conta Kurumsal Renk Sistemi)
        rust: {
          DEFAULT: "#b7410e", // Pas Rengi (Ana Ton: Başlıklar, yan menüler, ikonlar)
          dark: "#96350b",
          light: "#d2521c",
          subtle: "#fef3ee",
          border: "#fad5c5",
        },
        brick: {
          DEFAULT: "#c04657", // Tuğla Kırmızısı (Vurgu/CTA: Butonlar, dikkat çekmesi gereken linkler)
          hover: "#a63a49",
          dark: "#8e2f3d",
          light: "#d45869",
          subtle: "#fdf2f4",
        },
        night: {
          DEFAULT: "#1a2536", // Gece Mavisi (Kontrast: Ana metinler, koyu arka planlar)
          dark: "#121b27",
          light: "#24334a",
          border: "#2e3f59",
        },
        // Mapped industrial scales
        industrial: {
          950: "#121b27",
          900: "#1a2536", // Gece Mavisi (Kontrast Koyu Zemin)
          850: "#223044",
          800: "#2a3c54",
          700: "#3d516e",
          600: "#556a8a",
          500: "#7084a5",
          400: "#92a4bf",
          300: "#b9c7db",
          200: "#d9e2ee",
          100: "#ebf1f7",
          50: "#f4f6f8",  // Açık Gri-Mavi (Temiz & ferah site arka planı)
        },
        // Backward-compatible semantic bindings mapped to new brand palette
        steel: {
          blue: "#b7410e",     // Pas Rengi (Ana Ton)
          darkblue: "#96350b", // Koyu Pas
          light: "#fef3ee",    // Açık Pas Zemin
        },
        accent: {
          DEFAULT: "#c04657",  // Tuğla Kırmızısı (Vurgu/CTA)
          hover: "#a63a49",    // Koyu Tuğla
          amber: "#b7410e",    // Pas Rengi
          subtle: "#fdf2f4",   // Açık Tuğla
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
