import { MetadataRoute } from "next";
import { productsData } from "@/data/products";
import { sectorsData } from "@/data/sectors";
import { articlesData } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://emekconta.com";
  const currentDate = new Date().toISOString();

  // Core static marketing and B2B pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/urunler`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ozel-uretim`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sektorler`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/teklif-iste`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/numune-talep`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/teklif-sepeti`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/bayi-basvuru`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/teknik-bilgi`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ihracat`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/en/export`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/products`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/kvkk`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/cerez-politikasi`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  // Dynamic Product Pages & Datasheets
  const productRoutes: MetadataRoute.Sitemap = productsData.flatMap((p) => [
    {
      url: `${baseUrl}/urunler/${p.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/urunler/${p.slug}/datasheet`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]);

  // Dynamic English Product Pages
  const enProductRoutes: MetadataRoute.Sitemap = productsData.map((p) => ({
    url: `${baseUrl}/en/products/${p.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic Sector Pages
  const sectorRoutes: MetadataRoute.Sitemap = sectorsData.map((s) => ({
    url: `${baseUrl}/sektorler/${s.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Dynamic Technical Knowledge Pages
  const articleRoutes: MetadataRoute.Sitemap = articlesData.map((a) => ({
    url: `${baseUrl}/teknik-bilgi/${a.slug}`,
    lastModified: a.updatedAt || currentDate,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [
    ...staticRoutes,
    ...productRoutes,
    ...enProductRoutes,
    ...sectorRoutes,
    ...articleRoutes,
  ];
}
