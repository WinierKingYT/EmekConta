import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { PageHeading } from "@/components/ui/PageHeading";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { RFQForm } from "@/components/rfq/RFQForm";

export const metadata: Metadata = {
  title: "Özel Conta Üretimi | CAD Çizim ve Numuneye Göre İmalat",
  description:
    "Teknik resme, DWG/DXF çizime veya fiziki numuneye göre özel ölçü endüstriyel conta üretimi. Sıfır kalıp maliyetiyle CNC bıçak ve su jeti kesimi.",
  openGraph: {
    title: "Özel Ölçü ve Teknik Çizime Göre Conta İmalatı | Emek Conta",
    description: "CAD, DXF veya numuneye göre özel ölçü conta imalatı. Prototip ve seri üretim.",
    url: "https://emekconta.com/ozel-uretim",
  },
};

export default function CustomManufacturingPage() {
  const capabilities = [
    {
      title: "Teknik Çizime Göre Doğrudan Kesim",
      description:
        "AutoCAD (.DWG), DXF, SolidWorks (.STEP, .IGES) veya PDF formatındaki teknik çizimlerinizi doğrudan CNC tezgâhlarımıza aktarıyoruz. Kalıp bekleme süresi ve maliyeti olmaksızın milimetrenin onda biri hassasiyetinde kesim sağlıyoruz.",
      badge: "CAD/CAM Entegrasyonu",
    },
    {
      title: "Numuneden Tersine Mühendislik",
      description:
        "Elinizde teknik çizimi bulunmayan deforme olmuş veya eski contaları atölyemize ulaştırdığınızda optik ölçüm ve hassas kumpas ölçümüyle dijital CAD geometrisini çıkarıp birebir sıfır toleransla üretiyoruz.",
      badge: "Optik Ölçüm & Modelleme",
    },
    {
      title: "Kalıpsız Prototip ve Esnek Adetler",
      description:
        "Ar-Ge projeleri veya acil revizyonlar için 1 adet prototip contadan, seri üretim hatları için on binlerce adede kadar esnek imalat planlaması yapıyoruz.",
      badge: "1 Adetten Seri İmalata",
    },
    {
      title: "Zorlu Ortamlar İçin Malzeme Seçimi",
      description:
        "Akışkanınız asit, aşırı sıcak buhar (550°C), hidrolik yağ veya gıda mı? Ortam şartlarına en uygun grafit, PTFE, Viton veya klingrit hammadde seçiminde teknik danışmanlık veriyoruz.",
      badge: "Malzeme Mühendisliği",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F2EFE9] py-8 text-[#191D20] sm:py-12"><Container>
      <Breadcrumb items={[{ label: "Özel Üretim" }]} className="mb-10" />
      <PageHeading eyebrow="Emek Conta / Özel üretim" title={<>Çiziminizden,<br />tam ölçünüzde.</>} description="Standart ölçü yetmediğinde teknik resim, ölçü veya numunenizle başlayın. Malzeme seçimini ve üretim yöntemini uygulamanıza göre birlikte belirleyelim." />
      <div className="relative mb-16 aspect-[4/3] overflow-hidden rounded-xl sm:aspect-[16/7]"><Image src="/images/hero/cnc-cutting.jpg" alt="Özel formlu contaların teknik çizime göre CNC kesimi" fill priority sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" /></div>
      <div className="mb-16 grid gap-8 lg:grid-cols-3"><div><p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#A23A10]">Üretim yaklaşımımız</p><h2 className="text-3xl font-medium leading-tight tracking-tight">Her detay,<br />ihtiyacınıza göre.</h2><div className="mt-7"><Button href="#cizim-gonder" variant="accent">Çiziminizi paylaşın ↗</Button></div></div><div className="grid gap-8 sm:grid-cols-2 lg:col-span-2">{capabilities.map((capability, index) => <section key={capability.title} className="border-t border-[#191D20]/20 pt-5"><p className="mb-5 text-xs text-[#96350B]">{String(index + 1).padStart(2, "0")} / {capability.badge}</p><h3 className="mb-3 text-xl font-medium leading-snug">{capability.title}</h3><p className="text-sm leading-relaxed text-[#62635F]">{capability.description}</p></section>)}</div></div>
      <section className="mb-16 rounded-xl bg-[#191D20] p-7 text-white sm:p-10"><h2 className="mb-6 text-2xl font-medium tracking-tight">Uygulamaya uygun malzeme.</h2><p className="mb-7 max-w-xl text-sm leading-relaxed text-[#B9BCB8]">Sıcaklık, basınç ve akışkan gereksinimlerine göre farklı malzeme seçeneklerini değerlendiriyoruz.</p><ul className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-[#DD895F]">{["Saf grafit", "Asbestsiz klingrit", "EPDM", "NBR", "PTFE / ePTFE", "Viton / Silikon"].map(material => <li key={material}>{material}</li>)}</ul></section>
      <section id="cizim-gonder" className="scroll-mt-24 border-t border-[#191D20]/15 pt-10"><div className="mb-8"><p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#A23A10]">Birlikte başlayalım</p><h2 className="text-3xl font-medium tracking-tight">Özel üretim talebiniz.</h2><p className="mt-3 text-sm text-[#62635F]">Çizim, numune fotoğrafı veya ölçü bilgilerinizi paylaşın.</p></div><RFQForm /></section>
    </Container></div>
  );
}
