/**
 * Core domain types for Emek Conta
 */

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface ProductSpecification {
  property: string;
  value: string;
  standard?: string;
  notes?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategoryType;
  shortDescription: string;
  description: string;
  features: string[];
  materials: string[];
  standards: string[];
  applications: string[];
  specifications: ProductSpecification[];
  image?: string;
  imagePlaceholderText: string;
  drawingSupported: boolean;
  relatedProductSlugs: string[];
  seoTitle: string;
  seoDescription: string;
}

export interface EnglishProduct {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug?: string;
  shortDescription: string;
  description: string;
  features: string[];
  materials: string[];
  standards: string[];
  sectors?: string[];
  applications?: string[];
  specifications: ProductSpecification[];
  image?: string;
  imagePlaceholderText?: string;
  drawingSupported?: boolean;
  relatedProductSlugs?: string[];
  seoTitle?: string;
  seoDescription?: string;
  pressureRange?: string;
  temperatureRange?: string;
}

export type ProductCategoryType =
  | "contalar"
  | "contalik-malzemeler"
  | "kaucuk-urunleri"
  | "ptfe-plastik"
  | "salmastralar"
  | "yuksek-isi-urunleri";

export interface ProductCategory {
  id: ProductCategoryType;
  name: string;
  shortDescription: string;
  description: string;
  itemCountEstimated: string;
  highlights: string[];
  image?: string;
}

export interface IndustrySector {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  challenges: string[];
  solutions: string[];
  recommendedProducts: string[];
  standards: string[];
}

export interface TechnicalArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  readingTimeMinutes: number;
  publishedAt: string;
  updatedAt: string;
  content: {
    heading: string;
    body: string[];
  }[];
  standardsMentioned?: string[];
  relatedArticlesSlugs?: string[];
}

export interface CompanyLocation {
  name: string;
  type: "Merkez / İmalat" | "Satış / Şube" | "Satış & İletişim" | "Merkez Satış Ofisi";
  address: string;
  district: string;
  city: string;
  phone: string;
  email: string;
  workingHours: string;
  mapEmbedQuery?: string;
}

export interface CompanyProfile {
  name: string;
  brandTitle: string;
  foundingYear: number;
  coreMessage: string;
  subMessage: string;
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  whatsappFormatted: string;
  email: string;
  quoteEmail: string;
  locations: CompanyLocation[];
}

export interface RfqCartItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  quantity: string;
  dimensions?: string;
  material?: string;
  notes?: string;
}

export interface RfqEmailPayload {
  referenceCode: string;
  type: "rfq_detailed" | "rfq_quick" | "sample_request" | "rfq_cart" | "distributor_application";
  fullName: string;
  companyName?: string;
  phone: string;
  email?: string;
  category?: string;
  productName?: string;
  quantity?: string;
  dimensions?: string;
  material?: string;
  temperature?: string;
  pressure?: string;
  medium?: string;
  standard?: string;
  notes?: string;
  fileNames?: string[];
  sampleMaterials?: string[];
  thickness?: string;
  deliveryAddress?: string;
  city?: string;
  district?: string;
  taxOfficeOrNumber?: string;
  cartItems?: RfqCartItem[];
  businessType?: string;
  activityRegion?: string;
  warehouseArea?: string;
  targetProducts?: string[];
  estimatedAnnualVolume?: string;
  createdAt?: string;
}

