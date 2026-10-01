"use client";

import React, { useState, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  UploadCloudIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  ClockIcon,
  WhatsappIcon,
  PhoneIcon,
  DocumentTextIcon,
} from "@/components/icons/Icons";
import { companyData } from "@/data/company";
import { trackRfqSubmission } from "@/lib/analytics";

export function QuickRFQDropzone() {
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceCode, setReferenceCode] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const validateAndSetFile = (selectedFile: File) => {
    setFileError(null);
    const ext = selectedFile.name.split(".").pop()?.toLowerCase();
    if (!ext || !allowedExtensions.includes(ext)) {
      setFileError(
        `Geçersiz dosya: ${selectedFile.name}. Yalnızca PDF, DWG, DXF, STEP, PNG, JPG kabul edilmektedir.`
      );
      return;
    }
    if (selectedFile.size > maxSizeBytes) {
      setFileError(`Dosya boyutu çok büyük: ${(selectedFile.size / (1024 * 1024)).toFixed(1)} MB (Maks. 25 MB).`);
      return;
    }
    setFile(selectedFile);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    if (!fullName.trim() || !phone.trim()) {
      setErrorMessage("Lütfen Ad Soyad ve Telefon Numarası alanlarını doldurunuz.");
      return;
    }

    if (honeypot) {
      setIsSuccess(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = new FormData();
      payload.append("type", "rfq_quick");
      payload.append("fullName", fullName.trim());
      payload.append("phone", phone.trim());
      payload.append("email", email.trim());
      payload.append("companyName", company.trim());
      payload.append("notes", notes.trim());
      payload.append("website_hp", honeypot);
      if (file) {
        payload.append("file", file);
      }

      const res = await fetch("/api/rfq", {
        method: "POST",
        body: payload,
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Talebiniz iletilirken bir hata oluştu.");
      }

      const ref = data.referenceCode || `EC-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceCode(ref);
      trackRfqSubmission({
        formType: "rfq_quick",
        referenceCode: ref,
        companyName: company.trim(),
      });
      setIsSuccess(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Teknik çizim iletilirken bir hata oluştu.";
      setErrorMessage(`${msg} Lütfen doğrudan telefon veya WhatsApp ile iletişime geçiniz.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setFileError(null);
    setFullName("");
    setPhone("");
    setEmail("");
    setCompany("");
    setNotes("");
    setErrorMessage(null);
    setIsSuccess(false);
    setReferenceCode("");
  };

  const whatsappQuickMessage = encodeURIComponent(
    `Merhaba Emek Conta, anasayfadan teknik çizimim veya numunem için hızlı teklif almak istiyorum. Yetkili: ${fullName || "Görüşmeci"}, Firma: ${company || "-"}`
  );

  return (
    <section className="py-16 sm:py-24 bg-industrial-950 text-white border-b border-industrial-800 relative overflow-hidden">
      {/* Precision grid background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Authoritative B2B Proposition & Guarantees */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-industrial-900 border border-industrial-800 text-xs font-mono text-rust mb-4 rounded-md">
              <UploadCloudIcon className="w-3.5 h-3.5" />
              <span>HIZLI TEKNİK ÇİZİM DEĞERLENDİRME</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Teknik Çiziminizi Yükleyin, <br />
              <span className="text-rust">2 Saatte Teklif</span> Alın
            </h2>

            <p className="mt-4 text-sm sm:text-base text-industrial-300 leading-relaxed">
              CAD çiziminiz (DWG, DXF, STEP, PDF) veya atölyede çektiğiniz numune fotoğrafı için aynı gün mühendislik incelemesi ve resmi proforma teklifi sunuyoruz.
            </p>

            {/* SLA & Security Guarantees */}
            <div className="mt-8 space-y-4 w-full">
              <div className="flex items-start gap-3 p-3 bg-industrial-900/60 border border-industrial-800 rounded-xl">
                <ClockIcon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    2 Saat İçinde Geri Dönüş Garantisi
                  </h3>
                  <p className="text-xs text-industrial-400 mt-0.5">
                    Mesai saatleri içindeki teknik çizim talepleri aynı gün fiyatlandırılır.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-industrial-900/60 border border-industrial-800 rounded-xl">
                <ShieldCheckIcon className="w-5 h-5 text-rust shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    Gizlilik & Ticari NDA Güvencesi
                  </h3>
                  <p className="text-xs text-industrial-400 mt-0.5">
                    Paylaştığınız teknik resimler ve ölçüler gizlilik sözleşmesi (NDA) kapsamındadır.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-industrial-900/60 border border-industrial-800 rounded-xl">
                <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    Sıfır Kalıp Maliyeti (CNC Kesim)
                  </h3>
                  <p className="text-xs text-industrial-400 mt-0.5">
                    Vakumlu CNC bıçak tezgahımızla özel flanş ve karter contalarını kalıpsız kesiyoruz.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="mt-6 pt-6 border-t border-industrial-850 w-full flex items-center justify-between text-xs font-mono text-industrial-400">
              <span>Doğrudan Çizim Gönderin:</span>
              <a
                href={`https://wa.me/${companyData.whatsapp.replace('+', '')}?text=${whatsappQuickMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                <WhatsappIcon className="w-4 h-4" />
                <span>WhatsApp: {companyData.whatsappFormatted}</span>
              </a>
            </div>
          </div>

          {/* Right Column: The Direct Dropzone Form */}
          <div className="lg:col-span-7 bg-industrial-900 border border-industrial-800 p-6 sm:p-8 shadow-2xl relative rounded-xl overflow-hidden">
            {/* Subtle blueprint dark grid */}
            <div className="absolute inset-0 bg-blueprint-dark opacity-40 pointer-events-none" />

            {/* Corner CAD reticles (+) */}
            <span className="absolute top-2.5 left-2.5 text-[9px] font-mono text-industrial-500 pointer-events-none select-none z-10">+</span>
            <span className="absolute top-2.5 right-2.5 text-[9px] font-mono text-industrial-500 pointer-events-none select-none z-10">+</span>
            <span className="absolute bottom-2.5 left-2.5 text-[9px] font-mono text-industrial-500 pointer-events-none select-none z-10">+</span>
            <span className="absolute bottom-2.5 right-2.5 text-[9px] font-mono text-industrial-500 pointer-events-none select-none z-10">+</span>

            <div className="relative z-10">
              {/* Engraved Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-industrial-800 font-mono text-[10px] text-industrial-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rust" />
                  <span className="font-bold text-white uppercase tracking-wider">DİJİTAL ÇİZİM MASASI // CAD DROPZONE</span>
                </span>
                <span className="text-industrial-500 hidden sm:inline">AUTOCAD • SOLIDWORKS • STEP</span>
              </div>
            {isSuccess ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircleIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Teknik Çizim Talebiniz Alındı!</h3>
                <p className="text-xs sm:text-sm text-industrial-300 max-w-md mx-auto leading-relaxed">
                  Mühendislik ekibimiz dosyanızı incelemeye aldı. En geç 2 saat içinde belirttiğiniz telefon numarasından sizinle iletişime geçilecektir.
                </p>
                <div className="p-3 bg-industrial-950 border border-industrial-800 max-w-xs mx-auto font-mono text-xs text-industrial-300 rounded-lg">
                  <span className="text-industrial-500 block text-[10px]">TAKİP REFERANS KODU:</span>
                  <span className="text-emerald-400 font-bold text-base">{referenceCode}</span>
                </div>
                <div className="pt-4 flex justify-center gap-3">
                  <Button variant="outline" size="sm" onClick={handleReset}>
                    Yeni Dosya Gönder
                  </Button>
                  <a
                    href={`https://wa.me/${companyData.whatsapp.replace('+', '')}?text=${encodeURIComponent(`Merhaba Emek Conta, #${referenceCode} referans kodlu teknik çizimim hakkında bilgi almak istiyorum.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 text-white text-xs font-mono hover:bg-emerald-500 transition-colors rounded-lg"
                  >
                    <WhatsappIcon className="w-4 h-4" />
                    <span>WhatsApp'tan Takip Et</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot for spam bots */}
                <input
                  type="text"
                  name="website_hp"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {errorMessage && (
                  <div className="p-3 bg-red-950/80 border border-red-500/50 text-red-200 text-xs font-mono rounded-lg">
                    {errorMessage}
                  </div>
                )}

                {/* Dropzone Area */}
                <div>
                  <label className="block text-xs font-mono text-industrial-300 uppercase tracking-wider mb-2">
                    1. TEKNİK ÇİZİM VEYA NUMUNE FOTOĞRAFI (OPSİYONEL)
                  </label>

                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed p-6 text-center cursor-pointer transition-all rounded-xl ${
                      isDragging
                        ? "border-rust bg-rust/20"
                        : file
                        ? "border-emerald-500/60 bg-emerald-950/20"
                        : "border-industrial-700 bg-industrial-950/70 hover:border-rust/60 hover:bg-industrial-950"
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.dwg,.dxf,.step,.stp,.iges,.igs,.png,.jpg,.jpeg"
                      className="hidden"
                    />

                    {file ? (
                      <div className="flex items-center justify-center gap-3">
                        <DocumentTextIcon className="w-8 h-8 text-emerald-400 shrink-0" />
                        <div className="text-left font-mono truncate max-w-[280px] sm:max-w-xs">
                          <p className="text-xs text-white font-bold truncate">{file.name}</p>
                          <p className="text-[10px] text-industrial-400">
                            {(file.size / 1024).toFixed(1)} KB — Yüklendi
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setFile(null);
                          }}
                          className="text-[10px] font-mono text-rose-400 hover:underline ml-2"
                        >
                          Kaldır
                        </button>
                      </div>
                    ) : (
                      <div>
                        <UploadCloudIcon className="w-8 h-8 text-rust mx-auto mb-2" />
                        <p className="text-xs font-mono text-industrial-200 font-semibold">
                          Dosyayı buraya sürükleyin veya <span className="text-rust underline">gözatın</span>
                        </p>
                        <p className="text-[10px] font-mono text-industrial-500 mt-1">
                          Desteklenen: PDF, DWG, DXF, STEP, PNG, JPG (Maks. 25 MB)
                        </p>
                      </div>
                    )}
                  </div>

                  {fileError && (
                    <p className="text-[11px] font-mono text-rose-400 mt-1.5">{fileError}</p>
                  )}
                </div>

                {/* Contact Fields Grid */}
                <div className="pt-2">
                  <label className="block text-xs font-mono text-industrial-300 uppercase tracking-wider mb-2">
                    2. İLETİŞİM VE TEKLİF DETAYLARI
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Yetkili Adı Soyadı *"
                        className="w-full px-3.5 py-2.5 bg-industrial-950 border border-industrial-700 text-white text-xs font-mono placeholder-industrial-500 focus:outline-none focus:border-rust rounded-lg"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Telefon Numarası (Teklif İçin) *"
                        className="w-full px-3.5 py-2.5 bg-industrial-950 border border-industrial-700 text-white text-xs font-mono placeholder-industrial-500 focus:outline-none focus:border-rust rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                    <div>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Firma Adı (Opsiyonel)"
                        className="w-full px-3.5 py-2.5 bg-industrial-950 border border-industrial-700 text-white text-xs font-mono placeholder-industrial-500 focus:outline-none focus:border-rust rounded-lg"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-posta Adresi (Yazılı Teklif İçin)"
                        className="w-full px-3.5 py-2.5 bg-industrial-950 border border-industrial-700 text-white text-xs font-mono placeholder-industrial-500 focus:outline-none focus:border-rust rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="mt-3">
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Ölçü, adet veya çalışma şartı notları (Örn: DN50 PN16, 50 adet, 250°C buhar hattı)..."
                      className="w-full px-3.5 py-2.5 bg-industrial-950 border border-industrial-700 text-white text-xs font-mono placeholder-industrial-500 focus:outline-none focus:border-rust resize-none rounded-lg"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-gradient-to-b from-rust-hot via-rust to-rust-forge hover:from-rust-ember hover:to-rust text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 border border-rust-ember/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_4px_16px_rgba(183,65,14,0.35)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_0_24px_rgba(232,89,34,0.45)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 rounded-lg cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Teknik Çizim İletiliyor...</span>
                      </>
                    ) : (
                      <>
                        <span>Teknik Teklif İste (2 Saatte Geri Dönüş)</span>
                        <span className="text-white font-bold">→</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[10px] font-mono text-industrial-500 text-center">
                  Formu göndererek teknik verilerinizin gizlilik (NDA) esaslarına göre incelenmesini onaylamış olursunuz.
                </p>
              </form>
            )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
