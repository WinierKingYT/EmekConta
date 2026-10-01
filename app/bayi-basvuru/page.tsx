import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { DistributorApplicationForm } from "@/components/distributor/DistributorApplicationForm";
import { PageHeading } from "@/components/ui/PageHeading";


export const metadata: Metadata = {
  title: "Bayilik & Toptancı Başvurusu | Emek Conta B2B Satış Ağı",
  description:
    "Endüstriyel hırdavatçılar, vana-boru toptancıları ve gemi tedarikçileri için Emek Conta bölge bayiliği ve yetkili toptancı başvuru formu.",
  openGraph: {
    title: "Emek Conta Bölge Bayiliği ve Toptan Dağıtım Başvurusu",
    description:
      "Sanayi ve denizcilik sızdırmazlık çözümlerinde güvenilir üretici Emek Conta yetkili satıcı ağına katılın.",
    url: "https://emekconta.com/bayi-basvuru",
  },
};

export default function DistributorPage() {
  return (
    <div className="min-h-screen bg-[#F2EFE9] py-8 text-[#191D20] sm:py-12"><Container>
      <Breadcrumb items={[{ label: "Bayi & Toptancı Başvurusu" }]} className="mb-10" />
      <PageHeading eyebrow="Emek Conta / İş ortaklığı" title={<>Birlikte üretelim.<br />Birlikte büyüyelim.</>} description="Sanayi ve denizcilik için sızdırmazlık ürünlerini müşterilerinize ulaştırın. Bayilik ve toptan tedarik ihtiyaçlarınızı birlikte değerlendirelim." />
      <section className="mb-12 grid gap-8 rounded-xl bg-[#191D20] p-7 text-white sm:p-10 md:grid-cols-3">{[{ title: "Toptan tedarik", description: "Ürün gamınızı ve ticari ihtiyaçlarınızı paylaşın; iş birliği koşullarını görüşelim." }, { title: "Teknik üretim desteği", description: "Standart ürünlerden çizime göre özel üretime uzanan çözümler." }, { title: "Sevkiyat planlaması", description: "Miktar ve teslimat gereksinimlerinize uygun tedarik planı." }].map((item,index) => <div key={item.title} className="border-t border-white/20 pt-5"><span className="text-xs text-[#DD895F]">{String(index + 1).padStart(2,"0")}</span><h2 className="mb-3 mt-6 text-xl font-medium">{item.title}</h2><p className="text-sm leading-relaxed text-[#B9BCB8]">{item.description}</p></div>)}</section>
      <section><h2 className="mb-4 text-3xl font-medium tracking-tight">Firmanızı tanıyalım.</h2><p className="mb-8 text-sm text-[#62635F]">Faaliyet alanınızı, ürün ihtiyaçlarınızı ve iletişim bilgilerinizi paylaşın.</p><DistributorApplicationForm /></section>
    </Container></div>
  );
}
