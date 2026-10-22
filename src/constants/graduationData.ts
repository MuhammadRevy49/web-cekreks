export interface SubPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
}

export interface GraduationPackage {
  categoryName: string;
  tagline: string;
  popular?: boolean;
  desc: string;
  tiers: SubPlan[];
}

export interface GraduationScopeItem {
  title: string;
  tag: string;
  desc: string;
  image: string;
}

export const GRADUATION_SERVICES_SCOPE: GraduationScopeItem[] = [
  {
    title: "Foto Personal & Toga",
    tag: "Individual",
    desc: "Sesi potret personal wisudawan dengan toga lengkap, pose elegan, dan arahan gaya terarah untuk portofolio kelulusan terbaik.",
    image: "/images/graduation/personal.jpg",
  },
  {
    title: "Momen Bersama Keluarga",
    tag: "Family Portrait",
    desc: "Merekam kebanggaan dan pelukan hangat orang tua serta keluarga tercinta yang telah menemani perjuangan studi hingga wisuda.",
    image: "/images/graduation/family.jpg",
  },
  {
    title: "Grup Sahabat & Circle",
    tag: "Besties & Squad",
    desc: "Abadikan tawa dan kekompakan bersama teman seperjuangan kampus dengan konsep seru, natural, dan penuh energi.",
    image: "/images/graduation/group.jpg",
  },
];

export const GRADUATION_PACKAGES: GraduationPackage[] = [
  {
    categoryName: "BASIC GRADUATION",
    tagline: "Cocok untuk foto personal & santai",
    popular: false,
    desc: "Sesi foto wisuda praktis dengan hasil instan resolusi tinggi untuk kebutuhan feed dan kartu kenangan.",
    tiers: [
      {
        id: "grad-basic-1",
        name: "Basic 1 (Solo)",
        price: "Rp 500.000",
        features: [
          "Durasi sesi 45 Menit",
          "1 Fotografer Profesional",
          "Maksimal 2 Orang (Wisudawan + 1 Pendamping)",
          "Semua File Mentah (Google Drive)",
          "15 Foto Edited & Color Grading",
        ],
      },
      {
        id: "grad-basic-2",
        name: "Basic 2 (Duo/Couple)",
        price: "Rp 750.000",
        features: [
          "Durasi sesi 60 Menit",
          "1 Fotografer Profesional",
          "Maksimal 4 Orang",
          "Semua File Mentah Resolusi Tinggi",
          "25 Foto Edited & Color Grading",
          "1 Cetak Foto 10R + Minimalist Frame",
        ],
      },
    ],
  },
  {
    categoryName: "PREMIUM GRADUATION",
    tagline: "Paket favorit wisudawan & keluarga",
    popular: true,
    desc: "Dokumentasi komprehensif bersama keluarga besar dan sahabat dengan durasi lebih lega dan cetakan premium.",
    tiers: [
      {
        id: "grad-prem-1",
        name: "Premium Silver",
        price: "Rp 1.200.000",
        features: [
          "Durasi sesi 90 Menit",
          "1 Fotografer + 1 Assistant Lighting",
          "Maksimal 8 Orang Keluarga/Sahabat",
          "Unlimited Foto Files High-Resolution",
          "45+ Foto Edited Eksklusif",
          "1 Cetak Frame 12R Eksklusif",
        ],
      },
      {
        id: "grad-prem-2",
        name: "Premium Gold",
        price: "Rp 1.650.000",
        features: [
          "Durasi sesi 120 Menit (2 Jam)",
          "1 Fotografer + 1 Videografer Reels",
          "Bebas Jumlah Orang (Keluarga & Sahabat)",
          "Unlimited Master File Foto & Video",
          "70+ Foto Edited Eksklusif",
          "1 Video Cinematic Reels 60 Detik",
          "2 Cetak Frame Minimalis 12R",
        ],
      },
    ],
  },
  {
    categoryName: "EXCLUSIVE GRADUATION",
    tagline: "Sesi seharian komplit + cinematic film",
    popular: false,
    desc: "Layanan dokumentasi VIP mulai dari persiapan kebaya/toga, seremonial gedung, hingga sesi foto keluarga besar.",
    tiers: [
      {
        id: "grad-exc-1",
        name: "Exclusive Squad",
        price: "Rp 2.500.000",
        features: [
          "Half Day Coverage (4 Jam)",
          "2 Fotografer + 1 Videografer",
          "Bisa Gabungan 3–5 Wisudawan Sekaligus",
          "Semua Master Files + Edited Photos",
          "Video Cinematic Highlight 2–3 Menit",
          "Photobook Album Kenangan Wisuda",
        ],
      },
      {
        id: "grad-exc-2",
        name: "Exclusive VIP",
        price: "Rp 3.800.000",
        features: [
          "Full Day Coverage (Persiapan hingga Acara Usai)",
          "Tim Lengkap: 2 Foto + 1 Video Cinematic",
          "Same Day Teaser Video untuk Instagram/TikTok",
          "VIP Priority Edit (Selesai dalam 3 Hari)",
          "Exclusive Hardcover Photobook Album",
          "Flashdisk Wooden Box + 2 Frame Kanvas Jumbo",
        ],
      },
    ],
  },
];

export const GRADUATION_ALBUM = [
  { id: 1, image: "/images/graduation/testimoni/testi-1.jpg", alt: "Testimoni Graduation 1" },
  { id: 2, image: "/images/graduation/testimoni/testi-2.jpg", alt: "Testimoni Graduation 2" },
  { id: 3, image: "/images/graduation/testimoni/testi-3.jpg", alt: "Testimoni Graduation 3" },
  { id: 4, image: "/images/graduation/testimoni/testi-4.jpg", alt: "Testimoni Graduation 4" },
  { id: 5, image: "/images/graduation/testimoni/testi-5.jpg", alt: "Testimoni Graduation 5" },
  { id: 6, image: "/images/graduation/testimoni/testi-6.jpg", alt: "Testimoni Graduation 6" },
  { id: 7, image: "/images/graduation/testimoni/testi-7.jpg", alt: "Testimoni Graduation 7" },
  { id: 8, image: "/images/graduation/testimoni/testi-8.jpg", alt: "Testimoni Graduation 8" },
  { id: 9, image: "/images/graduation/testimoni/testi-9.jpg", alt: "Testimoni Graduation 9" },
  { id: 10, image: "/images/graduation/testimoni/testi-10.jpg", alt: "Testimoni Graduation 10" },
  { id: 11, image: "/images/graduation/testimoni/testi-11.jpg", alt: "Testimoni Graduation 11" },
  { id: 12, image: "/images/graduation/testimoni/testi-12.jpg", alt: "Testimoni Graduation 12" },
];