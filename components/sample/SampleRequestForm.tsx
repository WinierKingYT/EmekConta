"use client";

import React, { useState } from "react";
import { companyData } from "@/data/company";
import { Button } from "@/components/ui/Button";
import {
  CheckCircleIcon,
  PhoneIcon,
  WhatsappIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
} from "@/components/icons/Icons";

const AVAILABLE_MATERIALS = [
  { id: "grafit", name: "Saf Genleşmiş Grafit (Tırnaklı Sac Takviyeli)", temp: "650 °C" },
  { id: "klingrit", name: "Klingrit / Aramid Elyaf Conta Levhası", temp: "400 °C" },
  { id: "eptfe", name: "Genleşmiş %100 Saf PTFE (ePTFE Şerit / Levha)", temp: "260 °C" },
  { id: "epdm", name: "EPDM Kauçuk (Su, Buhar, Ozon Dayanımlı)", temp: "130 °C" },
  { id: "nbr", name: "NBR (Nitril) Yağ & Yakıt Dayanımlı Kauçuk", temp: "100 °C" },
  { id: "viton", name: "FKM (Viton) Ağır Kimyasal & Yüksek Isı", temp: "200 °C" },
  { id: "silikon", name: "Gıda Onaylı Silikon (FDA Uygun)", temp: "220 °C" },
  { id: "seramik", name: "Seramik & Cam Elyaf Termal İzolasyon Şeridi", temp: "1000+ °C" },
];

const STANDARD_THICKNESSES = ["0.5 mm", "1.0 mm", "1.5 mm", "2.0 mm", "3.0 mm", "4.0 mm", "5.0 mm"];

export function SampleRequestForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    taxOfficeOrNumber: "",
    deliveryAddress: "",
    city: "",
    district: "",
    customThickness: "",
    temperature: "",
    pressure: "",
    medium: "",
    notes: "",
    website_hp: "",
  });

  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedThicknesses, setSelectedThicknesses] = useState<string[]>(["2.0 mm"]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceCode, setReferenceCode] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const toggleMaterial = (matName: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(matName) ? prev.filter((m) => m !== matName) : [...prev, matName]
    );
  };

  const toggleThickness = (th: string) => {
    setSelectedThicknesses((prev) =>
      prev.includes(th) ? prev.filter((t) => t !== th) : [...prev, th]
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

    // Spam honeypot
    if (formData.website_hp) {
      setIsSuccess(true);
      return;
    }

    if (!formData.fullName.trim() || !formData.companyName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMessage("Lütfen Ad Soyad, Firma Adı, Telefon ve E-posta alanlarını eksiksiz doldurunuz.");
      return;
    }

    if (selectedMaterials.length === 0) {
      setErrorMessage("Lütfen test etmek istediğiniz en az bir malzeme türü seçiniz.");
      return;
    }

    if (!formData.deliveryAddress.trim() || !formData.city.trim()) {
      setErrorMessage("Numunelerin sevk edilebilmesi için teslimat adresi ve il bilgisini giriniz.");
      return;
    }

    setIsSubmitting(true);

    try {
      const allThicknesses = [
        ...selectedThicknesses,
        formData.customThickness ? `Özel: ${formData.customThickness}` : "",
      ]
        .filter(Boolean)
        .join(", ");

      const payload = {
        type: "sample_request",
        fullName: formData.fullName.trim(),
        companyName: formData.companyName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        taxOfficeOrNumber: formData.taxOfficeOrNumber.trim(),
        deliveryAddress: formData.deliveryAddress.trim(),
        city: formData.city.trim(),
        district: formData.district.trim(),
        sampleMaterials: selectedMaterials,
        thickness: allThicknesses,
        temperature: formData.temperature.trim(),
        pressure: formData.pressure.trim(),
        medium: formData.medium.trim(),
        notes: formData.notes.trim(),
        website_hp: formData.website_hp,
      };

      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Numune talebi kaydedilirken bir hata oluştu.");
      }

      setReferenceCode(data.referenceCode || `EC-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSuccess(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Numune talebi iletilirken bir hata oluştu.";
      setErrorMessage(`${msg} Lütfen doğrudan telefon veya WhatsApp ile iletişime geçiniz.`);
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
          NUMUNE TALEBİ ALINDI
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-industrial-900 tracking-tight">
          Numune Kiti Hazırlanıyor
        </h3>
        <p className="mt-4 text-sm sm:text-base text-industrial-600 leading-relaxed">
          Sayın <strong>{formData.fullName}</strong> ({formData.companyName}), talep ettiğiniz conta numuneleri ve teknik bilgi föyleri (datasheet) AR-GE & laboratuvar sevkiyat listemize eklendi.
          {formData.email && (
            <span className="block mt-1 text-emerald-700 font-medium">
              Bilgilendirme ve takip detayları <strong>{formData.email}</strong> adresinize gönderildi.
            </span>
          )}
        </p>

        {referenceCode && (
          <div className="mt-6 p-4 bg-industrial-50 border border-industrial-200 max-w-sm mx-auto rounded-lg">
            <span className="text-[11px] font-mono text-industrial-500 uppercase tracking-wider block">
              NUMUNE TAKİP NUMARASI:
            </span>
            <span className="text-xl font-mono font-bold text-rust">
              {referenceCode}
            </span>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-industrial-200 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
          <a
            href={`tel:${companyData.phone}`}
            className="px-4 py-2.5 bg-industrial-900 text-white hover:bg-industrial-800 transition-colors inline-flex items-center gap-2 rounded-lg"
          >
            <PhoneIcon className="w-4 h-4 text-steel-blue" />
            <span>Sevkiyat Danışma: {companyData.phoneFormatted}</span>
          </a>
          <a
            href={`https://wa.me/${companyData.whatsapp.replace('+', '')}?text=${encodeURIComponent(`Merhaba Emek Conta, #${referenceCode} numaralı numune talebimin durumu hakkında bilgi almak istiyorum.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-emerald-600 text-white hover:bg-emerald-700 transition-colors inline-flex items-center gap-2 rounded-lg"
          >
            <WhatsappIcon className="w-4 h-4" />
            <span>WhatsApp ile Teyit Et</span>
          </a>
        </div>

        <div className="mt-6">
          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              setSelectedMaterials([]);
              setReferenceCode("");
            }}
            className="text-xs font-mono text-steel-blue hover:underline cursor-pointer"
          >
            ← Yeni Bir Numune Talebi Oluştur
          </button>
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

      {/* Section 1: Contact & Company */}
      <div>
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-industrial-200">
          <span className="font-mono text-xs font-bold text-rust">01.</span>
          <h3 className="font-bold text-base text-industrial-900 uppercase tracking-wide">
            Talep Eden & Kurum Bilgileri
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label htmlFor="fullName" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Ad Soyad <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Yetkili / Mühendis Adı"
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 text-industrial-900 text-sm focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white rounded-lg"
            />
          </div>

          <div>
            <label htmlFor="companyName" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Firma / Kurum Adı <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Firma resmi ünvanı"
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 text-industrial-900 text-sm focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white rounded-lg"
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
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 text-industrial-900 text-sm focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white rounded-lg font-mono"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Kurumsal E-posta Adresi <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="ornek@firma.com"
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 text-industrial-900 text-sm focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white rounded-lg font-mono"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="taxOfficeOrNumber" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Vergi Dairesi & Numarası (Opsiyonel / Kurumsal Kayıt)
            </label>
            <input
              type="text"
              id="taxOfficeOrNumber"
              name="taxOfficeOrNumber"
              value={formData.taxOfficeOrNumber}
              onChange={handleInputChange}
              placeholder="Örn: İkitelli VD - 3320019282"
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 text-industrial-900 text-sm focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white rounded-lg font-mono"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Material Selection (Interactive Chips) */}
      <div>
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-industrial-200">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-rust">02.</span>
            <h3 className="font-bold text-base text-industrial-900 uppercase tracking-wide">
              Test Etmek İstediğiniz Numune Malzemeleri <span className="text-red-600">*</span>
            </h3>
          </div>
          <span className="text-xs font-mono text-industrial-500">
            {selectedMaterials.length} malzeme seçildi
          </span>
        </div>

        <p className="text-xs text-industrial-600 mb-3">
          Laboratuvarınızda veya üretim hattınızda test etmek istediğiniz malzeme çeşitlerini tıklayarak seçiniz:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {AVAILABLE_MATERIALS.map((mat) => {
            const isSelected = selectedMaterials.includes(mat.name);
            return (
              <button
                type="button"
                key={mat.id}
                onClick={() => toggleMaterial(mat.name)}
                className={`p-3 text-left border rounded-lg transition-all flex items-start justify-between cursor-pointer ${
                  isSelected
                    ? "border-rust bg-rust/5 ring-1 ring-rust"
                    : "border-industrial-200 bg-industrial-50 hover:border-industrial-300 hover:bg-white"
                }`}
              >
                <div className="pr-2">
                  <span className={`text-xs font-bold block ${isSelected ? "text-rust" : "text-industrial-900"}`}>
                    {mat.name}
                  </span>
                  <span className="text-[10px] font-mono text-industrial-500">
                    Maks. Sıcaklık: {mat.temp}
                  </span>
                </div>
                <span
                  className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 text-[10px] ${
                    isSelected
                      ? "bg-rust border-rust text-white font-bold"
                      : "border-industrial-400 bg-white"
                  }`}
                >
                  {isSelected ? "✓" : ""}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Section 3: Thickness & Operating Specs */}
      <div>
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-industrial-200">
          <span className="font-mono text-xs font-bold text-rust">03.</span>
          <h3 className="font-bold text-base text-industrial-900 uppercase tracking-wide">
            Kalınlık & Çalışma Koşulları
          </h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-mono font-medium text-industrial-700 mb-2">
              İstenen Kalınlıklar (En çok kullanılanları seçebilirsiniz):
            </label>
            <div className="flex flex-wrap gap-2">
              {STANDARD_THICKNESSES.map((th) => {
                const isSelected = selectedThicknesses.includes(th);
                return (
                  <button
                    type="button"
                    key={th}
                    onClick={() => toggleThickness(th)}
                    className={`px-3 py-1.5 text-xs font-mono font-medium border rounded-md transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-night text-white border-night"
                        : "bg-industrial-100 text-industrial-700 border-industrial-200 hover:bg-industrial-200"
                    }`}
                  >
                    {th}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="temperature" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
                Test Sıcaklığı
              </label>
              <input
                type="text"
                id="temperature"
                name="temperature"
                value={formData.temperature}
                onChange={handleInputChange}
                placeholder="Örn: 180 °C"
                className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 text-industrial-900 text-sm focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white rounded-lg font-mono"
              />
            </div>

            <div>
              <label htmlFor="pressure" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
                Test Basıncı
              </label>
              <input
                type="text"
                id="pressure"
                name="pressure"
                value={formData.pressure}
                onChange={handleInputChange}
                placeholder="Örn: 16 Bar"
                className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 text-industrial-900 text-sm focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white rounded-lg font-mono"
              />
            </div>

            <div>
              <label htmlFor="medium" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
                Temas Akışkanı
              </label>
              <input
                type="text"
                id="medium"
                name="medium"
                value={formData.medium}
                onChange={handleInputChange}
                placeholder="Örn: Asit, buhar, deniz suyu"
                className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 text-industrial-900 text-sm focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Shipping Address */}
      <div>
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-industrial-200">
          <span className="font-mono text-xs font-bold text-rust">04.</span>
          <h3 className="font-bold text-base text-industrial-900 uppercase tracking-wide">
            Kargo / Numune Teslimat Adresi
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div className="sm:col-span-2">
            <label htmlFor="deliveryAddress" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Açık Adres (Fabrika / AR-GE / Atölye) <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="deliveryAddress"
              name="deliveryAddress"
              required
              value={formData.deliveryAddress}
              onChange={handleInputChange}
              placeholder="Organize Sanayi Bölgesi, Mahalle, Cadde, No"
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 text-industrial-900 text-sm focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white rounded-lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label htmlFor="district" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
                İlçe
              </label>
              <input
                type="text"
                id="district"
                name="district"
                value={formData.district}
                onChange={handleInputChange}
                placeholder="İlçe"
                className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 text-industrial-900 text-sm focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
                İl <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                value={formData.city}
                onChange={handleInputChange}
                placeholder="İl"
                className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 text-industrial-900 text-sm focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white rounded-lg"
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="notes" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
            Test Projesi Notları veya Özel Talepler
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            value={formData.notes}
            onChange={handleInputChange}
            placeholder="Numuneyi kullanacağınız test düzeneği, aradığınız özel mekanik dayanım veya numune ebatları hakkında bilgi verebilirsiniz."
            className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 text-industrial-900 text-sm focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white rounded-lg"
          />
        </div>
      </div>

      {/* Submit Action */}
      <div className="pt-4 border-t border-industrial-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-industrial-500 font-mono">
          <ShieldCheckIcon className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Numuneler kurumsal AR-GE ve bakım ekipleri için ücretsiz hazırlanır.</span>
        </div>
        <Button
          type="submit"
          variant="accent"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? "Numune Talebi İletiliyor..." : "Ücretsiz Numune Talep Et →"}
        </Button>
      </div>
    </form>
  );
}
