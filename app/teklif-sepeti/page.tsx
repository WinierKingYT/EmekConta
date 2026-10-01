"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { useRfqCart } from "@/lib/cart-context";
import { companyData } from "@/data/company";
import {
  CheckCircleIcon,
  WhatsappIcon,
  PhoneIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
} from "@/components/icons/Icons";

export default function CartPage() {
  const { items, itemCount, removeItem, updateQuantity, clearCart } = useRfqCart();

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    notes: "",
    website_hp: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceCode, setReferenceCode] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMessage("Lütfen Ad Soyad ve Telefon Numarası alanlarını doldurunuz.");
      return;
    }

    if (items.length === 0) {
      setErrorMessage("Sepetinizde ürün bulunmamaktadır.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        type: "rfq_cart",
        fullName: formData.fullName.trim(),
        companyName: formData.companyName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        notes: formData.notes.trim(),
        website_hp: formData.website_hp,
        cartItems: items,
      };

      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Toplu teklif iletilirken bir hata oluştu.");
      }

      setReferenceCode(data.referenceCode || `EC-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSuccess(true);
      clearCart();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Toplu teklif iletilirken bir hata oluştu.";
      setErrorMessage(`${msg} Lütfen doğrudan telefon veya WhatsApp ile iletişime geçiniz.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppCartMessage = () => {
    const itemsSummary = items
      .map((it, idx) => `${idx + 1}. ${it.name} - Miktar: ${it.quantity}${it.dimensions ? ` (${it.dimensions})` : ""}`)
      .join("\n");

    return encodeURIComponent(
      `Merhaba Emek Conta, teklif sepetimdeki ürünler için toplu fiyat teklifi almak istiyorum:\n\nYetkili: ${formData.fullName || "Müşteri"}\nFirma: ${formData.companyName || "-"}\n\nÜrünler:\n${itemsSummary}`
    );
  };

  if (isSuccess) {
    return (
      <div className="py-12 bg-industrial-50 min-h-screen">
        <Container size="narrow">
          <div className="bg-white border-2 border-emerald-500 p-8 sm:p-12 text-center rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 border border-emerald-300 rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircleIcon className="w-8 h-8" />
            </div>
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-700 uppercase block mb-1">
              TOPLU TEKLİF TALEBİ ALINDI
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-industrial-900 tracking-tight">
              Talebiniz Başarıyla İletildi
            </h1>
            <p className="mt-4 text-sm sm:text-base text-industrial-600 max-w-md mx-auto leading-relaxed">
              Sayın <strong>{formData.fullName}</strong>, listenizdeki tüm kalemler incelenerek mesai saatleri içinde resmi proforma ve termin süresi tarafınıza sunulacaktır.
            </p>

            <div className="mt-6 p-4 bg-industrial-50 border border-industrial-200 max-w-sm mx-auto rounded-lg font-mono">
              <span className="text-[11px] text-industrial-500 uppercase tracking-wider block">
                TALEP REFERANS KODU:
              </span>
              <span className="text-xl font-bold text-rust">{referenceCode}</span>
            </div>

            <div className="mt-8 pt-6 border-t border-industrial-200 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
              <a
                href={`tel:${companyData.phone}`}
                className="px-4 py-2.5 bg-industrial-900 text-white hover:bg-industrial-800 transition-colors inline-flex items-center gap-2 rounded-lg"
              >
                <PhoneIcon className="w-4 h-4 text-steel-blue" />
                <span>Santral: {companyData.phoneFormatted}</span>
              </a>
              <a
                href={`https://wa.me/${companyData.whatsapp.replace('+', '')}?text=${encodeURIComponent(`Merhaba Emek Conta, #${referenceCode} referans kodlu toplu teklif talebim hakkında bilgi almak istiyorum.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-emerald-600 text-white hover:bg-emerald-700 transition-colors inline-flex items-center gap-2 rounded-lg"
              >
                <WhatsappIcon className="w-4 h-4" />
                <span>WhatsApp ile Teyit Et</span>
              </a>
            </div>

            <div className="mt-6">
              <Link
                href="/urunler"
                className="text-xs font-mono text-steel-blue hover:underline"
              >
                ← Ürün Kataloğuna Dön
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-8 sm:py-12 bg-industrial-50 min-h-screen">
      <Container>
        <Breadcrumb items={[{ label: "Teklif Sepeti" }]} className="mb-6" />

        <div className="bg-white border border-industrial-200 rounded-xl p-6 sm:p-10 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-rust inline-block"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-rust">
              TOPLU TEKLİF LİSTESİ
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-night tracking-tight">
            Teklif Sepetiniz ({itemCount} Kalem)
          </h1>
          <p className="mt-3 text-sm sm:text-base text-industrial-600 leading-relaxed">
            Seçtiğiniz contaların miktarlarını düzenleyebilir ve tek bir başvuru ile toplu fiyat ve teslim termin süresi alabilirsiniz.
          </p>
        </div>

        {items.length === 0 ? (
          <div className="bg-white border border-industrial-200 rounded-xl p-12 text-center max-w-lg mx-auto space-y-4">
            <div className="w-16 h-16 bg-industrial-100 text-industrial-400 rounded-full flex items-center justify-center mx-auto">
              <DocumentTextIcon className="w-8 h-8" />
            </div>
            <h2 className="text-lg font-bold text-industrial-900">
              Sepetinizde Ürün Bulunmuyor
            </h2>
            <p className="text-xs sm:text-sm text-industrial-600">
              Ürün sayfalarından "Teklif Sepetine Ekle" butonunu kullanarak dilediğiniz contayı listenize ekleyebilirsiniz.
            </p>
            <div className="pt-2">
              <Link
                href="/urunler"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-rust hover:bg-rust-light text-white text-xs font-mono font-bold uppercase tracking-wider rounded-lg transition-colors"
              >
                <span>Ürünleri İncele</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Cart Items Table */}
            <div className="lg:col-span-7 bg-white border border-industrial-200 rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-industrial-200 text-xs font-mono text-industrial-500">
                <span>SEÇİLEN ÜRÜNLER ({items.length})</span>
                <button
                  onClick={clearCart}
                  className="text-rose-600 hover:underline text-xs"
                >
                  Listeyi Temizle
                </button>
              </div>

              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-industrial-50 border border-industrial-200 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <Link
                        href={`/urunler/${item.slug}`}
                        className="font-bold text-sm text-night hover:text-rust transition-colors block"
                      >
                        {item.name}
                      </Link>
                      <span className="text-xs font-mono text-industrial-500">
                        {item.category} {item.dimensions ? `• ${item.dimensions}` : ""}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 text-xs font-mono">
                        <span className="text-industrial-600">Adet/Miktar:</span>
                        <input
                          type="text"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, e.target.value)}
                          className="w-24 px-2 py-1 bg-white border border-industrial-300 rounded text-center text-xs font-mono focus:outline-none focus:border-rust"
                        />
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-rose-500 hover:text-rose-700 font-mono"
                        title="Sil"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-industrial-200 flex items-center justify-between">
                <Link
                  href="/urunler"
                  className="text-xs font-mono text-steel-blue hover:underline"
                >
                  ← Daha Fazla Ürün Ekle
                </Link>
                <a
                  href={`https://wa.me/${companyData.whatsapp.replace('+', '')}?text=${getWhatsAppCartMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-semibold rounded-lg transition-colors"
                >
                  <WhatsappIcon className="w-4 h-4" />
                  <span>Listeyi WhatsApp'a Aktar</span>
                </a>
              </div>
            </div>

            {/* Right: Checkout Contact Form */}
            <div className="lg:col-span-5 bg-white border border-industrial-200 rounded-xl p-6 sm:p-8 space-y-4">
              <h2 className="text-base font-bold text-night uppercase tracking-wider font-mono">
                Toplu Teklif İletişim Bilgileri
              </h2>

              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg font-medium">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="website_hp"
                  value={formData.website_hp}
                  onChange={handleInputChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label className="block text-xs font-mono font-medium text-industrial-700 mb-1">
                    Ad Soyad <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Yetkili adı ve soyadı"
                    className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-xs focus:outline-none focus:border-rust focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-industrial-700 mb-1">
                    Firma Adı
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Firma ünvanı"
                    className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-xs focus:outline-none focus:border-rust focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-industrial-700 mb-1">
                    Telefon Numarası <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="0 (5XX) XXX XX XX"
                    className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-xs font-mono focus:outline-none focus:border-rust focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-industrial-700 mb-1">
                    Kurumsal E-posta
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="ornek@firma.com"
                    className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-xs font-mono focus:outline-none focus:border-rust focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-industrial-700 mb-1">
                    Proje & Teslimat Notları
                  </label>
                  <textarea
                    rows={3}
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Termin tarihi, ambalaj veya özel çalışma koşulları..."
                    className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-xs focus:outline-none focus:border-rust focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-brick hover:bg-brick-hover text-white text-xs font-mono font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? "İletiliyor..." : `Tüm Liste İçin Teklif İste (${items.length} Kalem) →`}
                </button>

                <div className="flex items-center gap-2 text-[11px] font-mono text-industrial-500 pt-1">
                  <ShieldCheckIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Mesai saatlerinde 2 saatte proforma fiyatlandırma yapılır.</span>
                </div>
              </form>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
