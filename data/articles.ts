import { TechnicalArticle } from "@/lib/types";

export const articlesData: TechnicalArticle[] = [
  {
    id: "spiral-sarimli-conta-nedir-nasil-calisir",
    slug: "spiral-sarimli-conta-nedir-nasil-calisir",
    title: "Spiral Sarımlı Conta Nedir? Çalışma Prensibi ve Seçim Kriterleri",
    category: "Conta Seçimi",
    summary: "Yüksek sıcaklık ve basınç altındaki flanş bağlantılarında en çok tercih edilen spiral sarımlı contaların metal şerit, dolgu ve halka yapısı.",
    readingTimeMinutes: 5,
    publishedAt: "2026-01-15",
    updatedAt: "2026-03-20",
    standardsMentioned: ["ASME B16.20", "DIN EN 1514-2"],
    content: [
      {
        heading: "1. Spiral Sarımlı Contanın Yapısı",
        body: [
          "Spiral sarımlı contalar (Spiral Wound Gaskets), V-kesitli paslanmaz çelik metal şeridin esnek bir dolgu malzemesi (genellikle saf grafit veya PTFE) ile ardışık ve helisel olarak sarılmasıyla imal edilir.",
          "V-şeklindeki metal profil, contaya mekanik bir yay özelliği kazandırır. Bu yay etkisi, flanş cıvatalarında meydana gelebilecek termal genleşme veya basınç dalgalanmalarına karşı contanın sürekli temas basıncını korumasını sağlar.",
        ],
      },
      {
        heading: "2. Halka Çeşitleri ve Görevleri",
        body: [
          "Dış Merkezleme Halkası (Outer Ring): Contanın flanş cıvataları arasına tam merkezlenmesini sağlar ve sarım bölgesinin aşırı sıkışmasını engeller. Genellikle korozyona karşı boyalı karbon çelikten üretilir.",
          "İç Halka (Inner Ring): Akışkan türbülansını azaltır ve contanın içe doğru patlamasını (inward buckling) engeller. Özellikle ASME B16.20 standartlarında Class 900 ve üzeri yüksek basınçlarda zorunludur.",
        ],
      },
      {
        heading: "3. Dolgu Malzemesi Seçimi",
        body: [
          "Grafit Dolgu: -200°C ile +550°C arasında buhar, hidrokarbon ve genel sanayi uygulamalarında evrensel standarttır.",
          "PTFE Dolgu: -200°C ile +260°C arasında saf kimyasal ve agresif asit hatlarında tercih edilir.",
        ],
      },
    ],
  },
  {
    id: "conta-malzemesi-nasil-secilir",
    slug: "conta-malzemesi-nasil-secilir",
    title: "Doğru Conta Malzemesi Nasıl Seçilir? STAMP Kriteri",
    category: "Mühendislik Rehberi",
    summary: "Sıcaklık, basınç, akışkan cinsi ve flanş tipine göre en uygun conta malzemesini seçme rehberi.",
    readingTimeMinutes: 6,
    publishedAt: "2026-02-10",
    updatedAt: "2026-04-05",
    standardsMentioned: ["DIN EN 1514-1", "ASME B16.21"],
    content: [
      {
        heading: "1. STAMP Metodolojisi",
        body: [
          "Endüstriyel conta seçiminde mühendislerin en sık başvurduğu kontrol listesi STAMP kısaltmasıyla özetlenir:",
          "S - Size (Ölçü): Flanş normu, anma çapı (DN/NPS) ve basınç sınıfı (PN/Class).",
          "T - Temperature (Sıcaklık): Akışkanın minimum ve maksimum çalışma ve pik sıcaklık değerleri.",
          "A - Application (Uygulama): Flanş yüzey pürüzlülüğü, cıvata kalitesi ve ekipman tipi (boru, vana, pompa).",
          "M - Media (Akışkan): Kimyasal bileşim, pH derecesi, aşındırıcılık ve gaz/sıvı fazı.",
          "P - Pressure (Basınç): Çalışma basıncı, test basıncı ve vakum durumu.",
        ],
      },
      {
        heading: "2. Sıcaklık ve Basınç Çarpımı (P x T Değeri)",
        body: [
          "Sadece sıcaklık veya sadece basınç tek başına yanıltıcı olabilir. Malzemenin dayanabileceği maksimum basınç, sıcaklık arttıkça düşer. Bu nedenle conta üreticisinin P x T diyagramı mutlaka kontrol edilmelidir.",
        ],
      },
    ],
  },
  {
    id: "epdm-ve-nbr-farki",
    slug: "epdm-ve-nbr-farki",
    title: "EPDM ve NBR (Nitril) Kauçuk Arasındaki Temel Farklar",
    category: "Malzemeler",
    summary: "Su, buhar ve ozon için EPDM mi, yoksa yağ ve yakıt için NBR mi? Doğru elastomeri belirleme kılavuzu.",
    readingTimeMinutes: 4,
    publishedAt: "2026-03-01",
    updatedAt: "2026-05-12",
    standardsMentioned: ["DIN 7715", "EN 681-1"],
    content: [
      {
        heading: "1. NBR (Nitril Butadien Kauçuk)",
        body: [
          "NBR, polar yapısı sayesinde mineral yağlara, hidrolik yağlara, mazot ve benzine karşı üstün direnç gösterir.",
          "Çalışma sıcaklığı tipik olarak -30°C ile +100°C arasındadır. Ancak hava, ozon ve UV ışınlarına maruz kalan açık alanlarda çatlama yapabilir.",
        ],
      },
      {
        heading: "2. EPDM (Etilen Propilen Dien Monomer)",
        body: [
          "EPDM, polar olmayan yapısıyla su, sıcak su, doymuş buhar, glikol, asitler ve bazlara karşı mükemmel dirençlidir.",
          "Ozon ve açık hava yaşlanma direnci son derece yüksektir (-40°C ile +130°C). Fakat mineral yağlar veya akaryakıtla temas ettiğinde hızla şişer ve formunu kaybeder.",
        ],
      },
    ],
  },
  {
    id: "grafit-conta-nerelerde-kullanilir",
    slug: "grafit-conta-nerelerde-kullanilir",
    title: "Saf Grafit ve Telli Grafit Conta Nerelerde Kullanılır?",
    category: "Malzemeler",
    summary: "Kızgın yağ, yüksek basınçlı buhar ve termal şok içeren zorlu endüstriyel ortamlarda grafitin üstünlükleri.",
    readingTimeMinutes: 5,
    publishedAt: "2026-03-18",
    updatedAt: "2026-06-01",
    standardsMentioned: ["DIN 28090", "DIN EN 1514-1"],
    content: [
      {
        heading: "1. Neden Grafit?",
        body: [
          "Esnek saf grafit, hiçbir polimerik bağlayıcı içermez. Bu sayede sıcaklık altında sertleşme, gevrekleşme veya gaz çıkarma yapmaz.",
          "Termal iletkenliği yüksektir, bu da flanş yüzeyindeki sıcaklık gradyanlarını dengeler.",
        ],
      },
      {
        heading: "2. Düz Grafit vs Telli (Tanged) Grafit",
        body: [
          "Düz saf grafit contalar kırılgan yapıları nedeniyle montaj sırasında dikkat gerektirir.",
          "Ortasında 0.1 mm perfore paslanmaz çelik sac (tanged) bulunan laminasyonlu grafit levhalar, mekanik dayanım kazanır ve 140 bar basınca kadar güvenle kullanılabilir.",
        ],
      },
    ],
  },
  {
    id: "ptfe-ve-eptfe-conta-ozellikleri",
    slug: "ptfe-ve-eptfe-conta-ozellikleri",
    title: "PTFE ve Genleşmiş (ePTFE) Conta Özellikleri",
    category: "Malzemeler",
    summary: "Kimyasal dayanımın zirvesi PTFE ve soğuk akmayı engelleyen mikroporöz ePTFE yapısı.",
    readingTimeMinutes: 5,
    publishedAt: "2026-04-10",
    updatedAt: "2026-07-15",
    standardsMentioned: ["FDA 21 CFR 177.1550"],
    content: [
      {
        heading: "1. Kimyasal Direnç",
        body: [
          "Saf PTFE, pH 0-14 aralığındaki tüm asit, baz ve organik solventlere karşı tam inertlik gösterir. Yalnızca erimiş alkali metaller ve yüksek sıcaklık flor gazından etkilenir.",
        ],
      },
      {
        heading: "2. Soğuk Akma (Cold Flow) Problemi ve ePTFE Çözümü",
        body: [
          "Standart saf PTFE, cıvata yükü altında zamanla yana doğru akar (cold flow/creep).",
          "Buna karşılık genleşmiş (expanded) ePTFE, çok yönlü mikroporöz fiber yapısı sayesinde yük altında sıkışır ancak yana akmaz. Bu sayede cam ve plastik flanşlarda dahi düşük torkla kusursuz sızdırmazlık sağlar.",
        ],
      },
    ],
  },
  {
    id: "din-ve-asme-flans-standartlari",
    slug: "din-ve-asme-flans-standartlari",
    title: "Flanş Standartları Rehberi: DIN EN vs ASME / ANSI",
    category: "Standartlar",
    summary: "Boru flanşlarında PN ve Class sınıfları, IBC ve FF conta tipleri arasındaki farklar.",
    readingTimeMinutes: 6,
    publishedAt: "2026-05-02",
    updatedAt: "2026-08-10",
    standardsMentioned: ["ASME B16.5", "ASME B16.20", "DIN EN 1092-1", "DIN EN 1514-1"],
    content: [
      {
        heading: "1. DIN EN Metrik Standartlar (PN)",
        body: [
          "Avrupa ve Türkiye'de yaygın olan DIN normlarında basınç PN (Nominal Pressure - Bar) ve çap DN (Nominal Diameter - mm) ile ifade edilir.",
          "Conta normu EN 1514-1 (levha contalar) ve EN 1514-2 (spiral contalar) standardıdır.",
        ],
      },
      {
        heading: "2. ASME Amerikan Standartları (Class / Pound)",
        body: [
          "Petrokimya ve denizcilikte yaygın olan ASME normlarında çap inç (NPS) ve basınç Class (Class 150, 300, 600, 900, 1500, 2500) olarak tanımlanır.",
          "ASME B16.20 spiral contaları, ASME B16.21 ise metalik olmayan levha contaları tanımlar.",
        ],
      },
    ],
  },
];
