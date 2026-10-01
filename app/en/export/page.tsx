import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
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
  title: "International Standards & Global Gasket Export | Emek Gaskets Turkey",
  description:
    "Manufacturer of ASME B16.20, ASME B16.21, DIN EN 1514, and ISO certified industrial gaskets. Worldwide express delivery with EN 10204 3.1 Mill Test Reports (MTR).",
  alternates: {
    canonical: "https://emekconta.com/en/export",
    languages: {
      "tr-TR": "https://emekconta.com/ihracat",
      "en-US": "https://emekconta.com/en/export",
    },
  },
  openGraph: {
    title: "Emek Gaskets Global Export & ASME/DIN Sealing Standards",
    description:
      "Reliable Turkish gasket manufacturer for shipyards, refineries, and valve manufacturers worldwide.",
    url: "https://emekconta.com/en/export",
  },
};

const STANDARDS_GRID = [
  {
    standard: "ASME B16.20",
    title: "Metallic & Spiral Wound Gaskets",
    description:
      "Class 150 to Class 2500 spiral wound gaskets with inner and outer rings engineered for ASME B16.5 and B16.47 Series A/B flanges.",
    scope: "Refineries, Petrochemicals, Offshore & High-Pressure Steam",
  },
  {
    standard: "DIN EN 1514-2",
    title: "European Norm Spiral Wound Gaskets",
    description:
      "PN 10 to PN 400 spiral wound gaskets with graphite or virgin PTFE filler for European standard flanged pipeline connections.",
    scope: "European Plant Engineering, Power Stations & Chemical Industry",
  },
  {
    standard: "ASME B16.21",
    title: "Non-Metallic Flat Flange Gaskets",
    description:
      "Precision CNC cut flat gaskets from compressed aramid sheets, pure flexible graphite, and virgin/expanded PTFE.",
    scope: "Process Piping, Utilities, Cooling Water & Low-Pressure Steam",
  },
  {
    standard: "DIN EN 1514-1 & DIN 2690",
    title: "DIN Standard Non-Metallic Gaskets",
    description:
      "Flat gaskets engineered for PN 6 to PN 40 DIN flanged pipe joints in non-asbestos fiber, reinforced graphite, and elastomers.",
    scope: "Chemical Processing, Shipbuilding, Municipal & Marine Systems",
  },
  {
    standard: "EN 10204 3.1",
    title: "Material Inspection Certification (MTR)",
    description:
      "Complete chemical analysis, tensile testing, and PMI certificates for stainless steels (316L, 304, 321, Duplex) and graphite filler.",
    scope: "Total Batch Traceability & Rigorous Quality Assurance",
  },
  {
    standard: "ISPM 15 & IACS",
    title: "International Seaworthy Export Packaging",
    description:
      "Heat-treated wooden crates, fumigated Euro-pallets, and vacuum-sealed anti-corrosion barrier wrapping for safe transit.",
    scope: "Zero Damage Global Delivery via Air and Sea Freight",
  },
];

const EXPORT_FACTS = [
  { value: "25+", label: "Export Destinations" },
  { value: "100%", label: "Standard Compliance" },
  { value: "EN 10204 3.1", label: "MTR Certification" },
  { value: "48-72h", label: "Express Global Dispatch" },
];

export default function EnglishExportPage() {
  return (
    <div className="py-8 sm:py-12 bg-industrial-50 min-h-screen">
      <Container>
        <Breadcrumb
          items={[
            { label: "Home", href: "/en" },
            { label: "Export & Standards" },
          ]}
          className="mb-6"
        />

        {/* Hero Section */}
        <div className="bg-night text-white border border-industrial-800 rounded-xl p-8 sm:p-14 mb-12 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rust/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-2.5 py-1 bg-rust text-white text-[11px] font-mono font-bold uppercase tracking-wider rounded-md">
                GLOBAL MANUFACTURING & EXPORT
              </span>
              <span className="px-2.5 py-1 bg-industrial-800 text-industrial-300 text-[11px] font-mono border border-industrial-700 rounded-md">
                ASME / DIN / EN / ISO COMPLIANT
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              International Standard Industrial Gaskets & Global Supply
            </h1>

            <p className="mt-5 text-base sm:text-lg text-industrial-300 leading-relaxed">
              Emek Gaskets manufactures precision sealing components from our Istanbul facility for world maritime fleets, offshore drydocks, petrochemical refineries, and power generation facilities across 25+ countries. Every export order is supplied with EN 10204 3.1 Mill Test Reports and seaworthy packaging.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/en/contact" variant="accent" size="lg" className="rounded-lg font-semibold">
                <span>Request International RFQ</span>
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Button>

              <Link
                href="/ihracat"
                className="inline-flex items-center gap-2 px-5 py-3 bg-industrial-800 hover:bg-industrial-700 text-white text-sm font-mono font-bold rounded-lg border border-industrial-700 transition-colors"
              >
                <span>Türkçe Versiyonu İncele</span>
                <span className="text-rust">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Export Metric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 font-mono">
          {EXPORT_FACTS.map((fact, idx) => (
            <div
              key={idx}
              className="bg-white border border-industrial-200 p-6 rounded-xl text-center shadow-xs"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-rust mb-1">
                {fact.value}
              </div>
              <div className="text-xs text-industrial-600 font-medium uppercase tracking-wider">
                {fact.label}
              </div>
            </div>
          ))}
        </div>

        {/* Standards Grid */}
        <div className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold text-rust uppercase tracking-widest block mb-2">
              ENGINEERING INTEGRITY
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-night tracking-tight">
              Rigorous Compliance with Global Sealing Norms
            </h2>
            <p className="mt-3 text-sm text-industrial-600">
              Each gasket manufactured on our automated production lines adheres strictly to dimensional tolerances, winding density, and material purity defined by international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STANDARDS_GRID.map((std, idx) => (
              <div
                key={idx}
                className="bg-white border border-industrial-200 p-6 rounded-xl hover:border-rust transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-rust bg-rust/10 px-2 py-0.5 rounded">
                      {std.standard}
                    </span>
                    <CheckCircleIcon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-base font-bold text-night mb-2">
                    {std.title}
                  </h3>
                  <p className="text-xs text-industrial-600 leading-relaxed mb-4">
                    {std.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-industrial-100 text-[11px] font-mono text-industrial-400">
                  {std.scope}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Logistics and Delivery Box */}
        <div className="bg-white border border-industrial-200 rounded-xl p-8 sm:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-mono font-bold text-rust uppercase tracking-widest block mb-2">
                LOGISTICS & DELIVERY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-night tracking-tight mb-4">
                Fast Worldwide Dispatch from Istanbul
              </h2>
              <p className="text-sm text-industrial-600 leading-relaxed mb-6">
                Positioned strategically at the crossroads of Europe and Asia, we offer seamless global logistics to international seaports, shipyards, and industrial zones:
              </p>

              <div className="space-y-3.5 text-xs font-mono">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-industrial-100 flex items-center justify-center shrink-0 text-rust font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-night block">Air Courier Express (DHL / FedEx / UPS):</strong>
                    <span className="text-industrial-500">24 to 48-hour delivery across Europe, the Middle East, and North America for emergency plant shutdowns and vessel repairs.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-industrial-100 flex items-center justify-center shrink-0 text-rust font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-night block">Ocean Container Freight (Ambarlı & Tuzla Ports):</strong>
                    <span className="text-industrial-500">FCL and LCL containerized freight for shipyard drydocks, OEM bulk orders, and industrial EPC contracts.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-industrial-100 flex items-center justify-center shrink-0 text-rust font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-night block">Multi-Currency Invoicing & Flexible Incoterms:</strong>
                    <span className="text-industrial-500">Quotations provided in EUR (€), USD ($), or GBP (£) under EXW, FOB, CIF, or DAP delivery terms.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-industrial-900 text-white p-6 sm:p-8 rounded-xl border border-industrial-800">
              <h3 className="text-lg font-bold mb-2 text-white">Global Sales & Engineering Desk</h3>
              <p className="text-xs text-industrial-300 leading-relaxed mb-6">
                Contact our international engineering desk for specification review, material cross-referencing, and rapid export quotation:
              </p>

              <div className="space-y-3 text-xs font-mono mb-6">
                <div className="p-3 bg-industrial-800 border border-industrial-700 rounded-lg flex items-center justify-between">
                  <span className="text-industrial-400">Headquarters Phone:</span>
                  <a href={`tel:${companyData.phone}`} className="text-white hover:text-rust font-bold">
                    {companyData.phoneFormatted}
                  </a>
                </div>
                <div className="p-3 bg-industrial-800 border border-industrial-700 rounded-lg flex items-center justify-between">
                  <span className="text-industrial-400">Export E-mail:</span>
                  <a href={`mailto:${companyData.quoteEmail}`} className="text-rust hover:underline font-bold">
                    {companyData.quoteEmail}
                  </a>
                </div>
                <div className="p-3 bg-industrial-800 border border-industrial-700 rounded-lg flex items-center justify-between">
                  <span className="text-industrial-400">WhatsApp Export Desk:</span>
                  <a
                    href={`https://wa.me/${companyData.whatsapp.replace('+', '')}?text=${encodeURIComponent("Hello Emek Gaskets, I am inquiring about international export and gasket supply.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline font-bold"
                  >
                    {companyData.whatsappFormatted}
                  </a>
                </div>
              </div>

              <Button href="/en/contact" variant="accent" className="w-full text-center justify-center font-bold">
                Submit Export RFQ Inquiry
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
