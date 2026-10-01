import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { RFQForm } from "@/components/rfq/RFQForm";
import { PageHeading } from "@/components/ui/PageHeading";
import { ContactChannels } from "@/components/contact/ContactChannels";

export const metadata: Metadata = {
  title: "Teknik Teklif İste | Endüstriyel Sızdırmazlık RFQ",
  description:
    "Teknik çizim (CAD/DWG/PDF), ölçü veya numuneye göre endüstriyel conta teklifi alın. ASME, DIN flanş contaları ve özel üretim sızdırmazlık elemanları.",
  openGraph: {
    title: "Teknik Teklif İste | Emek Conta",
    description: "CAD, DXF veya numuneye göre conta teklifi isteyin. Mühendislik analizi ve aynı gün teklif.",
    url: "https://emekconta.com/teklif-iste",
  },
};

export default function QuotePage({
  searchParams,
}: {
  searchParams: { urun?: string; kategori?: string };
}) {
  return (
    <div className="min-h-screen bg-[#F2EFE9] py-8 text-[#191D20] sm:py-12"><Container>
      <Breadcrumb items={[{ label: "Teklif İste" }]} className="mb-10" />
      <PageHeading eyebrow="Emek Conta / Teknik teklif" title={<>İhtiyacınızı anlatın.<br />Çözümü belirleyelim.</>} description="Ürününüzü, ölçüleri ve çalışma şartlarını paylaşın. Teknik çizim veya numune fotoğrafı ekleyerek talebinizi detaylandırabilirsiniz." />
      <RFQForm defaultProduct={searchParams.urun} defaultCategory={searchParams.kategori} />
      <section className="mt-14"><h2 className="mb-8 text-2xl font-medium tracking-tight">Doğrudan görüşmeyi tercih ederseniz.</h2><ContactChannels /></section>
    </Container></div>
  );
}
