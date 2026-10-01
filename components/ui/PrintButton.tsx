"use client";

import { PrinterIcon } from "@/components/icons/Icons";
import { trackDatasheetPrint } from "@/lib/analytics";

interface PrintButtonProps {
  label?: string;
  className?: string;
  productSlug?: string;
  productName?: string;
}

export function PrintButton({
  label = "Sayfayı Yazdır / PDF Olarak Kaydet",
  className = "inline-flex items-center gap-2 px-4 py-2 bg-rust hover:bg-rust-light text-white text-xs font-mono font-bold uppercase tracking-wider rounded-lg transition-colors shadow-xs cursor-pointer",
  productSlug = "general-datasheet",
  productName = "Teknik Ürün Veri Föyü",
}: PrintButtonProps) {
  return (
    <button
      type="button"
      onClick={() => {
        trackDatasheetPrint(productSlug, productName);
        if (typeof window !== "undefined") {
          window.print();
        }
      }}
      className={className}
      aria-label="Yazdır veya PDF olarak kaydet"
    >
      <PrinterIcon className="w-4 h-4" />
      <span>{label}</span>
    </button>
  );
}
