export type Locale = "tr" | "en";

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const i18nNav: Record<Locale, NavItem[]> = {
  tr: [
    { label: "Ürünler", href: "/urunler" },
    { label: "Özel İmalat", href: "/ozel-uretim" },
    { label: "Sektörler", href: "/sektorler" },
    { label: "Standartlar", href: "/ihracat" },
    { label: "Teknik Bilgi", href: "/teknik-bilgi" },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "İletişim", href: "/iletisim" },
  ],
  en: [
    { label: "Products", href: "/en/products" },
    { label: "Custom Mfg", href: "/ozel-uretim" },
    { label: "Sectors", href: "/sektorler" },
    { label: "Standards", href: "/en/export" },
    { label: "About Us", href: "/hakkimizda" },
    { label: "Contact", href: "/en/contact" },
  ],
};

export const i18nDict = {
  tr: {
    siteTitle: "Emek Conta | Endüstriyel Sızdırmazlık Çözümleri",
    requestQuote: "Teklif İste",
    quoteCart: "Teklif Listem",
    technicalDatasheet: "Teknik Föy (TDS)",
    contactUs: "İletişim",
    exportBadge: "Global Teslimat",
    allProducts: "Tüm Ürünler",
    customGaskets: "Özel Conta İmalatı",
    standardsCompliance: "ASME & DIN Normlarına Tam Uyum",
    productionExperience: "Sertifikalı ve Toleranslı İmalat",
  },
  en: {
    siteTitle: "Emek Gaskets | Industrial Sealing Solutions & Gasket Manufacturing",
    requestQuote: "Request a Quote",
    quoteCart: "Quote List",
    technicalDatasheet: "Technical Datasheet (TDS)",
    contactUs: "Contact Sales",
    exportBadge: "Global Delivery",
    allProducts: "All Products",
    customGaskets: "Custom Gasket Fabrication",
    standardsCompliance: "Full ASME & DIN Standards Compliance",
    productionExperience: "Certified High Precision Manufacturing",
  },
};
