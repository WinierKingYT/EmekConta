import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Talebi Gönder",
      description:
        "Teknik çizim (CAD, PDF), net ölçüler veya fiziki numuneyi kargo/elden ulaştırın. Çalışma sıcaklığı, basınç ve akışkan bilgisini belirtin.",
      detail: "DWG / DXF / PDF / Numune Kabulü",
    },
    {
      step: "02",
      title: "Teknik İnceleme",
      description:
        "Mühendislik ekibimiz akışkan ve tolerans analizini yapar; optimum malzeme (grafit, spiral, klingrit, kauçuk) ve imalat yöntemini belirleyerek teklif sunar.",
      detail: "Aynı Gün Fiyat & Teslim Süresi",
    },
    {
      step: "03",
      title: "Hassas Üretim",
      description:
        "Onaylanan teknik spesifikasyonlara göre CNC bıçak kesim, helisel spiral sarım veya pres tezgâhlarımızda mikron düzeyinde hassasiyetle imalat gerçekleştirilir.",
      detail: "Sıfır Kalıp Maliyeti & Kalite Kontrol",
    },
    {
      step: "04",
      title: "Teslimat & Sevk",
      description:
        "Ölçü ve et kalınlığı kontrolleri tamamlanan ürünler etiketlenir, koruyucu ambalajla paketlenir ve İstanbul içi veya tüm Türkiye/uluslararası sevk edilir.",
      detail: "İkitelli / Karaköy Teslim veya Kargo",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-industrial-200">
      <Container>
        <SectionHeader
          tag="İŞ AKIŞI"
          title="Nasıl Çalışıyoruz?"
          description="Teknik resimden montaja hazır ürüne kadar şeffaf, hızlı ve doğrulanabilir 4 aşamalı üretim süreci."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 bg-industrial-50/60 border border-industrial-200/70 border-t-2 border-t-night group hover:border-t-rust hover:bg-industrial-100/60 rounded-lg transition-all duration-200"
            >
              <div>
                {/* Step number in bold monospace editorial font */}
                <div className="font-mono text-3xl sm:text-4xl font-extrabold text-rust tracking-tighter mb-4">
                  {item.step}
                </div>

                <h3 className="text-lg font-bold text-night group-hover:text-rust transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-industrial-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-industrial-200/80 font-mono text-[11px] text-industrial-500 font-medium">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
