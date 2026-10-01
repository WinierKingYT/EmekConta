import { Product, ProductCategory } from "@/lib/types";

export const productCategories: ProductCategory[] = [
  {
    id: "contalar",
    name: "Endüstriyel Contalar",
    shortDescription: "Spiral sarımlı, saf grafit, klingrit ve metal sızdırmazlık contaları.",
    description: "Yüksek sıcaklık, basınç ve kimyasal akışkan hatlarında flanş sızdırmazlığı sağlayan standart ve özel kesim contalar.",
    itemCountEstimated: "1000+ Standart & Özel Ölçü",
    highlights: ["Spiral Sarımlı (ASME / DIN)", "Saf & Telli Grafit", "Klingrit / Aramid Levha", "Metal Ceketli & Sac Takviyeli"],
    image: "/images/products/spiral-sarimli-contalar.webp",
  },
  {
    id: "contalik-malzemeler",
    name: "Contalık Levha Malzemeler",
    shortDescription: "Grafit levhalar, asbestsiz klingrit levhalar, mantar ve fiber sızdırmazlık plakaları.",
    description: "Atölye ve tesislerde doğrudan kesim veya yedek parça üretimi için rulo ve plaka formunda yüksek kaliteli sızdırmazlık levhaları.",
    itemCountEstimated: "Geniş Kalınlık & Ebat Seçeneği",
    highlights: ["Asbestsiz Aramid Levhalar", "Saf Esnek Grafit Plakalar", "Kauçuklu Mantar Kompozit", "Presbant & Vulkanize Fiber"],
    image: "/images/products/klingrit-levha-contalar.webp",
  },
  {
    id: "kaucuk-urunleri",
    name: "Kauçuk & Elastomer Parçalar",
    shortDescription: "EPDM, NBR (Nitril), Viton (FKM), Silikon conta ve ambar kapak lastikleri.",
    description: "Su, yağ, akaryakıt, buhar ve gıda hatlarında esnek sızdırmazlık sağlayan standart O-ring, conta, plaka ve gemi ambar profilleri.",
    itemCountEstimated: "Tüm Standart Sertlik Dereceleri",
    highlights: ["NBR (Yağ & Akaryakıt)", "EPDM (Su & Ozon Dayanımı)", "Viton / FKM (Yüksek Sıcaklık & Asit)", "Ambar Kapak Lastikleri"],
    image: "/images/products/kaucuk-epdm-nbr-contalar.webp",
  },
  {
    id: "ptfe-plastik",
    name: "PTFE (Teflon) & Mühendislik Plastikleri",
    shortDescription: "Saf PTFE levha, genleşmiş ePTFE şerit, Kestamid, Delrin ve talaşlı imalat parçaları.",
    description: "Agresif kimyasallar, asitler, solventler ve aşınmaya maruz mekanik parçalar için PTFE ve mühendislik plastikleri çözümleri.",
    itemCountEstimated: "İşlenmiş, Levha & Çubuk Formlar",
    highlights: ["Genleşmiş (Expanded) ePTFE Şerit", "Saf & Karbon Dolgulu PTFE", "Kestamid & Polyamid Çubuk/Levha", "Delrin (POM) Parçalar"],
    image: "/images/products/ptfe-teflon-urunler.webp",
  },
  {
    id: "salmastralar",
    name: "Örgülü Pompa & Vana Salmastraları",
    shortDescription: "Saf grafit, PTFE, aramid elyaf örgülü salmastralar.",
    description: "Döner mil, piston, pompa ve endüstriyel vanalarda dinamik sızdırmazlık sağlayan yüksek kaliteli örgülü salmastra fitilleri.",
    itemCountEstimated: "4mm - 50mm Kesit Aralığı",
    highlights: ["Saf Grafit Salmastra", "Aramid Köşe Takviyeli (Zebra)", "Yağlı & Kuru PTFE Salmastra", "İnconel Telli Grafit"],
    image: "/images/products/orgulu-salmastralar.webp",
  },
  {
    id: "yuksek-isi-urunleri",
    name: "Yüksek Sıcaklık Yalıtım & Conta",
    shortDescription: "Seramik elyaf kumaş, cam elyaf şerit, yüksek ısı izolasyon fitilleri.",
    description: "Kazan kapakları, fırın kapakları, egzoz hatları ve termal bariyer uygulamalarında 1200°C'ye varan ısı yalıtım ve conta çözümleri.",
    itemCountEstimated: "Teknik Tekstil & Conta",
    highlights: ["Cam Elyaf Bant & İp", "Seramik Elyaf Kumaş & Battaniye", "Kazan Kapağı Contaları", "Alüminyum Folyo / PU Kaplı Kumaş"],
    image: "/images/products/cam-elyaf-seramik-tekstil.webp",
  },
];

export const productsData: Product[] = [
  {
    "id": "epdm-conta",
    "slug": "epdm-conta",
    "name": "EPDM Conta",
    "category": "kaucuk-urunleri",
    "shortDescription": "Sıcak su, buhar, ozon ve dış hava şartlarına mükemmel dayanım gösteren EPDM kauçuk flanş contaları.",
    "description": "EPDM (Etilen Propilen Dien Monomer) contalar; açık hava, güneş ışığı (UV), ozon ve su buharı etkilerine karşı en yüksek direnci sağlayan elastomer sızdırmazlık elemanlarıdır. -40°C ile +130°C sıcaklık aralığında esnekliğini kaybetmeden güvenilir flanş sızdırmazlığı sunar. Isıtma, soğutma, arıtma ve kimyasal hatlarda yaygın olarak tercih edilir.",
    "features": [
      "Ozon, UV ışınları ve atmosferik yaşlanmaya karşı üstün mukavemet",
      "Sıcak su ve düşük basınçlı buhar hatlarında uzun ömürlü sızdırmazlık",
      "Geniş çalışma sıcaklığı aralığı (-40°C / +130°C)",
      "DIN, ANSI ve özel flanş normlarında CNC su jeti hassas kesim"
    ],
    "materials": [
      "EPDM Elastomer (%100 Saf / Kord Bez Takviyeli)",
      "Peroksit veya Kükürt Kürlenmiş"
    ],
    "standards": [
      "DIN EN 1514-1",
      "ASME B16.21",
      "ISO 7005-1"
    ],
    "applications": [
      "HVAC ısıtma ve soğutma sistemleri",
      "İçme suyu ve atık su arıtma tesisleri",
      "Düşük basınçlı buhar devreleri",
      "Açık hava boru hatları"
    ],
    "specifications": [
      {
        "property": "Sertlik",
        "value": "65-70 Shore A",
        "standard": "DIN 53505"
      },
      {
        "property": "Sıcaklık Aralığı",
        "value": "-40°C ile +130°C (Kısa süreli +150°C)"
      },
      {
        "property": "Basınç Dayanımı",
        "value": "PN 10 – PN 16 (16 Bar)"
      },
      {
        "property": "Standart Kalınlık",
        "value": "1.5 mm, 2 mm, 3 mm, 4 mm, 5 mm"
      },
      {
        "property": "Kimyasal Direnç",
        "value": "Su, glikol, seyreltik asit ve alkalilere karşı mükemmel"
      }
    ],
    "image": "/images/products/epdm-conta.webp",
    "imagePlaceholderText": "EPDM Conta - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "lastik-conta",
      "epdm-flans-conta",
      "epdm-celik-takviyeli-elastomer-conta"
    ],
    "seoTitle": "EPDM Conta | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "EPDM Conta imalatı ve tedariği. Sıcak su, buhar, ozon ve dış hava şartlarına mükemmel dayanım gösteren EPDM kauçuk flanş contaları."
  },
  {
    "id": "epdm-flans-conta",
    "slug": "epdm-flans-conta",
    "name": "EPDM Flanş Contası",
    "category": "kaucuk-urunleri",
    "shortDescription": "DIN ve ANSI standart boru flanşlarına tam uyumlu, delikli ve IBC tiplerinde EPDM flanş contaları.",
    "description": "EPDM flanş contaları; boru hatlarındaki flanş bağlantılarında cıvata delikli (FF - Full Face) veya cıvata dairesi içine oturan (IBC - Raised Face) formlarda üretilen sızdırmazlık contalarıdır. Su ve seyreltik kimyasalların taşındığı hatlarda titreşimi sönümler, flanş eğriliklerini tolere eder.",
    "features": [
      "Tam yüzey (cıvata delikli) ve IBC (ring) form seçenekleri",
      "Düşük cıvata torklarında bile üstün mikrosızdırmazlık",
      "Titreşim sönümleyici elastomerik yapı"
    ],
    "materials": [
      "Yüksek Kalite EPDM Kauçuk Levha"
    ],
    "standards": [
      "DIN EN 1514-1 (PN 6 - PN 40)",
      "ASME B16.21 (Class 150/300)"
    ],
    "applications": [
      "Belediye su dağıtım hatları",
      "Jeotermal su transfer devreleri",
      "Yangın söndürme tesisatları"
    ],
    "specifications": [
      {
        "property": "Sertlik",
        "value": "65-70 Shore A"
      },
      {
        "property": "Çalışma Sıcaklığı",
        "value": "-35°C / +130°C"
      },
      {
        "property": "Anma Çapı",
        "value": "DN 15 – DN 1200 / 1/2\" – 48\""
      },
      {
        "property": "Basınç Sınıfı",
        "value": "PN 10, PN 16, Class 150"
      }
    ],
    "image": "/images/products/epdm-flans-conta.webp",
    "imagePlaceholderText": "EPDM Flanş Contası - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "epdm-conta",
      "epdm-celik-takviyeli-elastomer-conta",
      "lastik-conta"
    ],
    "seoTitle": "EPDM Flanş Contası | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "EPDM Flanş Contası imalatı ve tedariği. DIN ve ANSI standart boru flanşlarına tam uyumlu, delikli ve IBC tiplerinde EPDM flanş contaları."
  },
  {
    "id": "epdm-celik-takviyeli-elastomer-conta",
    "slug": "epdm-celik-takviyeli-elastomer-conta",
    "name": "EPDM Çelik Takviyeli Elastomer Flanş Contası",
    "category": "kaucuk-urunleri",
    "shortDescription": "İçerisindeki vulkanize çelik sac halka sayesinde patlama ve sıkışma deformasyonunu önleyen yüksek performanslı EPDM conta.",
    "description": "Çelik takviyeli elastomer contalar; EPDM kauçuğun içerisine entegre edilmiş paslanmaz veya karbon çelik sac çekirdekten oluşur. Bu yapı flanş cıvataları aşırı sıkıldığında bile contanın flanş arasından dışarı fırlamasını (blow-out) engeller. Plastik boru (PE, PVC, CTP) ve çelik flanş bağlantılarında mükemmel güvenlik sağlar.",
    "features": [
      "İç vulkanize çelik halka ile mutlak form stabilitesi",
      "Aşırı tork altında ezilme ve patlamaya (blow-out) karşı direnç",
      "Plastik ve CTP flanşlarda düşük torkla tam sızdırmazlık"
    ],
    "materials": [
      "EPDM Gövde + Karbon Çelik / Paslanmaz Çelik Takviye Halkası"
    ],
    "standards": [
      "DIN EN 1514-1",
      "DIN 16963 (Plastik Borular)",
      "ASME B16.21"
    ],
    "applications": [
      "İçme suyu ana isale hatları",
      "CTP ve HDPE boru flanş bağlantıları",
      "Kimyasal dolum tesisleri"
    ],
    "specifications": [
      {
        "property": "Gövde Sertliği",
        "value": "70 Shore A EPDM"
      },
      {
        "property": "İç Çekirdek",
        "value": "Karbon Çelik / AISI 304 Sac Halka"
      },
      {
        "property": "Maks. Basınç",
        "value": "PN 25 (25 Bar)"
      },
      {
        "property": "Sıcaklık",
        "value": "-40°C ile +120°C"
      }
    ],
    "image": "/images/products/epdm-celik-takviyeli-elastomer-conta.webp",
    "imagePlaceholderText": "EPDM Çelik Takviyeli Elastomer Flanş Contası - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "celik-takviyeli-conta",
      "epdm-conta",
      "lastik-conta"
    ],
    "seoTitle": "EPDM Çelik Takviyeli Elastomer Flanş Contası | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "EPDM Çelik Takviyeli Elastomer Flanş Contası imalatı ve tedariği. İçerisindeki vulkanize çelik sac halka sayesinde patlama ve sıkışma deformasyonunu önleyen yüksek performanslı EPDM conta."
  },
  {
    "id": "celik-takviyeli-conta",
    "slug": "celik-takviyeli-conta",
    "name": "Çelik Takviyeli Kauçuk Conta",
    "category": "kaucuk-urunleri",
    "shortDescription": "Yüksek hat basıncı ve mekanik zorlanmalara karşı iç sac halka ile güçlendirilmiş elastomer sızdırmazlık contaları.",
    "description": "Çelik takviyeli kauçuk contalar, boru hatlarında yüksek rijitlik ve montaj kolaylığı aranan yerlerde kullanılır. İçerideki çelik sac çekirdek, contanın montaj esnasında merkezde kalmasını sağlar ve akışkan basıncı altında contanın yarılmasını önler.",
    "features": [
      "Çelik çekirdek ile hatasız flanş merkezleme",
      "Mekanik darbelere ve basınç darbelerine karşı yüksek mukavemet",
      "Geniş flanş toleranslarında üstün uyum"
    ],
    "materials": [
      "NBR veya EPDM Elastomer + Karbon Çelik Sac Takviye"
    ],
    "standards": [
      "DIN EN 1514-1",
      "ISO 7483"
    ],
    "applications": [
      "Pompa istasyonları",
      "Yüksek basınçlı su devreleri",
      "Endüstriyel soğutma kuleleri"
    ],
    "specifications": [
      {
        "property": "Takviye Malzemesi",
        "value": "0.5 - 1.5 mm Çelik Sac Çekirdek"
      },
      {
        "property": "Sıcaklık Aralığı",
        "value": "-30°C / +120°C"
      },
      {
        "property": "Basınç",
        "value": "PN 16 – PN 25"
      }
    ],
    "image": "/images/products/celik-takviyeli-conta.webp",
    "imagePlaceholderText": "Çelik Takviyeli Kauçuk Conta - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "epdm-celik-takviyeli-elastomer-conta",
      "lastik-conta",
      "epdm-conta"
    ],
    "seoTitle": "Çelik Takviyeli Kauçuk Conta | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Çelik Takviyeli Kauçuk Conta imalatı ve tedariği. Yüksek hat basıncı ve mekanik zorlanmalara karşı iç sac halka ile güçlendirilmiş elastomer sızdırmazlık contaları."
  },
  {
    "id": "lastik-conta",
    "slug": "lastik-conta",
    "name": "Lastik Conta (SBR / Doğal Kauçuk)",
    "category": "kaucuk-urunleri",
    "shortDescription": "Genel amaçlı su, hava ve nötr akışkan sızdırmazlığı sağlayan ekonomik ve esnek lastik contalar.",
    "description": "Lastik contalar, SBR (Stiren Bütadien) veya Doğal Kauçuk (NR) esaslı levhalardan istenilen ölçüde kesilen genel sızdırmazlık elemanlarıdır. Tesisat hatlarında, menhol kapaklarında ve düşük basınçlı hava ve su devrelerinde yüksek elastikiyeti sayesinde kolay montaj ve ekonomik çözüm sunar.",
    "features": [
      "Yüksek elastikiyet ve geri toplama kabiliyeti",
      "Düşük maliyetli ekonomik sızdırmazlık çözümü",
      "İstenilen ebatta ve formda hassas kesim"
    ],
    "materials": [
      "SBR / Doğal Kauçuk (NR) Karışımı",
      "Bezli veya Bez Takviyesiz"
    ],
    "standards": [
      "DIN 7715",
      "TSE 2815"
    ],
    "applications": [
      "Bina mekanik tesisatları",
      "Tarımsal sulama boru hatları",
      "Menhol ve su deposu kapakları"
    ],
    "specifications": [
      {
        "property": "Sertlik",
        "value": "60-65 Shore A"
      },
      {
        "property": "Sıcaklık",
        "value": "-20°C ile +80°C"
      },
      {
        "property": "Basınç",
        "value": "PN 6 – PN 10"
      },
      {
        "property": "Standart Kalınlık",
        "value": "2 mm, 3 mm, 4 mm, 5 mm, 8 mm, 10 mm"
      }
    ],
    "image": "/images/products/lastik-conta.webp",
    "imagePlaceholderText": "Lastik Conta (SBR / Doğal Kauçuk) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "epdm-conta",
      "viton-conta",
      "silikon-conta"
    ],
    "seoTitle": "Lastik Conta (SBR / Doğal Kauçuk) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Lastik Conta (SBR / Doğal Kauçuk) imalatı ve tedariği. Genel amaçlı su, hava ve nötr akışkan sızdırmazlığı sağlayan ekonomik ve esnek lastik contalar."
  },
  {
    "id": "viton-conta",
    "slug": "viton-conta",
    "name": "Viton Conta (FKM Floroelastomer)",
    "category": "kaucuk-urunleri",
    "shortDescription": "200°C'ye varan yüksek sıcaklıklarda, agresif kimyasallar, asitler ve akaryakıtlara karşı en dayanıklı elastomer conta.",
    "description": "Viton (FKM) contalar; yüksek sıcaklık, yakıt, mineral yağlar, hidrolik sıvılar ve konsantre kimyasalların bir arada bulunduğu en zorlu endüstriyel ortamlarda üstün performans sunar. -20°C ile +200°C arasında kimyasal yapısını korur ve deformasyona uğramaz.",
    "features": [
      "Aromatik hidrokarbonlar, yakıtlar ve asitlere karşı maksimum direnç",
      "200°C sürekli çalışma sıcaklığı mukavemeti",
      "Havacılık, savunma ve petrokimya normlarına tam uyum"
    ],
    "materials": [
      "%100 Orijinal Viton / FKM Floroelastomer"
    ],
    "standards": [
      "ASTM D2000 HK",
      "DIN EN 1514-1",
      "ASME B16.21"
    ],
    "applications": [
      "Petrokimya ve rafineri tesisleri",
      "Gemi yakıt ve egzoz devreleri",
      "Otomotiv motor ve enjeksiyon sistemleri"
    ],
    "specifications": [
      {
        "property": "Sertlik",
        "value": "70-75 Shore A"
      },
      {
        "property": "Sıcaklık Aralığı",
        "value": "-20°C ile +200°C (Kısa süreli +230°C)"
      },
      {
        "property": "Basınç Dayanımı",
        "value": "PN 25 (25 Bar)"
      },
      {
        "property": "Renk",
        "value": "Siyah / Yeşil / Kahverengi"
      }
    ],
    "image": "/images/products/viton-conta.webp",
    "imagePlaceholderText": "Viton Conta (FKM Floroelastomer) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "viton-flans-conta",
      "mekanik-viton-conta",
      "silikon-conta"
    ],
    "seoTitle": "Viton Conta (FKM Floroelastomer) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Viton Conta (FKM Floroelastomer) imalatı ve tedariği. 200°C'ye varan yüksek sıcaklıklarda, agresif kimyasallar, asitler ve akaryakıtlara karşı en dayanıklı elastomer conta."
  },
  {
    "id": "viton-flans-conta",
    "slug": "viton-flans-conta",
    "name": "Viton Flanş Contası",
    "category": "kaucuk-urunleri",
    "shortDescription": "Kimya ve petrokimya flanş bağlantıları için DIN ve ANSI normlarında Viton (FKM) contalar.",
    "description": "Viton flanş contaları; agresif asit, solvent ve petrol türevlerinin taşındığı flanşlı boru hatlarında sızdırmazlık sağlamak üzere tasarlanmıştır. Yüksek sıcaklık ve kimyasal buhar ortamında sertleşme veya şişme yapmaz.",
    "features": [
      "DIN ve ASME normlarında tam delikli ve ring conta çeşitleri",
      "Uçucu organik bileşiklere karşı mükemmel bariyer",
      "Sıcak yağ ve yakıt hatlarında mutlak sızdırmazlık"
    ],
    "materials": [
      "FKM / Viton Elastomer Levha"
    ],
    "standards": [
      "DIN EN 1514-1",
      "ASME B16.21"
    ],
    "applications": [
      "Kimyasal transfer hatları",
      "Sıcak yağ sirkülasyon sistemleri",
      "Boya ve solvent üretim reaktörleri"
    ],
    "specifications": [
      {
        "property": "Sertlik",
        "value": "70 Shore A"
      },
      {
        "property": "Sıcaklık",
        "value": "-20°C / +200°C"
      },
      {
        "property": "Çap Aralığı",
        "value": "DN 15 – DN 600"
      }
    ],
    "image": "/images/products/viton-flans-conta.webp",
    "imagePlaceholderText": "Viton Flanş Contası - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "viton-conta",
      "mekanik-viton-conta",
      "ptfe-teflon-conta"
    ],
    "seoTitle": "Viton Flanş Contası | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Viton Flanş Contası imalatı ve tedariği. Kimya ve petrokimya flanş bağlantıları için DIN ve ANSI normlarında Viton (FKM) contalar."
  },
  {
    "id": "mekanik-viton-conta",
    "slug": "mekanik-viton-conta",
    "name": "Mekanik Viton Conta",
    "category": "kaucuk-urunleri",
    "shortDescription": "Mekanik salmastra yuvaları, pompalar ve vana gövdeleri için özel toleranslı Viton parçalar.",
    "description": "Mekanik viton contalar, yüksek devirli pompa gövdeleri, santrifüj pompalar ve hidrolik sistemlerde dinamik ve statik sızdırmazlığı sağlamak amacıyla dar toleranslarla üretilen özel sızdırmazlık halkalarıdır.",
    "features": [
      "Yüksek mekanik aşınma ve sürtünme direnci",
      "Sıcak yağ ve sürtünme ısısına dayanım",
      "Hassas kalıplı veya CNC torna imalatı"
    ],
    "materials": [
      "Yüksek Yoğunluklu Viton (FKM) Bileşiği"
    ],
    "standards": [
      "ISO 3601",
      "DIN 3771"
    ],
    "applications": [
      "Santrifüj pompa gövdeleri",
      "Mekanik salmastra arka bilezikleri",
      "Hidrolik valf blokları"
    ],
    "specifications": [
      {
        "property": "Sertlik",
        "value": "75-80 Shore A"
      },
      {
        "property": "Sıcaklık",
        "value": "-20°C / +210°C"
      },
      {
        "property": "Basınç",
        "value": "100 Bar'a kadar (destekli yuvalarda)"
      }
    ],
    "image": "/images/products/mekanik-viton-conta.webp",
    "imagePlaceholderText": "Mekanik Viton Conta - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "viton-conta",
      "viton-flans-conta",
      "silikon-conta"
    ],
    "seoTitle": "Mekanik Viton Conta | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Mekanik Viton Conta imalatı ve tedariği. Mekanik salmastra yuvaları, pompalar ve vana gövdeleri için özel toleranslı Viton parçalar."
  },
  {
    "id": "silikon-conta",
    "slug": "silikon-conta",
    "name": "Silikon Conta",
    "category": "kaucuk-urunleri",
    "shortDescription": "-60°C ile +250°C arasında çalışan, gıda uyumlu (FDA) ve yüksek sıcaklığa dayanıklı silikon contalar.",
    "description": "Silikon contalar; aşırı sıcak ve aşırı soğuk ortamlarda elastik yapısını mükemmel şekilde koruyan, kokusuz, toksik olmayan ve FDA gıda onaylı elastomer contalardır. Fırın kapaklarında, aydınlatma armatürlerinde, medikal cihazlarda ve gıda işleme tesislerinde güvenle kullanılır.",
    "features": [
      "FDA 21 CFR 177.2600 gıda temasına uygunluk",
      "-60°C ile +250°C geniş çalışma sıcaklık aralığı",
      "Mükemmel dielektrik ve elektriksel yalıtım özellikleri",
      "Şeffaf, beyaz, kırmızı ve özel renk seçenekleri"
    ],
    "materials": [
      "%100 Saf Silikon Elastomer (FDA Uyumlu)"
    ],
    "standards": [
      "FDA 21 CFR 177.2600",
      "BfR XV",
      "DIN EN 1514-1"
    ],
    "applications": [
      "Gıda ve içecek üretim tesisleri",
      "İlaç ve medikal proses ekipmanları",
      "Endüstriyel fırın kapakları",
      "Dış aydınlatma IP koruma contaları"
    ],
    "specifications": [
      {
        "property": "Sertlik",
        "value": "60 Shore A (±5)"
      },
      {
        "property": "Sıcaklık Aralığı",
        "value": "-60°C ile +250°C"
      },
      {
        "property": "Gıda Onayı",
        "value": "FDA Uyumlu (BPA ve toksin içermez)"
      },
      {
        "property": "Renkler",
        "value": "Şeffaf, Kırmızı (Kiremit), Beyaz, Mavi"
      }
    ],
    "image": "/images/products/silikon-conta.webp",
    "imagePlaceholderText": "Silikon Conta - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "silikon-levhalar",
      "silikon-fitiller",
      "silikon-hortumlar"
    ],
    "seoTitle": "Silikon Conta | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Silikon Conta imalatı ve tedariği. -60°C ile +250°C arasında çalışan, gıda uyumlu (FDA) ve yüksek sıcaklığa dayanıklı silikon contalar."
  },
  {
    "id": "spiral-sarimli-celik-conta",
    "slug": "spiral-sarimli-celik-conta",
    "name": "Spiral Sarımlı Çelik Conta",
    "category": "contalar",
    "shortDescription": "ASME B16.20 ve DIN EN 1514-2 standartlarında, V-şekilli paslanmaz çelik ve grafit/PTFE sarımlı flanş contaları.",
    "description": "Spiral sarımlı çelik contalar; yüksek basınç, sıcaklık dalgalanmaları ve boru hattı titreşimlerinin bulunduğu buhar, petrol, kimya ve enerji hatlarında en güvenilir flanş sızdırmazlık çözümüdür. V-kesitli paslanmaz metal şerit ile saf grafit veya PTFE dolgu malzemesinin helisel sarılmasıyla üretilir.",
    "features": [
      "Termal şok ve basınç dalgalanmalarına karşı yüksek geri toplama",
      "İç ve dış ring seçenekleriyle aşırı sıkmaya karşı tam koruma",
      "ASME B16.20 ve EN 1514-2 standartlarına tam uyum",
      "Class 150 - Class 2500 / PN 10 - PN 400 geniş basınç aralığı"
    ],
    "materials": [
      "Metal Şerit: AISI 304, AISI 316L, 321, Monel, Inconel",
      "Dolgu: %99.8 Saf Grafit, Saf PTFE",
      "Bilezik: Karbon Çelik, 304, 316L"
    ],
    "standards": [
      "ASME B16.20",
      "DIN EN 1514-2",
      "BS 3381",
      "JIS B2404"
    ],
    "applications": [
      "Buhar hatları ve kazan çıkış flanşları",
      "Rafineri ve petrokimya boru devreleri",
      "Gemi ana makine borulamaları",
      "Isı eşanjörleri ve basınçlı kaplar"
    ],
    "specifications": [
      {
        "property": "Sargı Tipi",
        "value": "V-Profilli Helisel Metal + Grafit/PTFE"
      },
      {
        "property": "Basınç Sınıfları",
        "value": "Class 150 – 2500 / PN 10 – PN 400"
      },
      {
        "property": "Kalınlık",
        "value": "3.2 mm / 4.5 mm / 6.4 mm"
      },
      {
        "property": "Sıcaklık",
        "value": "-200°C ile +550°C (Grafit) / +260°C (PTFE)"
      }
    ],
    "image": "/images/products/spiral-sarimli-celik-conta.webp",
    "imagePlaceholderText": "Spiral Sarımlı Çelik Conta - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "saf-grafitli-ici-ringli-conta",
      "saf-grafitli-ringli-conta",
      "grafitli-telli-conta"
    ],
    "seoTitle": "Spiral Sarımlı Çelik Conta | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Spiral Sarımlı Çelik Conta imalatı ve tedariği. ASME B16.20 ve DIN EN 1514-2 standartlarında, V-şekilli paslanmaz çelik ve grafit/PTFE sarımlı flanş contaları."
  },
  {
    "id": "saf-grafitli-ici-ringli-conta",
    "slug": "saf-grafitli-ici-ringli-conta",
    "name": "Saf Grafitli İçi Ringli Conta",
    "category": "contalar",
    "shortDescription": "İç paslanmaz çelik bileziği sayesinde yüksek akışkan erozyonunu önleyen saf grafit flanş contaları.",
    "description": "Saf grafitli içi ringli contalar; iç çapına paslanmaz çelik koruma halkası (ring) entegre edilmiş grafit contalardır. Bu iç ring, akışkanın contanın iç kenarını erozyona uğratmasını engeller ve yüksek akış hızlarında contanın içe doğru patlamasını önler.",
    "features": [
      "İç paslanmaz ring ile akışkan erozyonuna karşı tam koruma",
      "Yüksek sıcaklık buhar ve kızgın yağ hatlarında mükemmel sızdırmazlık",
      "Asbestsiz, çevre dostu ve uzun ömürlü"
    ],
    "materials": [
      "%99.8 Genleşmiş Saf Grafit + AISI 316L İç Ring Takviyesi"
    ],
    "standards": [
      "DIN EN 1514-1",
      "ASME B16.21",
      "DIN 2690"
    ],
    "applications": [
      "Kızgın yağ ve yüksek basınçlı buhar hatları",
      "Türbin ve pompa giriş flanşları",
      "Kimyasal reaktörler"
    ],
    "specifications": [
      {
        "property": "Sıcaklık Dayanımı",
        "value": "-200°C ile +550°C (Oksitleyici ortamda 450°C)"
      },
      {
        "property": "Basınç",
        "value": "100 Bar"
      },
      {
        "property": "İç Ring Malzemesi",
        "value": "AISI 304 / 316L Paslanmaz Çelik"
      }
    ],
    "image": "/images/products/saf-grafitli-ici-ringli-conta.webp",
    "imagePlaceholderText": "Saf Grafitli İçi Ringli Conta - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "saf-grafitli-ringli-conta",
      "spiral-sarimli-celik-conta",
      "grafitli-ici-bilezikli-conta"
    ],
    "seoTitle": "Saf Grafitli İçi Ringli Conta | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Saf Grafitli İçi Ringli Conta imalatı ve tedariği. İç paslanmaz çelik bileziği sayesinde yüksek akışkan erozyonunu önleyen saf grafit flanş contaları."
  },
  {
    "id": "saf-grafitli-ringli-conta",
    "slug": "saf-grafitli-ringli-conta",
    "name": "Saf Grafitli Ringli Conta",
    "category": "contalar",
    "shortDescription": "Merkezleme veya iç koruma halkasıyla güçlendirilmiş saf grafit flanş contaları.",
    "description": "Saf grafitli ringli contalar; flanş montajı esnasında contanın cıvata dairesine tam oturmasını sağlayan dış ring veya akışkan temasını koruyan iç ring ile imal edilen contalardır. Yüksek sıcaklık ve basınca maruz kalan flanşlarda güvenilir sızdırmazlık sağlar.",
    "features": [
      "Kolay montaj ve merkezleme sağlayan ring yapısı",
      "Yüksek sıcaklıkta sertleşme ve gevşeme yapmayan grafit gövde",
      "Termal genleşmeleri absorbe eden mikro-gözenekli yapı"
    ],
    "materials": [
      "Saf Grafit Gövde + Paslanmaz / Karbon Çelik Halka"
    ],
    "standards": [
      "ASME B16.20",
      "DIN EN 1514-1"
    ],
    "applications": [
      "Buhar boru hatları",
      "Kazan çıkışları",
      "Santral türbin flanşları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "-200°C / +550°C"
      },
      {
        "property": "Basınç",
        "value": "PN 40 – PN 100"
      }
    ],
    "image": "/images/products/saf-grafitli-ringli-conta.webp",
    "imagePlaceholderText": "Saf Grafitli Ringli Conta - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "saf-grafitli-ici-ringli-conta",
      "grafitli-ici-bilezikli-conta",
      "spiral-sarimli-celik-conta"
    ],
    "seoTitle": "Saf Grafitli Ringli Conta | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Saf Grafitli Ringli Conta imalatı ve tedariği. Merkezleme veya iç koruma halkasıyla güçlendirilmiş saf grafit flanş contaları."
  },
  {
    "id": "grafitli-ici-bilezikli-conta",
    "slug": "grafitli-ici-bilezikli-conta",
    "name": "Grafitli İçi Bilezikli Conta",
    "category": "contalar",
    "shortDescription": "İç çapına paslanmaz çelik bilezik perçinlenmiş veya preslenmiş grafit sızdırmazlık contası.",
    "description": "Grafitli içi bilezikli contalar; yüksek basınçlı akışkanların oluşturduğu türbülansa ve kimyasal erozyona karşı contanın iç kenarını paslanmaz metal bilezikle koruma altına alan mühendislik contalarıdır.",
    "features": [
      "Metalik bilezik ile yüksek türbülans koruması",
      "Contanın boru içine taşmasını önleyen rijit iç yapı",
      "Kızgın buhar ve gaz hatlarında tam emniyet"
    ],
    "materials": [
      "Grafit Plaka (Sac Takviyeli) + AISI 316 Paslanmaz Bilezik"
    ],
    "standards": [
      "DIN EN 1514-1",
      "ASME B16.21"
    ],
    "applications": [
      "Buhar kazanları",
      "Basınç düşürme istasyonları",
      "Isı transfer yağı devreleri"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "-200°C ile +500°C"
      },
      {
        "property": "Basınç",
        "value": "PN 63 (63 Bar)"
      }
    ],
    "image": "/images/products/grafitli-ici-bilezikli-conta.webp",
    "imagePlaceholderText": "Grafitli İçi Bilezikli Conta - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "saf-grafitli-ici-ringli-conta",
      "grafitli-telli-conta",
      "spiral-sarimli-celik-conta"
    ],
    "seoTitle": "Grafitli İçi Bilezikli Conta | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Grafitli İçi Bilezikli Conta imalatı ve tedariği. İç çapına paslanmaz çelik bilezik perçinlenmiş veya preslenmiş grafit sızdırmazlık contası."
  },
  {
    "id": "grafitli-telli-conta",
    "slug": "grafitli-telli-conta",
    "name": "Grafitli Telli Conta",
    "category": "contalar",
    "shortDescription": "İçerisinde paslanmaz delikli perfore sac veya çelik tel örgü bulunan yüksek mukavemetli grafit conta.",
    "description": "Grafitli telli contalar; saf grafit katmanlarının arasına perfore paslanmaz çelik sac (telson / spiket) veya tel örgü lamine edilerek üretilen kompozit contalardır. Mekanik dayanımı son derece yüksektir, montaj esnasında kırılmaz ve yüksek basınç altında patlamaz.",
    "features": [
      "Perfore paslanmaz sac çekirdek sayesinde kırılmaya karşı tam direnç",
      "Yüksek patlama (blow-out) direnci",
      "Flanş yüzeyindeki pürüzleri dolduran üstün plastik deformasyon kabiliyeti"
    ],
    "materials": [
      "%99.8 Saf Grafit + 0.1 mm AISI 316 Perfore Sac Çekirdek"
    ],
    "standards": [
      "DIN 28091-4",
      "DIN EN 1514-1",
      "ASME B16.21"
    ],
    "applications": [
      "Kızgın yağ ve buhar tesisatları",
      "Egzoz manifoltları",
      "Kimya ve petrokimya flanşları"
    ],
    "specifications": [
      {
        "property": "Çekirdek Tipi",
        "value": "Perfore Paslanmaz Çelik Sac (AISI 316)"
      },
      {
        "property": "Sıcaklık Aralığı",
        "value": "-200°C ile +550°C"
      },
      {
        "property": "Basınç Dayanımı",
        "value": "140 Bar"
      },
      {
        "property": "Standart Kalınlık",
        "value": "1.5 mm, 2 mm, 3 mm"
      }
    ],
    "image": "/images/products/grafitli-telli-conta.webp",
    "imagePlaceholderText": "Grafitli Telli Conta - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "saf-grafit-levha",
      "grafitli-asbestsiz-telli",
      "spiral-sarimli-celik-conta"
    ],
    "seoTitle": "Grafitli Telli Conta | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Grafitli Telli Conta imalatı ve tedariği. İçerisinde paslanmaz delikli perfore sac veya çelik tel örgü bulunan yüksek mukavemetli grafit conta."
  },
  {
    "id": "klingirit-flans-conta",
    "slug": "klingirit-flans-conta",
    "name": "Klingirit Flanş Conta",
    "category": "contalar",
    "shortDescription": "Asbestsiz aramid elyaf ve NBR bağlayıcılı levhalardan DIN ve ANSI normlarında üretilen flanş contaları.",
    "description": "Klingirit flanş contaları; modern asbestsiz aramid, mineral ve inorganik elyafların NBR kauçuk matriks ile yüksek basınç altında vulkanize edilmesiyle üretilen levhalardan hassas CNC su jeti ile kesilir. Su, gaz, buhar, yağ ve hafif kimyasalların taşındığı boru hatlarında standart sızdırmazlık elemanıdır.",
    "features": [
      "DIN EN 1514-1 ve ASME B16.21 normlarına tam uyum",
      "Cıvata tork kaybına karşı yüksek direnç",
      "Gaz sızdırmazlık testlerinden geçmiş onaylı formülasyon"
    ],
    "materials": [
      "Aramid Elyaf + İnorganik Dolgu + NBR Bağlayıcı (Asbestsiz)"
    ],
    "standards": [
      "DIN EN 1514-1",
      "ASME B16.21",
      "BS 7531 Grade Y/X"
    ],
    "applications": [
      "Kalorifer ve mekanik tesisatlar",
      "Gaz ve akaryakıt boru hatları",
      "Pompa ve vana flanş bağlantıları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık Dayanımı",
        "value": "-50°C ile +250°C (Kısa süreli +350°C)"
      },
      {
        "property": "Basınç Dayanımı",
        "value": "PN 40 (40 Bar)"
      },
      {
        "property": "Standart Kalınlık",
        "value": "1.0 mm, 1.5 mm, 2.0 mm, 3.0 mm"
      }
    ],
    "image": "/images/products/klingirit-flans-conta.webp",
    "imagePlaceholderText": "Klingirit Flanş Conta - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "asbestsiz-klingrit-levhalar",
      "klingirit-conta",
      "asbetsiz-conta"
    ],
    "seoTitle": "Klingirit Flanş Conta | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Klingirit Flanş Conta imalatı ve tedariği. Asbestsiz aramid elyaf ve NBR bağlayıcılı levhalardan DIN ve ANSI normlarında üretilen flanş contaları."
  },
  {
    "id": "klingirit-conta",
    "slug": "klingirit-conta",
    "name": "Klingirit Conta (Asbestsiz)",
    "category": "contalar",
    "shortDescription": "Genel endüstriyel flanş ve kapak bağlantıları için yüksek basınca dayanıklı asbestsiz klingirit contalar.",
    "description": "Asbestsiz klingirit contalar; çevre ve iş sağlığı kurallarına uygun olarak üretilen, asbest içermeyen yüksek mukavemetli aramid lifli contalardır. Tesisat, pompa ve makine imalatında sızdırmazlık güvenliği sağlar.",
    "features": [
      "Asbestsiz çevre dostu formül",
      "Geniş akışkan uyumluluğu",
      "Ekonomik ve güvenilir"
    ],
    "materials": [
      "Aramid / NBR Kompozit"
    ],
    "standards": [
      "DIN 28091",
      "DIN EN 1514-1"
    ],
    "applications": [
      "Genel tesisat hatları",
      "Hava kompresörleri",
      "Hidrolik yağ tankları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "250°C"
      },
      {
        "property": "Basınç",
        "value": "40 Bar"
      }
    ],
    "image": "/images/products/klingirit-conta.webp",
    "imagePlaceholderText": "Klingirit Conta (Asbestsiz) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "klingirit-flans-conta",
      "asbetsiz-conta",
      "asbestsiz-klingrit-levhalar"
    ],
    "seoTitle": "Klingirit Conta (Asbestsiz) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Klingirit Conta (Asbestsiz) imalatı ve tedariği. Genel endüstriyel flanş ve kapak bağlantıları için yüksek basınca dayanıklı asbestsiz klingirit contalar."
  },
  {
    "id": "asbetsiz-conta",
    "slug": "asbetsiz-conta",
    "name": "Asbestsiz Conta",
    "category": "contalar",
    "shortDescription": "Gelişmiş sentetik lifler ve elastomer bağlayıcılı yeni nesil asbestsiz sızdırmazlık contaları.",
    "description": "Asbestsiz contalar, boru hatlarında ve endüstriyel ekipmanlarda eski tip kanserojen asbestli contaların yerine geçen, modern sentetik aramid elyaf takviyeli contalardır.",
    "features": [
      "%100 Asbestsiz sertifikalı",
      "Yüksek basınç ve çekme mukavemeti",
      "Minimum gaz geçirgenliği"
    ],
    "materials": [
      "Sentetik Aramid Lifleri + NBR Matriks"
    ],
    "standards": [
      "DIN EN 1514-1",
      "BS 7531"
    ],
    "applications": [
      "Isıtma sistemleri",
      "Gaz dağıtım devreleri",
      "Endüstriyel tesisatlar"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "250°C"
      },
      {
        "property": "Basınç",
        "value": "40 Bar"
      }
    ],
    "image": "/images/products/asbetsiz-conta.webp",
    "imagePlaceholderText": "Asbestsiz Conta - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "klingirit-flans-conta",
      "klingirit-conta",
      "asbestsiz-klingrit-levhalar"
    ],
    "seoTitle": "Asbestsiz Conta | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Asbestsiz Conta imalatı ve tedariği. Gelişmiş sentetik lifler ve elastomer bağlayıcılı yeni nesil asbestsiz sızdırmazlık contaları."
  },
  {
    "id": "ptfe-teflon-conta",
    "slug": "ptfe-teflon-conta",
    "name": "PTFE / Teflon Conta",
    "category": "contalar",
    "shortDescription": "Güçlü asitler, bazlar ve agresif kimyasallara karşı tam inert sızdırmazlık sağlayan saf ve modifiye PTFE contalar.",
    "description": "PTFE (Politetrafloroetilen - Teflon) contalar; erimiş alkali metaller hariç bilinen neredeyse tüm kimyasallara, asitlere ve solventlere karşı tam kimyasal direnç gösterir. Gıda ve ilaç sektöründe FDA uyumluluğu ile mutlak saflık sağlar.",
    "features": [
      "Mükemmel kimyasal direnç (pH 0-14 aralığında tam kararlılık)",
      "FDA onaylı, fizyolojik olarak zararsız ve kokusuz",
      "Ultra düşük sürtünme katsayısı ve yapışmazlık",
      "-200°C ile +260°C geniş çalışma sıcaklığı"
    ],
    "materials": [
      "%100 Saf PTFE (Virgin PTFE) veya Genleşmiş (Expanded) ePTFE"
    ],
    "standards": [
      "FDA 21 CFR 177.1550",
      "DIN EN 1514-1",
      "ASME B16.21"
    ],
    "applications": [
      "Kimya ve gübre sanayi asit hatları",
      "İlaç ve biyoteknoloji reaktörleri",
      "Gıda işleme ve dolum tesisleri"
    ],
    "specifications": [
      {
        "property": "Kimyasal Dayanım",
        "value": "pH 0 - 14 (Tüm asit ve solventler)"
      },
      {
        "property": "Sıcaklık Aralığı",
        "value": "-200°C ile +260°C"
      },
      {
        "property": "Gıda Uyumu",
        "value": "FDA 21 CFR 177.1550 Onaylı"
      },
      {
        "property": "Çekme Dayanımı",
        "value": "≥ 25 MPa"
      }
    ],
    "image": "/images/products/ptfe-teflon-conta.webp",
    "imagePlaceholderText": "PTFE / Teflon Conta - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "ptfe-teflon-levha",
      "termoflon-levha",
      "termoflon-contalon"
    ],
    "seoTitle": "PTFE / Teflon Conta | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "PTFE / Teflon Conta imalatı ve tedariği. Güçlü asitler, bazlar ve agresif kimyasallara karşı tam inert sızdırmazlık sağlayan saf ve modifiye PTFE contalar."
  },
  {
    "id": "izole-flans-kiti-conta",
    "slug": "izole-flans-kiti-conta",
    "name": "İzole Flanş Kiti Conta",
    "category": "contalar",
    "shortDescription": "Boru hatlarında katodik koruma sağlayan, galvanik korozyonu önleyen dielektrik yalıtımlı flanş izolasyon kiti.",
    "description": "İzole flanş kitleri; yeraltı ve yerüstü boru hatlarında farklı metaller arasındaki galvanik korozyonu engellemek ve katodik koruma akımını yönlendirmek için kullanılan komple yalıtım setleridir. Kit içeriğinde yalıtkan conta, cıvata izole manşonları ve çelik/izole pullar yer alır.",
    "features": [
      "Yüksek dielektrik yalıtım mukavemeti (kV seviyesinde elektriksel direnç)",
      "Galvanik korozyonu ve kaçak akımları tamamen bloke eder",
      "Komple set: Conta + İzole boru manşonları + Çift pul"
    ],
    "materials": [
      "Conta: G10/FR4 Cam Elyaf Epoksi veya Fenolik Levha + PTFE/Viton O-Ring",
      "Manşon: Mylar / Nomex",
      "Pul: Çinko Kaplı Çelik + G10 Pul"
    ],
    "standards": [
      "ASME B16.5",
      "NACE SP0286",
      "API 6D"
    ],
    "applications": [
      "Doğalgaz ve petrol boru hatları",
      "Katodik korumalı su isale hatları",
      "Rafineri ve liman dolum iskeleleri"
    ],
    "specifications": [
      {
        "property": "Dielektrik Dayanımı",
        "value": "≥ 20 kV/mm"
      },
      {
        "property": "Basınç Sınıfı",
        "value": "ANSI Class 150 – 2500 / PN 10 – PN 250"
      },
      {
        "property": "Kit Tipi",
        "value": "Tip E (Full Face) veya Tip F (IBC Ring)"
      },
      {
        "property": "Sıcaklık",
        "value": "-40°C ile +150°C (G10 ile +180°C)"
      }
    ],
    "image": "/images/products/izole-flans-kiti-conta.webp",
    "imagePlaceholderText": "İzole Flanş Kiti Conta - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "spiral-sarimli-celik-conta",
      "klingirit-flans-conta",
      "epoxy-fiber-levha"
    ],
    "seoTitle": "İzole Flanş Kiti Conta | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "İzole Flanş Kiti Conta imalatı ve tedariği. Boru hatlarında katodik koruma sağlayan, galvanik korozyonu önleyen dielektrik yalıtımlı flanş izolasyon kiti."
  },
  {
    "id": "kazan-kapak-contasi",
    "slug": "kazan-kapak-contasi",
    "name": "Kazan Kapak Contası",
    "category": "contalar",
    "shortDescription": "Buhar kazanları, otoklavlar ve menhol kapakları için oval, armut veya yuvarlak formda yüksek ısı contaları.",
    "description": "Kazan kapak contaları; buhar kazanlarının el, baş ve adam deliklerinde (manhole / handhole) yüksek basınçlı doymuş buhara dayanacak şekilde özel olarak boyutlandırılmış oval veya kavisli contalardır. Grafit, seramik veya klingerit kompozitlerden üretilir.",
    "features": [
      "Oval ve armut biçimli standart kazan kapak ölçülerine tam uyum",
      "Yüksek basınçlı doymuş buhar ortamında genleşme ve tam sızdırmazlık",
      "Yüksek mekanik sıkıştırma direnci"
    ],
    "materials": [
      "Saf Grafit + Çelik Sac / Telli Cam-Seramik Dokuma"
    ],
    "standards": [
      "DIN 28091",
      "TRD 401 / TRD 402"
    ],
    "applications": [
      "Endüstriyel buhar kazanları",
      "Sıcak su kazanları ve eşanjörler",
      "Otoklav ve sterilizasyon tankları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık Dayanımı",
        "value": "250°C - 450°C"
      },
      {
        "property": "Basınç",
        "value": "25 Bar - 40 Bar Buhar"
      },
      {
        "property": "Standart Ebatlar",
        "value": "80x120, 100x150, 150x200, 220x320, 300x400 mm"
      }
    ],
    "image": "/images/products/kazan-kapak-contasi.webp",
    "imagePlaceholderText": "Kazan Kapak Contası - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "buhar-contasi",
      "kalorifer-contasi",
      "saf-grafitli-ici-ringli-conta"
    ],
    "seoTitle": "Kazan Kapak Contası | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Kazan Kapak Contası imalatı ve tedariği. Buhar kazanları, otoklavlar ve menhol kapakları için oval, armut veya yuvarlak formda yüksek ısı contaları."
  },
  {
    "id": "buhar-contasi",
    "slug": "buhar-contasi",
    "name": "Buhar Contası",
    "category": "contalar",
    "shortDescription": "Kızgın buhar ve doymuş buhar hatlarında yüksek basınç ve sıcaklığa dayanıklı flanş contaları.",
    "description": "Buhar contaları; sanayi tesislerinin enerji ve buhar devrelerinde termal genleşmelere ve buhar erozyonuna karşı özel olarak formüle edilmiş yüksek sıcaklık sızdırmazlık contalarıdır.",
    "features": [
      "Kızgın ve doymuş buhar erozyonuna karşı yüksek direnç",
      "Sürekli termal çevrimlerde tork stabilitesi",
      "Grafitli ve spiral sarımlı alternatifler"
    ],
    "materials": [
      "Paslanmaz Çelik + Grafit veya Telli Klingerit"
    ],
    "standards": [
      "DIN EN 1514-1",
      "ASME B16.20"
    ],
    "applications": [
      "Buhar türbinleri",
      "Tekstil boyahane buhar devreleri",
      "Kağıt ve gıda buhar hatları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "350°C - 550°C"
      },
      {
        "property": "Basınç",
        "value": "PN 40 - PN 100"
      }
    ],
    "image": "/images/products/buhar-contasi.webp",
    "imagePlaceholderText": "Buhar Contası - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "kazan-kapak-contasi",
      "spiral-sarimli-celik-conta",
      "kalorifer-contasi"
    ],
    "seoTitle": "Buhar Contası | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Buhar Contası imalatı ve tedariği. Kızgın buhar ve doymuş buhar hatlarında yüksek basınç ve sıcaklığa dayanıklı flanş contaları."
  },
  {
    "id": "kalorifer-contasi",
    "slug": "kalorifer-contasi",
    "name": "Kalorifer Contası",
    "category": "contalar",
    "shortDescription": "Merkezi ısıtma, kalorifer kazanları ve radyatör tesisatları için dayanıklı klingerit ve lastik contalar.",
    "description": "Kalorifer contaları; sıcak su sirkülasyon hatlarında, kalorifer petek bağlantılarında ve kazan flanşlarında su sızıntılarını önleyen standart sızdırmazlık contalarıdır.",
    "features": [
      "Sıcak su ve korozyon inhibitörlerine dayanım",
      "Kolay montaj ve standart rakor/flanş ölçüleri",
      "Uzun hizmet ömrü"
    ],
    "materials": [
      "Asbestsiz Klingrit / EPDM Kauçuk"
    ],
    "standards": [
      "DIN 7715",
      "TSE"
    ],
    "applications": [
      "Bina ısıtma kazan daireleri",
      "Radyatör ve kolektör bağlantıları",
      "Sıcak su boyler devreleri"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "110°C - 150°C"
      },
      {
        "property": "Basınç",
        "value": "PN 10 - PN 16"
      }
    ],
    "image": "/images/products/kalorifer-contasi.webp",
    "imagePlaceholderText": "Kalorifer Contası - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "kalorifer-boru-contasi",
      "rekor-conta",
      "klingirit-flans-conta"
    ],
    "seoTitle": "Kalorifer Contası | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Kalorifer Contası imalatı ve tedariği. Merkezi ısıtma, kalorifer kazanları ve radyatör tesisatları için dayanıklı klingerit ve lastik contalar."
  },
  {
    "id": "kalorifer-boru-contasi",
    "slug": "kalorifer-boru-contasi",
    "name": "Kalorifer Boru Contası",
    "category": "contalar",
    "shortDescription": "Kalorifer ana dağıtım boruları ve kolon hatları için flanş ve kaplin sızdırmazlık contaları.",
    "description": "Kalorifer boru contaları, sıcak su dağıtım borularının flanşlı veya dişli rakor bağlantılarında sızdırmazlık sağlamak üzere tasarlanmış ekonomik ve güvenilir contalardır.",
    "features": [
      "Standart boru inç ölçülerine tam uyum",
      "Sıcak su ve pas oluşumuna karşı direnç"
    ],
    "materials": [
      "Asbestsiz Levha / EPDM"
    ],
    "standards": [
      "DIN EN 1514-1"
    ],
    "applications": [
      "Merkezi ısıtma boru hatları",
      "Kolon dağıtım boruları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "120°C"
      },
      {
        "property": "Basınç",
        "value": "16 Bar"
      }
    ],
    "image": "/images/products/kalorifer-boru-contasi.webp",
    "imagePlaceholderText": "Kalorifer Boru Contası - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "kalorifer-contasi",
      "rekor-conta",
      "klingirit-flans-conta"
    ],
    "seoTitle": "Kalorifer Boru Contası | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Kalorifer Boru Contası imalatı ve tedariği. Kalorifer ana dağıtım boruları ve kolon hatları için flanş ve kaplin sızdırmazlık contaları."
  },
  {
    "id": "rekor-conta",
    "slug": "rekor-conta",
    "name": "Rekor Conta (Rakor Contası)",
    "category": "contalar",
    "shortDescription": "Pirinç, döküm ve paslanmaz rakor bağlantıları için dar et paylı sızdırmazlık halkaları.",
    "description": "Rekor contaları; boru tesisatlarında kullanılan rakor (union) bağlantılarının iç konik veya düz alın yüzeylerine oturan, dar bilezik formundaki özel ölçülü contalardır.",
    "features": [
      "1/2\" ile 4\" arası tüm standart rakor tiplerine uygunluk",
      "Sıkışma esnasında ezilmeyen yüksek mekanik mukavemet"
    ],
    "materials": [
      "Asbestsiz Klingerit / PTFE / Klingerit Telli"
    ],
    "standards": [
      "DIN 2690"
    ],
    "applications": [
      "Pompa giriş-çıkış rakorları",
      "Su sayacı bağlantıları",
      "Gaz rakorları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "-20°C / +200°C"
      },
      {
        "property": "Ölçüler",
        "value": "1/2\", 3/4\", 1\", 1 1/4\", 1 1/2\", 2\", 2 1/2\", 3\", 4\""
      }
    ],
    "image": "/images/products/rekor-conta.webp",
    "imagePlaceholderText": "Rekor Conta (Rakor Contası) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "kalorifer-contasi",
      "klingirit-flans-conta",
      "ptfe-teflon-conta"
    ],
    "seoTitle": "Rekor Conta (Rakor Contası) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Rekor Conta (Rakor Contası) imalatı ve tedariği. Pirinç, döküm ve paslanmaz rakor bağlantıları için dar et paylı sızdırmazlık halkaları."
  },
  {
    "id": "ozel-kesim-conta",
    "slug": "ozel-kesim-conta",
    "name": "Özel Kesim Conta",
    "category": "contalar",
    "shortDescription": "Müşteri teknik resmine, numunesine veya CAD/DXF çizimine göre CNC su jeti ile hassas kesim contalar.",
    "description": "Özel kesim contalar; atölyemizde bulunan gelişmiş CNC su jeti (waterjet) ve dijital bıçaklı kesim makinelerinde, kalıp masrafı olmadan mikron mertebesinde hassasiyetle imal edilir. Grafit, teflon, klingerit, silikon, viton ve kauçuk malzemelerden tek parça veya seri olarak üretilir.",
    "features": [
      "Kalıp masrafı olmadan 1 adetten binlerce adete anında üretim",
      "CAD / DXF teknik çizimden doğrudan CNC su jeti kesimi",
      "0.2 mm'den 100 mm kalınlığa kadar her türlü malzemede çapakсыз kesim"
    ],
    "materials": [
      "Grafit, PTFE, Klingrit, Viton, EPDM, NBR, Silikon, Mantar, Fiber"
    ],
    "standards": [
      "Müşteri Teknik Resmi / DIN ISO 2768 Hassasiyet Sınıfı"
    ],
    "applications": [
      "Özel makine imalatı",
      "Savunma sanayi ve havacılık prototipleri",
      "Gemi inşa ve özel flanşlar"
    ],
    "specifications": [
      {
        "property": "Kesim Hassasiyeti",
        "value": "±0.1 mm CNC Su Jeti"
      },
      {
        "property": "Maks. Levha Ebadı",
        "value": "2000 x 3000 mm"
      },
      {
        "property": "Desteklenen Formatlar",
        "value": "DXF, DWG, PDF, STEP, Fiziksel Numune"
      }
    ],
    "image": "/images/products/ozel-kesim-conta.webp",
    "imagePlaceholderText": "Özel Kesim Conta - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "ozel-imalat-conta",
      "spiral-sarimli-celik-conta",
      "klingirit-flans-conta"
    ],
    "seoTitle": "Özel Kesim Conta | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Özel Kesim Conta imalatı ve tedariği. Müşteri teknik resmine, numunesine veya CAD/DXF çizimine göre CNC su jeti ile hassas kesim contalar."
  },
  {
    "id": "ozel-imalat-conta",
    "slug": "ozel-imalat-conta",
    "name": "Özel İmalat Conta",
    "category": "contalar",
    "shortDescription": "Standart dışı ölçü, geometrik şekil ve aşırı çalışma koşulları için özel üretilen endüstriyel contalar.",
    "description": "Özel imalat contalar; standart boru normlarının dışındaki kare, dikdörtgen, oval veya çok delikli karmaşık geometrilere sahip endüstriyel ekipmanlar için tesisimize özel imal edilen sızdırmazlık ürünleridir.",
    "features": [
      "Prototip ve acil siparişlerde hızlı teslimat",
      "Zorlu sıcaklık ve kimyasallara göre malzeme mühendisliği desteği"
    ],
    "materials": [
      "Tüm endüstriyel conta hammadde yelpazesi"
    ],
    "standards": [
      "Özel Tasarım"
    ],
    "applications": [
      "Isı eşanjörü ayna contaları",
      "Fırın kapak contaları",
      "Pompa gövde contaları"
    ],
    "specifications": [
      {
        "property": "Üretim Yöntemi",
        "value": "CNC Kesim / Vulkanizasyon / Metal Büküm"
      }
    ],
    "image": "/images/products/ozel-imalat-conta.webp",
    "imagePlaceholderText": "Özel İmalat Conta - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "ozel-kesim-conta",
      "spiral-sarimli-celik-conta",
      "klingirit-flans-conta"
    ],
    "seoTitle": "Özel İmalat Conta | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Özel İmalat Conta imalatı ve tedariği. Standart dışı ölçü, geometrik şekil ve aşırı çalışma koşulları için özel üretilen endüstriyel contalar."
  },
  {
    "id": "antiasit",
    "slug": "antiasit",
    "name": "Antiasit Conta",
    "category": "contalar",
    "shortDescription": "Konsantre asitler, bazlar ve agresif kimyasal hatlar için özel kimyasal dirençli conta.",
    "description": "Antiasit contalar; sülfürik asit, hidroklorik asit, nitrik asit ve diğer korozif kimyasal akışkanların bulunduğu boru hatlarında ve tank kapaklarında erimeden, çözünmeden güvenilir sızdırmazlık sağlayan yüksek kaliteli contalardır.",
    "features": [
      "Konsantre ve seyreltik asitlere karşı maksimum direnç",
      "Asit buharlarına karşı üstün kimyasal bariyer"
    ],
    "materials": [
      "Modifiye PTFE / Özel Antiasit Kompozit Levha"
    ],
    "standards": [
      "DIN EN 1514-1",
      "ASTM F104"
    ],
    "applications": [
      "Asit üretim tesisleri",
      "Galvano ve kaplama banyoları",
      "Gübre sanayi"
    ],
    "specifications": [
      {
        "property": "Kimyasal Dayanım",
        "value": "H2SO4, HCl, HNO3, H3PO4 (pH 0-14)"
      },
      {
        "property": "Sıcaklık",
        "value": "200°C"
      },
      {
        "property": "Basınç",
        "value": "40 Bar"
      }
    ],
    "image": "/images/products/antiasit.webp",
    "imagePlaceholderText": "Antiasit Conta - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "antipetrol",
      "ptfe-teflon-conta",
      "viton-conta"
    ],
    "seoTitle": "Antiasit Conta | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Antiasit Conta imalatı ve tedariği. Konsantre asitler, bazlar ve agresif kimyasal hatlar için özel kimyasal dirençli conta."
  },
  {
    "id": "antipetrol",
    "slug": "antipetrol",
    "name": "Antipetrol Conta",
    "category": "contalar",
    "shortDescription": "Ham petrol, benzin, mazot, gaz yağı ve hidrokarbonlara dayanıklı özel yakıt contası.",
    "description": "Antipetrol contalar; petrol türevleri, solventler, yakıtlar ve madeni yağların taşındığı hatlarda şişme, erime veya deformasyon yapmayan NBR ve yüksek aramid içerikli contalardır.",
    "features": [
      "Akaryakıt ve mineral yağlarda sıfır hacimsel şişme",
      "Rafineri ve akaryakıt dolum tesisleri için onaylı"
    ],
    "materials": [
      "Yüksek Akrilonitril (ACN) NBR / Aramid Matriks"
    ],
    "standards": [
      "DIN 3535-6",
      "DIN EN 1514-1"
    ],
    "applications": [
      "Akaryakıt tankerleri ve dolum terminalleri",
      "Petrol boru hatları",
      "Gemi yakıt devreleri"
    ],
    "specifications": [
      {
        "property": "Direnç",
        "value": "Benzin, Mazot, Gaz yağı, ASTM Yağ 1-3"
      },
      {
        "property": "Sıcaklık",
        "value": "-30°C / +180°C"
      },
      {
        "property": "Basınç",
        "value": "PN 25"
      }
    ],
    "image": "/images/products/antipetrol.webp",
    "imagePlaceholderText": "Antipetrol Conta - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "antiasit",
      "t200",
      "klingirit-flans-conta"
    ],
    "seoTitle": "Antipetrol Conta | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Antipetrol Conta imalatı ve tedariği. Ham petrol, benzin, mazot, gaz yağı ve hidrokarbonlara dayanıklı özel yakıt contası."
  },
  {
    "id": "antipetrol-conta",
    "slug": "antipetrol-conta",
    "name": "Antipetrol Conta (Flanş Tipi)",
    "category": "contalar",
    "shortDescription": "Akaryakıt ve petrol hatları flanş bağlantıları için antipetrol flanş contası.",
    "description": "Antipetrol flanş contası, rafineri ve akaryakıt dolum flanşlarında sızıntıyı önleyen yüksek yağ mukavemetli flanş contasıdır.",
    "features": [
      "DIN ve ANSI normlarında hazır flanş ölçüleri",
      "Petrol hidrokarbonlarına karşı tam sızdırmazlık"
    ],
    "materials": [
      "Antipetrol Aramid/NBR Kompozit"
    ],
    "standards": [
      "DIN EN 1514-1",
      "ASME B16.21"
    ],
    "applications": [
      "Rafineriler",
      "Yakıt pompaları",
      "Tank çiftlikleri"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "180°C"
      },
      {
        "property": "Basınç",
        "value": "25 Bar"
      }
    ],
    "image": "/images/products/antipetrol-conta.webp",
    "imagePlaceholderText": "Antipetrol Conta (Flanş Tipi) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "antipetrol",
      "antiasit",
      "klingirit-flans-conta"
    ],
    "seoTitle": "Antipetrol Conta (Flanş Tipi) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Antipetrol Conta (Flanş Tipi) imalatı ve tedariği. Akaryakıt ve petrol hatları flanş bağlantıları için antipetrol flanş contası."
  },
  {
    "id": "t200",
    "slug": "t200",
    "name": "T200 Yüksek Sıcaklık ve Basınç Contası",
    "category": "contalar",
    "shortDescription": "200 Bar'a ve 400°C'ye varan ağır sanayi flanş bağlantıları için T200 sınıfı conta.",
    "description": "T200 contalar, yüksek basınçlı santrallerde ve buhar tesisatlarında zorlu çalışma koşulları altında contanın ezilmesini önleyen yüksek yoğunluklu sızdırmazlık contasıdır.",
    "features": [
      "Ağır hizmet tipi yüksek basınç dayanımı",
      "Mükemmel tork tutma performansı"
    ],
    "materials": [
      "Yüksek Mukavemetli Asbestsiz Lifler + Özel Reçine"
    ],
    "standards": [
      "DIN 28091"
    ],
    "applications": [
      "Termik santraller",
      "Yüksek basınçlı buhar hatları",
      "Basınçlı kaplar"
    ],
    "specifications": [
      {
        "property": "Maks. Sıcaklık",
        "value": "400°C"
      },
      {
        "property": "Maks. Basınç",
        "value": "100 Bar"
      }
    ],
    "image": "/images/products/t200.webp",
    "imagePlaceholderText": "T200 Yüksek Sıcaklık ve Basınç Contası - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "antipetrol",
      "spiral-sarimli-celik-conta",
      "grafitli-telli-conta"
    ],
    "seoTitle": "T200 Yüksek Sıcaklık ve Basınç Contası | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "T200 Yüksek Sıcaklık ve Basınç Contası imalatı ve tedariği. 200 Bar'a ve 400°C'ye varan ağır sanayi flanş bağlantıları için T200 sınıfı conta."
  },
  {
    "id": "saf-grafit-levha",
    "slug": "saf-grafit-levha",
    "name": "Saf Grafit Levha",
    "category": "contalik-malzemeler",
    "shortDescription": "%99.8 saf genleşmiş grafitten üretilen, yüksek sıcaklık ve kimyasallara dayanıklı esnek plaka.",
    "description": "Saf grafit levhalar; asbest ve organik bağlayıcı içermeyen, yüksek saflıkta genleşmiş mineral grafitten lamine edilen contalık plakalardır. 550°C'ye varan sıcaklıklarda elastikiyetini korur, sertleşmez ve yaşlanmaz.",
    "features": [
      "Mükemmel termal iletkenlik ve esneklik",
      "Sıcaklık ve kimyasal şoklara karşı üstün direnç",
      "Organik bağlayıcı içermez, karbonizasyona uğramaz"
    ],
    "materials": [
      "%99.8 Saf Genleşmiş Grafit Karbon"
    ],
    "standards": [
      "DIN 28091-4",
      "ASTM F104"
    ],
    "applications": [
      "Kızgın yağ ve buhar flanş contaları kesimi",
      "Egzoz ve kazan contaları imalatı"
    ],
    "specifications": [
      {
        "property": "Karbon Saflığı",
        "value": "≥ %99.8 Saf Grafit"
      },
      {
        "property": "Sıcaklık Dayanımı",
        "value": "-200°C ile +550°C (Atmosferde 450°C, Buharda 650°C)"
      },
      {
        "property": "Yoğunluk",
        "value": "1.0 g/cm³"
      },
      {
        "property": "Standart Ebatlar",
        "value": "1000 x 1000 mm / 1500 x 1500 mm"
      },
      {
        "property": "Kalınlıklar",
        "value": "0.5 mm, 1.0 mm, 1.5 mm, 2.0 mm, 3.0 mm"
      }
    ],
    "image": "/images/products/saf-grafit-levha.webp",
    "imagePlaceholderText": "Saf Grafit Levha - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "grafitli-telli-conta",
      "asbestsiz-klingrit-levhalar",
      "saf-grafitli-ici-ringli-conta"
    ],
    "seoTitle": "Saf Grafit Levha | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Saf Grafit Levha imalatı ve tedariği. %99.8 saf genleşmiş grafitten üretilen, yüksek sıcaklık ve kimyasallara dayanıklı esnek plaka."
  },
  {
    "id": "asbestsiz-klingrit-levhalar",
    "slug": "asbestsiz-klingrit-levhalar",
    "name": "Asbestsiz Klingrit Levhalar",
    "category": "contalik-malzemeler",
    "shortDescription": "Aramid elyaf takviyeli, su, buhar, gaz ve yağ hatlarında conta kesimi için yüksek kaliteli levhalar.",
    "description": "Asbestsiz klingrit levhalar; sızdırmazlık sektöründe conta imalatı yapan atölyeler ve bakım ekipleri için 1500x1500mm standart ebatlarda üretilen, yüksek mekanik basınca dayanıklı plakalardır.",
    "features": [
      "Kolay kesim ve işlenebilirlik",
      "Düşük gaz geçirgenliği ve yüksek çekme mukavemeti",
      "Çevre ve insan sağlığı standartlarına tam uyum"
    ],
    "materials": [
      "Aramid Lifleri + İnorganik Dolgular + NBR Matriks"
    ],
    "standards": [
      "BS 7531",
      "DIN 28091-2"
    ],
    "applications": [
      "Atölyelerde flanş contası kesimi",
      "Pompa ve kompresör kapak contaları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "250°C sürekli / 350°C kısa süreli"
      },
      {
        "property": "Basınç",
        "value": "40 Bar"
      },
      {
        "property": "Ebat",
        "value": "1500 x 1500 mm / 1500 x 2000 mm"
      },
      {
        "property": "Kalınlık",
        "value": "0.5 mm - 5.0 mm"
      }
    ],
    "image": "/images/products/asbestsiz-klingrit-levhalar.webp",
    "imagePlaceholderText": "Asbestsiz Klingrit Levhalar - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "asbestsiz-klingerit-levha",
      "sacli-klingerit",
      "klingirit-flans-conta"
    ],
    "seoTitle": "Asbestsiz Klingrit Levhalar | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Asbestsiz Klingrit Levhalar imalatı ve tedariği. Aramid elyaf takviyeli, su, buhar, gaz ve yağ hatlarında conta kesimi için yüksek kaliteli levhalar."
  },
  {
    "id": "asbestsiz-klingerit-levha",
    "slug": "asbestsiz-klingerit-levha",
    "name": "Asbestsiz Klingerit Levha (Plaka)",
    "category": "contalik-malzemeler",
    "shortDescription": "Genel amaçlı sızdırmazlık contası üretimi için asbestsiz conta plakası.",
    "description": "Asbestsiz klingerit plaka levhalar, mekanik tesisat ve endüstriyel hatlar için flanş contası kesiminde kullanılan ekonomik ve dayanıklı levhalardır.",
    "features": [
      "Yüksek elastikiyet",
      "Standart kalınlık çeşitliliği"
    ],
    "materials": [
      "Sentetik Lif + NBR"
    ],
    "standards": [
      "DIN 28091"
    ],
    "applications": [
      "Genel tesisat",
      "Su ve gaz hatları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "250°C"
      },
      {
        "property": "Basınç",
        "value": "40 Bar"
      }
    ],
    "image": "/images/products/asbestsiz-klingerit-levha.webp",
    "imagePlaceholderText": "Asbestsiz Klingerit Levha (Plaka) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "asbestsiz-klingrit-levhalar",
      "sacli-klingerit",
      "saf-grafit-levha"
    ],
    "seoTitle": "Asbestsiz Klingerit Levha (Plaka) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Asbestsiz Klingerit Levha (Plaka) imalatı ve tedariği. Genel amaçlı sızdırmazlık contası üretimi için asbestsiz conta plakası."
  },
  {
    "id": "sacli-klingerit",
    "slug": "sacli-klingerit",
    "name": "Saçlı Klingerit Levha",
    "category": "contalik-malzemeler",
    "shortDescription": "İçerisinde çelik tel takviye veya delikli sac bulunan yüksek basınç klingerit levhası.",
    "description": "Saçlı klingerit levhalar; asbestsiz klingerit hamurunun içine mekanik mukavemeti artırmak amacıyla karbon çelik veya paslanmaz çelik tel örgü/perfore sac gömülerek imal edilen levhalardır. Yüksek basınç altında contanın dışarı fırlamasını önler.",
    "features": [
      "Çelik sac/tel takviyesi ile patlamaya karşı üstün mukavemet",
      "Yüksek cıvata torklarına dayanım"
    ],
    "materials": [
      "Aramid/NBR + Çelik Tel / Perfore Sac Takviyesi"
    ],
    "standards": [
      "DIN 28091-2"
    ],
    "applications": [
      "Egzoz contaları",
      "Kazan kapak contaları",
      "Yüksek basınç flanşları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "350°C"
      },
      {
        "property": "Basınç",
        "value": "80 Bar"
      }
    ],
    "image": "/images/products/sacli-klingerit.webp",
    "imagePlaceholderText": "Saçlı Klingerit Levha - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "grafitli-asbestsiz-telli",
      "asbestsiz-klingrit-levhalar",
      "grafitli-telli-conta"
    ],
    "seoTitle": "Saçlı Klingerit Levha | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Saçlı Klingerit Levha imalatı ve tedariği. İçerisinde çelik tel takviye veya delikli sac bulunan yüksek basınç klingerit levhası."
  },
  {
    "id": "grafitli-asbestsiz-telli",
    "slug": "grafitli-asbestsiz-telli",
    "name": "Grafitli Asbestsiz Telli Levha",
    "category": "contalik-malzemeler",
    "shortDescription": "Grafit kaplı, telli iç takviyeli ve asbestsiz yüksek sıcaklık contalık levhası.",
    "description": "Grafitli asbestsiz telli levhalar; yüzeyi grafit kaplanarak flanşa yapışması engellenen ve içindeki çelik tel sayesinde yüksek basınca direnen contalık levhalardır.",
    "features": [
      "Yüzey grafit kaplaması sayesinde söküm kolaylığı (yapışmazlık)",
      "Çelik tel takviyesi"
    ],
    "materials": [
      "Asbestsiz Lifler + Grafit Kaplama + Çelik Tel Örgü"
    ],
    "standards": [
      "DIN 28091"
    ],
    "applications": [
      "Buhar devreleri",
      "Egzoz flanşları",
      "Kazanlar"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "400°C"
      },
      {
        "property": "Basınç",
        "value": "60 Bar"
      }
    ],
    "image": "/images/products/grafitli-asbestsiz-telli.webp",
    "imagePlaceholderText": "Grafitli Asbestsiz Telli Levha - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "grafitli-asbestli-telli",
      "sacli-klingerit",
      "saf-grafit-levha"
    ],
    "seoTitle": "Grafitli Asbestsiz Telli Levha | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Grafitli Asbestsiz Telli Levha imalatı ve tedariği. Grafit kaplı, telli iç takviyeli ve asbestsiz yüksek sıcaklık contalık levhası."
  },
  {
    "id": "grafitli-asbestli-telli",
    "slug": "grafitli-asbestli-telli",
    "name": "Grafitli Telli Yüksek Isı Levhası",
    "category": "contalik-malzemeler",
    "shortDescription": "Ağır sanayi fırın ve döküm tesisleri için yüksek termal dirence sahip telli levha.",
    "description": "Grafitli telli yüksek ısı levhaları, ağır sanayi fırınlarında ve termal izolasyon flanşlarında kullanılan güçlendirilmiş contalık plakalardır.",
    "features": [
      "Ekstrem ısı dayanımı",
      "Telli takviye"
    ],
    "materials": [
      "Yüksek Isı Dayanımlı Lifler + Grafit + Tel Çekirdek"
    ],
    "standards": [
      "Endüstriyel Standart"
    ],
    "applications": [
      "Metalurji fırınları",
      "Dökümhaneler",
      "Egzoz hatları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "450°C"
      },
      {
        "property": "Basınç",
        "value": "50 Bar"
      }
    ],
    "image": "/images/products/grafitli-asbestli-telli.webp",
    "imagePlaceholderText": "Grafitli Telli Yüksek Isı Levhası - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "grafitli-asbestsiz-telli",
      "saf-grafit-levha",
      "sacli-klingerit"
    ],
    "seoTitle": "Grafitli Telli Yüksek Isı Levhası | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Grafitli Telli Yüksek Isı Levhası imalatı ve tedariği. Ağır sanayi fırın ve döküm tesisleri için yüksek termal dirence sahip telli levha."
  },
  {
    "id": "mantar-levhalar",
    "slug": "mantar-levhalar",
    "name": "Mantar Levhalar (Kauçuklu Mantar)",
    "category": "contalik-malzemeler",
    "shortDescription": "Granül mantar ve NBR kauçuk karışımı, trafo, karter ve hidrolik yağ kapak contaları için ideal levha.",
    "description": "Kauçuklu mantar levhalar; doğal granül mantarın NBR (Nitril) veya Neopren elastomer ile birleştirilmesiyle üretilir. Yağ, yakıt ve titreşim sönümleme gerektiren transformatör kapaklarında ve otomotiv karter contalarında mükemmel performans gösterir.",
    "features": [
      "Düşük cıvata yüklerinde bile mükemmel sızdırmazlık",
      "Yüksek titreşim sönümleme ve ses izolasyonu",
      "Transformatör yağı ve hidrolik yağlara tam uyumluluk"
    ],
    "materials": [
      "Doğal Granül Mantar + NBR Kauçuk Bağlayıcı"
    ],
    "standards": [
      "ASTM F104",
      "DIN 7715"
    ],
    "applications": [
      "Elektrik trafoları sızdırmazlık contaları",
      "Otomotiv karter ve subap kapak contaları",
      "Titreşim sönümleme takozları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık Aralığı",
        "value": "-30°C ile +120°C"
      },
      {
        "property": "Yoğunluk",
        "value": "0.65 - 0.85 g/cm³"
      },
      {
        "property": "Standart Ebat",
        "value": "1000 x 1000 mm"
      },
      {
        "property": "Kalınlıklar",
        "value": "1.0 mm ile 10.0 mm arası"
      }
    ],
    "image": "/images/products/mantar-levhalar.webp",
    "imagePlaceholderText": "Mantar Levhalar (Kauçuklu Mantar) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "lastik-conta",
      "asbestsiz-klingrit-levhalar",
      "vulkanize-fiber-levhalar"
    ],
    "seoTitle": "Mantar Levhalar (Kauçuklu Mantar) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Mantar Levhalar (Kauçuklu Mantar) imalatı ve tedariği. Granül mantar ve NBR kauçuk karışımı, trafo, karter ve hidrolik yağ kapak contaları için ideal levha."
  },
  {
    "id": "vulkanize-fiber-levhalar",
    "slug": "vulkanize-fiber-levhalar",
    "name": "Vulkanize Fiber Levhalar",
    "category": "contalik-malzemeler",
    "shortDescription": "Mükemmel mekanik işlenebilirlik ve yüksek elektriksel izolasyon sunan vulkanize fiber plakalar.",
    "description": "Vulkanize fiber levhalar; saf selüloz liflerinin kimyasal işlemlerle sıkıştırılmasıyla elde edilen, aşırı sert, aşınmaya dayanıklı ve yüksek elektriksel delinme mukavemetine sahip teknik yalıtım malzemeleridir. Tesisat contaları, aşınma pulları ve elektrik panolarında kullanılır.",
    "features": [
      "Üstün dielektrik yalıtım mukavemeti",
      "Yağ, solvent ve benzine karşı kimyasal direnç",
      "Mükemmel mekanik tokluk ve talaşlı işlenebilirlik"
    ],
    "materials": [
      "%100 Doğal Selüloz Vulkanize Fiber"
    ],
    "standards": [
      "DIN 7737",
      "IEC 60667"
    ],
    "applications": [
      "Elektrik trafo ve pano yalıtım parçaları",
      "Sıhhi tesisat rakor contaları",
      "Mekanik aşınma pulları ve fren balata altlıkları"
    ],
    "specifications": [
      {
        "property": "Dielektrik Dayanım",
        "value": "≥ 10 kV/mm"
      },
      {
        "property": "Sıcaklık Dayanımı",
        "value": "110°C sürekli (Kısa süreli 150°C)"
      },
      {
        "property": "Renkler",
        "value": "Kırmızı, Gri, Siyah, Beyaz"
      },
      {
        "property": "Standart Ebat",
        "value": "1000 x 2000 mm"
      }
    ],
    "image": "/images/products/vulkanize-fiber-levhalar.webp",
    "imagePlaceholderText": "Vulkanize Fiber Levhalar - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "fiber-levhalar",
      "epoxy-fiber-levha",
      "ptfe-teflon-levha"
    ],
    "seoTitle": "Vulkanize Fiber Levhalar | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Vulkanize Fiber Levhalar imalatı ve tedariği. Mükemmel mekanik işlenebilirlik ve yüksek elektriksel izolasyon sunan vulkanize fiber plakalar."
  },
  {
    "id": "fiber-levhalar",
    "slug": "fiber-levhalar",
    "name": "Fiber Levhalar",
    "category": "contalik-malzemeler",
    "shortDescription": "Elektriksel ve mekanik yalıtım amaçlı genel endüstriyel fiber levhalar.",
    "description": "Fiber levhalar; yüksek mekanik mukavemet ve yalıtım kabiliyeti sağlayan levha malzemeleridir.",
    "features": [
      "Yüksek bükülme ve basma mukavemeti",
      "Hafif ve darbelere dayanıklı"
    ],
    "materials": [
      "Teknik Elyaf Kompozit"
    ],
    "standards": [
      "DIN 7737"
    ],
    "applications": [
      "Mekanik pul üretimi",
      "Elektrik izolasyonu"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "110°C"
      },
      {
        "property": "Kalınlık",
        "value": "0.5 mm - 10 mm"
      }
    ],
    "image": "/images/products/fiber-levhalar.webp",
    "imagePlaceholderText": "Fiber Levhalar - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "vulkanize-fiber-levhalar",
      "epoxy-fiber-levha",
      "fiber-cubuklar"
    ],
    "seoTitle": "Fiber Levhalar | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Fiber Levhalar imalatı ve tedariği. Elektriksel ve mekanik yalıtım amaçlı genel endüstriyel fiber levhalar."
  },
  {
    "id": "epoxy-fiber-levha",
    "slug": "epoxy-fiber-levha",
    "name": "Epoksi Fiber Levha (FR4 / G10)",
    "category": "contalik-malzemeler",
    "shortDescription": "Cam elyaf dokuma ve epoksi reçine kompoziti, aşırı yüksek mekanik ve dielektrik mukavemetli plaka.",
    "description": "Epoksi fiber levhalar (FR4 / G10); cam kumaş katmanlarının alev geciktirici epoksi reçine ile yüksek basınç ve sıcaklıkta preslenmesiyle üretilir. Yüksek gerilim elektrik yalıtımında, izole flanş kitlerinde ve hassas mekanik parçalarda alternatifsizdir.",
    "features": [
      "FR4 alev geciktirici (UL94 V-0) sınıfı",
      "Nem emilimi neredeyse sıfır",
      "Aşırı yüksek basma ve eğilme mukavemeti"
    ],
    "materials": [
      "Dokuma Cam Kumaş + Epoksi Reçine"
    ],
    "standards": [
      "NEMA FR-4 / G-10",
      "DIN EN 60893 (EP GC 202)"
    ],
    "applications": [
      "İzole flanş kiti yalıtım contaları",
      "Trafolar ve yüksek gerilim panoları",
      "Havacılık ve savunma mekanik parçaları"
    ],
    "specifications": [
      {
        "property": "Dielektrik Dayanımı",
        "value": "≥ 20 kV/mm"
      },
      {
        "property": "Çalışma Sıcaklığı",
        "value": "130°C - 155°C (Sınıf B/F)"
      },
      {
        "property": "Eğilme Mukavemeti",
        "value": "≥ 350 MPa"
      },
      {
        "property": "Renk",
        "value": "Açık Yeşil / Sarımsı Saydam"
      }
    ],
    "image": "/images/products/epoxy-fiber-levha.webp",
    "imagePlaceholderText": "Epoksi Fiber Levha (FR4 / G10) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "epoxy-fiber-cubuk",
      "vulkanize-fiber-levhalar",
      "izole-flans-kiti-conta"
    ],
    "seoTitle": "Epoksi Fiber Levha (FR4 / G10) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Epoksi Fiber Levha (FR4 / G10) imalatı ve tedariği. Cam elyaf dokuma ve epoksi reçine kompoziti, aşırı yüksek mekanik ve dielektrik mukavemetli plaka."
  },
  {
    "id": "silikon-levhalar",
    "slug": "silikon-levhalar",
    "name": "Silikon Levhalar (Plaka & Rulo)",
    "category": "contalik-malzemeler",
    "shortDescription": "Gıda uyumlu (FDA) ve 250°C yüksek sıcaklığa dayanıklı saf silikon levha malzemeleri.",
    "description": "Silikon levhalar; gıda, medikal ve yüksek sıcaklık gerektiren fırın sistemleri için rulo ve plaka halinde sunulan saf elastomer levhalardır. İstenilen ebatta conta kesimi için idealdir.",
    "features": [
      "FDA gıda temas sertifikası",
      "-60°C ile +250°C çalışma aralığı",
      "Şeffaf, kırmızı ve beyaz seçenekler"
    ],
    "materials": [
      "%100 Saf Silikon Kauçuk"
    ],
    "standards": [
      "FDA 21 CFR 177.2600",
      "BfR"
    ],
    "applications": [
      "Fırın kapak contası kesimi",
      "Gıda dolum makineleri contaları",
      "Medikal cihaz contaları"
    ],
    "specifications": [
      {
        "property": "Sertlik",
        "value": "60 Shore A"
      },
      {
        "property": "Genişlik",
        "value": "1000 mm / 1200 mm rulo"
      },
      {
        "property": "Kalınlık",
        "value": "1 mm - 10 mm"
      }
    ],
    "image": "/images/products/silikon-levhalar.webp",
    "imagePlaceholderText": "Silikon Levhalar (Plaka & Rulo) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "silikon-conta",
      "silikon-fitiller",
      "silikon-kumaslar"
    ],
    "seoTitle": "Silikon Levhalar (Plaka & Rulo) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Silikon Levhalar (Plaka & Rulo) imalatı ve tedariği. Gıda uyumlu (FDA) ve 250°C yüksek sıcaklığa dayanıklı saf silikon levha malzemeleri."
  },
  {
    "id": "poliuretan-levhalar",
    "slug": "poliuretan-levhalar",
    "name": "Poliüretan Levhalar (PU)",
    "category": "contalik-malzemeler",
    "shortDescription": "Aşınma, yırtılma ve darbelere karşı kauçuktan 5 kat daha dayanıklı yüksek performanslı poliüretan plaka.",
    "description": "Poliüretan (PU) levhalar; ağır sanayi, madencilik, beton santralleri ve sac işleme preslerinde aşınma astarı, sıyırıcı bıçak ve darbe sönümleyici conta olarak kullanılan en dayanıklı elastomer plakalardır.",
    "features": [
      "Üstün aşınma ve yırtılma direnci",
      "Ağır yük altında düşük kalıcı deformasyon",
      "Madeni yağlar ve greslere tam direnç"
    ],
    "materials": [
      "Döküm Poliüretan Elastomer (Vulkollan / CPU)"
    ],
    "standards": [
      "DIN 53516 (Aşınma Testi)"
    ],
    "applications": [
      "Bunker ve oluk aşınma astarları",
      "Kar küreme ve konveyör sıyırıcı bıçakları",
      "Pres altı darbe emici contalar"
    ],
    "specifications": [
      {
        "property": "Sertlik Aralığı",
        "value": "70, 80, 90, 95 Shore A"
      },
      {
        "property": "Sıcaklık Aralığı",
        "value": "-30°C ile +80°C"
      },
      {
        "property": "Standart Ebat",
        "value": "1000 x 2000 mm / 1000 x 1000 mm"
      },
      {
        "property": "Renkler",
        "value": "Sarı (Bal Rengi), Kırmızı, Yeşil"
      }
    ],
    "image": "/images/products/poliuretan-levhalar.webp",
    "imagePlaceholderText": "Poliüretan Levhalar (PU) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "lastik-conta",
      "kestamid",
      "polietilen"
    ],
    "seoTitle": "Poliüretan Levhalar (PU) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Poliüretan Levhalar (PU) imalatı ve tedariği. Aşınma, yırtılma ve darbelere karşı kauçuktan 5 kat daha dayanıklı yüksek performanslı poliüretan plaka."
  },
  {
    "id": "ptfe-teflon-levha",
    "slug": "ptfe-teflon-levha",
    "name": "PTFE / Teflon Levha",
    "category": "contalik-malzemeler",
    "shortDescription": "Tüm kimyasallara inert, sürtünmesiz ve 260°C'ye dayanıklı saf PTFE contalık plakalar.",
    "description": "PTFE teflon levhalar; kimya sanayinde conta kesimi, kayar mesnet yatakları ve elektriksel yalıtım parçaları için kalıplanarak veya soyularak üretilen teflon plakalardır.",
    "features": [
      "Kimyasal olarak tam inertlik (pH 0-14)",
      "Sıfır yapışma ve en düşük sürtünme katsayısı",
      "FDA uyumlu gıda teması"
    ],
    "materials": [
      "%100 Saf PTFE (Politetrafloroetilen)"
    ],
    "standards": [
      "FDA 21 CFR 177.1550",
      "ASTM D3294"
    ],
    "applications": [
      "Asit flanş contaları kesimi",
      "Köprü ve boru kayar mesnet plakaları",
      "Reaktör taban kaplamaları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "-200°C ile +260°C"
      },
      {
        "property": "Yoğunluk",
        "value": "2.15 - 2.20 g/cm³"
      },
      {
        "property": "Ebat",
        "value": "1000 x 1000 mm / 1200 x 1200 mm"
      },
      {
        "property": "Kalınlık",
        "value": "0.5 mm - 50 mm"
      }
    ],
    "image": "/images/products/ptfe-teflon-levha.webp",
    "imagePlaceholderText": "PTFE / Teflon Levha - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "ptfe-teflon-conta",
      "termoflon-levha",
      "cam-elyafli-termoflon"
    ],
    "seoTitle": "PTFE / Teflon Levha | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "PTFE / Teflon Levha imalatı ve tedariği. Tüm kimyasallara inert, sürtünmesiz ve 260°C'ye dayanıklı saf PTFE contalık plakalar."
  },
  {
    "id": "termoflon-levha",
    "slug": "termoflon-levha",
    "name": "Termoflon Levha (Modifiye PTFE)",
    "category": "contalik-malzemeler",
    "shortDescription": "Soğuk akmayı (cold-flow) önlemek için modifiye edilmiş yüksek dayanımlı PTFE termoflon plaka.",
    "description": "Termoflon levhalar; standart teflonun cıvata yükü altında ezilip yayılmasını (soğuk akma) engelleyen özel mineral ve mikrosfer dolgularla zenginleştirilmiş yeni nesil PTFE levhalardır.",
    "features": [
      "Minimum soğuk akma ve tork kaybı",
      "Yüksek basınç altında form stabilitesi",
      "Güçlü asit ve baz hatlarında üstün güvenlik"
    ],
    "materials": [
      "Modifiye / Doldurulmuş PTFE (Termoflon)"
    ],
    "standards": [
      "DIN EN 1514-1",
      "TA-Luft (Alman Kaçak Emisyon Standardı)"
    ],
    "applications": [
      "Kimyasal boru hatları",
      "Emisyon kontrollü flanş bağlantıları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "-210°C / +260°C"
      },
      {
        "property": "Basınç Dayanımı",
        "value": "85 Bar"
      }
    ],
    "image": "/images/products/termoflon-levha.webp",
    "imagePlaceholderText": "Termoflon Levha (Modifiye PTFE) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "ptfe-teflon-levha",
      "termoflon-film",
      "ptfe-teflon-conta"
    ],
    "seoTitle": "Termoflon Levha (Modifiye PTFE) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Termoflon Levha (Modifiye PTFE) imalatı ve tedariği. Soğuk akmayı (cold-flow) önlemek için modifiye edilmiş yüksek dayanımlı PTFE termoflon plaka."
  },
  {
    "id": "termoflon-film",
    "slug": "termoflon-film",
    "name": "Termoflon PTFE Hassas Film",
    "category": "contalik-malzemeler",
    "shortDescription": "Hassas izolasyon, ambalaj yapıştırma ve kimyasal bariyer için ince PTFE film ruloları.",
    "description": "Termoflon PTFE filmler; 0.05 mm ile 0.50 mm arasında çok ince et kalınlıklarında hassas olarak soyulan, elektrik yalıtımı ve yapışmaz bant imalatında kullanılan saf teflon filmlerdir.",
    "features": [
      "Mükemmel elektriksel ark direnci",
      "Sıfır yapışma",
      "Rulo sarım formatı"
    ],
    "materials": [
      "Saf PTFE Film"
    ],
    "standards": [
      "ASTM D3308"
    ],
    "applications": [
      "Poşet yapıştırma çeneleri",
      "Yüksek frekans kablo sarımları"
    ],
    "specifications": [
      {
        "property": "Kalınlık",
        "value": "0.05 mm, 0.10 mm, 0.20 mm, 0.30 mm, 0.50 mm"
      },
      {
        "property": "Sıcaklık",
        "value": "260°C"
      }
    ],
    "image": "/images/products/termoflon-film.webp",
    "imagePlaceholderText": "Termoflon PTFE Hassas Film - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "termoflon-levha",
      "ptfe-teflon-levha",
      "termoflon-cam-kumas"
    ],
    "seoTitle": "Termoflon PTFE Hassas Film | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Termoflon PTFE Hassas Film imalatı ve tedariği. Hassas izolasyon, ambalaj yapıştırma ve kimyasal bariyer için ince PTFE film ruloları."
  },
  {
    "id": "saf-grafit-salmastra",
    "slug": "saf-grafit-salmastra",
    "name": "Saf Grafit Salmastra",
    "category": "salmastralar",
    "shortDescription": "Buhar vanaları, türbinler ve yüksek basınçlı pompalarda 650°C'ye kadar tam sızdırmazlık sağlayan saf grafit örgü salmastra.",
    "description": "Saf grafit salmastralar; yüksek saflıkta genleşmiş grafit ipliklerinin kare örgü tekniğiyle örülmesiyle elde edilir. Kendinden yağlama özelliğine sahiptir, milleri aşındırmaz ve yüksek sıcaklık buhar devrelerinde mükemmel termal iletkenlik sağlar.",
    "features": [
      "650°C'ye varan buhar sıcaklık dayanımı",
      "Mükemmel termal iletkenlik sayesinde mil ısınmasını engeller",
      "Düşük sürtünme katsayısı ve kendi kendini yağlama"
    ],
    "materials": [
      "%99.8 Saf Genleşmiş Grafit İpliği (Korozyon İnhibitörlü)"
    ],
    "standards": [
      "DIN 28090",
      "API 622"
    ],
    "applications": [
      "Enerji santralleri yüksek basınç vanaları",
      "Buhar kazan besleme pompaları",
      "Rafineri hidrokarbon transfer vanaları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık Aralığı",
        "value": "-200°C ile +650°C (Buhar) / +450°C (Oksitleyici ortam)"
      },
      {
        "property": "Basınç Dayanımı",
        "value": "Vanalarda 300 Bar, Pompalarda 30 Bar"
      },
      {
        "property": "pH Aralığı",
        "value": "0 - 14 (Güçlü oksitleyiciler hariç)"
      },
      {
        "property": "Kesit Ölçüleri",
        "value": "4x4 mm'den 50x50 mm'ye kadar kare kesit"
      }
    ],
    "image": "/images/products/saf-grafit-salmastra.webp",
    "imagePlaceholderText": "Saf Grafit Salmastra - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "grafitli-salmastralar",
      "saf-teflon-salmastra",
      "grafitli-teflon-salmastra"
    ],
    "seoTitle": "Saf Grafit Salmastra | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Saf Grafit Salmastra imalatı ve tedariği. Buhar vanaları, türbinler ve yüksek basınçlı pompalarda 650°C'ye kadar tam sızdırmazlık sağlayan saf grafit örgü salmastra."
  },
  {
    "id": "grafitli-salmastralar",
    "slug": "grafitli-salmastralar",
    "name": "Grafitli Örgülü Salmastra",
    "category": "salmastralar",
    "shortDescription": "Genel amaçlı pompalar ve endüstriyel vanalar için grafit emdirilmiş örgülü sızdırmazlık salmastrası.",
    "description": "Grafitli salmastralar; pamuk, akrilik veya aramid liflerinin grafit tozu ve özel yağlayıcılarla doyurulmasıyla üretilen ekonomik pompa salmastralarıdır.",
    "features": [
      "Kolay montaj ve yuvaya tam oturma",
      "Millerde düşük sürtünme ve aşınma"
    ],
    "materials": [
      "Sentetik Lifler + Saf Grafit Emülsiyonu"
    ],
    "standards": [
      "DIN 28090"
    ],
    "applications": [
      "Santrifüj su pompaları",
      "Atık su devreleri",
      "Endüstriyel vanalar"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "200°C"
      },
      {
        "property": "Basınç",
        "value": "20 Bar"
      },
      {
        "property": "Mil Hızı",
        "value": "10 m/s"
      }
    ],
    "image": "/images/products/grafitli-salmastralar.webp",
    "imagePlaceholderText": "Grafitli Örgülü Salmastra - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "saf-grafit-salmastra",
      "grafitli-serit-salmastralar",
      "grafitli-teflon-salmastra"
    ],
    "seoTitle": "Grafitli Örgülü Salmastra | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Grafitli Örgülü Salmastra imalatı ve tedariği. Genel amaçlı pompalar ve endüstriyel vanalar için grafit emdirilmiş örgülü sızdırmazlık salmastrası."
  },
  {
    "id": "grafitli-serit-salmastralar",
    "slug": "grafitli-serit-salmastralar",
    "name": "Grafitli Şerit Salmastra (Kendinden Yapışkanlı)",
    "category": "salmastralar",
    "shortDescription": "Büyük flanşlar ve kapaklar için arkası yapışkanlı, oluklu saf grafit bant salmastra.",
    "description": "Grafitli şerit salmastralar; oluklu saf grafit şeridin arkasına çift taraflı yapışkan bant lamine edilmesiyle üretilir. Büyük çaplı flanşlarda ve acil conta değişimlerinde firesiz montaj sağlar.",
    "features": [
      "Kendinden yapışkanlı tabaka ile dikey ve tavan flanşlarında kolay montaj",
      "İstenilen boyda kesilerek firesiz uygulama"
    ],
    "materials": [
      "%99.8 Saf Grafit + Yapışkan Bant"
    ],
    "standards": [
      "DIN 28090"
    ],
    "applications": [
      "Eşanjör flanşları",
      "Reaktör ve baca kapakları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "-200°C / +550°C"
      },
      {
        "property": "Genişlik",
        "value": "10 mm - 50 mm"
      }
    ],
    "image": "/images/products/grafitli-serit-salmastralar.webp",
    "imagePlaceholderText": "Grafitli Şerit Salmastra (Kendinden Yapışkanlı) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "saf-grafit-salmastra",
      "termoflon-contalon",
      "grafitli-telli-conta"
    ],
    "seoTitle": "Grafitli Şerit Salmastra (Kendinden Yapışkanlı) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Grafitli Şerit Salmastra (Kendinden Yapışkanlı) imalatı ve tedariği. Büyük flanşlar ve kapaklar için arkası yapışkanlı, oluklu saf grafit bant salmastra."
  },
  {
    "id": "saf-teflon-salmastra",
    "slug": "saf-teflon-salmastra",
    "name": "Saf Teflon (PTFE) Salmastra",
    "category": "salmastralar",
    "shortDescription": "Kimya, gıda ve ilaç sektörleri için FDA onaylı, kimyasallara tam dayanıklı saf PTFE örgülü salmastra.",
    "description": "Saf teflon salmastralar; %100 saf PTFE ipliklerinden yağsız veya gıda uyumlu yağlayıcılarla örülen, akışkanı kesinlikle kirletmeyen yüksek saflıkta dinamik salmastralardır.",
    "features": [
      "FDA gıda ve ilaç temasına uygun",
      "pH 0-14 aralığındaki tüm kimyasallara tam direnç",
      "Akışkan rengini ve tadını bozmaz"
    ],
    "materials": [
      "%100 Saf PTFE İpliği"
    ],
    "standards": [
      "FDA 21 CFR 177.1550",
      "DIN 28090"
    ],
    "applications": [
      "İlaç reaktörleri ve mikserleri",
      "Gıda pompaları",
      "Agresif asit vanaları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "-200°C ile +260°C"
      },
      {
        "property": "Basınç",
        "value": "Vanalarda 100 Bar / Pompalarda 15 Bar"
      },
      {
        "property": "pH",
        "value": "0 - 14"
      }
    ],
    "image": "/images/products/saf-teflon-salmastra.webp",
    "imagePlaceholderText": "Saf Teflon (PTFE) Salmastra - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "grafitli-teflon-salmastra",
      "termoflon-salmastra",
      "aramid-kevlar-salmastra"
    ],
    "seoTitle": "Saf Teflon (PTFE) Salmastra | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Saf Teflon (PTFE) Salmastra imalatı ve tedariği. Kimya, gıda ve ilaç sektörleri için FDA onaylı, kimyasallara tam dayanıklı saf PTFE örgülü salmastra."
  },
  {
    "id": "grafitli-teflon-salmastra",
    "slug": "grafitli-teflon-salmastra",
    "name": "Grafitli Teflon Salmastra (GORE GFO Muadili)",
    "category": "salmastralar",
    "shortDescription": "PTFE içine hapsedilmiş grafit yapısıyla yüksek mil hızlarına ve aşınmaya dayanıklı pompa salmastrası.",
    "description": "Grafitli teflon salmastralar; PTFE'nin kimyasal direnci ile grafitin yüksek ısı iletkenliğini birleştiren yüksek teknolojili bir salmastradır. Yüksek devirli pompalarda mil aşınmasını önler ve uzun bakım aralıkları sağlar.",
    "features": [
      "Yüksek çevre hızı (25 m/s) altında mükemmel performans",
      "Milleri çizmez, ısıyı hızla uzaklaştırır",
      "Kimyasallara ve bulamaçlara karşı yüksek direnç"
    ],
    "materials": [
      "Grafit Katkılı PTFE İpliği (GFO Tipi)"
    ],
    "standards": [
      "DIN 28090"
    ],
    "applications": [
      "Kimyasal santrifüj pompaları",
      "Kağıt hamuru mikserleri",
      "Kondensat pompaları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık Aralığı",
        "value": "-150°C ile +280°C"
      },
      {
        "property": "Mil Hızı",
        "value": "25 m/s"
      },
      {
        "property": "Basınç",
        "value": "Pompa: 25 Bar / Vana: 200 Bar"
      },
      {
        "property": "pH",
        "value": "0 - 14"
      }
    ],
    "image": "/images/products/grafitli-teflon-salmastra.webp",
    "imagePlaceholderText": "Grafitli Teflon Salmastra (GORE GFO Muadili) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "saf-teflon-salmastra",
      "aramid-kevlar-salmastra",
      "saf-grafit-salmastra"
    ],
    "seoTitle": "Grafitli Teflon Salmastra (GORE GFO Muadili) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Grafitli Teflon Salmastra (GORE GFO Muadili) imalatı ve tedariği. PTFE içine hapsedilmiş grafit yapısıyla yüksek mil hızlarına ve aşınmaya dayanıklı pompa salmastrası."
  },
  {
    "id": "aramid-kevlar-salmastra",
    "slug": "aramid-kevlar-salmastra",
    "name": "Aramid / Kevlar Örgülü Salmastra",
    "category": "salmastralar",
    "shortDescription": "Aşındırıcı kum, çamur, bulamaç ve yüksek basınçlı pompalarda aşırı mekanik dirence sahip Kevlar salmastra.",
    "description": "Aramid (Kevlar) salmastralar; çelikten 5 kat daha yüksek çekme mukavemetine sahip sürekli aramid elyafların PTFE emülsiyonu ve yağlayıcılarla örülmesiyle üretilir. Katı partiküllü çamur ve maden pompalarında alternatifsizdir.",
    "features": [
      "Aşındırıcı partiküllere ve erozyona karşı en yüksek mekanik direnç",
      "Yüksek basınç altında ekstrüzyona (boşluktan akmaya) uğramaz",
      "Ağır hizmet madencilik ve kağıt hamuru şartlarına dayanım"
    ],
    "materials": [
      "Orijinal DuPont Kevlar / Aramid İplik + PTFE Kaplama"
    ],
    "standards": [
      "DIN 28090"
    ],
    "applications": [
      "Maden ve cevher zenginleştirme pompaları",
      "Beton pompaları ve kum tarama devreleri",
      "Kağıt hamuru rafinörleri"
    ],
    "specifications": [
      {
        "property": "Mekanik Mukavemet",
        "value": "Çok Yüksek Aşınma Direnci"
      },
      {
        "property": "Sıcaklık Aralığı",
        "value": "-100°C ile +280°C"
      },
      {
        "property": "Basınç Dayanımı",
        "value": "Pompa: 35 Bar / Vana: 350 Bar"
      },
      {
        "property": "pH Aralığı",
        "value": "2 - 12"
      }
    ],
    "image": "/images/products/aramid-kevlar-salmastra.webp",
    "imagePlaceholderText": "Aramid / Kevlar Örgülü Salmastra - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "ats-kempomp-salmastra",
      "grafitli-teflon-salmastra",
      "ramie-salmastra"
    ],
    "seoTitle": "Aramid / Kevlar Örgülü Salmastra | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Aramid / Kevlar Örgülü Salmastra imalatı ve tedariği. Aşındırıcı kum, çamur, bulamaç ve yüksek basınçlı pompalarda aşırı mekanik dirence sahip Kevlar salmastra."
  },
  {
    "id": "ramie-salmastra",
    "slug": "ramie-salmastra",
    "name": "Ramie Elyaf Gemi Şaft Salmastrası",
    "category": "salmastralar",
    "shortDescription": "Gemi şaft kovanları, dümen boğazları ve deniz suyu pompaları için PTFE yağlı doğal ramie salmastra.",
    "description": "Ramie salmastralar; yüksek kaliteli doğal ramie elyafının PTFE emülsiyonu ve özel deniz suyu yağlayıcıları ile kare örülmesiyle üretilir. Deniz suyunda şişmez, sertleşmez ve bronz/çelik şaftları çizmeden mükemmel sızdırmazlık sağlar.",
    "features": [
      "Deniz suyunda mükemmel performans ve çürümez yapı",
      "Şaft yüzeylerinde sıfır aşınma",
      "Denizcilik (marin) sektörü standardı"
    ],
    "materials": [
      "Yüksek Mukavemetli Ramie Doğal Lifi + PTFE Yağlayıcı"
    ],
    "standards": [
      "DIN 28090",
      "Marine Standards"
    ],
    "applications": [
      "Gemi pervane şaft kovanları (stern tube)",
      "Dümen yatakları",
      "Sintine ve balast pompaları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "-30°C ile +120°C"
      },
      {
        "property": "Mil Hızı",
        "value": "12 m/s"
      },
      {
        "property": "Basınç",
        "value": "20 Bar"
      },
      {
        "property": "pH",
        "value": "5 - 11"
      }
    ],
    "image": "/images/products/ramie-salmastra.webp",
    "imagePlaceholderText": "Ramie Elyaf Gemi Şaft Salmastrası - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "ats-kempomp-salmastra",
      "aramid-kevlar-salmastra",
      "saf-teflon-salmastra"
    ],
    "seoTitle": "Ramie Elyaf Gemi Şaft Salmastrası | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Ramie Elyaf Gemi Şaft Salmastrası imalatı ve tedariği. Gemi şaft kovanları, dümen boğazları ve deniz suyu pompaları için PTFE yağlı doğal ramie salmastra."
  },
  {
    "id": "ats-kempomp-salmastra",
    "slug": "ats-kempomp-salmastra",
    "name": "ATS Kempomp Salmastra (Zebra Örgü)",
    "category": "salmastralar",
    "shortDescription": "Köşeleri aşınmaya dirençli Aramid Kevlar, gövdesi PTFE olan yüksek performanslı hibrit salmastra.",
    "description": "ATS Kempomp (Zebra) salmastralar; köşelerinde aşınmaya dayanıklı Kevlar iplikleri, sızdırmazlık yüzeyinde ise sürtünmeyi düşüren PTFE/grafit iplikleri barındıran hibrit örgülü salmastradır. Pompa yuvasında mükemmel mekanik dayanım ve düşük sürtünmeyi aynı anda sunar.",
    "features": [
      "Köşe takviyeli hibrit örgü mimarisi",
      "Partiküllü sularda bile uzun servis ömrü",
      "Milleri koruyan dengeli sürtünme yüzeyi"
    ],
    "materials": [
      "Aramid (Kevlar) Köşeler + PTFE / Grafit Gövde"
    ],
    "standards": [
      "DIN 28090"
    ],
    "applications": [
      "Atık su arıtma pompaları",
      "Şeker fabrikaları difüzyon pompaları",
      "Kimya endüstrisi bulamaç pompaları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "-100°C ile +260°C"
      },
      {
        "property": "Mil Hızı",
        "value": "20 m/s"
      },
      {
        "property": "Basınç",
        "value": "Pompa: 30 Bar / Vana: 250 Bar"
      }
    ],
    "image": "/images/products/ats-kempomp-salmastra.webp",
    "imagePlaceholderText": "ATS Kempomp Salmastra (Zebra Örgü) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "aramid-kevlar-salmastra",
      "grafitli-teflon-salmastra",
      "saf-grafit-salmastra"
    ],
    "seoTitle": "ATS Kempomp Salmastra (Zebra Örgü) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "ATS Kempomp Salmastra (Zebra Örgü) imalatı ve tedariği. Köşeleri aşınmaya dirençli Aramid Kevlar, gövdesi PTFE olan yüksek performanslı hibrit salmastra."
  },
  {
    "id": "termoflon-salmastra",
    "slug": "termoflon-salmastra",
    "name": "Termoflon PTFE Yağlı Salmastra",
    "category": "salmastralar",
    "shortDescription": "Özel silikon/mineral yağlayıcılarla yumuşatılmış, kolay sıkışan PTFE pompa salmastrası.",
    "description": "Termoflon salmastralar; saf PTFE liflerinin özel yağlayıcılarla işlenmesi sayesinde yuva içinde kolay form alan ve ilk çalıştırma anında mili yakmayan yumuşak pompa salmastralarıdır.",
    "features": [
      "Kolay montaj ve hızlı rodaj süresi",
      "Kimyasallara üstün dayanım"
    ],
    "materials": [
      "PTFE İplik + Özel Yağlayıcı Katkı"
    ],
    "standards": [
      "DIN 28090"
    ],
    "applications": [
      "Kimyasal dozaj pompaları",
      "Gıda mikserleri"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "-150°C / +260°C"
      },
      {
        "property": "Basınç",
        "value": "20 Bar"
      }
    ],
    "image": "/images/products/termoflon-salmastra.webp",
    "imagePlaceholderText": "Termoflon PTFE Yağlı Salmastra - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "saf-teflon-salmastra",
      "grafitli-teflon-salmastra",
      "ats-kempomp-salmastra"
    ],
    "seoTitle": "Termoflon PTFE Yağlı Salmastra | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Termoflon PTFE Yağlı Salmastra imalatı ve tedariği. Özel silikon/mineral yağlayıcılarla yumuşatılmış, kolay sıkışan PTFE pompa salmastrası."
  },
  {
    "id": "cam-elyaf-salmastra",
    "slug": "cam-elyaf-salmastra",
    "name": "Cam Elyaf Örgülü Yalıtım Salmastrası",
    "category": "salmastralar",
    "shortDescription": "550°C fırın, kazan kapağı ve baca kapaklarında statik sızdırmazlık ve ısı yalıtımı sağlayan kare salmastra.",
    "description": "Cam elyaf salmastralar; dokulu E-cam liflerinin kare veya yuvarlak kesitli olarak örülmesiyle üretilen, yüksek sıcaklık statik izolasyon salmastralarıdır. Fırın kapaklarında asbest yerine kullanılan çevre dostu bir çözümdür.",
    "features": [
      "550°C sürekli sıcaklık dayanımı",
      "Esnek ve kolay bükülebilir yapı",
      "Yanmaz, alev almaz ve duman üretmez"
    ],
    "materials": [
      "%100 Dokulu E-Cam Elyafı"
    ],
    "standards": [
      "DIN 1259"
    ],
    "applications": [
      "Kazan kapağı sızdırmazlığı",
      "Endüstriyel fırın kapak contaları",
      "Baca klapeleri ve menholler"
    ],
    "specifications": [
      {
        "property": "Sıcaklık Dayanımı",
        "value": "+550°C"
      },
      {
        "property": "Yanmazlık Sınıfı",
        "value": "DIN 4102 Sınıf A1 (Yanmaz)"
      },
      {
        "property": "Kesit Ölçüleri",
        "value": "5x5 mm'den 50x50 mm'ye kadar"
      }
    ],
    "image": "/images/products/cam-elyaf-salmastra.webp",
    "imagePlaceholderText": "Cam Elyaf Örgülü Yalıtım Salmastrası - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "seramik-salmastralar",
      "cam-fitiller",
      "cam-elyaf-bez"
    ],
    "seoTitle": "Cam Elyaf Örgülü Yalıtım Salmastrası | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Cam Elyaf Örgülü Yalıtım Salmastrası imalatı ve tedariği. 550°C fırın, kazan kapağı ve baca kapaklarında statik sızdırmazlık ve ısı yalıtımı sağlayan kare salmastra."
  },
  {
    "id": "seramik-salmastralar",
    "slug": "seramik-salmastralar",
    "name": "Seramik Elyaf Örgülü Salmastra (1260°C)",
    "category": "salmastralar",
    "shortDescription": "1260°C ekstrem sıcaklıklarda demir-çelik fırınları, döküm potaları ve yakma fırınları için kare seramik salmastra.",
    "description": "Seramik elyaf salmastralar; alümina-silikat seramik elyafların inconel tel veya cam iplik takviyesiyle kare örgülü olarak imal edilmesiyle üretilir. 1260°C'ye kadar mekanik bütünlüğünü korur ve mükemmel termal şok direnci sunar.",
    "features": [
      "1260°C sınıf sıcaklık dayanımı",
      "İnconel tel takviyesi ile yüksek mekanik çekme direnci",
      "Düşük termal iletkenlik ve minimum ısı kaybı"
    ],
    "materials": [
      "Alümina-Silikat Seramik Elyafı + İnconel Tel / Cam Takviyesi"
    ],
    "standards": [
      "ASTM C892"
    ],
    "applications": [
      "Demir çelik döküm potası kapakları",
      "Tuğla ve seramik pişirme fırınları",
      "Enerji santralleri brülör çevreleri"
    ],
    "specifications": [
      {
        "property": "Sınıf Sıcaklığı",
        "value": "+1260°C"
      },
      {
        "property": "Sürekli Çalışma Sıcaklığı",
        "value": "+1050°C"
      },
      {
        "property": "Takviye",
        "value": "İnconel Tel Örgülü"
      },
      {
        "property": "Kesitler",
        "value": "6x6 mm - 60x60 mm"
      }
    ],
    "image": "/images/products/seramik-salmastralar.webp",
    "imagePlaceholderText": "Seramik Elyaf Örgülü Salmastra (1260°C) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "seramik-salmastra",
      "cam-elyaf-salmastra",
      "seramik-bez"
    ],
    "seoTitle": "Seramik Elyaf Örgülü Salmastra (1260°C) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Seramik Elyaf Örgülü Salmastra (1260°C) imalatı ve tedariği. 1260°C ekstrem sıcaklıklarda demir-çelik fırınları, döküm potaları ve yakma fırınları için kare seramik salmastra."
  },
  {
    "id": "seramik-salmastra",
    "slug": "seramik-salmastra",
    "name": "Seramik Salmastra (Yuvarlak & Kare)",
    "category": "salmastralar",
    "shortDescription": "Yüksek sıcaklık fırın kapak contası olarak kullanılan seramik elyaf yalıtım salmastrası.",
    "description": "Seramik salmastra, ekstrem fırın ve kazan kapaklarında ısı kaçağını engellemek amacıyla kullanılan yüksek refrakterlikte conta fitilidir.",
    "features": [
      "1260°C termal bariyer",
      "Hafif ve yüksek izolasyon"
    ],
    "materials": [
      "Seramik Elyaf"
    ],
    "standards": [
      "ISO 10635"
    ],
    "applications": [
      "Fırın kapıları",
      "Baca çıkışları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "1260°C"
      }
    ],
    "image": "/images/products/seramik-salmastra.webp",
    "imagePlaceholderText": "Seramik Salmastra (Yuvarlak & Kare) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "seramik-salmastralar",
      "seramik-fitil",
      "seramik-bez"
    ],
    "seoTitle": "Seramik Salmastra (Yuvarlak & Kare) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Seramik Salmastra (Yuvarlak & Kare) imalatı ve tedariği. Yüksek sıcaklık fırın kapak contası olarak kullanılan seramik elyaf yalıtım salmastrası."
  },
  {
    "id": "cam-fitiller",
    "slug": "cam-fitiller",
    "name": "Cam Elyaf Fitiller (Yuvarlak & İp)",
    "category": "yuksek-isi-urunleri",
    "shortDescription": "550°C'ye dayanıklı, fırın ve kazan kapak kanallarına oturan yuvarlak cam elyaf fitil.",
    "description": "Cam elyaf fitiller; dokulu cam liflerinin yuvarlak veya burgulu formda fitil haline getirilmesiyle elde edilir. Şömine camı fitili, kazan kapak fitili ve elektrik kablosu ısı bariyeri olarak yaygın kullanılır.",
    "features": [
      "550°C sıcaklık dayanımı",
      "Esnek burgu veya örme yuvarlak yapı",
      "Kolay montaj"
    ],
    "materials": [
      "E-Cam Elyafı"
    ],
    "standards": [
      "DIN 1259"
    ],
    "applications": [
      "Şömine ve soba cam kapak fitilleri",
      "Kazan kapak kanalları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "550°C"
      },
      {
        "property": "Çaplar",
        "value": "Ø 4 mm - Ø 40 mm"
      }
    ],
    "image": "/images/products/cam-fitiller.webp",
    "imagePlaceholderText": "Cam Elyaf Fitiller (Yuvarlak & İp) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "cam-elyaf-fitil",
      "cam-elyaf-salmastra",
      "seramik-fitil"
    ],
    "seoTitle": "Cam Elyaf Fitiller (Yuvarlak & İp) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Cam Elyaf Fitiller (Yuvarlak & İp) imalatı ve tedariği. 550°C'ye dayanıklı, fırın ve kazan kapak kanallarına oturan yuvarlak cam elyaf fitil."
  },
  {
    "id": "cam-elyaf-fitil",
    "slug": "cam-elyaf-fitil",
    "name": "Cam Elyaf Fitil (Örme)",
    "category": "yuksek-isi-urunleri",
    "shortDescription": "Yüksek sıcaklık fırın kapaklarında kanal içine basılan esnek cam elyaf conta fitili.",
    "description": "Cam elyaf fitil, yüksek sıcaklık altındaki metal kapak oluklarına tam oturarak hava ve duman sızıntısını engelleyen esnek ısı fitilidir.",
    "features": [
      "Isı ve alev dayanımı",
      "Yüksek lif elastikiyeti"
    ],
    "materials": [
      "Dokulu Cam Elyaf"
    ],
    "standards": [
      "DIN 4102-A1"
    ],
    "applications": [
      "Fırın contaları",
      "Egzoz yalıtımı"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "550°C"
      }
    ],
    "image": "/images/products/cam-elyaf-fitil.webp",
    "imagePlaceholderText": "Cam Elyaf Fitil (Örme) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "cam-fitiller",
      "cam-elyaf-serit",
      "seramik-fitil"
    ],
    "seoTitle": "Cam Elyaf Fitil (Örme) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Cam Elyaf Fitil (Örme) imalatı ve tedariği. Yüksek sıcaklık fırın kapaklarında kanal içine basılan esnek cam elyaf conta fitili."
  },
  {
    "id": "cam-elyaf-serit",
    "slug": "cam-elyaf-serit",
    "name": "Cam Elyaf Şerit (Bant)",
    "category": "yuksek-isi-urunleri",
    "shortDescription": "Boru egzoz hatları ve kablo demetleri sarımı için dokuma cam elyaf ısı yalıtım şeridi.",
    "description": "Cam elyaf şeritler; dar dokuma tezgahlarında istenilen genişlikte üretilen, kenarları atmayan sağlam dokuma bantlardır. Egzoz borularının, buhar hatlarının sarılarak yalıtılmasında kullanılır.",
    "features": [
      "Sağlam kenar örgüsü ile çözülmeyen yapı",
      "Düşük termal iletkenlik"
    ],
    "materials": [
      "Dokuma E-Cam Elyaf"
    ],
    "standards": [
      "DIN 53854"
    ],
    "applications": [
      "Boru ve vana sargıları",
      "Egzoz manifolt yalıtımı"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "550°C"
      },
      {
        "property": "Genişlik",
        "value": "20 mm - 150 mm"
      },
      {
        "property": "Kalınlık",
        "value": "2 mm - 5 mm"
      }
    ],
    "image": "/images/products/cam-elyaf-serit.webp",
    "imagePlaceholderText": "Cam Elyaf Şerit (Bant) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "cam-elyaf-bez",
      "seramik-serit",
      "cam-ve-seramik-seritler"
    ],
    "seoTitle": "Cam Elyaf Şerit (Bant) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Cam Elyaf Şerit (Bant) imalatı ve tedariği. Boru egzoz hatları ve kablo demetleri sarımı için dokuma cam elyaf ısı yalıtım şeridi."
  },
  {
    "id": "cam-elyaf-bez",
    "slug": "cam-elyaf-bez",
    "name": "Cam Elyaf Bez (Kumaş)",
    "category": "yuksek-isi-urunleri",
    "shortDescription": "550°C kaynak perdesi, yalıtım ceketi ve yangın battaniyesi imalatında kullanılan dokuma kumaş.",
    "description": "Cam elyaf kumaşlar; yanmaz ve yüksek mukavemetli cam filamentlerinin düz dokunmasıyla üretilir. Vana ceketleri, egzoz kompensatörleri ve kaynak sıçrama perdelerinde temel yalıtım katmanıdır.",
    "features": [
      "A1 Sınıfı kesinlikle yanmaz kumaş",
      "Yüksek çekme ve yırtılma direnci",
      "Farklı gramaj ve kaplama seçenekleri"
    ],
    "materials": [
      "E-Cam İpliği"
    ],
    "standards": [
      "EN 13501-1 A1"
    ],
    "applications": [
      "Vana ve türbin izolasyon ceketleri",
      "Kaynak koruma perdeleri",
      "Kompensatör kumaşları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık Dayanımı",
        "value": "+550°C"
      },
      {
        "property": "Gramaj",
        "value": "430 g/m², 650 g/m², 850 g/m², 1100 g/m²"
      },
      {
        "property": "Rulo Eni",
        "value": "1000 mm / 1200 mm"
      }
    ],
    "image": "/images/products/cam-elyaf-bez.webp",
    "imagePlaceholderText": "Cam Elyaf Bez (Kumaş) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "cam-ve-seramik-bez-kumaslar",
      "seramik-bez",
      "silikon-kumaslar"
    ],
    "seoTitle": "Cam Elyaf Bez (Kumaş) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Cam Elyaf Bez (Kumaş) imalatı ve tedariği. 550°C kaynak perdesi, yalıtım ceketi ve yangın battaniyesi imalatında kullanılan dokuma kumaş."
  },
  {
    "id": "cam-ve-seramik-bez-kumaslar",
    "slug": "cam-ve-seramik-bez-kumaslar",
    "name": "Cam ve Seramik Bez Kumaşlar",
    "category": "yuksek-isi-urunleri",
    "shortDescription": "550°C ile 1260°C arası ısı yalıtımında kullanılan teknik cam ve seramik tekstil kumaşları.",
    "description": "Endüstriyel fırınlar, metalurji tesisleri ve enerji santralleri için cam elyaf ve seramik elyaftan dokunan yüksek performanslı termal kumaş koleksiyonu.",
    "features": [
      "550°C ile 1260°C arası sıcaklık kademeleri",
      "Telli veya telsiz dokuma"
    ],
    "materials": [
      "Cam Elyaf ve Seramik Elyaf Dokuma"
    ],
    "standards": [
      "ISO 10635"
    ],
    "applications": [
      "Termal perdeler",
      "Yangın bariyerleri",
      "Fırın kapak yalıtımları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "550°C - 1260°C"
      }
    ],
    "image": "/images/products/cam-ve-seramik-bez-kumaslar.webp",
    "imagePlaceholderText": "Cam ve Seramik Bez Kumaşlar - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "cam-elyaf-bez",
      "seramik-bez",
      "seramik-elyaf-kumaslar"
    ],
    "seoTitle": "Cam ve Seramik Bez Kumaşlar | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Cam ve Seramik Bez Kumaşlar imalatı ve tedariği. 550°C ile 1260°C arası ısı yalıtımında kullanılan teknik cam ve seramik tekstil kumaşları."
  },
  {
    "id": "cam-ve-seramik-levhalar",
    "slug": "cam-ve-seramik-levhalar",
    "name": "Cam ve Seramik Yalıtım Levhaları",
    "category": "yuksek-isi-urunleri",
    "shortDescription": "Yüksek sıcaklık fırın duvarları ve brülör önleri için rijit kompozit yalıtım plakaları.",
    "description": "Cam ve seramik liflerinin inorganik bağlayıcılarla preslenmesiyle üretilen rijit, sert ve yüksek termal dirençli plakalardır.",
    "features": [
      "Düşük ısı iletkenliği ile maksimum enerji tasarrufu",
      "Alev yalama ve gaz erozyonuna dayanım"
    ],
    "materials": [
      "Seramik Lif Kompozit"
    ],
    "standards": [
      "ASTM C612"
    ],
    "applications": [
      "Fırın içi refrakter destek arkalıkları",
      "Kazan kapak izolasyonu"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "1000°C - 1400°C"
      },
      {
        "property": "Ebat",
        "value": "600 x 1000 mm / 1000 x 1200 mm"
      }
    ],
    "image": "/images/products/cam-ve-seramik-levhalar.webp",
    "imagePlaceholderText": "Cam ve Seramik Yalıtım Levhaları - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "seramik-levha",
      "seramik-battaniye",
      "cam-ve-seramik-bez-kumaslar"
    ],
    "seoTitle": "Cam ve Seramik Yalıtım Levhaları | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Cam ve Seramik Yalıtım Levhaları imalatı ve tedariği. Yüksek sıcaklık fırın duvarları ve brülör önleri için rijit kompozit yalıtım plakaları."
  },
  {
    "id": "cam-ve-seramik-seritler",
    "slug": "cam-ve-seramik-seritler",
    "name": "Cam ve Seramik Şeritler (Bantlar)",
    "category": "yuksek-isi-urunleri",
    "shortDescription": "Egzoz ve boru hatları sargısı için cam ve seramik dokuma şerit çeşitleri.",
    "description": "Boru hatları, dirsekler ve flanş çevrelerinde kolay sarım sağlayan termal yalıtım şeritleridir.",
    "features": [
      "Yüksek termal bariyer",
      "Kolay montaj"
    ],
    "materials": [
      "Cam ve Seramik Elyaf"
    ],
    "standards": [
      "Endüstriyel Standart"
    ],
    "applications": [
      "Egzoz hatları",
      "Sıcak hava kanalları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "550°C - 1260°C"
      }
    ],
    "image": "/images/products/cam-ve-seramik-seritler.webp",
    "imagePlaceholderText": "Cam ve Seramik Şeritler (Bantlar) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "cam-elyaf-serit",
      "seramik-serit",
      "cam-fitiller"
    ],
    "seoTitle": "Cam ve Seramik Şeritler (Bantlar) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Cam ve Seramik Şeritler (Bantlar) imalatı ve tedariği. Egzoz ve boru hatları sargısı için cam ve seramik dokuma şerit çeşitleri."
  },
  {
    "id": "seramik-elyaf-kumaslar",
    "slug": "seramik-elyaf-kumaslar",
    "name": "Seramik Elyaf Kumaşlar (1260°C)",
    "category": "yuksek-isi-urunleri",
    "shortDescription": "1260°C'ye dayanıklı, inconel tel takviyeli yüksek sıcaklık refrakter seramik kumaşı.",
    "description": "Seramik elyaf kumaşlar; erimiş metal sıçramaları, fırın kapak sızdırmazlıkları ve genleşme kompensatörlerinde kullanılan en yüksek sıcaklık kumaşlarıdır. İnconel tel takviyesi kumaşın yüksek sıcaklık altında gerilmesini ve yırtılmasını önler.",
    "features": [
      "1260°C sıcaklık dayanımı",
      "İnconel tel takviyesi",
      "Termal şoklara tam direnç"
    ],
    "materials": [
      "Alümina-Silikat Seramik Elyaf + İnconel Tel"
    ],
    "standards": [
      "ASTM C892"
    ],
    "applications": [
      "Dökümhane erimiş metal perdeleri",
      "Fırın kapak contası dikimi",
      "Isıl işlem fırınları"
    ],
    "specifications": [
      {
        "property": "Sınıf Sıcaklığı",
        "value": "+1260°C"
      },
      {
        "property": "Sürekli Sıcaklık",
        "value": "+1050°C"
      },
      {
        "property": "Gramaj",
        "value": "1000 g/m²"
      },
      {
        "property": "Rulo Ebadı",
        "value": "1000 mm x 30 m"
      }
    ],
    "image": "/images/products/seramik-elyaf-kumaslar.webp",
    "imagePlaceholderText": "Seramik Elyaf Kumaşlar (1260°C) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "seramik-bez",
      "seramik-battaniye",
      "cam-ve-seramik-bez-kumaslar"
    ],
    "seoTitle": "Seramik Elyaf Kumaşlar (1260°C) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Seramik Elyaf Kumaşlar (1260°C) imalatı ve tedariği. 1260°C'ye dayanıklı, inconel tel takviyeli yüksek sıcaklık refrakter seramik kumaşı."
  },
  {
    "id": "seramik-bez",
    "slug": "seramik-bez",
    "name": "Seramik Bez (İnconel Telli)",
    "category": "yuksek-isi-urunleri",
    "shortDescription": "Ekstrem sıcaklık fırın kapakları ve ısı kalkanları için paslanmaz inconel telli seramik bez.",
    "description": "Seramik bez; sanayi fırınlarında ısı kaybını sıfırlamak ve yangın güvenliğini sağlamak için kullanılan yüksek refrakter kumaştır.",
    "features": [
      "1260°C pik dayanım",
      "Yüksek çekme mukavemeti"
    ],
    "materials": [
      "Seramik Elyaf + İnconel Tel"
    ],
    "standards": [
      "ASTM C892"
    ],
    "applications": [
      "Fırın kapakları",
      "Metalurji tesisleri"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "1260°C"
      },
      {
        "property": "Kalınlık",
        "value": "2 mm, 3 mm, 5 mm"
      }
    ],
    "image": "/images/products/seramik-bez.webp",
    "imagePlaceholderText": "Seramik Bez (İnconel Telli) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "seramik-elyaf-kumaslar",
      "seramik-serit",
      "cam-elyaf-bez"
    ],
    "seoTitle": "Seramik Bez (İnconel Telli) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Seramik Bez (İnconel Telli) imalatı ve tedariği. Ekstrem sıcaklık fırın kapakları ve ısı kalkanları için paslanmaz inconel telli seramik bez."
  },
  {
    "id": "seramik-serit",
    "slug": "seramik-serit",
    "name": "Seramik Şerit (Bant)",
    "category": "yuksek-isi-urunleri",
    "shortDescription": "1260°C sıcaklık altındaki egzoz ve boru hatları için telli seramik yalıtım şeridi.",
    "description": "Seramik şeritler; dar yüzeylerin, boru dirseklerinin ve yüksek sıcaklık egzoz hatlarının sarılarak yalıtılması için dokunmuş seramik bantlardır.",
    "features": [
      "1260°C termal direnç",
      "İnconel tel güçlendirmeli dokuma"
    ],
    "materials": [
      "Seramik Elyaf + İnconel Tel"
    ],
    "standards": [
      "ASTM C892"
    ],
    "applications": [
      "Fırın kapak contaları",
      "Egzoz hatları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "1260°C"
      },
      {
        "property": "Genişlik",
        "value": "25 mm - 100 mm"
      }
    ],
    "image": "/images/products/seramik-serit.webp",
    "imagePlaceholderText": "Seramik Şerit (Bant) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "seramik-bez",
      "cam-elyaf-serit",
      "seramik-fitil"
    ],
    "seoTitle": "Seramik Şerit (Bant) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Seramik Şerit (Bant) imalatı ve tedariği. 1260°C sıcaklık altındaki egzoz ve boru hatları için telli seramik yalıtım şeridi."
  },
  {
    "id": "seramik-fitil",
    "slug": "seramik-fitil",
    "name": "Seramik Fitil (Burgulu / Örgülü İp)",
    "category": "yuksek-isi-urunleri",
    "shortDescription": "1260°C fırın kapak kanalları için yüksek ısı izolasyon fitili.",
    "description": "Seramik fitiller; fırın ve kazan kapak yuvalarına döşenerek duman ve sıcak gaz kaçağını önleyen yuvarlak seramik contalardır.",
    "features": [
      "Yüksek sıcaklıkta yanmaz ve erimez",
      "Esnek yapısıyla yuvalara kolay yerleşir"
    ],
    "materials": [
      "Seramik Lifleri"
    ],
    "standards": [
      "ASTM C892"
    ],
    "applications": [
      "Fırın kapak yuvaları",
      "Brülör montaj çevreleri"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "1260°C"
      },
      {
        "property": "Çaplar",
        "value": "Ø 6 mm - Ø 50 mm"
      }
    ],
    "image": "/images/products/seramik-fitil.webp",
    "imagePlaceholderText": "Seramik Fitil (Burgulu / Örgülü İp) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "seramik-salmastra",
      "cam-fitiller",
      "seramik-serit"
    ],
    "seoTitle": "Seramik Fitil (Burgulu / Örgülü İp) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Seramik Fitil (Burgulu / Örgülü İp) imalatı ve tedariği. 1260°C fırın kapak kanalları için yüksek ısı izolasyon fitili."
  },
  {
    "id": "seramik-levha",
    "slug": "seramik-levha",
    "name": "Seramik Levha (Board)",
    "category": "yuksek-isi-urunleri",
    "shortDescription": "1260°C - 1430°C fırın içi izolasyon ve alev yönlendirme için sert refrakter seramik plaka.",
    "description": "Seramik levhalar (ceramic board); vakumla kalıplanan, rijit, basma mukavemeti yüksek ve rüzgar erozyonuna dayanıklı sert yalıtım plakalarıdır.",
    "features": [
      "Yüksek alev ve gaz hızlarına dayanım",
      "Mükemmel işlenebilirlik (testere ile kesilebilir)",
      "Düşük ısı depolama ve yüksek izolasyon"
    ],
    "materials": [
      "Alümina-Silikat Refrakter Lifler"
    ],
    "standards": [
      "ASTM C612"
    ],
    "applications": [
      "Endüstriyel fırın tavan ve yan duvar astarları",
      "Kazan brülör aynaları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık Sınıfı",
        "value": "1260°C / 1430°C"
      },
      {
        "property": "Yoğunluk",
        "value": "280 - 320 kg/m³"
      },
      {
        "property": "Ebat",
        "value": "600 x 1000 mm / 1000 x 1200 mm"
      },
      {
        "property": "Kalınlık",
        "value": "10 mm - 50 mm"
      }
    ],
    "image": "/images/products/seramik-levha.webp",
    "imagePlaceholderText": "Seramik Levha (Board) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "seramik-battaniye",
      "seramik-paper-kagit",
      "cam-ve-seramik-levhalar"
    ],
    "seoTitle": "Seramik Levha (Board) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Seramik Levha (Board) imalatı ve tedariği. 1260°C - 1430°C fırın içi izolasyon ve alev yönlendirme için sert refrakter seramik plaka."
  },
  {
    "id": "seramik-battaniye",
    "slug": "seramik-battaniye",
    "name": "Seramik Battaniye (1260°C Blanket)",
    "category": "yuksek-isi-urunleri",
    "shortDescription": "1260°C'ye dayanıklı, inorganik iğnelenmiş esnek seramik elyaf yalıtım battaniyesi.",
    "description": "Seramik battaniyeler; bağlayıcı içermeyen saf seramik liflerinin çift taraflı iğnelenmesiyle üretilen, yüksek çekme dayanımlı ve esnek termal battaniyelerdir. Fırın kaplamalarında ve boru hatlarında maksimum enerji tasarrufu sağlar.",
    "features": [
      "Organik bağlayıcı içermez, ilk ısıtmada duman çıkarmaz",
      "Mükemmel termal şok ve titreşim direnci",
      "Hafif ve kolay montaj"
    ],
    "materials": [
      "%100 Saf Alümina-Silikat Seramik Elyafı"
    ],
    "standards": [
      "ASTM C892",
      "ISO 10635"
    ],
    "applications": [
      "Petrokimya fırınları izolasyonu",
      "Kazan ve boru izolasyonları",
      "Yangın kapıları dolgusu"
    ],
    "specifications": [
      {
        "property": "Sınıf Sıcaklığı",
        "value": "+1260°C / +1430°C"
      },
      {
        "property": "Yoğunluk",
        "value": "96 kg/m³ veya 128 kg/m³"
      },
      {
        "property": "Rulo Ebadı",
        "value": "610 mm x 7320 mm x 25 mm / 50 mm"
      }
    ],
    "image": "/images/products/seramik-battaniye.webp",
    "imagePlaceholderText": "Seramik Battaniye (1260°C Blanket) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "seramik-levha",
      "seramik-paper-kagit",
      "seramik-elyaf-kumaslar"
    ],
    "seoTitle": "Seramik Battaniye (1260°C Blanket) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Seramik Battaniye (1260°C Blanket) imalatı ve tedariği. 1260°C'ye dayanıklı, inorganik iğnelenmiş esnek seramik elyaf yalıtım battaniyesi."
  },
  {
    "id": "seramik-paper-kagit",
    "slug": "seramik-paper-kagit",
    "name": "Seramik Paper (Kağıt Conta Malzemesi)",
    "category": "yuksek-isi-urunleri",
    "shortDescription": "1260°C hassas ve ince flanş contaları için esnek seramik elyaf kağıt malzeme.",
    "description": "Seramik paper (seramik kağıt); özel yıkanmış seramik liflerinden kağıt üretim teknolojisi ile imal edilen, 0.5 mm - 5 mm kalınlıklarında ince, pürüzsüz ve homojen conta malzemesidir. Egzoz ve fırın flanşlarında hassas conta olarak kesilir.",
    "features": [
      "Kolay makas ve pres kesimi",
      "Pürüzsüz yüzey ve mükemmel dielektrik özellikler",
      "1260°C sıcaklık dayanımı"
    ],
    "materials": [
      "Yıkanmış Seramik Lifleri + Minimum Organik Bağlayıcı"
    ],
    "standards": [
      "ASTM C892"
    ],
    "applications": [
      "Egzoz flanş contaları",
      "Aydınlatma armatürleri ısı bariyeri",
      "Döküm nozul contaları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "+1260°C"
      },
      {
        "property": "Kalınlıklar",
        "value": "1 mm, 2 mm, 3 mm, 5 mm"
      },
      {
        "property": "Rulo Eni",
        "value": "610 mm / 1000 mm"
      }
    ],
    "image": "/images/products/seramik-paper-kagit.webp",
    "imagePlaceholderText": "Seramik Paper (Kağıt Conta Malzemesi) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "seramik-levha",
      "seramik-battaniye",
      "saf-grafit-levha"
    ],
    "seoTitle": "Seramik Paper (Kağıt Conta Malzemesi) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Seramik Paper (Kağıt Conta Malzemesi) imalatı ve tedariği. 1260°C hassas ve ince flanş contaları için esnek seramik elyaf kağıt malzeme."
  },
  {
    "id": "silikon-profiller",
    "slug": "silikon-profiller",
    "name": "Silikon Profiller (Özel Kesit)",
    "category": "yuksek-isi-urunleri",
    "shortDescription": "Fırın kapıları, otoklavlar ve sızdırmazlık kanalları için D, P, e ve özel kesitli silikon profiller.",
    "description": "Silikon profiller; ekstrüzyon hatlarında istenilen geometrik kesitte imal edilen, 250°C'ye dayanıklı ve esnek sızdırmazlık fitilleridir.",
    "features": [
      "D, P, T, e kesit seçenekleri",
      "Gıdaya uygun FDA onaylı formülasyon",
      "Sonsuz kaynak yapılabilirlik"
    ],
    "materials": [
      "%100 Orijinal Silikon Kauçuk"
    ],
    "standards": [
      "FDA 21 CFR 177.2600"
    ],
    "applications": [
      "Endüstriyel fırın kapıları",
      "Otoklav kapak contaları",
      "Temiz oda kapı sızdırmazlıkları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "-60°C ile +250°C"
      },
      {
        "property": "Sertlik",
        "value": "60 Shore A"
      }
    ],
    "image": "/images/products/silikon-profiller.webp",
    "imagePlaceholderText": "Silikon Profiller (Özel Kesit) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "silikon-fitiller",
      "silikon-lamalar",
      "silikon-hortumlar"
    ],
    "seoTitle": "Silikon Profiller (Özel Kesit) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Silikon Profiller (Özel Kesit) imalatı ve tedariği. Fırın kapıları, otoklavlar ve sızdırmazlık kanalları için D, P, e ve özel kesitli silikon profiller."
  },
  {
    "id": "silikon-kumaslar",
    "slug": "silikon-kumaslar",
    "name": "Silikon Kaplı Cam Kumaş",
    "category": "yuksek-isi-urunleri",
    "shortDescription": "Tek veya çift tarafı silikon kaplanmış, su geçirmez ve 260°C yanmaz izolasyon ceketi kumaşı.",
    "description": "Silikonlu kumaşlar; dokuma cam elyaf kumaşın yüzeyine sıvı silikon kauçuk kaplanmasıyla üretilir. Su, buhar, yağ ve hava geçirmezdir; vana izolasyon ceketlerinde dış koruma katmanı olarak kullanılır.",
    "features": [
      "Su, nem ve hava geçirmez",
      "Mükemmel mekanik aşınma direnci",
      "Gri, kırmızı ve siyah renkler"
    ],
    "materials": [
      "Dokuma Cam Elyaf + Silikon Kaplama"
    ],
    "standards": [
      "DIN 4102"
    ],
    "applications": [
      "Vana ve armatür yalıtım ceketleri",
      "Kumaş kompansatörler",
      "Duman perdeleri"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "-50°C ile +260°C"
      },
      {
        "property": "Gramaj",
        "value": "500 g/m² - 1000 g/m²"
      }
    ],
    "image": "/images/products/silikon-kumaslar.webp",
    "imagePlaceholderText": "Silikon Kaplı Cam Kumaş - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "cam-elyaf-bez",
      "silikon-profiller",
      "termoflon-cam-kumas"
    ],
    "seoTitle": "Silikon Kaplı Cam Kumaş | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Silikon Kaplı Cam Kumaş imalatı ve tedariği. Tek veya çift tarafı silikon kaplanmış, su geçirmez ve 260°C yanmaz izolasyon ceketi kumaşı."
  },
  {
    "id": "silikon-lamalar",
    "slug": "silikon-lamalar",
    "name": "Silikon Lamalar (Şerit)",
    "category": "yuksek-isi-urunleri",
    "shortDescription": "Dikdörtgen ve kare kesitli, yüksek ısıya dayanıklı silikon sızdırmazlık şeritleri.",
    "description": "Silikon lamalar; düz alınlı kapakların ve metal konstrüksiyonların sızdırmazlığı için kullanılan şerit silikon contalardır.",
    "features": [
      "Geniş ebat seçeneği",
      "Mükemmel sıkışma elastikiyeti"
    ],
    "materials": [
      "Yüksek Kalite Silikon"
    ],
    "standards": [
      "FDA"
    ],
    "applications": [
      "Aydınlatma armatürleri",
      "Fırın kapak kanalları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "250°C"
      },
      {
        "property": "Ölçüler",
        "value": "10x2 mm'den 50x20 mm'ye kadar"
      }
    ],
    "image": "/images/products/silikon-lamalar.webp",
    "imagePlaceholderText": "Silikon Lamalar (Şerit) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "silikon-fitiller",
      "silikon-profiller",
      "silikon-levhalar"
    ],
    "seoTitle": "Silikon Lamalar (Şerit) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Silikon Lamalar (Şerit) imalatı ve tedariği. Dikdörtgen ve kare kesitli, yüksek ısıya dayanıklı silikon sızdırmazlık şeritleri."
  },
  {
    "id": "silikon-fitiller",
    "slug": "silikon-fitiller",
    "name": "Silikon Fitiller (Yuvarlak)",
    "category": "yuksek-isi-urunleri",
    "shortDescription": "Oluklu kanallarda dairesel sızdırmazlık sağlayan 250°C silikon yuvarlak fitiller.",
    "description": "Silikon fitiller; fırın kapak oluklarına, aydınlatma kasalarına ve medikal cihazlara oturan dolu silindirik kordon contalardır.",
    "features": [
      "Yüksek elastikiyet",
      "Kokusuz ve toksin içermez"
    ],
    "materials": [
      "FDA Silikon"
    ],
    "standards": [
      "FDA 21 CFR 177.2600"
    ],
    "applications": [
      "Fırın kapak contaları",
      "IP67 sızdırmazlık kanalları"
    ],
    "specifications": [
      {
        "property": "Çaplar",
        "value": "Ø 2 mm - Ø 30 mm"
      },
      {
        "property": "Sıcaklık",
        "value": "-60°C / +250°C"
      }
    ],
    "image": "/images/products/silikon-fitiller.webp",
    "imagePlaceholderText": "Silikon Fitiller (Yuvarlak) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "silikon-profiller",
      "silikon-lamalar",
      "cam-fitiller"
    ],
    "seoTitle": "Silikon Fitiller (Yuvarlak) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Silikon Fitiller (Yuvarlak) imalatı ve tedariği. Oluklu kanallarda dairesel sızdırmazlık sağlayan 250°C silikon yuvarlak fitiller."
  },
  {
    "id": "silikon-hortumlar",
    "slug": "silikon-hortumlar",
    "name": "Silikon Hortumlar (Gıda & Medikal)",
    "category": "yuksek-isi-urunleri",
    "shortDescription": "FDA onaylı, şeffaf, gıda ve ilaç transferine uygun yüksek ısı silikon hortumları.",
    "description": "Silikon hortumlar; sıvı ve gaz akışkanların hijyenik olarak transfer edildiği gıda, medikal ve laboratuvar sistemlerinde kullanılan kokusuz ve esnek hortumlardır.",
    "features": [
      "FDA ve medikal sınıf saflık",
      "Sterilize edilebilir (otoklavda buharla sterilizasyon)",
      "Kırılma ve bükülmelere karşı dayanıklı"
    ],
    "materials": [
      "%100 Medikal / Gıda Uyumlu Saf Silikon"
    ],
    "standards": [
      "FDA 21 CFR 177.2600",
      "USP Class VI"
    ],
    "applications": [
      "İlaç dolum hatları",
      "Kahve ve içecek makineleri",
      "Laboratuvar perfüzyon hatları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "-60°C ile +200°C"
      },
      {
        "property": "Sertlik",
        "value": "60 Shore A"
      },
      {
        "property": "Görünüm",
        "value": "Şeffaf / Saydam"
      }
    ],
    "image": "/images/products/silikon-hortumlar.webp",
    "imagePlaceholderText": "Silikon Hortumlar (Gıda & Medikal) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "silikon-fitiller",
      "silikon-conta",
      "termoflon-hortum"
    ],
    "seoTitle": "Silikon Hortumlar (Gıda & Medikal) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Silikon Hortumlar (Gıda & Medikal) imalatı ve tedariği. FDA onaylı, şeffaf, gıda ve ilaç transferine uygun yüksek ısı silikon hortumları."
  },
  {
    "id": "termoflon-cam-kumas",
    "slug": "termoflon-cam-kumas",
    "name": "Termoflon Cam Kumaş (PTFE Kaplı)",
    "category": "yuksek-isi-urunleri",
    "shortDescription": "Ambalaj çeneleri ve fırın konveyör bantları için yapışkanlı ve yapışkansız teflon cam kumaşı.",
    "description": "Termoflon cam kumaşlar; dokuma cam kumaşın teflon (PTFE) ile emprenye edilmesiyle üretilir. Arkası sarı koruyucu bantlı kendinden yapışkanlı tipleri ambalaj poşet çenelerinde yapışmayı engeller.",
    "features": [
      "Mükemmel yapışmazlık ve kayganlık",
      "260°C sürekli çalışma sıcaklığı",
      "Yüksek dielektrik yalıtım"
    ],
    "materials": [
      "Dokuma Cam Elyaf + PTFE (Teflon) Kaplama + Silikon Yapışkan"
    ],
    "standards": [
      "FDA"
    ],
    "applications": [
      "L-kesme ve poşet yapıştırma çeneleri",
      "Tekstil laminasyon presleri",
      "Gıda fırın konveyör bantları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "-70°C ile +260°C"
      },
      {
        "property": "Kalınlıklar",
        "value": "0.08 mm, 0.13 mm, 0.15 mm, 0.25 mm, 0.35 mm"
      },
      {
        "property": "Tip",
        "value": "Kendinden Yapışkanlı / Düz"
      }
    ],
    "image": "/images/products/termoflon-cam-kumas.webp",
    "imagePlaceholderText": "Termoflon Cam Kumaş (PTFE Kaplı) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "silikon-kumaslar",
      "termoflon-film",
      "cam-elyaf-bez"
    ],
    "seoTitle": "Termoflon Cam Kumaş (PTFE Kaplı) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Termoflon Cam Kumaş (PTFE Kaplı) imalatı ve tedariği. Ambalaj çeneleri ve fırın konveyör bantları için yapışkanlı ve yapışkansız teflon cam kumaşı."
  },
  {
    "id": "kestamid",
    "slug": "kestamid",
    "name": "Kestamid (Döküm Poliamid - PA 6G)",
    "category": "ptfe-plastik",
    "shortDescription": "Bronz ve çeliğe alternatif, aşınmaya dayanıklı, hafif ve darbe emici döküm poliamid levha ve çubuklar.",
    "description": "Kestamid (Cast Polyamide - PA6G); döküm yöntemiyle üretilen, yüksek mekanik mukavemete, aşınma direncine ve darbe emiciliğe sahip sarı renkli mühendislik plastiğidir. Dişli, tekerlek, kasnak ve aşınma plakası imalatında metal parçaların yerine hafif ve sessiz bir alternatif sunar.",
    "features": [
      "Çeliğe göre 7 kat daha hafif",
      "Yüksek aşınma ve sürtünme dayanımı",
      "Mükemmel talaşlı işlenebilirlik",
      "Sessiz çalışma ve titreşim sönümleme"
    ],
    "materials": [
      "Döküm Poliamid 6G"
    ],
    "standards": [
      "DIN EN ISO 1874",
      "ASTM D4066"
    ],
    "applications": [
      "Vinç tekerlekleri ve halat makaraları",
      "Ağır yük dişlileri",
      "Konveyör aşınma kılavuzları",
      "Kaymalı yataklar"
    ],
    "specifications": [
      {
        "property": "Yoğunluk",
        "value": "1.15 g/cm³"
      },
      {
        "property": "Çekme Dayanımı",
        "value": "≥ 80 MPa"
      },
      {
        "property": "Sıcaklık Aralığı",
        "value": "-40°C ile +110°C (Kısa süreli +160°C)"
      },
      {
        "property": "Renkler",
        "value": "Sarı (Standart), Siyah (Molibden katkılı), Mavi"
      }
    ],
    "image": "/images/products/kestamid.webp",
    "imagePlaceholderText": "Kestamid (Döküm Poliamid - PA 6G) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "polyamid",
      "poliasetal",
      "bos-cubuklar"
    ],
    "seoTitle": "Kestamid (Döküm Poliamid - PA 6G) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Kestamid (Döküm Poliamid - PA 6G) imalatı ve tedariği. Bronz ve çeliğe alternatif, aşınmaya dayanıklı, hafif ve darbe emici döküm poliamid levha ve çubuklar."
  },
  {
    "id": "polyamid",
    "slug": "polyamid",
    "name": "Poliamid (PA 6 / PA 66 - Naylon)",
    "category": "ptfe-plastik",
    "shortDescription": "Yüksek mekanik mukavemetli, yorulmaya ve darbelere karşı dirençli ekstrüzyon naylon çubuk ve levhalar.",
    "description": "Poliamid 6 (PA6); mekanik dayanımı yüksek, şok darbeleri absorbe edebilen ve endüstriyel makine parçalarında en çok tercih edilen mühendislik plastiğidir.",
    "features": [
      "Yüksek darbe ve yorulma direnci",
      "İyi elektriksel yalıtım",
      "Geniş talaşlı imalat kolaylığı"
    ],
    "materials": [
      "Ekstrüzyon Poliamid 6"
    ],
    "standards": [
      "ISO 1874"
    ],
    "applications": [
      "Mekanik burçlar",
      "Kamlar ve makaralar",
      "Elektrik izolasyon parçaları"
    ],
    "specifications": [
      {
        "property": "Yoğunluk",
        "value": "1.14 g/cm³"
      },
      {
        "property": "Sıcaklık",
        "value": "-40°C / +100°C"
      },
      {
        "property": "Renk",
        "value": "Beyaz (Naturel), Siyah"
      }
    ],
    "image": "/images/products/polyamid.webp",
    "imagePlaceholderText": "Poliamid (PA 6 / PA 66 - Naylon) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "kestamid",
      "poliasetal",
      "dolu-cubuklar"
    ],
    "seoTitle": "Poliamid (PA 6 / PA 66 - Naylon) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Poliamid (PA 6 / PA 66 - Naylon) imalatı ve tedariği. Yüksek mekanik mukavemetli, yorulmaya ve darbelere karşı dirençli ekstrüzyon naylon çubuk ve levhalar."
  },
  {
    "id": "poliasetal",
    "slug": "poliasetal",
    "name": "Poliasetal (POM / Delrin)",
    "category": "ptfe-plastik",
    "shortDescription": "Yüksek boyutsal kararlılık, düşük sürtünme ve neme karşı sıfır genleşme sunan Delrin levha ve çubuklar.",
    "description": "Poliasetal (POM / Polyoxymethylene / Delrin); neme ve suya maruz kaldığında genleşmeyen, dar toleranslı hassas talaşlı imalat parçaları için mükemmel boyutsal kararlılık sunan mühendislik plastiğidir.",
    "features": [
      "Su ve nem emilimi son derece düşüktür (ölçü stabilitesi)",
      "Mükemmel yaylanma elastikiyeti ve tokluk",
      "Düşük sürtünme ve aşınma katsayısı"
    ],
    "materials": [
      "Polioksimetilen (POM-C) Kopolimer"
    ],
    "standards": [
      "FDA Uyumlu",
      "ISO 9988"
    ],
    "applications": [
      "Hassas saat ve sayaç dişlileri",
      "Su vanası klapeleri",
      "Otomotiv yakıt pompası parçaları"
    ],
    "specifications": [
      {
        "property": "Yoğunluk",
        "value": "1.41 g/cm³"
      },
      {
        "property": "Sıcaklık Aralığı",
        "value": "-50°C ile +100°C"
      },
      {
        "property": "Renkler",
        "value": "Beyaz (Opak), Siyah"
      }
    ],
    "image": "/images/products/poliasetal.webp",
    "imagePlaceholderText": "Poliasetal (POM / Delrin) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "kestamid",
      "polietilen",
      "bos-cubuklar"
    ],
    "seoTitle": "Poliasetal (POM / Delrin) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Poliasetal (POM / Delrin) imalatı ve tedariği. Yüksek boyutsal kararlılık, düşük sürtünme ve neme karşı sıfır genleşme sunan Delrin levha ve çubuklar."
  },
  {
    "id": "polietilen",
    "slug": "polietilen",
    "name": "Polietilen (PE 300 / PE 500 / PE 1000)",
    "category": "ptfe-plastik",
    "shortDescription": "Ultra yüksek moleküler ağırlıklı (UHMW-PE 1000), aşınmaya dirençli, kaygan ve gıda onaylı plastik.",
    "description": "Polietilen (özellikle PE 1000 / UHMWPE); aşınma direnci son derece yüksek, sürtünme katsayısı düşük, kimyasallara ve darbelere karşı inanılmaz dirençli bir mühendislik plastiğidir. Konveyör hatlarında zincir kılavuzu ve gıda kesim tezgahı olarak kullanılır.",
    "features": [
      "Mükemmel kayganlık ve sıfır su emilimi",
      "Aşırı soğukta bile kırılmaz darbe tokluğu",
      "FDA onaylı gıda teması"
    ],
    "materials": [
      "Ultra Yüksek Molekül Ağırlıklı Polietilen (UHMWPE)"
    ],
    "standards": [
      "FDA 21 CFR 177.1520",
      "DIN 16972"
    ],
    "applications": [
      "Konveyör zincir yatakları ve kılavuzları",
      "Bunker ve silo kayar kaplamaları",
      "Gıda et kesim tezgahları"
    ],
    "specifications": [
      {
        "property": "Yoğunluk",
        "value": "0.93 - 0.96 g/cm³ (Sudan hafif)"
      },
      {
        "property": "Sıcaklık Aralığı",
        "value": "-200°C ile +80°C"
      },
      {
        "property": "Renkler",
        "value": "Beyaz (Naturel), Yeşil, Siyah"
      }
    ],
    "image": "/images/products/polietilen.webp",
    "imagePlaceholderText": "Polietilen (PE 300 / PE 500 / PE 1000) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "polipropilen",
      "pvc",
      "poliuretan-levhalar"
    ],
    "seoTitle": "Polietilen (PE 300 / PE 500 / PE 1000) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Polietilen (PE 300 / PE 500 / PE 1000) imalatı ve tedariği. Ultra yüksek moleküler ağırlıklı (UHMW-PE 1000), aşınmaya dirençli, kaygan ve gıda onaylı plastik."
  },
  {
    "id": "polipropilen",
    "slug": "polipropilen",
    "name": "Polipropilen (PP Levha & Çubuk)",
    "category": "ptfe-plastik",
    "shortDescription": "Kimyasal asit banyoları, kaplama tankları ve galvanoteknik için hafif ve kaynak edilebilir polipropilen.",
    "description": "Polipropilen (PP); mükemmel kimyasal direnci, yüksek kaynak kabiliyeti ve düşük yoğunluğu ile kimya sanayinde asit depolama tankı ve galvaniz kaplama havuzlarının imalatında kullanılan temel plastiktir.",
    "features": [
      "Kaynak teliyle kolay birleştirme ve bükme",
      "Asit ve alkalilere karşı mükemmel direnç",
      "Sıcak suda deforme olmaz (100°C'ye kadar)"
    ],
    "materials": [
      "Polipropilen Homopolimer (PP-H)"
    ],
    "standards": [
      "DVS 2205 (Tank Tasarımı)"
    ],
    "applications": [
      "Galvano asit banyo tankları",
      "Kimyasal yıkama kuleleri (scrubber)",
      "Laboratuvar tezgahları"
    ],
    "specifications": [
      {
        "property": "Yoğunluk",
        "value": "0.91 g/cm³"
      },
      {
        "property": "Sıcaklık Aralığı",
        "value": "0°C ile +100°C"
      },
      {
        "property": "Renk",
        "value": "Gri (RAL 7032), Beyaz"
      }
    ],
    "image": "/images/products/polipropilen.webp",
    "imagePlaceholderText": "Polipropilen (PP Levha & Çubuk) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "polietilen",
      "pvc",
      "kestamid"
    ],
    "seoTitle": "Polipropilen (PP Levha & Çubuk) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Polipropilen (PP Levha & Çubuk) imalatı ve tedariği. Kimyasal asit banyoları, kaplama tankları ve galvanoteknik için hafif ve kaynak edilebilir polipropilen."
  },
  {
    "id": "pvc",
    "slug": "pvc",
    "name": "Sert PVC (Polivinil Klorür)",
    "category": "ptfe-plastik",
    "shortDescription": "Asit ve alkali direnci yüksek, alev geciktirici ve rijit sert PVC levha ve çubuklar.",
    "description": "Sert PVC (PVC-U); yüksek mekanik sertliği, kimyasal dayanımı ve kendiliğinden sönen alev geciktirici özelliği ile kimyasal tesis borulamalarında ve tank imalatında yaygın kullanılır.",
    "features": [
      "Alev geciktirici (UL94 V-0)",
      "Yüksek çekme mukavemeti ve rijitlik",
      "Mükemmel kimyasal kararlılık"
    ],
    "materials": [
      "Plastifiyansız Sert PVC (PVC-U)"
    ],
    "standards": [
      "DIN EN ISO 11833-1"
    ],
    "applications": [
      "Kimyasal arıtma ekipmanları",
      "Havalandırma kanalları",
      "Elektrik panoları"
    ],
    "specifications": [
      {
        "property": "Yoğunluk",
        "value": "1.42 g/cm³"
      },
      {
        "property": "Sıcaklık",
        "value": "0°C ile +60°C"
      },
      {
        "property": "Renk",
        "value": "Koyu Gri (RAL 7011)"
      }
    ],
    "image": "/images/products/pvc.webp",
    "imagePlaceholderText": "Sert PVC (Polivinil Klorür) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "polipropilen",
      "polietilen",
      "bos-cubuklar"
    ],
    "seoTitle": "Sert PVC (Polivinil Klorür) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Sert PVC (Polivinil Klorür) imalatı ve tedariği. Asit ve alkali direnci yüksek, alev geciktirici ve rijit sert PVC levha ve çubuklar."
  },
  {
    "id": "bos-cubuklar",
    "slug": "bos-cubuklar",
    "name": "İçi Boş Çubuklar (Boru / Kovan Plastikler)",
    "category": "ptfe-plastik",
    "shortDescription": "Burç ve yatak imalatı için firesiz talaşlı işlem sağlayan içi boş Kestamid, Poliasetal ve Teflon kovanlar.",
    "description": "İçi boş çubuklar (kovan / tüp formlar); torna tezgahlarında burç, yatak ve sızdırmazlık halkası üretirken iç delme firesini ve işleme süresini sıfıra indiren kalın etli plastik borulardır.",
    "features": [
      "Talaşlı imalatta %50'ye varan hammadde ve zaman tasarrufu",
      "Kestamid, Delrin, Polietilen ve PTFE malzeme seçenekleri"
    ],
    "materials": [
      "Kestamid, POM Delrin, Saf PTFE, Polietilen"
    ],
    "standards": [
      "DIN EN ISO"
    ],
    "applications": [
      "Kaymalı yatak burçları",
      "Flanş ara contaları",
      "Rulman kovanları"
    ],
    "specifications": [
      {
        "property": "Çap Aralığı",
        "value": "Dış Çap: Ø 30 mm - Ø 500 mm / İç Çap: Müşteri talebine göre"
      },
      {
        "property": "Boy",
        "value": "500 mm / 1000 mm"
      }
    ],
    "image": "/images/products/bos-cubuklar.webp",
    "imagePlaceholderText": "İçi Boş Çubuklar (Boru / Kovan Plastikler) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "dolu-cubuklar",
      "kestamid",
      "poliasetal"
    ],
    "seoTitle": "İçi Boş Çubuklar (Boru / Kovan Plastikler) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "İçi Boş Çubuklar (Boru / Kovan Plastikler) imalatı ve tedariği. Burç ve yatak imalatı için firesiz talaşlı işlem sağlayan içi boş Kestamid, Poliasetal ve Teflon kovanlar."
  },
  {
    "id": "dolu-cubuklar",
    "slug": "dolu-cubuklar",
    "name": "Dolu Çubuklar (Silindirik Plastik Çubuklar)",
    "category": "ptfe-plastik",
    "shortDescription": "Torna ve CNC işlemleri için Kestamid, Delrin, Poliamid, PTFE ve Polietilen dolu silindirik çubuklar.",
    "description": "Dolu çubuklar; makine ve yedek parça imalatında mil, dişli, makara, valf pimi ve conta bileziği üretmek için kullanılan yüksek kaliteli yuvarlak plastik kütüklerdir.",
    "features": [
      "Çapaksız pürüzsüz yüzey ve homojen iç yoğunluk",
      "Çatlama ve iç gerilim yapmayan tavlanmış malzeme"
    ],
    "materials": [
      "Tüm Mühendislik Plastikleri"
    ],
    "standards": [
      "ISO 9001"
    ],
    "applications": [
      "CNC torna ve freze işleme",
      "Makine yedek parça imalatı"
    ],
    "specifications": [
      {
        "property": "Çap Seçenekleri",
        "value": "Ø 6 mm'den Ø 300 mm'ye kadar"
      },
      {
        "property": "Standart Boy",
        "value": "1000 mm / 2000 mm"
      }
    ],
    "image": "/images/products/dolu-cubuklar.webp",
    "imagePlaceholderText": "Dolu Çubuklar (Silindirik Plastik Çubuklar) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "bos-cubuklar",
      "kestamid",
      "poliasetal"
    ],
    "seoTitle": "Dolu Çubuklar (Silindirik Plastik Çubuklar) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Dolu Çubuklar (Silindirik Plastik Çubuklar) imalatı ve tedariği. Torna ve CNC işlemleri için Kestamid, Delrin, Poliamid, PTFE ve Polietilen dolu silindirik çubuklar."
  },
  {
    "id": "fiber-cubuklar",
    "slug": "fiber-cubuklar",
    "name": "Fiber Çubuklar (Yalıtım Çubuğu)",
    "category": "ptfe-plastik",
    "shortDescription": "Elektrik izolasyonu ve mekanik aşınma parçaları için yüksek dayanımlı fiber yuvarlak çubuklar.",
    "description": "Fiber çubuklar; elektriksel gerilime dayanıklı ve mekanik olarak rijit teknik yalıtım çubuklarıdır.",
    "features": [
      "Yüksek ark direnci",
      "Sert ve kırılmaz"
    ],
    "materials": [
      "Vulkanize / Epoksi Fiber"
    ],
    "standards": [
      "DIN 7735"
    ],
    "applications": [
      "Trafo gergi milleri",
      "Yalıtkan cıvatalar"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "120°C"
      },
      {
        "property": "Çap",
        "value": "Ø 8 mm - Ø 80 mm"
      }
    ],
    "image": "/images/products/fiber-cubuklar.webp",
    "imagePlaceholderText": "Fiber Çubuklar (Yalıtım Çubuğu) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "epoxy-fiber-cubuk",
      "fiber-levhalar",
      "dolu-cubuklar"
    ],
    "seoTitle": "Fiber Çubuklar (Yalıtım Çubuğu) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Fiber Çubuklar (Yalıtım Çubuğu) imalatı ve tedariği. Elektrik izolasyonu ve mekanik aşınma parçaları için yüksek dayanımlı fiber yuvarlak çubuklar."
  },
  {
    "id": "epoxy-fiber-cubuk",
    "slug": "epoxy-fiber-cubuk",
    "name": "Epoksi Fiber Çubuk (G10 / G11)",
    "category": "ptfe-plastik",
    "shortDescription": "Cam elyaf takviyeli epoksi reçine kompoziti, ekstrem basma ve dielektrik mukavemetli çubuk.",
    "description": "Epoksi fiber çubuklar; yüksek gerilim elektrik yalıtımında, anten direklerinde ve aşırı mekanik yüke maruz kalan yalıtkan saplamalarda kullanılan cam elyaf kompozit çubuklardır.",
    "features": [
      "Yüksek dielektrik yalıtım",
      "Bükülme ve çekme mukavemeti çeliğe yakın"
    ],
    "materials": [
      "Cam Elyaf Fitil + Epoksi Reçine"
    ],
    "standards": [
      "NEMA G10 / G11"
    ],
    "applications": [
      "Yüksek gerilim izolatör milleri",
      "Kriyojenik ekipman parçaları"
    ],
    "specifications": [
      {
        "property": "Dielektrik Dayanım",
        "value": "≥ 25 kV/mm"
      },
      {
        "property": "Sıcaklık",
        "value": "155°C - 180°C"
      }
    ],
    "image": "/images/products/epoxy-fiber-cubuk.webp",
    "imagePlaceholderText": "Epoksi Fiber Çubuk (G10 / G11) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "fiber-cubuklar",
      "epoxy-fiber-levha",
      "dolu-cubuklar"
    ],
    "seoTitle": "Epoksi Fiber Çubuk (G10 / G11) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Epoksi Fiber Çubuk (G10 / G11) imalatı ve tedariği. Cam elyaf takviyeli epoksi reçine kompoziti, ekstrem basma ve dielektrik mukavemetli çubuk."
  },
  {
    "id": "cam-elyafli-termoflon",
    "slug": "cam-elyafli-termoflon",
    "name": "Cam Elyaflı Termoflon (PTFE + %25 Cam)",
    "category": "ptfe-plastik",
    "shortDescription": "Cam elyaf takviyesi ile basma mukavemeti ve aşınma direnci artırılmış kompozit Teflon malzeme.",
    "description": "Cam elyaflı termoflon; saf PTFE'nin içine %15-%25 oranında mikro cam elyafı eklenerek üretilir. Soğuk akmayı azaltır, basma mukavemetini iki katına çıkarır ve kimyasal hat vanalarında vana yuva contası (seat) olarak mükemmel çalışır.",
    "features": [
      "Düşük soğuk akma ve üstün yük taşıma kapasitesi",
      "Vanalar için yüksek basınç altında form koruma",
      "Asit ve hidrokarbonlara tam direnç"
    ],
    "materials": [
      "PTFE + %15-%25 E-Cam Elyafı"
    ],
    "standards": [
      "ASTM D4745"
    ],
    "applications": [
      "Küresel vana yuva contaları (ball valve seats)",
      "Hidrolik silindir piston yataklama bantları"
    ],
    "specifications": [
      {
        "property": "Basma Dayanımı",
        "value": "Saf teflondan %50 daha yüksek"
      },
      {
        "property": "Sıcaklık",
        "value": "-200°C ile +260°C"
      },
      {
        "property": "Renk",
        "value": "Kırık Beyaz / Açık Gri"
      }
    ],
    "image": "/images/products/cam-elyafli-termoflon.webp",
    "imagePlaceholderText": "Cam Elyaflı Termoflon (PTFE + %25 Cam) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "bronzlu-termoflon",
      "karbonlu-termoflon",
      "ptfe-teflon-levha"
    ],
    "seoTitle": "Cam Elyaflı Termoflon (PTFE + %25 Cam) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Cam Elyaflı Termoflon (PTFE + %25 Cam) imalatı ve tedariği. Cam elyaf takviyesi ile basma mukavemeti ve aşınma direnci artırılmış kompozit Teflon malzeme."
  },
  {
    "id": "bronzlu-termoflon",
    "slug": "bronzlu-termoflon",
    "name": "Bronzlu Termoflon (PTFE + %40 Bronz)",
    "category": "ptfe-plastik",
    "shortDescription": "Bronz tozu takviyeli, yüksek termal iletkenlik ve sürtünme dayanımlı hidrolik kaymalı yatak malzemesi.",
    "description": "Bronzlu termoflon; PTFE'nin %40 veya %60 oranında atomize bronz tozu ile harmanlanmasıyla üretilir. Yüksek termal iletkenliğe sahiptir, hidrolik silindirlerde mil yataklamalarında aşınmayı önler ve ağır yükleri taşır.",
    "features": [
      "Maksimum aşınma direnci ve termal iletkenlik",
      "Hidrolik sistemlerde sıfır yapışma-kayma (stick-slip)",
      "Ağır yük altında üstün form kararlılığı"
    ],
    "materials": [
      "PTFE + %40-%60 Bronz Tozu"
    ],
    "standards": [
      "ASTM D4745"
    ],
    "applications": [
      "Hidrolik ve pnömatik silindir kılavuz bantları",
      "Kaymalı yatak burçları",
      "Kompresör segmanları"
    ],
    "specifications": [
      {
        "property": "Yoğunluk",
        "value": "3.9 g/cm³"
      },
      {
        "property": "Sıcaklık",
        "value": "-200°C ile +260°C"
      },
      {
        "property": "Renk",
        "value": "Bronz / Kahverengi Metalik"
      }
    ],
    "image": "/images/products/bronzlu-termoflon.webp",
    "imagePlaceholderText": "Bronzlu Termoflon (PTFE + %40 Bronz) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "karbonlu-termoflon",
      "cam-elyafli-termoflon",
      "termoflon-cubuk"
    ],
    "seoTitle": "Bronzlu Termoflon (PTFE + %40 Bronz) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Bronzlu Termoflon (PTFE + %40 Bronz) imalatı ve tedariği. Bronz tozu takviyeli, yüksek termal iletkenlik ve sürtünme dayanımlı hidrolik kaymalı yatak malzemesi."
  },
  {
    "id": "karbonlu-termoflon",
    "slug": "karbonlu-termoflon",
    "name": "Karbonlu Termoflon (PTFE + %25 Karbon)",
    "category": "ptfe-plastik",
    "shortDescription": "Karbon ve grafit dolgulu, antistatik, suda ve kuru çalışmada mükemmel aşınma dirençli Teflon.",
    "description": "Karbonlu termoflon; PTFE'nin karbon tozu ve grafit ile birleştirilmesiyle antistatik özellik kazanan ve kuru sürtünme ortamlarında aşınmaya meydan okuyan ileri düzey kompozit malzemedir.",
    "features": [
      "Antistatik (elektriksel iletken) yapı",
      "Kuru ve yağsız ortamlarda üstün kayma performansı",
      "Buhar ve sıcak su hatlarında minimum aşınma"
    ],
    "materials": [
      "PTFE + %25 Karbon/Grafit"
    ],
    "standards": [
      "ASTM D4745"
    ],
    "applications": [
      "Kuru çalışan kompresör segmanları",
      "Statik elektrik tahliye contaları",
      "Sıcak su pompası yatakları"
    ],
    "specifications": [
      {
        "property": "Yüzey Direnci",
        "value": "İletken / Antistatik"
      },
      {
        "property": "Sıcaklık",
        "value": "-200°C ile +260°C"
      },
      {
        "property": "Renk",
        "value": "Mat Siyah"
      }
    ],
    "image": "/images/products/karbonlu-termoflon.webp",
    "imagePlaceholderText": "Karbonlu Termoflon (PTFE + %25 Karbon) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "bronzlu-termoflon",
      "cam-elyafli-termoflon",
      "termoflon-cubuk"
    ],
    "seoTitle": "Karbonlu Termoflon (PTFE + %25 Karbon) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Karbonlu Termoflon (PTFE + %25 Karbon) imalatı ve tedariği. Karbon ve grafit dolgulu, antistatik, suda ve kuru çalışmada mükemmel aşınma dirençli Teflon."
  },
  {
    "id": "termoflon-cubuk",
    "slug": "termoflon-cubuk",
    "name": "Termoflon PTFE Çubuk (Dolgulu & Saf)",
    "category": "ptfe-plastik",
    "shortDescription": "CNC torna tezgahlarında hassas vana contası ve burç işlemek için saf ve dolgulu Termoflon çubuklar.",
    "description": "Termoflon çubuklar; saf, cam elyaflı, bronzlu veya karbonlu olarak çekilen, dar toleranslı sızdırmazlık parçaları üretimi için kullanılan yuvarlak teflon çubuklardır.",
    "features": [
      "Homojen iç yapı ve gerilimsiz imalat",
      "Yüksek kimyasal saflık"
    ],
    "materials": [
      "Saf veya Dolgulu PTFE"
    ],
    "standards": [
      "ASTM D1710"
    ],
    "applications": [
      "Vana iç contaları",
      "Laboratuvar musluk parçaları"
    ],
    "specifications": [
      {
        "property": "Çap Aralığı",
        "value": "Ø 5 mm - Ø 200 mm"
      },
      {
        "property": "Sıcaklık",
        "value": "260°C"
      }
    ],
    "image": "/images/products/termoflon-cubuk.webp",
    "imagePlaceholderText": "Termoflon PTFE Çubuk (Dolgulu & Saf) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "ptfe-teflon-levha",
      "dolu-cubuklar",
      "bronzlu-termoflon"
    ],
    "seoTitle": "Termoflon PTFE Çubuk (Dolgulu & Saf) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Termoflon PTFE Çubuk (Dolgulu & Saf) imalatı ve tedariği. CNC torna tezgahlarında hassas vana contası ve burç işlemek için saf ve dolgulu Termoflon çubuklar."
  },
  {
    "id": "termoflon-cord",
    "slug": "termoflon-cord",
    "name": "Termoflon Cord (Yuvarlak ePTFE Fitil)",
    "category": "ptfe-plastik",
    "shortDescription": "Genleşmiş ePTFE'den üretilen, sonsuz elastikiyete sahip yuvarlak teflon conta kordonu.",
    "description": "Termoflon cord; %100 genleşmiş saf PTFE'den yuvarlak kesitli olarak üretilen, flanş oluklarına kolayca yerleştirilen ve cıvata sıkıldığında yassılaşarak mikroskobik sızdırmazlık sağlayan esnek fitildir.",
    "features": [
      "Basınç altında yassılaşarak yüzeyi mükemmel kaplar",
      "pH 0-14 tüm kimyasallara inert"
    ],
    "materials": [
      "%100 Expanded ePTFE"
    ],
    "standards": [
      "FDA 21 CFR 177.1550"
    ],
    "applications": [
      "Eşanjör ve kapak oluk contaları",
      "Cam reaktör bağlantıları"
    ],
    "specifications": [
      {
        "property": "Çaplar",
        "value": "Ø 1 mm'den Ø 16 mm'ye kadar"
      },
      {
        "property": "Sıcaklık",
        "value": "-240°C ile +260°C"
      }
    ],
    "image": "/images/products/termoflon-cord.webp",
    "imagePlaceholderText": "Termoflon Cord (Yuvarlak ePTFE Fitil) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "termoflon-contalon",
      "ptfe-teflon-conta",
      "silikon-fitiller"
    ],
    "seoTitle": "Termoflon Cord (Yuvarlak ePTFE Fitil) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Termoflon Cord (Yuvarlak ePTFE Fitil) imalatı ve tedariği. Genleşmiş ePTFE'den üretilen, sonsuz elastikiyete sahip yuvarlak teflon conta kordonu."
  },
  {
    "id": "termoflon-hortum",
    "slug": "termoflon-hortum",
    "name": "Termoflon PTFE Hortum",
    "category": "ptfe-plastik",
    "shortDescription": "Kimyasallara tam inert, iç yüzeyi pürüzsüz saf PTFE esnek transfer hortumu.",
    "description": "Termoflon hortumlar; agresif asitlerin, boyaların ve sıcak buharın taşınmasında kullanılan, yapışmaz ve korozyona uğramaz esnek teflon borulardır.",
    "features": [
      "Tam kimyasal inertlik",
      "Pürüzsüz iç cidar ile tortu tutmaz"
    ],
    "materials": [
      "Saf PTFE (Opsiyonel Paslanmaz Örgü Zırhlı)"
    ],
    "standards": [
      "FDA",
      "ISO 12086"
    ],
    "applications": [
      "Kimyasal dolum",
      "Otomotiv fren ve turbo yağ hatları"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "-70°C / +260°C"
      }
    ],
    "image": "/images/products/termoflon-hortum.webp",
    "imagePlaceholderText": "Termoflon PTFE Hortum - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "silikon-hortumlar",
      "ptfe-teflon-levha",
      "termoflon-cord"
    ],
    "seoTitle": "Termoflon PTFE Hortum | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Termoflon PTFE Hortum imalatı ve tedariği. Kimyasallara tam inert, iç yüzeyi pürüzsüz saf PTFE esnek transfer hortumu."
  },
  {
    "id": "termoflon-contalon",
    "slug": "termoflon-contalon",
    "name": "Termoflon Contalon (Kendinden Yapışkanlı ePTFE Şerit Conta)",
    "category": "ptfe-plastik",
    "shortDescription": "Arkası yapışkanlı, her türlü flanş ve kapağa firesiz uygulanan %100 genleşmiş ePTFE bant conta.",
    "description": "Termoflon Contalon; modern sızdırmazlık teknolojisinin en pratik ürünüdür. Arkasındaki yapışkan bant sayesinde büyük veya dikey flanş yüzeylerine kolayca yapıştırılır, uçları çapraz bindirilerek kapatılır ve anında tam sızdırmazlık sağlar. Kalıp veya conta kesme gerektirmez, %100 firesizdir.",
    "features": [
      "Kalıp masrafı ve kesim firesi yok",
      "Düzensiz, eğri veya aşınmış flanş yüzeylerine tam uyum",
      "pH 0-14 kimyasal direnç ve FDA gıda onayı"
    ],
    "materials": [
      "%100 Genleşmiş Çok Eksenli ePTFE + Akrilik Yapışkan"
    ],
    "standards": [
      "FDA 21 CFR 177.1550",
      "DVGW (Gaz Onayı)",
      "BAM (Oksijen Onayı)"
    ],
    "applications": [
      "Emaye, cam ve plastik flanşlar",
      "Rüzgar türbini kule flanşları",
      "Büyük tank kapakları"
    ],
    "specifications": [
      {
        "property": "Genişlik x Kalınlık",
        "value": "3x1.5, 5x2, 7x2.5, 10x3, 14x5, 17x6, 20x7, 28x5 mm"
      },
      {
        "property": "Sıcaklık",
        "value": "-240°C ile +260°C (Kısa süreli +315°C)"
      },
      {
        "property": "Basınç Dayanımı",
        "value": "Vakumdan 200 Bar'a kadar"
      }
    ],
    "image": "/images/products/termoflon-contalon.webp",
    "imagePlaceholderText": "Termoflon Contalon (Kendinden Yapışkanlı ePTFE Şerit Conta) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "grafitli-serit-salmastralar",
      "termoflon-cord",
      "ptfe-teflon-conta"
    ],
    "seoTitle": "Termoflon Contalon (Kendinden Yapışkanlı ePTFE Şerit Conta) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Termoflon Contalon (Kendinden Yapışkanlı ePTFE Şerit Conta) imalatı ve tedariği. Arkası yapışkanlı, her türlü flanş ve kapağa firesiz uygulanan %100 genleşmiş ePTFE bant conta."
  },
  {
    "id": "etch-termoflon",
    "slug": "etch-termoflon",
    "name": "Etch Termoflon (Aşındırılmış Yapışmaya Uygun PTFE)",
    "category": "ptfe-plastik",
    "shortDescription": "Özel kimyasal sodyum banyosunda yüzeyi aşındırılarak yapıştırıcı tutabilir hale getirilmiş PTFE levha.",
    "description": "Normalde hiçbir yapıştırıcının tutmadığı PTFE'nin tek yüzeyi özel kimyasal aşındırma (sodium-naphthalene etching) işlemine tabi tutulur. Bu sayede çelik, beton veya kauçuk yüzeylere epoksi yapıştırıcılarla mükemmel şekilde yapıştırılabilir.",
    "features": [
      "Epoksi yapıştırıcılarla metallere mükemmel yapışma",
      "Köprü mesnetleri ve tank astar kaplamalarında kullanım"
    ],
    "materials": [
      "Kimyasal Aşındırılmış PTFE"
    ],
    "standards": [
      "ASTM D3294"
    ],
    "applications": [
      "Köprü kayar mesnetleri",
      "Kimyasal tank iç astar kaplamaları"
    ],
    "specifications": [
      {
        "property": "Yapışma Mukavemeti",
        "value": "≥ 3 N/mm (Soyulma mukavemeti)"
      },
      {
        "property": "Sıcaklık",
        "value": "260°C"
      }
    ],
    "image": "/images/products/etch-termoflon.webp",
    "imagePlaceholderText": "Etch Termoflon (Aşındırılmış Yapışmaya Uygun PTFE) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "sanfor-termoflon",
      "ptfe-teflon-levha",
      "termoflon-levha"
    ],
    "seoTitle": "Etch Termoflon (Aşındırılmış Yapışmaya Uygun PTFE) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Etch Termoflon (Aşındırılmış Yapışmaya Uygun PTFE) imalatı ve tedariği. Özel kimyasal sodyum banyosunda yüzeyi aşındırılarak yapıştırıcı tutabilir hale getirilmiş PTFE levha."
  },
  {
    "id": "sanfor-termoflon",
    "slug": "sanfor-termoflon",
    "name": "Sanfor Termoflon (Tekstil Sanfor Bandı)",
    "category": "ptfe-plastik",
    "shortDescription": "Tekstil sanfor ve fikse makineleri için ısıya dayanıklı pürüzsüz teflon kayar ayakkabı ve bantlar.",
    "description": "Sanfor termoflon; tekstil terbiye fabrikalarındaki sanfor makinelerinde kumaşın çekmezlik işlemi sırasında yüksek buhar ve sıcak silindir temasına dayanıklı özel teflon parçalardır.",
    "features": [
      "Kumaşa leke bırakmaz ve çekmezlik stabilitesi sağlar",
      "Sıcak buhar ve sürtünmeye dayanım"
    ],
    "materials": [
      "Özel Sıkıştırılmış Yüksek Molekül PTFE"
    ],
    "standards": [
      "Tekstil Sanayi Normları"
    ],
    "applications": [
      "Sanfor makineleri teflon ayakkabıları",
      "Buharlama tünelleri"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "260°C"
      }
    ],
    "image": "/images/products/sanfor-termoflon.webp",
    "imagePlaceholderText": "Sanfor Termoflon (Tekstil Sanfor Bandı) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "termoflon-cam-kumas",
      "etch-termoflon",
      "ptfe-teflon-levha"
    ],
    "seoTitle": "Sanfor Termoflon (Tekstil Sanfor Bandı) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Sanfor Termoflon (Tekstil Sanfor Bandı) imalatı ve tedariği. Tekstil sanfor ve fikse makineleri için ısıya dayanıklı pürüzsüz teflon kayar ayakkabı ve bantlar."
  },
  {
    "id": "presli-yun-keceler",
    "slug": "presli-yun-keceler",
    "name": "Presli Doğal Yün Keçeler",
    "category": "ptfe-plastik",
    "shortDescription": "Rulman yatakları, yağlama bilezikleri ve toz tutucu sızdırmazlık için saf koyun yünü presli keçeler.",
    "description": "Presli yün keçeler; saf doğal koyun yününün buhar ve basınç altında hiçbir sentetik katkı olmadan mekanik olarak keçeleştirilmesiyle üretilir. Yağı içinde tutarak rulmanları sürekli yağlar ve toza karşı mükemmel bariyer oluşturur.",
    "features": [
      "Yağı bünyesinde sünger gibi hapsederek sürekli kılcal yağlama sağlar",
      "Mükemmel titreşim sönümleme ve gürültü emilimi",
      "Aşınma ve sürtünme ısısına dayanım"
    ],
    "materials": [
      "%100 Doğal Yün"
    ],
    "standards": [
      "DIN 61200",
      "SAE J314"
    ],
    "applications": [
      "Rulman toz ve yağ keçeleri",
      "Çelik sac dilme makineleri fren keçeleri",
      "Müzik aletleri ve titreşim takozları"
    ],
    "specifications": [
      {
        "property": "Yoğunluk",
        "value": "0.20 - 0.50 g/cm³ (Yumuşak, Orta, Sert)"
      },
      {
        "property": "Sıcaklık Aralığı",
        "value": "-40°C ile +100°C"
      },
      {
        "property": "Kalınlıklar",
        "value": "2 mm'den 30 mm'ye kadar"
      }
    ],
    "image": "/images/products/presli-yun-keceler.webp",
    "imagePlaceholderText": "Presli Doğal Yün Keçeler - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "sentetik-keceler",
      "vulkanize-fiber-levhalar",
      "mantar-levhalar"
    ],
    "seoTitle": "Presli Doğal Yün Keçeler | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Presli Doğal Yün Keçeler imalatı ve tedariği. Rulman yatakları, yağlama bilezikleri ve toz tutucu sızdırmazlık için saf koyun yünü presli keçeler."
  },
  {
    "id": "sentetik-keceler",
    "slug": "sentetik-keceler",
    "name": "Sentetik Teknik Keçeler (Polyester / Polipropilen)",
    "category": "ptfe-plastik",
    "shortDescription": "Endüstriyel filtreleme, silme, yalıtım ve mekanik koruma için sentetik iğnelenmiş keçeler.",
    "description": "Sentetik teknik keçeler; polyester ve polipropilen liflerinin iğneleme teknolojisi ile birleştirilmesiyle üretilen, kimyasallara ve neme karşı dayanıklı filtre ve conta keçeleridir.",
    "features": [
      "Çürümez ve küf yapmaz",
      "Asit ve alkalilere karşı direnç",
      "Yüksek mekanik filtreleme performansı"
    ],
    "materials": [
      "%100 Polyester / Polipropilen"
    ],
    "standards": [
      "DIN EN 29073"
    ],
    "applications": [
      "Toz toplama torbaları ve hava filtreleri",
      "Sıyırıcı contalar",
      "Akustik izolasyon"
    ],
    "specifications": [
      {
        "property": "Sıcaklık",
        "value": "130°C - 150°C"
      },
      {
        "property": "Gramaj",
        "value": "200 g/m² - 2000 g/m²"
      }
    ],
    "image": "/images/products/sentetik-keceler.webp",
    "imagePlaceholderText": "Sentetik Teknik Keçeler (Polyester / Polipropilen) - Emek Conta Teknik İmalat",
    "drawingSupported": true,
    "relatedProductSlugs": [
      "presli-yun-keceler",
      "mantar-levhalar",
      "poliuretan-levhalar"
    ],
    "seoTitle": "Sentetik Teknik Keçeler (Polyester / Polipropilen) | Endüstriyel Sızdırmazlık | Emek Conta",
    "seoDescription": "Sentetik Teknik Keçeler (Polyester / Polipropilen) imalatı ve tedariği. Endüstriyel filtreleme, silme, yalıtım ve mekanik koruma için sentetik iğnelenmiş keçeler."
  }
];
