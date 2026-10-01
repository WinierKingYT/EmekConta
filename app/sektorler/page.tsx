import React from "react";
import { PageHeading } from "@/components/ui/PageHeading";
import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { sectorsData } from "@/data/sectors";
import { ArrowRightIcon, ShieldCheckIcon } from "@/components/icons/Icons";

export const metadata: Metadata = {
  title: "Hizmet Verilen Sektörler | Endüstriyel Sızdırmazlık",
  description:
    "Denizcilik, enerji santralleri, demir çelik, petrokimya, makine OEM, gıda ve doğalgaz sektörleri için özel sızdırmazlık ve conta çözümleri.",
  openGraph: {
    title: "Endüstriyel Sektör Çözümleri | Emek Conta",
    description: "Sanayi ve denizcilik için sektörel flanş ve ekipman sızdırmazlığı.",
    url: "https://emekconta.com/sektorler",
  },
};

export default function SectorsPage() {
  return (
    <div className="min-h-screen bg-[#F2EFE9] py-8 text-[#191D20] sm:py-12"><Container>
      <Breadcrumb items={[{ label: "Sektörler" }]} className="mb-10" />
      <PageHeading eyebrow="Emek Conta / Sektörel çözümler" title={<>Farklı şartlar.<br />Aynı hassasiyet.</>} description="Her sektörün sıcaklık, basınç ve akışkan gereksinimleri farklıdır. Uygulama alanınıza uygun sızdırmazlık ürünlerini ve üretim çözümlerini keşfedin." />
      <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">{sectorsData.map((sector, index) => <Link key={sector.id} href={`/sektorler/${sector.slug}`} className="group flex items-start gap-5 border-t border-[#191D20]/20 py-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rust"><span className="mt-1 text-xs text-[#96350B]">{String(index + 1).padStart(2, "0")}</span><div className="flex-1"><h2 className="text-2xl font-medium tracking-tight group-hover:text-[#96350B]">{sector.name}</h2><p className="mt-4 text-sm leading-relaxed text-[#62635F]">{sector.shortDescription}</p><p className="mt-5 text-[11px] text-[#62635F]">{sector.standards.join(" / ")}</p><span className="mt-6 inline-flex items-center gap-5 text-sm font-medium">Çözümleri incele <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div></Link>)}</div>
    </Container></div>
  );
}
