export interface SubPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
}

export interface WeddingPackage {
  categoryName: string;
  tagline: string;
  popular?: boolean;
  desc: string;
  tiers: SubPlan[];
}

export interface WeddingScopeItem {
  title: string;
  tag: string;
  desc: string;
  image: string;
}

export const WEDDING_SERVICES_SCOPE: WeddingScopeItem[] = [
  {
    title: "Foto Prewedding",
    tag: "Pre-Event",
    desc: "Langkah awal menuju perjalanan kebahagiaan bersama. Paket ini disiapkan untuk keperluan foto galeri di kartu undangan serta pigura dekorasi masuk gedung resepsi pernikahan.",
    image: "/images/wedding/prewed.jpg",
  },
  {
    title: "Pengajian & Siraman",
    tag: "Tradisi & Doa",
    desc: "Langkah sakral bermakna sebelum menuju hari pelaminan. Memohon ridho & restu kedua orang tua serta membersihkan diri sebelum ikrar suci pernikahan dilangsungkan.",
    image: "/images/wedding/siraman.jpg",
  },
  {
    title: "Akad Nikah & Resepsi",
    tag: "Wedding Day",
    desc: "Janji suci akad nikah, upacara adat, hingga momen resepsi bahagia bersama tamu tercinta. Diabadikan sempurna agar emosi dan senyuman abadi selamanya.",
    image: "/images/wedding/resepsi.jpg",
  },
];

export const WEDDING_PACKAGES: WeddingPackage[] = [
  {
    categoryName: "BASIC WEDDING",
    tagline: "Cocok untuk intimate wedding & sakral",
    popular: false,
    desc: "Foto & Video dokumentasi acara Akad Nikah & Resepsi Pernikahan dengan File foto digital resolusi tinggi.",
    tiers: [
      {
        id: "akad-nikah",
        name: "Akad Nikah",
        price: "Rp 1.200.000",
        features: [
          "1 Album 35 x 35 cm. 10 Sheets",
          "1 Pembesaran 10R + Lam + Frame",
          "1 Fotografer",
          "Durasi kerja selama 6 jam",
          "Softcopy dikirim dalam Drive",
        ],
      },
      {
        id: "basic-1",
        name: "Basic 1",
        price: "Rp 2.000.000",
        features: [
          "1 Album 35 x 35 cm. 15 Sheets",
          "1 Pembesaran 12R + Lam + Frame",
          "2 Fotografer",
          "Durasi kerja selama 8 jam",
          "Softcopy dikirim dalam Drive",
        ],
      },
      {
        id: "basic-2",
        name: "Basic 2",
        price: "Rp 3.500.000",
        features: [
          "1 Album Magazine Kolase Digital",
          "1 Pembesaran 16R + Lam + Frame",
          "2 Fotografer",
          "Softcopy dikirim dalam Drive",
          "Video Highlight 3 - 5 Menit",
        ],
      },
    ],
  },
  {
    categoryName: "PREMIUM WEDDING",
    tagline: "Layanan menyeluruh prosesi sakral",
    popular: true,
    desc: "Layanan foto & video lengkap dengan tim profesional mulai dari Siraman, Pengajian, Akad Nikah, hingga Resepsi.",
    tiers: [
      {
        id: "prem-1",
        name: "Silver",
        price: "Rp 4.500.000",
        features: [
          "1 Album Magnetik + 1 Album Megazine",
          "1 Buah Pembesaran 16R",
          "3 Fotografer",
          "Softcopy dikirim dalam Drive",
          "Highlight + Full Video Editing",
        ],
      },
      {
        id: "prem-2",
        name: "Gold",
        price: "Rp 6.500.000",
        features: [
          "2 Album Magazine Kulit + Eklusive Box",
          "1 Buah Pembesaran 20R",
          "3 Fotografer",
          "Softcopy dikirim dalam Drive",
          "Highlight + Full Video Editing",
        ],
      },
      {
        id: "prem-3",
        name: "Platinum",
        price: "Rp 8.000.000",
        features: [
          "2 Album Magazine Kulit + Eklusive Box",
          "2 Buah Pembesaran 20R",
          "4 Fotografer + Kamera Drone",
          "Softcopy dikirim dalam Drive",
          "Highlight + Full Video Editing",
        ],
      },
    ],
  },
  {
    categoryName: "EXCLUSIVE WEDDING",
    tagline: "Paket all-in komplit dari hulu ke hilir",
    popular: false,
    desc: "Mendokumentasikan komplit dari prewed hingga wedding day dengan standar sinematik dan drone aerial.",
    tiers: [
      {
        id: "exc-1",
        name: "Exclusive 1",
        price: "Rp 7.500.000",
        features: [
          "Pembesaran Frewed Fotografi 1 pcs",
          "Cinematic Prewed Highlight",
          "Full Shooting semua Agenda Acara",
          "Exclusive Box Album",
          "Didukung perlengkapan Kamera Drone",
          "Master File dikirim seluruhnya lewat Drive",
        ],
      },
      {
        id: "exc-2",
        name: "Exclusive 2",
        price: "Rp 8.500.000",
        features: [
          "Pembesaran Frewed Fotografi 2 pcs",
          "Cinematic Prewed Highlight",
          "Full Shooting semua Agenda Acara",
          "Exclusive Box Album lengkap",
          "Didukung perlengkapan Kamera Drone",
          "Master File dikirim seluruhnya lewat Drive",
        ],
      },
    ],
  },
];