import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { DistributorApplicationForm } from "@/components/distributor/DistributorApplicationForm";
import { companyData } from "@/data/company";
import {
  ShieldCheckIcon,
  FactoryIcon,
  ClockIcon,
  PhoneIcon,
  WhatsappIcon,
} from "@/components/icons/Icons";

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
    <div className="py-8 sm:py-12 bg-industrial-50 min-h-screen">
      <Container size="narrow">
        <Breadcrumb
          items={[{ label: "Bayi & Toptancı Başvurusu" }]}
          className="mb-6"
        />

        {/* Page Header */}
        <div className="bg-white border border-industrial-200 rounded-xl p-6 sm:p-10 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-rust inline-block"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-rust">
              B2B DAĞITIM & BAYİLİK AĞI
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-night tracking-tight">
            Yetkili Bayi & Toptancı Başvurusu
          </h1>
          <p className="mt-3 text-sm sm:text-base text-industrial-600 leading-relaxed">
            Bölgenizdeki sanayi tesislerine, tersanelere ve bakım atölyelerine sektör lideri Emek Conta ürünlerini ulaştırın. Yüksek toptan iskonto oranları, doğrudan CAD desteği ve hızlı imalat kapasitemiz ile işinizi büyütün.
          </p>

          {/* 3 Pillars Grid */}
          <div className="mt-6 pt-6 border-t border-industrial-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-3 bg-industrial-50 border border-industrial-200 rounded-lg">
              <span className="text-[10px] text-rust font-bold block mb-0.5">01. TOPTAN İSKONTO</span>
              <span className="font-semibold text-industrial-900">Rekabetçi Karlılık Oranları</span>
            </div>

            <div className="p-3 bg-industrial-50 border border-industrial-200 rounded-lg">
              <span className="text-[10px] text-rust font-bold block mb-0.5">02. CAD & MÜHENDİSLİK</span>
              <span className="font-semibold text-industrial-900">Özel Çizim ve Prototip Desteği</span>
            </div>

            <div className="p-3 bg-industrial-50 border border-industrial-200 rounded-lg">
              <span className="text-[10px] text-rust font-bold block mb-0.5">03. HIZLI SEVKİYAT</span>
              <span className="font-semibold text-industrial-900">Merkez Depodan Aynı Gün Kargo</span>
            </div>
          </div>
        </div>

        {/* The Form */}
        <DistributorApplicationForm />
      </Container>
    </div>
  );
}
