import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { EnglishContactForm } from "@/components/en/EnglishContactForm";
import { companyData } from "@/data/company";
import { PageHeading } from "@/components/ui/PageHeading";

export const metadata: Metadata = {
  title: "Contact & International RFQ | Emek Gaskets Turkey",
  description:
    "Request an international quotation for ASME B16.20 and DIN gaskets. Direct engineering support and worldwide delivery from Istanbul.",
  alternates: {
    canonical: "https://emekconta.com/en/contact",
    languages: {
      "tr-TR": "https://emekconta.com/teklif-iste",
      "en-US": "https://emekconta.com/en/contact",
    },
  },
  openGraph: {
    title: "Emek Gaskets Global Contact & RFQ Desk",
    description: "Submit CAD drawings or specifications for rapid quotation and export dispatch.",
    url: "https://emekconta.com/en/contact",
  },
};

export default function EnglishContactPage({
  searchParams,
}: {
  searchParams: { product?: string };
}) {
  return (
    <div className="min-h-screen bg-[#F2EFE9] py-8 text-[#191D20] sm:py-12"><Container>
      <Breadcrumb language="en" items={[{label:"Contact & quotation"}]} className="mb-10" />
      <PageHeading eyebrow="Emek Gaskets / International inquiry" title={<>Tell us what you need.<br />Let's find the solution.</>} description="Share your product requirements, dimensions and operating conditions. Add a technical drawing or sample photo to help us prepare your quotation." />
      <EnglishContactForm defaultProduct={searchParams.product} />
      <section className="mt-14 grid gap-8 border-t border-[#191D20]/15 pt-8 md:grid-cols-3"><div><h2 className="mb-4 text-xl font-medium">Speak to our team</h2><a href={`tel:${companyData.phone}`} className="text-sm text-[#96350B]">{companyData.phoneFormatted}</a></div><div><h2 className="mb-4 text-xl font-medium">Send your requirements</h2><a href={`mailto:${companyData.quoteEmail}`} className="break-words text-sm text-[#96350B]">{companyData.quoteEmail}</a></div><div><h2 className="mb-4 text-xl font-medium">Visit our office</h2><p className="text-sm leading-relaxed text-[#62635F]">{companyData.locations[0].address}<br />{companyData.locations[0].district}, {companyData.locations[0].city}, Turkey</p></div></section>
    </Container></div>
  );
}
