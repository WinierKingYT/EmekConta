import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";
import { companyData } from "@/data/company";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const viewport: Viewport = {
  themeColor: "#17191C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://emekconta.com"),
  title: {
    default: "Emek Conta | Endüstriyel Sızdırmazlık Çözümleri (1997'den Beri)",
    template: "%s | Emek Conta",
  },
  description:
    "1997'den beri sanayi ve denizcilik için güvenilir sızdırmazlık çözümleri. Spiral sarımlı contalar, saf grafit, klingrit, kauçuk ve teknik resme göre özel conta üretimi.",
  keywords: [
    "emek conta",
    "endüstriyel conta",
    "spiral sarımlı conta",
    "grafit conta",
    "klingrit conta",
    "özel conta üretimi",
    "gemi contası",
    "sızdırmazlık elemanları",
    "flanş contası",
    "İstanbul conta imalatı",
  ],
  authors: [{ name: "Emek Conta Sanayi ve Ticaret" }],
  creator: "Emek Conta",
  publisher: "Emek Conta",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://emekconta.com",
    title: "Emek Conta | Endüstriyel Sızdırmazlık Çözümleri",
    description:
      "Standart sızdırmazlık ürünlerinden teknik resim ve numuneye göre özel üretime kadar sanayi ve denizcilik uygulamaları için güvenilir çözümler.",
    siteName: "Emek Conta",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Emek Conta",
    legalName: "Emek Conta Sanayi ve Ticaret",
    url: "https://emekconta.com",
    foundingDate: "1997",
    description:
      "Sanayi ve denizcilik sektörleri için standart ve özel üretim endüstriyel conta ve sızdırmazlık çözümleri imalatçısı.",
    telephone: companyData.phone,
    email: companyData.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "İstanbul",
      addressCountry: "TR",
    },
  };

  return (
    <html lang="tr" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-industrial-50 text-industrial-900 selection:bg-steel-blue selection:text-white">
        <Header />
        <main className="flex-1 w-full" id="main-content">
          {children}
        </main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
