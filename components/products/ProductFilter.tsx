"use client";

import React, { useState, useMemo } from "react";
import { Product, ProductCategory } from "@/lib/types";
import { ProductCard } from "./ProductCard";
import { SearchIcon, FilterIcon } from "@/components/icons/Icons";

interface ProductFilterProps {
  products: Product[];
  categories: ProductCategory[];
  initialCategory?: string;
}

export function ProductFilter({
  products,
  categories,
  initialCategory,
}: ProductFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategory || "all"
  );
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category match
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      // Search match
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query) ||
        product.standards.some((s) => s.toLowerCase().includes(query)) ||
        product.materials.some((m) => m.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Filter and Search Bar */}
      <div className="bg-white border border-industrial-200 p-4 sm:p-6 space-y-4">
        {/* Search Input */}
        <div className="relative">
          <label htmlFor="product-search" className="sr-only">
            Ürün veya Standart Ara
          </label>
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-industrial-400">
            <SearchIcon className="w-5 h-5" />
          </div>
          <input
            id="product-search"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ürün adı, standart (ASME, DIN), malzeme (grafit, EPDM, PTFE) ara..."
            className="w-full pl-11 pr-4 py-2.5 bg-industrial-50 border border-industrial-300 text-industrial-900 text-sm placeholder-industrial-500 focus:outline-none focus:ring-2 focus:ring-steel-blue focus:bg-white rounded-none transition-colors"
          />
        </div>

        {/* Category Tabs */}
        <div>
          <div className="text-xs font-mono text-industrial-500 uppercase tracking-wider mb-2.5 flex items-center gap-2">
            <FilterIcon className="w-3.5 h-3.5" />
            <span>Kategoriye Göre Filtrele</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1.5 text-xs font-mono font-medium transition-colors border rounded-none ${
                selectedCategory === "all"
                  ? "bg-industrial-900 text-white border-industrial-900"
                  : "bg-industrial-50 text-industrial-700 border-industrial-200 hover:bg-industrial-100"
              }`}
            >
              Tüm Ürünler ({products.length})
            </button>

            {categories.map((cat) => {
              const count = products.filter((p) => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-mono font-medium transition-colors border rounded-none ${
                    selectedCategory === cat.id
                      ? "bg-industrial-900 text-white border-industrial-900"
                      : "bg-industrial-50 text-industrial-700 border-industrial-200 hover:bg-industrial-100"
                  }`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Result Status */}
      <div className="flex items-center justify-between text-xs font-mono text-industrial-500">
        <span>
          GÖSTERİLEN: <strong className="text-industrial-900">{filteredProducts.length}</strong> ÜRÜN
        </span>
        {(selectedCategory !== "all" || searchQuery) && (
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="text-steel-blue hover:underline"
          >
            Filtreleri Temizle
          </button>
        )}
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index < 3} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-white border border-industrial-200">
          <p className="text-base font-semibold text-industrial-800">
            Arama kriterlerine uygun ürün bulunamadı.
          </p>
          <p className="text-xs sm:text-sm text-industrial-500 mt-1 max-w-md mx-auto">
            Özel ölçü veya aradığınız özel spesifikasyon için lütfen doğrudan teknik resim veya numune ile teklif isteyin.
          </p>
        </div>
      )}
    </div>
  );
}
