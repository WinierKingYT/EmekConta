"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRfqCart } from "@/lib/cart-context";
import { companyData } from "@/data/company";
import {
  CheckCircleIcon,
  WhatsappIcon,
  PhoneIcon,
  DocumentTextIcon,
  ArrowRightIcon,
} from "@/components/icons/Icons";

export function RfqCartDrawer() {
  const {
    items,
    itemCount,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
    notification,
    dismissNotification,
  } = useRfqCart();

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
      setErrorMessage("Sepetinizde teklif istenecek ürün bulunmamaktadır.");
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
      `Merhaba Emek Conta, web sitenizdeki teklif sepetimden toplu fiyat ve teslim süresi almak istiyorum:\n\nYetkili: ${formData.fullName || "Müşteri"}\nFirma: ${formData.companyName || "-"}\n\nÜrünler:\n${itemsSummary}`
    );
  };

  return (
    <>
      {/* Toast Notification when item added */}
      {notification && (
        <div className="fixed bottom-20 left-6 z-50 max-w-sm p-4 bg-night text-white border border-industrial-700 rounded-xl shadow-2xl flex items-center justify-between gap-3 animate-fade-in">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <p className="text-xs font-mono">{notification}</p>
          </div>
          <button
            onClick={dismissNotification}
            className="text-industrial-400 hover:text-white text-xs font-mono px-1"
          >
            ✕
          </button>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={closeCart}
          className="fixed inset-0 bg-night/70 backdrop-blur-xs z-50 transition-opacity"
        />
      )}

      {/* Slide-over Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full sm:max-w-lg bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="px-6 py-4 bg-night text-white border-b border-industrial-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-rust"></span>
            <h2 className="text-base font-bold tracking-tight">Teklif Sepeti (RFQ Cart)</h2>
            <span className="text-xs font-mono px-2 py-0.5 bg-industrial-800 text-rust rounded-md">
              {itemCount} Ürün
            </span>
          </div>
          <button
            onClick={closeCart}
            aria-label="Sepeti Kapat"
            className="p-1.5 text-industrial-400 hover:text-white rounded-lg hover:bg-industrial-800 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 border border-emerald-300 rounded-full flex items-center justify-center mx-auto">
                <CheckCircleIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-industrial-900">
                Toplu Teklif Talebiniz Alındı!
              </h3>
              <p className="text-xs sm:text-sm text-industrial-600 max-w-sm mx-auto leading-relaxed">
                Mühendislik ekibimiz sepetinizdeki ürünleri ve çalışma şartlarınızı inceleyerek en kısa sürede resmi proforma iletecektir.
              </p>
              <div className="p-3 bg-industrial-50 border border-industrial-200 max-w-xs mx-auto rounded-lg font-mono text-xs">
                <span className="text-industrial-500 block text-[10px]">TAKİP NUMARASI:</span>
                <span className="text-rust font-bold text-lg">{referenceCode}</span>
              </div>
              <div className="pt-4 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${companyData.whatsapp.replace('+', '')}?text=${encodeURIComponent(`Merhaba Emek Conta, #${referenceCode} referans numaralı toplu teklif talebim hakkında bilgi almak istiyorum.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <WhatsappIcon className="w-4 h-4" />
                  <span>WhatsApp ile Teyit Et</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    closeCart();
                  }}
                  className="text-xs font-mono text-steel-blue hover:underline py-2"
                >
                  Kapat ve Alışverişe Devam Et
                </button>
              </div>
            </div>
          ) : items.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-14 h-14 bg-industrial-100 text-industrial-400 rounded-full flex items-center justify-center mx-auto">
                <DocumentTextIcon className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-industrial-800">
                Teklif Sepetiniz Boş
              </h3>
              <p className="text-xs text-industrial-500 max-w-xs mx-auto">
                Ürün sayfalarından "Teklif Sepetine Ekle" butonunu kullanarak contaları toplu teklif listenize ekleyebilirsiniz.
              </p>
              <div className="pt-2">
                <Link
                  href="/urunler"
                  onClick={closeCart}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-rust hover:bg-rust-light text-white text-xs font-mono font-semibold rounded-lg transition-colors"
                >
                  <span>Ürün Kataloğuna Gözat</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ) : (
            <>
              {/* Product List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-industrial-200 text-xs font-mono text-industrial-500">
                  <span>SEÇİLEN ÜRÜNLER ({items.length})</span>
                  <button
                    onClick={clearCart}
                    className="text-rose-600 hover:underline text-[11px]"
                  >
                    Listeyi Temizle
                  </button>
                </div>

                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 bg-industrial-50 border border-industrial-200 rounded-xl space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Link
                          href={`/urunler/${item.slug}`}
                          onClick={closeCart}
                          className="text-xs sm:text-sm font-bold text-night hover:text-rust transition-colors block"
                        >
                          {item.name}
                        </Link>
                        <span className="text-[10px] font-mono text-industrial-500">
                          {item.category} {item.dimensions ? `• ${item.dimensions}` : ""}
                        </span>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-[11px] font-mono text-rose-500 hover:text-rose-700"
                        title="Ürünü Çıkar"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs font-mono text-industrial-600">Miktar:</span>
                      <input
                        type="text"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, e.target.value)}
                        placeholder="Örn: 50 Adet"
                        className="w-28 px-2 py-1 bg-white border border-industrial-300 text-xs font-mono rounded text-right focus:outline-none focus:border-rust"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct WhatsApp Callout for Cart */}
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <WhatsappIcon className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div className="text-[11px] text-emerald-950 font-medium">
                    Listeyi doğrudan WhatsApp'tan göndermek ister misiniz?
                  </div>
                </div>
                <a
                  href={`https://wa.me/${companyData.whatsapp.replace('+', '')}?text=${getWhatsAppCartMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-mono font-bold rounded-lg transition-colors shrink-0"
                >
                  WhatsApp'a Aktar
                </a>
              </div>

              {/* Fast Checkout Form */}
              <form onSubmit={handleSubmit} className="pt-4 border-t border-industrial-200 space-y-3">
                <span className="text-xs font-mono font-bold text-industrial-700 block uppercase">
                  Toplu Teklif İletişim Bilgileri
                </span>

                {errorMessage && (
                  <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs font-medium rounded-lg">
                    {errorMessage}
                  </div>
                )}

                <input
                  type="text"
                  name="website_hp"
                  value={formData.website_hp}
                  onChange={handleInputChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Ad Soyad *"
                    className="w-full px-3 py-2 bg-industrial-50 border border-industrial-300 text-xs rounded-lg focus:outline-none focus:border-rust focus:bg-white"
                  />
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Telefon *"
                    className="w-full px-3 py-2 bg-industrial-50 border border-industrial-300 text-xs font-mono rounded-lg focus:outline-none focus:border-rust focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="E-posta (Teyit için)"
                    className="w-full px-3 py-2 bg-industrial-50 border border-industrial-300 text-xs font-mono rounded-lg focus:outline-none focus:border-rust focus:bg-white"
                  />
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Firma Adı"
                    className="w-full px-3 py-2 bg-industrial-50 border border-industrial-300 text-xs rounded-lg focus:outline-none focus:border-rust focus:bg-white"
                  />
                </div>

                <textarea
                  rows={2}
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Teslimat termin tarihi, toleranslar veya özel çalışma koşulu notları..."
                  className="w-full px-3 py-2 bg-industrial-50 border border-industrial-300 text-xs rounded-lg focus:outline-none focus:border-rust focus:bg-white resize-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-brick hover:bg-brick-hover text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors rounded-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Talebiniz İletiliyor...</span>
                  ) : (
                    <span>Tüm Liste İçin Resmi Teklif İste ({items.length} Kalem) →</span>
                  )}
                </button>

                <p className="text-[10px] font-mono text-industrial-400 text-center">
                  Talebiniz mesai saatleri içinde 2 saatte fiyatlandırılarak tarafınıza iletilir.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
