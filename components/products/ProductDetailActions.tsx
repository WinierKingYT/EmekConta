"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Product } from "@/lib/types";
import { useRfqCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/Button";
import {
  UploadCloudIcon,
  DocumentTextIcon,
  CheckCircleIcon,
} from "@/components/icons/Icons";

interface ProductDetailActionsProps {
  product: Product;
}

export function ProductDetailActions({ product }: ProductDetailActionsProps) {
  const { addItem, openCart } = useRfqCart();
  const [justAdded, setJustAdded] = useState(false);
  const [quantity, setQuantity] = useState("50 Adet");

  const handleAddToCart = () => {
    addItem({
      slug: product.slug,
      name: product.name,
      category: product.category,
      quantity: quantity || "1 Adet",
      material: product.materials[0]?.split(":")[0] || undefined,
    });

    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2500);
  };

  return (
    <div className="space-y-4">
      {/* Quick Add To Batch Cart Controls */}
      <div className="p-4 bg-industrial-50 border border-industrial-200 rounded-xl space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-industrial-800 uppercase">
            Toplu Teklif Sepeti
          </span>
          <span className="text-[11px] font-mono text-industrial-500">
            Fiyat olmadan listeye ekle
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="w-full sm:w-44 flex items-center gap-2">
            <label htmlFor="quick-qty" className="text-xs font-mono text-industrial-600 shrink-0">
              Miktar:
            </label>
            <input
              id="quick-qty"
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Örn: 50 Adet"
              className="w-full px-3 py-2 bg-white border border-industrial-300 rounded-lg text-xs font-mono focus:outline-none focus:border-rust"
            />
          </div>

          <div className="w-full sm:flex-1 flex gap-2">
            <button
              type="button"
              onClick={handleAddToCart}
              className={`flex-1 py-2.5 px-4 font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                justAdded
                  ? "bg-emerald-600 text-white"
                  : "bg-industrial-900 hover:bg-industrial-800 text-white shadow-xs"
              }`}
            >
              {justAdded ? (
                <>
                  <CheckCircleIcon className="w-4 h-4 text-white" />
                  <span>Listeye Eklendi ✓</span>
                </>
              ) : (
                <>
                  <span>+ Teklif Sepetine Ekle</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={openCart}
              title="Sepeti Görüntüle"
              className="px-3 py-2.5 bg-white hover:bg-industrial-100 text-industrial-700 border border-industrial-300 rounded-lg text-xs font-mono cursor-pointer transition-colors"
            >
              Sepetim
            </button>
          </div>
        </div>
      </div>

      {/* Primary Actions: Direct RFQ and PDF Datasheet */}
      <div className="flex flex-wrap items-center gap-3">
        <Button
          href={`/teklif-iste?urun=${encodeURIComponent(product.name)}`}
          variant="accent"
          size="lg"
          className="flex-1 sm:flex-none"
        >
          <UploadCloudIcon className="w-4 h-4 mr-2" />
          <span>Bu Ürün İçin Teklif İste</span>
        </Button>

        {/* Technical PDF Datasheet Link */}
        <a
          href={`/urunler/${product.slug}/datasheet`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white hover:bg-industrial-100 text-industrial-800 hover:text-night border border-industrial-300 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-xs"
        >
          <DocumentTextIcon className="w-4 h-4 text-rust" />
          <span>Teknik Föyü İndir (PDF)</span>
        </a>

        <Button
          href="/ozel-uretim"
          variant="outline"
          size="lg"
          className="flex-1 sm:flex-none"
        >
          Teknik Çizim Gönder
        </Button>
      </div>
    </div>
  );
}
