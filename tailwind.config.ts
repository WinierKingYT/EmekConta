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
          ember: "#e85922",   // Kor pası (Vurgulu parıltı & hover)
          hot: "#cf4b14",     // Sıcak döküm pası
          DEFAULT: "#b7410e", // Pas Rengi (Ana Ton: Başlıklar, yan menüler, ikonlar)
          forge: "#96350b",   // Dövme pası
          deep: "#702504",    // Derin oksit
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
          deep: "#0d141e",    // En derin dökümhane tabanı
          DEFAULT: "#1a2536", // Gece Mavisi (Kontrast: Ana metinler, koyu arka planlar)
          dark: "#121b27",
          light: "#24334a",
          surface: "#15202e", // İşlenmiş metal panel yüzeyi
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
      boxShadow: {
        "glow-rust-sm": "0 0 10px -2px rgba(183, 65, 14, 0.25)",
        "glow-rust": "0 0 20px -3px rgba(183, 65, 14, 0.35)",
        "glow-rust-lg": "0 0 35px -5px rgba(183, 65, 14, 0.45)",
        "inner-bevel": "inset 0 1px 0 rgba(255, 255, 255, 0.22)",
        "inner-bevel-dark": "inset 0 1px 0 rgba(255, 255, 255, 0.08)",
        "machined": "0 4px 20px -2px rgba(18, 27, 39, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
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
