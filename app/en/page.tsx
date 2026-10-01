import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { enProductCategories, enProductsData } from "@/data/en/products";
import {
  ShieldCheckIcon,
  FactoryIcon,
  ClockIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  WhatsappIcon,
} from "@/components/icons/Icons";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Emek Gaskets | Industrial Sealing & Gasket Manufacturing (Since 1997)",
  description:
    "Manufacturer of ASME B16.20 spiral wound gaskets, pure graphite, non-asbestos sheets, and custom CNC cut seals for marine and heavy industry. Worldwide delivery from Istanbul.",
  alternates: {
    canonical: "https://emekconta.com/en",
    languages: {
      "tr-TR": "https://emekconta.com",
      "en-US": "https://emekconta.com/en",
    },
  },
  openGraph: {
    title: "Emek Gaskets | Industrial Sealing Solutions Since 1997",
    description:
      "Reliable Turkish gasket manufacturer serving international refineries, shipyards, and power generation facilities.",
    url: "https://emekconta.com/en",
  },
};

const TRUST_METRICS = [
  { title: "Since 1997", desc: "27+ Years Manufacturing Heritage" },
  { title: "Global Standards", desc: "ASME B16.20 & DIN EN 1514-2" },
  { title: "Custom CAD / CNC", desc: "Cut-to-Print Gasket Machining" },
  { title: "Certified Quality", desc: "EN 10204 3.1 MTR Traceability" },
  { title: "Worldwide Logistics", desc: "Express Air & Sea Freight from Istanbul" },
];

export default function EnglishHomePage() {
  return (
    <div className="flex flex-col bg-industrial-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-night text-white border-b border-industrial-800 relative overflow-hidden py-16 sm:py-24">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rust/10 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[2px] bg-rust inline-block"></span>
              <span className="text-xs font-mono font-bold tracking-widest text-rust uppercase">
                ISTANBUL GASKET MANUFACTURER • EST. 1997
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white">
              Industrial Sealing Solutions for Global Refineries & Shipyards
            </h1>

            <p className="mt-6 text-base sm:text-xl text-industrial-300 leading-relaxed max-w-2xl">
              From ASME B16.20 spiral wound gaskets to custom CNC cut non-asbestos and pure graphite seals, we provide leak-tight reliability for the most demanding high-pressure and extreme-temperature process lines worldwide.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/en/products" variant="accent" size="lg" className="rounded-lg font-semibold">
                <span>View Product Catalog</span>
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Button>

              <Button
                href="/en/contact"
                variant="outline"
                size="lg"
                className="rounded-lg font-mono text-white border-industrial-700 hover:bg-industrial-850"
              >
                <span>Request International RFQ</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Pillar Strip */}
      <section className="bg-white border-b border-industrial-200 py-6 font-mono text-xs">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {TRUST_METRICS.map((metric, i) => (
              <div key={i} className="border-l-2 border-rust pl-3.5">
                <div className="font-bold text-night text-sm">{metric.title}</div>
                <div className="text-industrial-500 text-[11px] mt-0.5">{metric.desc}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Core Product Categories Grid */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-rust uppercase tracking-widest block mb-1">
                ENGINEERED PRODUCT PORTFOLIO
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-night tracking-tight">
                Industrial Sealing Segments
              </h2>
            </div>

            <Link
              href="/en/products"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-rust hover:text-rust-dark transition-colors uppercase tracking-wider"
            >
              <span>Explore All 12 Products</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enProductCategories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white border border-industrial-200 p-6 rounded-xl hover:border-rust hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-[11px] font-mono text-rust font-bold uppercase mb-2">
                    {cat.itemCountEstimated}
                  </div>
                  <h3 className="text-lg font-bold text-night mb-2">{cat.name}</h3>
                  <p className="text-xs text-industrial-600 leading-relaxed mb-4">
                    {cat.description}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    {cat.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-industrial-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-rust" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/en/products"
                  className="pt-4 border-t border-industrial-100 inline-flex items-center justify-between text-xs font-mono font-bold text-night hover:text-rust transition-colors"
                >
                  <span>View Specifications</span>
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Export & International Standards Banner */}
      <section className="pb-16">
        <Container>
          <div className="bg-industrial-900 text-white rounded-xl p-8 sm:p-12 border border-industrial-800 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold text-rust uppercase tracking-widest block mb-2">
                GLOBAL SUPPLY CAPABILITY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
                ASME, DIN, and ISO Sealing Compliance for Global EPCs
              </h2>
              <p className="text-xs sm:text-sm text-industrial-300 leading-relaxed">
                We provide complete EN 10204 3.1 Material Test Reports, PMI verification, multi-currency invoicing (EUR/USD/GBP), and rapid express air dispatch to all world seaports and industrial centers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <Button href="/en/export" variant="accent" size="lg" className="w-full sm:w-auto rounded-lg font-semibold">
                Explore Export Standards
              </Button>
              <Button
                href="/en/contact"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-lg font-mono text-white border-industrial-700 hover:bg-industrial-800"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
