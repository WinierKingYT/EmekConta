import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { RFQForm } from "@/components/rfq/RFQForm";
import {
  RulerIcon,
  FactoryIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  UploadCloudIcon,
  DocumentTextIcon,
} from "@/components/icons/Icons";

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
    <div className="py-8 sm:py-12 bg-industrial-50 min-h-screen">
      <Container>
        {/* Breadcrumb */}
        <Breadcrumb
          items={[{ label: "Özel Üretim" }]}
          className="mb-6"
        />

        {/* Hero Section */}
        <div className="bg-industrial-900 text-white border border-industrial-800 p-8 sm:p-12 lg:p-16 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-industrial-800 border border-industrial-700 text-xs font-mono text-industrial-300 mb-6 uppercase tracking-wider">
              <span className="w-2 h-2 bg-rust rounded-full" />
              ÖZEL İMALAT & NUMUNEYE GÖRE KESİM
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Teknik Çiziminizi Gönderin. <br />
              <span className="text-rust">Üretim Çözümünü</span> Birlikte Belirleyelim.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-industrial-300 leading-relaxed">
              Katalog standartları tesisinizdeki özel ölçülere uymadığında, Emek Conta'nın 1997'den gelen kalıpçılık ve CNC kesim tecrübesi devreye girer. Teknik çizim, ölçü tablosu veya numune üzerinden en zorlu geometrileri dahi hızla üretiyoruz.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono text-industrial-300">
              <span className="flex items-center gap-1.5 bg-industrial-850 px-3 py-1.5 border border-industrial-700">
                <CheckCircleIcon className="w-4 h-4 text-emerald-400" />
                Sıfır Kalıp Maliyeti
              </span>
              <span className="flex items-center gap-1.5 bg-industrial-850 px-3 py-1.5 border border-industrial-700">
                <CheckCircleIcon className="w-4 h-4 text-emerald-400" />
                Hassas CNC Bıçak & Su Jeti
              </span>
              <span className="flex items-center gap-1.5 bg-industrial-850 px-3 py-1.5 border border-industrial-700">
                <CheckCircleIcon className="w-4 h-4 text-emerald-400" />
                Aynı Gün Numune Kesimi
              </span>
            </div>
          </div>
        </div>

        {/* 4 Capabilities Grid */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-night mb-6">
            Özel İmalat Kabiliyetlerimiz
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-white border border-industrial-200 p-6 sm:p-8 flex flex-col justify-between hover:border-rust hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-rust">
                      0{idx + 1}. KABİLİYET
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-rust-subtle text-rust border border-rust-border uppercase font-medium">
                      {cap.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-night mb-2">
                    {cap.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-industrial-600 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supported Material Library */}
        <div className="bg-white border border-industrial-200 p-6 sm:p-10 mb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-night mb-4">
            Özel Kesimde Kullanılan Malzemeler
          </h2>
          <p className="text-xs sm:text-sm text-industrial-600 mb-6 max-w-3xl">
            Tüm malzemeler doğrudan fabrika stoklarımızda mevcut olup, talep ettiğiniz et kalınlığında (0.5 mm'den 50 mm'ye kadar) derhal işleme alınır:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center text-xs font-mono">
            <div className="p-3 bg-industrial-50 border border-industrial-200">
              <span className="font-bold text-night block">Saf Grafit</span>
              <span className="text-[10px] text-industrial-500">Telli / Düz</span>
            </div>
            <div className="p-3 bg-industrial-50 border border-industrial-200">
              <span className="font-bold text-night block">Asbestsiz Klingrit</span>
              <span className="text-[10px] text-industrial-500">Aramid / NBR</span>
            </div>
            <div className="p-3 bg-industrial-50 border border-industrial-200">
              <span className="font-bold text-night block">EPDM Kauçuk</span>
              <span className="text-[10px] text-industrial-500">Su & Ozon</span>
            </div>
            <div className="p-3 bg-industrial-50 border border-industrial-200">
              <span className="font-bold text-night block">NBR Kauçuk</span>
              <span className="text-[10px] text-industrial-500">Yağ & Yakıt</span>
            </div>
            <div className="p-3 bg-industrial-50 border border-industrial-200">
              <span className="font-bold text-night block">Saf PTFE / ePTFE</span>
              <span className="text-[10px] text-industrial-500">Asit & Kimya</span>
            </div>
            <div className="p-3 bg-industrial-50 border border-industrial-200">
              <span className="font-bold text-night block">Viton / Silikon</span>
              <span className="text-[10px] text-industrial-500">Yüksek Isı / Gıda</span>
            </div>
          </div>
        </div>

        {/* Dedicated RFQ Section */}
        <div id="cizim-gonder" className="scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono font-bold text-rust tracking-widest uppercase block mb-1">
              DOĞRUDAN ÇİZİM İLETİN
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-industrial-900 tracking-tight">
              Özel Üretim Teklif Formu
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-industrial-600">
              Çiziminizi yükleyin veya ölçüleri girin; teknik ekibimiz tolerans kontrolü yaparak teklifinizi hazırlasın.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <RFQForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
