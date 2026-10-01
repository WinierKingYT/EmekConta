import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { PageHeading } from "@/components/ui/PageHeading";
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
    <div className="min-h-screen bg-[#F2EFE9] py-8 text-[#191D20] sm:py-12">
      <Container>
        <Breadcrumb language="en" items={[{ label: "Export & Standards" }]} className="mb-10" />
        <div className="grid gap-10 pb-14 lg:grid-cols-2 lg:items-center">
          <div><PageHeading eyebrow="Emek Gaskets / International supply" title={<>Made in Istanbul.<br />Connected worldwide.</>} description="Industrial sealing products for maritime, energy and process industries. Discuss your standards, documentation and delivery requirements with our export team." /><Button href="/en/contact" variant="accent" size="lg">Discuss your export project <span className="ml-5" aria-hidden="true">↗</span></Button></div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#EAE7E1]"><Image src="/images/hero/hero-slide-2.webp" alt="Industrial gasket sheets and precision sealing components" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div>
        </div>
        <dl className="grid grid-cols-2 gap-8 border-y border-[#191D20]/15 py-10 lg:grid-cols-4">{EXPORT_FACTS.map(fact => <div key={fact.label}><dd className="mb-3 text-2xl font-medium tracking-tight text-[#96350B] sm:text-3xl">{fact.value}</dd><dt className="text-xs text-[#62635F]">{fact.label}</dt></div>)}</dl>
        <section className="py-16 sm:py-24"><p className="mb-5 text-[11px] uppercase tracking-[0.2em] text-[#96350B]">01 / Standards & documentation</p><h2 className="mb-10 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">A shared language for industrial precision.</h2><div className="grid gap-x-12 md:grid-cols-2">{STANDARDS_GRID.map((standard,index) => <article key={standard.standard} className="border-t border-[#191D20]/15 py-8"><div className="mb-5 flex justify-between text-xs text-[#96350B]"><span>{standard.standard}</span><span className="text-[#62635F]">{String(index+1).padStart(2,"0")}</span></div><h3 className="mb-3 text-xl font-medium">{standard.title}</h3><p className="text-sm leading-relaxed text-[#62635F]">{standard.description}</p><p className="mt-5 text-xs leading-relaxed text-[#62635F]">{standard.scope}</p></article>)}</div></section>
      </Container>
      <section className="bg-[#191D20] py-16 text-white sm:py-24"><Container className="grid gap-12 lg:grid-cols-2"><div><p className="mb-5 text-[11px] uppercase tracking-[0.2em] text-[#DD895F]">02 / Logistics & delivery</p><h2 className="mb-6 text-3xl font-medium tracking-tight sm:text-4xl">From our workshop<br />to your operation.</h2><p className="max-w-lg text-sm leading-relaxed text-[#B9BCB8]">Air courier and ocean freight options from Istanbul. Share your destination, quantity and required delivery date so our team can prepare a suitable quotation.</p></div><div><ul className="mb-8 divide-y divide-white/15 text-sm">{["Air courier for urgent maintenance requirements", "Ocean freight for bulk and project orders", "EUR, USD or GBP quotations", "EXW, FOB, CIF or DAP delivery terms"].map(item => <li key={item} className="py-4">{item}</li>)}</ul><a href={`mailto:${companyData.quoteEmail}`} className="mb-6 inline-block text-lg text-[#DD895F] hover:underline break-all">{companyData.quoteEmail}</a><div><Button href="/en/contact" variant="accent" size="lg">Request an export quote <span className="ml-5" aria-hidden="true">↗</span></Button></div></div></Container></section>
    </div>
  );
}
