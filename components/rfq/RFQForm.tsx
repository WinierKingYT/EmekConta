"use client";

import React, { useState } from "react";
import { productCategories } from "@/data/products";
import { companyData } from "@/data/company";
import { Button } from "@/components/ui/Button";
import {
  UploadCloudIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  PhoneIcon,
  WhatsappIcon,
} from "@/components/icons/Icons";

interface RFQFormProps {
  defaultProduct?: string;
  defaultCategory?: string;
}

export function RFQForm({ defaultProduct, defaultCategory }: RFQFormProps) {
  const [formData, setFormData] = useState({
    // Contact
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    // Product details
    category: defaultCategory || "contalar",
    productName: defaultProduct || "",
    quantity: "",
    dimensions: "",
    material: "",
    // Technical operating parameters
    temperature: "",
    pressure: "",
    medium: "",
    standard: "",
    // Message
    notes: "",
    // Honeypot (spam prevention)
    website_hp: "",
  });

  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    if (!e.target.files) return;

    const allowedExtensions = [
      "pdf",
      "dwg",
      "dxf",
      "step",
      "stp",
      "iges",
      "igs",
      "png",
      "jpg",
      "jpeg",
    ];
    const maxSizeBytes = 25 * 1024 * 1024; // 25 MB

    const selectedFiles = Array.from(e.target.files);
    for (const f of selectedFiles) {
      const ext = f.name.split(".").pop()?.toLowerCase();
      if (!ext || !allowedExtensions.includes(ext)) {
        setFileError(
          `Geçersiz dosya formatı: ${f.name}. Yalnızca PDF, DWG, DXF, STEP, IGES, PNG, JPG kabul edilmektedir.`
        );
        return;
      }
      if (f.size > maxSizeBytes) {
        setFileError(`Dosya boyutu çok büyük: ${f.name} (Maksimum 25 MB)`);
        return;
      }
    }

    setFiles(selectedFiles);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Spam honeypot detection
    if (formData.website_hp) {
      // Silently pretend success to fool automated bots
      setIsSuccess(true);
      return;
    }

    // Required fields validation
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMessage("Lütfen Ad Soyad, Telefon ve E-posta alanlarını eksiksiz doldurunuz.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate resilient B2B submission endpoint
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSuccess(true);
    } catch (err) {
      setErrorMessage("Teklif iletilirken bir hata oluştu. Lütfen doğrudan telefon veya WhatsApp ile iletişime geçiniz.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white border-2 border-emerald-500 p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-sm">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 border border-emerald-300 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircleIcon className="w-8 h-8" />
        </div>
        <span className="text-xs font-mono font-bold tracking-widest text-emerald-700 uppercase block mb-1">
          TEKLİF TALEBİ ALINDI
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-industrial-900 tracking-tight">
          Teşekkür Ederiz, Talebiniz İletildi.
        </h3>
        <p className="mt-4 text-sm sm:text-base text-industrial-600 leading-relaxed">
          Sayın <strong>{formData.fullName}</strong>, ilettiğiniz teknik detaylar ve dosyalar mühendislik departmanımıza başarıyla ulaştı. Çalışma parametreleri ve malzeme analiziniz yapılarak en kısa sürede tarafınıza yazılı teklif iletilecektir.
        </p>

        <div className="mt-8 pt-6 border-t border-industrial-200 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
          <a
            href={`tel:${companyData.phone}`}
            className="px-4 py-2.5 bg-industrial-900 text-white hover:bg-industrial-800 transition-colors inline-flex items-center gap-2"
          >
            <PhoneIcon className="w-4 h-4 text-steel-blue" />
            <span>Acil Durum Santral: {companyData.phoneFormatted}</span>
          </a>
          <a
            href={`https://wa.me/${companyData.whatsapp.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-emerald-600 text-white hover:bg-emerald-700 transition-colors inline-flex items-center gap-2"
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
              setFormData({
                fullName: "",
                companyName: "",
                phone: "",
                email: "",
                category: "contalar",
                productName: "",
                quantity: "",
                dimensions: "",
                material: "",
                temperature: "",
                pressure: "",
                medium: "",
                standard: "",
                notes: "",
                website_hp: "",
              });
              setFiles([]);
            }}
            className="text-xs font-mono text-steel-blue hover:underline"
          >
            ← Yeni Bir Teklif Talebi Gönder
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-industrial-200 p-6 sm:p-10 shadow-xs space-y-8 rounded-xl">
      {/* Honeypot field for bot protection (invisible to humans) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_hp">Lütfen bu alanı boş bırakın</label>
        <input
          type="text"
          id="website_hp"
          name="website_hp"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website_hp}
          onChange={handleInputChange}
        />
      </div>

      {errorMessage && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-medium rounded-lg">
          {errorMessage}
        </div>
      )}

      {/* Group 1: Contact Information */}
      <div>
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-industrial-200">
          <span className="font-mono text-xs font-bold text-rust">01.</span>
          <h3 className="font-bold text-base text-industrial-900 uppercase tracking-wide">
            Yetkili & Firma Bilgileri
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
              placeholder="Yetkili adı ve soyadı"
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 text-industrial-900 text-sm focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white rounded-lg"
            />
          </div>

          <div>
            <label htmlFor="companyName" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Firma Adı / Kurum
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Firma ünvanı"
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
        </div>
      </div>

      {/* Group 2: Product & Dimension Details */}
      <div>
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-industrial-200">
          <span className="font-mono text-xs font-bold text-rust">02.</span>
          <h3 className="font-bold text-base text-industrial-900 uppercase tracking-wide">
            Ürün & Ölçü Spesifikasyonları
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div>
            <label htmlFor="category" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Ürün Kategorisi
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 text-industrial-900 text-sm focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white rounded-lg"
            >
              {productCategories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="productName" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Ürün Adı / Açıklaması
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              placeholder="Örn: DN 100 PN 16 Spiral Sarımlı Conta"
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 text-industrial-900 text-sm focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white rounded-lg"
            />
          </div>

          <div>
            <label htmlFor="quantity" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Talep Edilen Miktar (Adet / Metre)
            </label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              placeholder="Örn: 50 Adet"
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 text-industrial-900 text-sm focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white rounded-lg font-mono"
            />
          </div>

          <div>
            <label htmlFor="dimensions" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Ölçüler (İç Çap x Dış Çap x Kalınlık)
            </label>
            <input
              type="text"
              id="dimensions"
              name="dimensions"
              value={formData.dimensions}
              onChange={handleInputChange}
              placeholder="Örn: Ø 114 x 168 x 4.5 mm"
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 text-industrial-900 text-sm focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white rounded-lg font-mono"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="material" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Tercih Edilen Malzeme Cinsi
            </label>
            <input
              type="text"
              id="material"
              name="material"
              value={formData.material}
              onChange={handleInputChange}
              placeholder="Örn: Saf Grafit, EPDM Kauçuk, 316L Paslanmaz, Genleşmiş PTFE, Klingrit..."
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 text-industrial-900 text-sm focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Group 3: Technical Operating Parameters (Optional / Engineering) */}
      <div>
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-industrial-200">
          <span className="font-mono text-xs font-bold text-rust">03.</span>
          <h3 className="font-bold text-base text-industrial-900 uppercase tracking-wide">
            Çalışma Koşulları (Mühendislik Değerlendirmesi İçin)
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6">
          <div>
            <label htmlFor="temperature" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Çalışma Sıcaklığı
            </label>
            <input
              type="text"
              id="temperature"
              name="temperature"
              value={formData.temperature}
              onChange={handleInputChange}
              placeholder="Örn: 220 °C"
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 text-industrial-900 text-sm focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white rounded-lg font-mono"
            />
          </div>

          <div>
            <label htmlFor="pressure" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Çalışma Basıncı
            </label>
            <input
              type="text"
              id="pressure"
              name="pressure"
              value={formData.pressure}
              onChange={handleInputChange}
              placeholder="Örn: 25 Bar / PN 25"
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 text-industrial-900 text-sm focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white rounded-lg font-mono"
            />
          </div>

          <div>
            <label htmlFor="medium" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Akışkan / Ortam
            </label>
            <input
              type="text"
              id="medium"
              name="medium"
              value={formData.medium}
              onChange={handleInputChange}
              placeholder="Örn: Doymuş buhar, deniz suyu, hidrolik yağ"
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 text-industrial-900 text-sm focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white rounded-lg"
            />
          </div>

          <div>
            <label htmlFor="standard" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Standart / Flanş Tipi
            </label>
            <input
              type="text"
              id="standard"
              name="standard"
              value={formData.standard}
              onChange={handleInputChange}
              placeholder="Örn: ASME B16.5, DIN 2633"
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 text-industrial-900 text-sm focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white rounded-lg font-mono"
            />
          </div>
        </div>
      </div>

      {/* Group 4: File Upload (CAD, PDF, STEP, Image) */}
      <div>
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-industrial-200">
          <span className="font-mono text-xs font-bold text-rust">04.</span>
          <h3 className="font-bold text-base text-industrial-900 uppercase tracking-wide">
            Teknik Çizim / Dosya Eki (Opsiyonel)
          </h3>
        </div>

        <div className="border-2 border-dashed border-industrial-300 p-6 text-center bg-industrial-50 hover:bg-industrial-100/50 transition-colors">
          <UploadCloudIcon className="w-10 h-10 text-rust mx-auto mb-2" />
          <p className="text-xs sm:text-sm font-semibold text-industrial-800">
            Teknik çizim (CAD / DXF / STEP / PDF) veya numune fotoğrafı yükleyin
          </p>
          <p className="text-[11px] font-mono text-industrial-500 mt-1">
            Desteklenen formatlar: .PDF, .DWG, .DXF, .STEP, .STP, .IGES, .PNG, .JPG (Maks. 25 MB)
          </p>

          <input
            type="file"
            id="rfq-file-upload"
            onChange={handleFileChange}
            multiple
            className="hidden"
            accept=".pdf,.dwg,.dxf,.step,.stp,.iges,.igs,.png,.jpg,.jpeg"
          />

          <div className="mt-4">
            <label
              htmlFor="rfq-file-upload"
              className="cursor-pointer inline-flex items-center px-4 py-2 bg-industrial-900 hover:bg-industrial-800 text-white text-xs font-mono font-semibold uppercase tracking-wider transition-colors"
            >
              Dosya Seçiniz
            </label>
          </div>

          {fileError && (
            <p className="mt-3 text-xs text-red-600 font-medium">{fileError}</p>
          )}

          {files.length > 0 && (
            <div className="mt-4 pt-3 border-t border-industrial-200 text-left">
              <span className="text-xs font-mono font-bold text-industrial-700 block mb-1.5">
                Seçilen Dosyalar ({files.length}):
              </span>
              <ul className="space-y-1">
                {files.map((file, idx) => (
                  <li key={idx} className="text-xs font-mono text-industrial-600 flex items-center gap-2">
                    <DocumentTextIcon className="w-3.5 h-3.5 text-steel-blue" />
                    <span>{file.name}</span>
                    <span className="text-industrial-400">({(file.size / 1024).toFixed(0)} KB)</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Group 5: Additional Notes */}
      <div>
        <label htmlFor="notes" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
          Ek Açıklama ve Teslimat Notları
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          value={formData.notes}
          onChange={handleInputChange}
          placeholder="Varsa özel toleranslar, ambalaj talebi, montaj ortamı veya teslim termin tarihi hakkında bilgi ekleyebilirsiniz."
          className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 text-industrial-900 text-sm focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white rounded-lg"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-4 border-t border-industrial-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-industrial-500 font-mono text-center sm:text-left">
          * Talebiniz gizlilik prensipleri çerçevesinde korunur ve 3. şahıslarla paylaşılmaz.
        </div>
        <Button
          type="submit"
          variant="accent"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? "İletiliyor..." : "Teklif Talebini Gönder →"}
        </Button>
      </div>
    </form>
  );
}
