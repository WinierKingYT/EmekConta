"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  RulerIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  WhatsappIcon,
} from "@/components/icons/Icons";
import { companyData } from "@/data/company";

type FluidType = "steam" | "hydrocarbon" | "chemical" | "water" | "food";
type TempRange = "low" | "mid" | "high";
type PressureClass = "pn16" | "pn40" | "pn100";

interface Recommendation {
  title: string;
  standards: string;
  material: string;
  maxTemp: string;
  maxPressure: string;
  features: string[];
  engineerNote: string;
  slug: string;
}

export function MaterialSelectorWidget() {
  const [fluid, setFluid] = useState<FluidType>("steam");
  const [temp, setTemp] = useState<TempRange>("high");
  const [pressure, setPressure] = useState<PressureClass>("pn100");

  const recommendation: Recommendation = useMemo(() => {
    // 1. Steam / Extreme High Temp / High Pressure -> Spiral Sarımlı Conta
    if (fluid === "steam" || temp === "high" || pressure === "pn100") {
      return {
        title: "Spiral Sarımlı Flanş Contası (316L + Saf Grafit)",
        standards: "ASME B16.20 / DIN EN 1514-2",
        material: "AISI 316L Metal Şerit + %99.8 Saf Genleştirilmiş Grafit Dolgu",
        maxTemp: "-200°C ile +550°C",
        maxPressure: "PN10 - PN400 (Class 150 - 2500)",
        features: [
          "Termal şoklara ve ani basınç dalgalanmalarına karşı yaylanma (recovery) kabiliyeti",
          "Dış merkezleme halkası ile flanş cıvatalarına mükemmel merkezleme",
          "Kızgın buhar, kızgın yağ ve petrokimya hatlarında sıfır kaçak güvencesi",
        ],
        engineerNote:
          "Buhar hatlarında iç yüksüklü (inner ring) model tercih edilmelidir; buhar türbülansına karşı sarım stabilitesi korunur.",
        slug: "spiral-sarimli-contalar",
      };
    }

    // 2. Chemical / Aggressive Acid -> Pure PTFE / ePTFE
    if (fluid === "chemical") {
      return {
        title: "Saf Virgin PTFE (Teflon) / ePTFE Zarf Conta",
        standards: "DIN EN 1514-1 / FDA 21 CFR 177.1550",
        material: "Saf Virgin PTFE / Mikro Gözenekli ePTFE Genleşmiş Şerit",
        maxTemp: "-200°C ile +260°C",
        maxPressure: "PN16 - PN40",
        features: [
          "pH 0-14 aralığındaki tüm asit, baz, çözücü ve agresif kimyasallara tam bağışıklık",
          "Yapışmaz yüzey, yaşlanmaz ve zamanla gevrekleşmez",
          "Düşük cıvata torku ile kırılgan plastik ve cam emaye flanşlarda tam sızdırmazlık",
        ],
        engineerNote:
          "200°C üzeri sıcaklıklarda PTFE sünmesini (cold-flow) önlemek için metal takviyeli veya zarflı PTFE tipi seçilmelidir.",
        slug: "ptfe-teflon-urunler",
      };
    }

    // 3. Hydrocarbons / Fuel / Oil -> Klingrit / NBR / Viton
    if (fluid === "hydrocarbon") {
      if (temp === "mid") {
        return {
          title: "Telli Saf Grafit / Yüksek Sıcaklık Levha Conta",
          standards: "DIN EN 1514-1 / DIN 28091-4",
          material: "0.1 mm Delikli 316L Sac Takviyeli Saf Esnek Grafit",
          maxTemp: "-200°C ile +450°C",
          maxPressure: "PN16 - PN63",
          features: [
            "Akaryakıt, hidrolik yağ ve hidrokarbon hatlarında mükemmel mikroskobik gözenek dolgusu",
            "Paslanmaz çelik perfore saç ile patlamaya (blow-out) karşı yüksek mekanik mukavemet",
            "Klorür içeriği <50 ppm (flanş korozyonunu önleyici saflık)",
          ],
          engineerNote:
            "Akaryakıt ve yağ hatlarında yapışmayı önlemek için grafit contalarımız çift taraflı PTFE/silikon kaplamalı olarak sunulur.",
          slug: "grafit-contalar",
        };
      }
      return {
        title: "Asbestsiz Klingrit / NBR Bağlayıcılı Aramid Conta",
        standards: "DIN EN 1514-1 / BS 7531 Grade X",
        material: "NBR Kauçuk Matrisli Aramid & İnorganik Elyaf Kompoziti",
        maxTemp: "-50°C ile +200°C",
        maxPressure: "PN16 - PN40",
        features: [
          "Dizel, benzin, madeni yağ ve gaz hatlarında ekonomik ve güvenilir sızdırmazlık",
          "Anti-stick yapışmaz yüzey kaplaması ile söküm kolaylığı",
          "CNC ve pres tezgahlarda standart veya özel geometrik kesim",
        ],
        engineerNote:
          "Flanş montajında gres veya sıvı conta sürmeyiniz; bu durum Klingrit malzemenin ezilerek patlamasına yol açabilir.",
        slug: "klingrit-levha-contalar",
      };
    }

    // 4. Food & Hygiene -> FDA PTFE / Silicone
    if (fluid === "food") {
      return {
        title: "Gıda & İlaç Uyumlu FDA Sertifikalı Saf Conta",
        standards: "FDA 21 CFR 177.2600 / EC 1935/2004",
        material: "Gıdaya Uygun Saf Virgin Beyaz PTFE / Platin Kürlü Silikon",
        maxTemp: "-60°C ile +220°C",
        maxPressure: "PN10 - PN25",
        features: [
          "Toksik madde, koku ve tat salınımı sıfırdır",
          "CIP ve SIP buharla sterilizasyon döngülerine tam dayanım",
          "İlaç, içecek, süt ve gıda tesisatlarında hijyenik standart",
        ],
        engineerNote:
          "Gıda temaslı hatlarda malzeme analiz sertifikası (Lot Traceability) ile teslimat sağlanmaktadır.",
        slug: "ptfe-teflon-urunler",
      };
    }

    // 5. Water / Marine / General Piping
    return {
      title: "Sac Takviyeli EPDM / NBR Elastomer Flanş Contası",
      standards: "DIN EN 1514-1 / DIN EN 681-1 (İçme Suyu / Atıksu)",
      material: "Vulkanize EPDM Kauçuk + İç Çelik Takviye Halkası",
      maxTemp: "-40°C ile +120°C",
      maxPressure: "PN10 - PN25",
      features: [
        "İçindeki çelik halka sayesinde montaj esnasında flanş arasına kaçmaz veya ezilmez",
        "Tuzlu deniz suyu, arıtma ve soğutma suyu hatlarında korozyonsuz uzun ömür",
        "Düşük cıvata torklarında bile üstün yüzey uyumu ve elastikiyet",
      ],
      engineerNote:
        "Tersane ve denizcilik boru devrelerinde deniz suyuna karşı galvanik korozyon oluşturmayan vulkanize EPDM tipi önerilir.",
      slug: "sac-takviyeli-elastomer-conta",
    };
  }, [fluid, temp, pressure]);

  const whatsappMessage = encodeURIComponent(
    `Merhaba Emek Conta, web sitenizdeki Malzeme Seçim Aracı ile bir analiz yaptım:\n- Akışkan: ${fluid}\n- Sıcaklık: ${temp}\n- Basınç: ${pressure}\nÖnerilen ürün: ${recommendation.title}. Bu çözüm için ölçü ve fiyat teklifi almak istiyorum.`
  );

  return (
    <section className="py-16 sm:py-24 bg-industrial-900 text-white border-y border-industrial-800 relative overflow-hidden">
      {/* Background Engineering Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-industrial-800 border border-industrial-700/80 text-xs font-mono text-rust mb-4">
            <RulerIcon className="w-3.5 h-3.5" />
            <span>MÜHENDİSLİK HESAPLAMA & SEÇİM REHBERİ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Doğru Conta Malzemesini <br className="hidden sm:inline" />
            <span className="text-rust">3 Adımda</span> Belirleyin
          </h2>
          <p className="mt-3 text-sm sm:text-base text-industrial-400 leading-relaxed">
            Hattınızdaki akışkan türü, çalışma sıcaklığı ve basınç sınıfını seçin. Mühendislik algoritmamız tesisatınız için en güvenli conta standardını ve malzeme kombinasyonunu anında önersin.
          </p>
        </div>

        {/* The Interactive Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (Left, 5 cols) */}
          <div className="lg:col-span-5 space-y-6 bg-industrial-950/80 border border-industrial-800 p-6 sm:p-7">
            {/* Step 1: Fluid Type */}
            <div>
              <label className="flex items-center justify-between text-xs font-mono text-industrial-300 uppercase tracking-wider mb-2.5">
                <span className="flex items-center gap-1.5 text-rust font-bold">
                  <span>1.</span> AKIŞKAN / ORTAM
                </span>
                <span className="text-[10px] text-industrial-500">SEÇİNİZ</span>
              </label>
              <div className="grid grid-cols-1 gap-1.5">
                {[
                  { id: "steam", label: "Kızgın Buhar / Yüksek Sıcaklık Su (>200°C)" },
                  { id: "hydrocarbon", label: "Petrol, Akaryakıt, Hidrolik Yağ & Gaz" },
                  { id: "chemical", label: "Agresif Kimyasal, Asit & Solvent" },
                  { id: "water", label: "Soğutma Suyu, Deniz Suyu & Genel Tesisat" },
                  { id: "food", label: "Gıda, İlaç & İçme Suyu (Hijyenik)" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFluid(item.id as FluidType)}
                    className={`w-full text-left px-3 py-2 text-xs font-mono transition-all border rounded-none flex items-center justify-between ${
                      fluid === item.id
                        ? "bg-rust border-rust-light text-white font-bold shadow-xs"
                        : "bg-industrial-900 border-industrial-800 text-industrial-300 hover:bg-industrial-850 hover:text-white"
                    }`}
                  >
                    <span className="truncate">{item.label}</span>
                    {fluid === item.id && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Temperature Range */}
            <div>
              <label className="flex items-center justify-between text-xs font-mono text-industrial-300 uppercase tracking-wider mb-2.5">
                <span className="flex items-center gap-1.5 text-rust font-bold">
                  <span>2.</span> ÇALIŞMA SICAKLIĞI
                </span>
                <span className="text-[10px] text-industrial-500">SEÇİNİZ</span>
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: "low", label: "Standart", range: "-50° / +120°C" },
                  { id: "mid", label: "Orta Isı", range: "+120° / +250°C" },
                  { id: "high", label: "Yüksek Isı", range: "+250° / +550°C+" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTemp(item.id as TempRange)}
                    className={`p-2 text-center font-mono border rounded-none transition-all ${
                      temp === item.id
                        ? "bg-rust border-rust-light text-white font-bold shadow-xs"
                        : "bg-industrial-900 border-industrial-800 text-industrial-300 hover:bg-industrial-850 hover:text-white"
                    }`}
                  >
                    <span className="block text-[11px] font-bold">{item.label}</span>
                    <span className="block text-[9px] text-industrial-400 mt-0.5">{item.range}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Pressure Class */}
            <div>
              <label className="flex items-center justify-between text-xs font-mono text-industrial-300 uppercase tracking-wider mb-2.5">
                <span className="flex items-center gap-1.5 text-rust font-bold">
                  <span>3.</span> BASINÇ SINIFI
                </span>
                <span className="text-[10px] text-industrial-500">SEÇİNİZ</span>
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: "pn16", label: "Düşük Basınç", spec: "PN10 - PN16" },
                  { id: "pn40", label: "Orta Basınç", spec: "PN25 - PN40" },
                  { id: "pn100", label: "Yüksek Basınç", spec: "PN63 - PN400" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPressure(item.id as PressureClass)}
                    className={`p-2 text-center font-mono border rounded-none transition-all ${
                      pressure === item.id
                        ? "bg-rust border-rust-light text-white font-bold shadow-xs"
                        : "bg-industrial-900 border-industrial-800 text-industrial-300 hover:bg-industrial-850 hover:text-white"
                    }`}
                  >
                    <span className="block text-[11px] font-bold">{item.label}</span>
                    <span className="block text-[9px] text-industrial-400 mt-0.5">{item.spec}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic Result Column (Right, 7 cols) */}
          <div className="lg:col-span-7 bg-industrial-950 border border-industrial-750 p-6 sm:p-8 relative shadow-2xl">
            {/* Top Match Tag */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-industrial-800">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  MÜHENDİSLİK TAVSİYESİ (DOĞRULANMIŞ EŞLEŞME)
                </span>
              </div>
              <span className="text-xs font-mono text-rust px-2.5 py-0.5 bg-industrial-900 border border-rust/40">
                {recommendation.standards}
              </span>
            </div>

            {/* Recommended Product Headline */}
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {recommendation.title}
            </h3>

            {/* Spec Chips Row */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5 font-mono text-xs">
              <div className="p-2.5 bg-industrial-900/90 border border-industrial-800">
                <span className="block text-[10px] text-industrial-500 uppercase">SICAKLIK SINIRI</span>
                <span className="text-emerald-400 font-semibold">{recommendation.maxTemp}</span>
              </div>
              <div className="p-2.5 bg-industrial-900/90 border border-industrial-800">
                <span className="block text-[10px] text-industrial-500 uppercase">BASINÇ DAYANIMI</span>
                <span className="text-rust font-semibold">{recommendation.maxPressure}</span>
              </div>
              <div className="p-2.5 bg-industrial-900/90 border border-industrial-800">
                <span className="block text-[10px] text-industrial-500 uppercase">STANDART NORM</span>
                <span className="text-industrial-200 truncate block">{recommendation.standards.split('/')[0]}</span>
              </div>
            </div>

            {/* Material Description */}
            <div className="mt-4 p-3 bg-industrial-900/50 border border-industrial-850 text-xs font-mono text-industrial-300">
              <span className="text-industrial-400 block text-[10px] uppercase mb-0.5">HAMMADDE BİLEŞİMİ:</span>
              {recommendation.material}
            </div>

            {/* Key Advantages */}
            <div className="mt-5 space-y-2">
              <span className="block text-xs font-mono text-industrial-400 uppercase tracking-wider">
                BU ÇÖZÜMÜN KRİTİK GÜVENCELERİ:
              </span>
              {recommendation.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-industrial-300">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Engineer Note Box */}
            <div className="mt-6 p-3.5 bg-industrial-900/80 border-l-2 border-rust text-xs text-industrial-300 leading-relaxed font-mono">
              <span className="font-bold text-rust block mb-1">MÜHENDİS NOTU & TAVSİYE:</span>
              {recommendation.engineerNote}
            </div>

            {/* Actions */}
            <div className="mt-8 pt-6 border-t border-industrial-800 flex flex-wrap items-center gap-3">
              <Button
                href={`/teklif-iste?urun=${encodeURIComponent(recommendation.title)}&kategori=${recommendation.slug}`}
                variant="accent"
                size="md"
                className="flex items-center gap-2"
              >
                <span>Bu Çözüm İçin Teklif İste</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Button>

              <a
                href={`https://wa.me/${companyData.whatsapp.replace('+', '')}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-medium transition-colors"
              >
                <WhatsappIcon className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp ile Doğrula</span>
              </a>

              <Link
                href={`/urunler/${recommendation.slug}`}
                className="text-xs font-mono text-industrial-400 hover:text-white underline underline-offset-4 ml-auto"
              >
                Teknik Tabloyu İncele →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
