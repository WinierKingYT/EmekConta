"use client";

import React, { useState, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  UploadCloudIcon,
  CheckCircleIcon,
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
    <section className="py-20 sm:py-28 bg-[#191D20] text-white relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Authoritative B2B Proposition & Guarantees */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[#DD895F] mb-6">
              <UploadCloudIcon className="w-3.5 h-3.5" />
              <span>06 / Talebinizi paylaşın</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-medium text-white tracking-[-0.045em] leading-[1.1]">
              Çözümünüz burada <br />
              <span className="text-[#DD895F]">başlasın.</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#C9CCC5] leading-relaxed">
              Teknik çiziminizi veya numune fotoğrafınızı ekleyin. Ölçü, adet ve çalışma şartlarını paylaşın; ihtiyacınıza uygun teklifi hazırlayalım.
            </p>

            <p className="mt-8 border-t border-white/15 pt-6 text-sm leading-relaxed text-[#B9BCB8]">Teknik resim, numune fotoğrafı veya ölçü bilgisiyle başlayabilirsiniz. Ekibimiz üretim gereksinimlerinizi sizinle birlikte değerlendirsin.</p>

            {/* Direct WhatsApp Callout */}
            <div className="mt-6 pt-6 border-t border-white/15 w-full flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between text-xs font-sans text-[#B9BCB8]">
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
          <div className="lg:col-span-7 bg-[#23282B] border border-white/15 p-5 sm:p-8 relative rounded-xl overflow-hidden">
            <div className="relative z-10">
              {/* Engraved Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/15 font-sans text-[10px] text-[#B9BCB8]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rust" />
                  <span className="font-bold text-white uppercase tracking-wider">Teknik teklif talebi</span>
                </span>
                <span className="text-[#A9AEA6] hidden sm:inline">Çizim / Numune / Ölçü</span>
              </div>
            {isSuccess ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircleIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Teknik Çizim Talebiniz Alındı!</h3>
                <p className="text-xs sm:text-sm text-[#C9CCC5] max-w-md mx-auto leading-relaxed">
                  Mühendislik ekibimiz dosyanızı incelemeye aldı. En geç 2 saat içinde belirttiğiniz telefon numarasından sizinle iletişime geçilecektir.
                </p>
                <div className="p-3 bg-[#191D20] border border-white/15 max-w-xs mx-auto font-sans text-xs text-[#C9CCC5] rounded-lg">
                  <span className="text-[#A9AEA6] block text-[10px]">TAKİP REFERANS KODU:</span>
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
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 text-white text-xs font-sans hover:bg-emerald-500 transition-colors rounded-lg"
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
                  <div className="p-3 bg-red-950/80 border border-red-500/50 text-red-200 text-xs font-sans rounded-lg">
                    {errorMessage}
                  </div>
                )}

                {/* Dropzone Area */}
                <div>
                  <label className="block text-xs font-sans text-[#C9CCC5] uppercase tracking-wider mb-2">
                    1. TEKNİK ÇİZİM VEYA NUMUNE FOTOĞRAFI (OPSİYONEL)
                  </label>

                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    role="button"
                    tabIndex={0}
                    aria-label="Teknik çizim veya numune fotoğrafı seç"
                    onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); fileInputRef.current?.click(); } }}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed p-6 text-center cursor-pointer transition-all rounded-xl ${
                      isDragging
                        ? "border-rust bg-rust/20"
                        : file
                        ? "border-emerald-500/60 bg-emerald-950/20"
                        : "border-white/25 bg-[#191D20] hover:border-rust/60 hover:bg-[#2C3235]"
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
                        <div className="min-w-0 text-left font-sans truncate max-w-full sm:max-w-xs">
                          <p className="text-xs text-white font-bold truncate">{file.name}</p>
                          <p className="text-[10px] text-[#B9BCB8]">
                            {(file.size / 1024).toFixed(1)} KB — Yüklendi
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setFile(null);
                          }}
                          className="text-[10px] font-sans text-rose-400 hover:underline ml-2"
                        >
                          Kaldır
                        </button>
                      </div>
                    ) : (
                      <div>
                        <UploadCloudIcon className="w-8 h-8 text-rust mx-auto mb-2" />
                        <p className="text-xs font-sans text-industrial-200 font-semibold">
                          Dosyayı buraya sürükleyin veya <span className="text-rust underline">gözatın</span>
                        </p>
                        <p className="text-[10px] font-sans text-[#A9AEA6] mt-1">
                          Desteklenen: PDF, DWG, DXF, STEP, PNG, JPG (Maks. 25 MB)
                        </p>
                      </div>
                    )}
                  </div>

                  {fileError && (
                    <p className="text-[11px] font-sans text-rose-400 mt-1.5">{fileError}</p>
                  )}
                </div>

                {/* Contact Fields Grid */}
                <div className="pt-2">
                  <label className="block text-xs font-sans text-[#C9CCC5] uppercase tracking-wider mb-2">
                    2. İLETİŞİM VE TEKLİF DETAYLARI
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Yetkili Adı Soyadı *" aria-label="Yetkili Adı Soyadı *"
                        className="w-full px-3.5 py-2.5 bg-[#191D20] border border-white/25 text-white text-xs font-sans placeholder-[#A9AEA6] focus:outline-none focus:border-rust rounded-lg"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Telefon Numarası (Teklif İçin) *" aria-label="Telefon Numarası (Teklif İçin) *"
                        className="w-full px-3.5 py-2.5 bg-[#191D20] border border-white/25 text-white text-xs font-sans placeholder-[#A9AEA6] focus:outline-none focus:border-rust rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                    <div>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Firma Adı (Opsiyonel)" aria-label="Firma Adı (Opsiyonel)"
                        className="w-full px-3.5 py-2.5 bg-[#191D20] border border-white/25 text-white text-xs font-sans placeholder-[#A9AEA6] focus:outline-none focus:border-rust rounded-lg"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-posta Adresi (Yazılı Teklif İçin)" aria-label="E-posta Adresi (Yazılı Teklif İçin)"
                        className="w-full px-3.5 py-2.5 bg-[#191D20] border border-white/25 text-white text-xs font-sans placeholder-[#A9AEA6] focus:outline-none focus:border-rust rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="mt-3">
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Ölçü, adet veya çalışma şartı notları (Örn: DN50 PN16, 50 adet, 250°C buhar hattı)..." aria-label="Ölçü, adet veya çalışma şartı notları (Örn: DN50 PN16, 50 adet, 250°C buhar hattı)..."
                      className="w-full px-3.5 py-2.5 bg-[#191D20] border border-white/25 text-white text-xs font-sans placeholder-[#A9AEA6] focus:outline-none focus:border-rust resize-none rounded-lg"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#B7410E] hover:bg-[#96350B] text-white text-sm font-semibold transition-colors flex items-center justify-center gap-4 disabled:opacity-50 rounded-lg cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Teknik Çizim İletiliyor...</span>
                      </>
                    ) : (
                      <>
                        <span>Teklif talebini gönder</span>
                        <span className="text-white font-bold">→</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[10px] font-sans text-[#A9AEA6] text-center">
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
