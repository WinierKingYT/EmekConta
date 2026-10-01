"use client";

import React, { useState } from "react";
import { companyData } from "@/data/company";
import { Button } from "@/components/ui/Button";
import {
  CheckCircleIcon,
  PhoneIcon,
  WhatsappIcon,
  ShieldCheckIcon,
} from "@/components/icons/Icons";

const BUSINESS_TYPES = [
  "Endüstriyel Hırdavat / Rulman / Sızdırmazlık Bayisi",
  "Tesisat, Vana & Boru Ek Parçaları Toptancısı",
  "Gemi Tedarikçisi (Ship Chandler / Deniz Malzemeleri)",
  "Makine & Ekipman İmalatçısı (OEM)",
  "Bölgesel Sanayi Malzemeleri Distribütörü",
  "Diğer Endüstriyel Satıcı",
];

const PRODUCT_GROUPS = [
  "Spiral Sarımlı Contalar (ASME & DIN)",
  "Saf Grafit & Telli Grafit Levha / Contalar",
  "Klingrit / Aramid Elyaf Conta Levhaları",
  "Kauçuk Contalar (EPDM, NBR, Viton, Silikon)",
  "PTFE & Genleşmiş PTFE Ürünleri (ePTFE)",
  "Örgülü Pompa & Vana Salmastraları",
  "Yüksek Sıcaklık Cam Elyaf & Seramik Tekstil",
  "Mühendislik Plastikleri (Kestamid, POM, Teflon)",
];

const WAREHOUSE_SIZES = [
  "100 m² altı",
  "100 - 250 m²",
  "250 - 500 m²",
  "500 - 1000 m²",
  "1000 m² üzeri",
];

export function DistributorApplicationForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    taxOfficeOrNumber: "",
    tradeRegistryNo: "",
    businessType: BUSINESS_TYPES[0],
    fullName: "",
    title: "",
    phone: "",
    email: "",
    city: "",
    district: "",
    warehouseArea: WAREHOUSE_SIZES[1],
    activityRegion: "Bölgesel (Çevre İller)",
    estimatedAnnualVolume: "250.000 TL – 1.000.000 TL",
    currentBrands: "",
    notes: "",
    website_hp: "",
  });

  const [selectedProducts, setSelectedProducts] = useState<string[]>([
    "Spiral Sarımlı Contalar (ASME & DIN)",
    "Klingrit / Aramid Elyaf Conta Levhaları",
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceCode, setReferenceCode] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const toggleProduct = (prod: string) => {
    setSelectedProducts((prev) =>
      prev.includes(prod) ? prev.filter((p) => p !== prod) : [...prev, prod]
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (formData.website_hp) {
      setIsSuccess(true);
      return;
    }

    if (
      !formData.companyName.trim() ||
      !formData.fullName.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim() ||
      !formData.city.trim()
    ) {
      setErrorMessage("Lütfen zorunlu alanları (Firma, Yetkili, Telefon, E-posta, Şehir) eksiksiz doldurunuz.");
      return;
    }

    if (selectedProducts.length === 0) {
      setErrorMessage("Lütfen dağıtımını yapmak istediğiniz en az bir ürün grubu seçiniz.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        type: "distributor_application",
        fullName: formData.fullName.trim(),
        companyName: formData.companyName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        taxOfficeOrNumber: formData.taxOfficeOrNumber.trim(),
        city: formData.city.trim(),
        district: formData.district.trim(),
        businessType: formData.businessType,
        warehouseArea: formData.warehouseArea,
        activityRegion: formData.activityRegion,
        targetProducts: selectedProducts,
        estimatedAnnualVolume: formData.estimatedAnnualVolume,
        notes: `Görev: ${formData.title} | Ticaret Sicil: ${formData.tradeRegistryNo} | Mevcut Markalar: ${formData.currentBrands} | Ek Notlar: ${formData.notes}`,
        website_hp: formData.website_hp,
      };

      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Bayilik başvurusu iletilirken bir hata oluştu.");
      }

      setReferenceCode(data.referenceCode || `EC-BAYI-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSuccess(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Başvuru iletilirken bir hata oluştu.";
      setErrorMessage(`${msg} Lütfen doğrudan telefon veya e-posta ile iletişime geçiniz.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white border-2 border-emerald-500 p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-sm rounded-xl">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 border border-emerald-300 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircleIcon className="w-8 h-8" />
        </div>
        <span className="text-xs font-mono font-bold tracking-widest text-emerald-700 uppercase block mb-1">
          BAYİLİK BAŞVURUSU ALINDI
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-industrial-900 tracking-tight">
          Başvurunuz Değerlendirmeye Alındı
        </h3>
        <p className="mt-4 text-sm sm:text-base text-industrial-600 leading-relaxed">
          Sayın <strong>{formData.fullName}</strong> ({formData.companyName}), Emek Conta bölgesel bayilik & toptan dağıtım başvurunuz satış direktörlüğümüze ulaştı. Bölge kotaları ve iskonto şartları incelenerek 1 iş günü içinde sizinle temas kurulacaktır.
        </p>

        {referenceCode && (
          <div className="mt-6 p-4 bg-industrial-50 border border-industrial-200 max-w-sm mx-auto rounded-lg font-mono">
            <span className="text-[11px] text-industrial-500 uppercase tracking-wider block">
              BAŞVURU TAKİP NUMARASI:
            </span>
            <span className="text-xl font-bold text-rust">{referenceCode}</span>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-industrial-200 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
          <a
            href={`tel:${companyData.phone}`}
            className="px-4 py-2.5 bg-industrial-900 text-white hover:bg-industrial-800 transition-colors inline-flex items-center gap-2 rounded-lg"
          >
            <PhoneIcon className="w-4 h-4 text-steel-blue" />
            <span>Bayi Satış Santrali: {companyData.phoneFormatted}</span>
          </a>
          <a
            href={`https://wa.me/${companyData.whatsapp.replace('+', '')}?text=${encodeURIComponent(`Merhaba Emek Conta, #${referenceCode} numaralı bayilik başvurum hakkında görüşmek istiyorum.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-emerald-600 text-white hover:bg-emerald-700 transition-colors inline-flex items-center gap-2 rounded-lg"
          >
            <WhatsappIcon className="w-4 h-4" />
            <span>WhatsApp ile Teyit Et</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-industrial-200 p-6 sm:p-10 shadow-xs space-y-8 rounded-xl">
      {/* Honeypot for bot protection */}
      <input
        type="text"
        name="website_hp"
        value={formData.website_hp}
        onChange={handleInputChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {errorMessage && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-medium rounded-lg">
          {errorMessage}
        </div>
      )}

      {/* Group 1: Company & Author Identity */}
      <div>
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-industrial-200">
          <span className="font-mono text-xs font-bold text-rust">01.</span>
          <h3 className="font-bold text-base text-industrial-900 uppercase tracking-wide">
            Firma ve Yetkili Kimliği
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="sm:col-span-2">
            <label htmlFor="companyName" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Firma Resmi Ticari Ünvanı <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Örn: ABC Endüstriyel Hırdavat ve Tesisat Malzemeleri Ltd. Şti."
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-sm text-industrial-900 focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white"
            />
          </div>

          <div>
            <label htmlFor="taxOfficeOrNumber" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Vergi Dairesi ve Numarası
            </label>
            <input
              type="text"
              id="taxOfficeOrNumber"
              name="taxOfficeOrNumber"
              value={formData.taxOfficeOrNumber}
              onChange={handleInputChange}
              placeholder="Örn: Beyoğlu VD - 1234567890"
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-sm text-industrial-900 font-mono focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white"
            />
          </div>

          <div>
            <label htmlFor="businessType" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Ana Faaliyet Alanı
            </label>
            <select
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleInputChange}
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-sm text-industrial-900 focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white"
            >
              {BUSINESS_TYPES.map((bt, idx) => (
                <option key={idx} value={bt}>
                  {bt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="fullName" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Yetkili Adı Soyadı <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Ad ve soyad"
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-sm text-industrial-900 focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white"
            />
          </div>

          <div>
            <label htmlFor="title" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Görevi / Ünvanı
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Örn: Şirket Ortağı / Genel Müdür"
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-sm text-industrial-900 focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Telefon Numarası <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="0 (5XX) XXX XX XX"
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-sm text-industrial-900 font-mono focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Kurumsal E-posta <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="yetkili@firma.com"
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-sm text-industrial-900 font-mono focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white"
            />
          </div>
        </div>
      </div>

      {/* Group 2: Location & Distribution Capacity */}
      <div>
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-industrial-200">
          <span className="font-mono text-xs font-bold text-rust">02.</span>
          <h3 className="font-bold text-base text-industrial-900 uppercase tracking-wide">
            Lokasyon & Dağıtım Kapasitesi
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div>
            <label htmlFor="city" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Faaliyet Gösterilen İl <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              required
              value={formData.city}
              onChange={handleInputChange}
              placeholder="Örn: İzmir, Bursa, Kocaeli, Mersin..."
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-sm text-industrial-900 focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white"
            />
          </div>

          <div>
            <label htmlFor="warehouseArea" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Mağaza / Depo Kapalı Alanı
            </label>
            <select
              id="warehouseArea"
              name="warehouseArea"
              value={formData.warehouseArea}
              onChange={handleInputChange}
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-sm text-industrial-900 focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white"
            >
              {WAREHOUSE_SIZES.map((ws, idx) => (
                <option key={idx} value={ws}>
                  {ws}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="estimatedAnnualVolume" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Tahmini Yıllık Alım Hacmi
            </label>
            <select
              id="estimatedAnnualVolume"
              name="estimatedAnnualVolume"
              value={formData.estimatedAnnualVolume}
              onChange={handleInputChange}
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-sm text-industrial-900 focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white font-mono text-xs"
            >
              <option value="100.000 TL – 250.000 TL">100.000 TL – 250.000 TL</option>
              <option value="250.000 TL – 1.000.000 TL">250.000 TL – 1.000.000 TL</option>
              <option value="1.000.000 TL – 3.000.000 TL">1.000.000 TL – 3.000.000 TL</option>
              <option value="3.000.000 TL üzeri">3.000.000 TL üzeri</option>
            </select>
          </div>
        </div>
      </div>

      {/* Group 3: Target Product Portfolio */}
      <div>
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-industrial-200">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-rust">03.</span>
            <h3 className="font-bold text-base text-industrial-900 uppercase tracking-wide">
              Dağıtımı Hedeflenen Ürün Grupları <span className="text-red-600">*</span>
            </h3>
          </div>
          <span className="text-xs font-mono text-industrial-500">
            {selectedProducts.length} grup seçildi
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {PRODUCT_GROUPS.map((pg, idx) => {
            const isSelected = selectedProducts.includes(pg);
            return (
              <button
                type="button"
                key={idx}
                onClick={() => toggleProduct(pg)}
                className={`p-3 text-left border rounded-lg transition-all flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? "border-rust bg-rust/5 ring-1 ring-rust text-rust font-bold"
                    : "border-industrial-200 bg-industrial-50 hover:bg-white text-industrial-800"
                }`}
              >
                <span className="text-xs">{pg}</span>
                <span
                  className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 text-[10px] ${
                    isSelected ? "bg-rust border-rust text-white font-bold" : "border-industrial-400 bg-white"
                  }`}
                >
                  {isSelected ? "✓" : ""}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Group 4: Notes and Current Portfolio */}
      <div>
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-industrial-200">
          <span className="font-mono text-xs font-bold text-rust">04.</span>
          <h3 className="font-bold text-base text-industrial-900 uppercase tracking-wide">
            Mevcut Temsilcilikler ve Ek Açıklamalar
          </h3>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="currentBrands" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Halihazırda Bayisi Olduğunuz / Dağıttığınız Markalar (Opsiyonel)
            </label>
            <input
              type="text"
              id="currentBrands"
              name="currentBrands"
              value={formData.currentBrands}
              onChange={handleInputChange}
              placeholder="Örn: Klinger, Donit, Teadit, SKF, Trakya Döküm vb."
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-sm text-industrial-900 focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white"
            />
          </div>

          <div>
            <label htmlFor="notes" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Başvuru Gerekçeniz ve İşbirliği Beklentiniz
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Bölgenizdeki sanayi potansiyeli, hedef sektörleriniz (tersane, petrokimya, gıda vb.) ve ortaklık hedefleriniz hakkında bilgi verebilirsiniz."
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-sm text-industrial-900 focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white resize-none"
            />
          </div>
        </div>
      </div>

      {/* Submit Action */}
      <div className="pt-4 border-t border-industrial-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-industrial-500 font-mono">
          <ShieldCheckIcon className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Başvurunuz gizlilik ilkeleri kapsamında ticari sır olarak korunur.</span>
        </div>
        <Button
          type="submit"
          variant="accent"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? "Başvuru İletiliyor..." : "Bayilik Başvurusunu Gönder →"}
        </Button>
      </div>
    </form>
  );
}
