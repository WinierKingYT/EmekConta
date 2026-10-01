import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoryGrid } from "@/components/home/CategoryGrid";



export const metadata: Metadata = {
  title: "Emek Gaskets | Industrial Sealing & Gasket Manufacturing",
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
    title: "Emek Gaskets | Industrial Sealing Solutions",
    description:
      "Reliable Turkish gasket manufacturer serving international refineries, shipyards, and power generation facilities.",
    url: "https://emekconta.com/en",
  },
};



export default function EnglishHomePage() {
  return (
    <div className="min-h-screen bg-[#F2EFE9] text-[#191D20]">
      <HeroSection language="en" /><CategoryGrid language="en" />
      <section className="bg-[#191D20] py-20 text-white sm:py-28"><Container><div className="grid items-center gap-12 lg:grid-cols-2"><div><p className="mb-6 text-[11px] uppercase tracking-[0.2em] text-[#DD895F]">02 / Custom manufacturing</p><h2 className="text-4xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-5xl">Beyond standard.<br /><span className="text-[#DD895F]">Made to your drawing.</span></h2><p className="mt-6 max-w-md text-base leading-relaxed text-[#B9BCB8]">Every application has its own requirements. Share a technical drawing, dimensions or a sample, and let us discuss the right material and manufacturing method.</p><div className="mt-8"><Button href="/en/contact" variant="accent" size="lg">Discuss your project ↗</Button></div></div><div className="relative aspect-[4/3] overflow-hidden rounded-xl"><Image src="/images/hero/cnc-cutting.jpg" alt="CNC cutting of custom-shaped gasket sheets" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div></div></Container></section>
      <section className="py-20 sm:py-24"><Container><div className="grid gap-8 lg:grid-cols-2"><div><p className="mb-5 text-[11px] uppercase tracking-[0.2em] text-[#A23A10]">03 / International supply</p><h2 className="text-4xl font-medium leading-tight tracking-[-0.045em]">From Istanbul.<br />For your application.</h2></div><div><p className="mb-7 max-w-md text-base leading-relaxed text-[#62635F]">Explore ASME, DIN and EN manufacturing standards, material documentation and international delivery options for industrial and marine projects.</p><Link href="/en/export" className="inline-block border-b border-[#191D20]/30 pb-2 text-sm font-medium hover:text-[#96350B]">Explore export capabilities ↗</Link></div></div></Container></section>
      <section className="bg-[#B7410E] py-16 text-white"><Container className="flex flex-col justify-between gap-7 lg:flex-row lg:items-center"><h2 className="text-3xl font-medium tracking-tight sm:text-4xl">A drawing. A requirement.<br />A new solution.</h2><Button href="/en/contact" variant="primary" size="lg">Request a quotation ↗</Button></Container></section>
    </div>
  );
}
