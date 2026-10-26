import Image from "next/image";
import Link from "next/link";
import { 
  Heart, 
  GraduationCap, 
  Presentation, 
  Camera, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof Heart;
  description: string;
  imageUrl: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "wedding",
    title: "Wedding Photography",
    subtitle: "Dokumentasi Pernikahan Elegan",
    icon: Heart,
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    description:
      "Layanan fotografi pernikahan eksklusif yang memadukan keindahan foto konvensional beresolusi tinggi dengan keajaiban efek AI Generatif.",
    features: [
      "Cetak Foto Instan Berbagai Ukuran Premium",
      "Kustomisasi Busana & Tema AI Impian",
      "Galeri Online/QR Fleksibel Pengantin",
      "Pencahayaan & Editing Otomatis Realtime",
    ],
    ctaText: "Lihat Layanan",
    ctaHref: "/layanan/wedding",
  },
  {
    id: "graduation",
    title: "Graduation",
    subtitle: "Momen Wisuda Berkesan Elegan",
    icon: GraduationCap,
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    description:
      "Rayakan kelulusan dan pencapaian akademik dengan pengalaman dokumentasi yang modern. Layanan graduation kami memberikan fasilitas terbaik untuk anda.",
    features: [
      "Background Kampus & Landmark Dunia",
      "Output Foto High-Definition Siap Cetak",
      "Custom Watermark Nama & Gelar Wisudawan",
      "Direct Share ke Media Sosial Instant",
    ],
    ctaText: "Lihat Layanan",
    ctaHref: "/layanan/graduation",
  },
  {
    id: "event",
    title: "Event dan Seminar",
    subtitle: "Solusi Interaktif Branding Perusahaan",
    icon: Presentation,
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    description:
      "Tingkatkan engagement dan excitement pada seminar bisnis, exhibition, peluncuran produk, maupun corporate gathering.",
    features: [
      "Branding Frame & Template Perusahaan",
      "Pengumpulan Data Email & Visitor Analytics",
      "Live Screen Pemutaran Slideshow",
      "Sistem Antrean QR Tanpa Antrean",
    ],
    ctaText: "Lihat Layanan",
    ctaHref: "/layanan/event-seminar",
  },
  {
    id: "photobooth",
    title: "Photobooth",
    subtitle: "Foto Interaktif AI dan Konvensional",
    icon: Camera,
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    description:
      "Setup booth fisik interaktif yang dapat ditempatkan di berbagai event wedding, ulang tahun, festival musik, pameran, dan seminar.",
    features: [
      "100+ Pilihan Style Visual AI Unik",
      "Filter Cyberpunk, Retro, Anime & Pelukis",
      "Proses Render Cetak < 10 Detik",
      "Dukungan Multi-Kamera & Tablet Desk",
    ],
    ctaText: "Lihat Layanan",
    ctaHref: "/layanan/photobooth",
  },
];

export default function ServicesSection() {
  return (
    <section id="layanan" className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 py-10 flex flex-col items-center scroll-mt-18">
      {/* ================= HEADER SECTION ================= */}
      <div className="flex flex-col items-center text-center max-w-3xl mb-10 sm:mb-12">
        <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-cyan-400 mb-3 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
          Apa yang Kami Tawarkan
        </span>
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Layanan Kami
        </h2>
        
        <p className="text-md sm:text-md text-slate-300 font-normal leading-relaxed max-w-xl mt-3">
          Pilih jenis layanan yang dirancang khusus untuk memenuhi segala kebutuhan dokumentasi visual acara Anda.
        </p>
      </div>

      {/* ================= 4 CARDS GRID (2x2) ================= */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {SERVICES_DATA.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="rounded-3xl border border-purple-800/40 bg-[#12072b]/80 backdrop-blur-md p-5 sm:p-7 flex flex-col justify-between shadow-[0_0_30px_rgba(112,26,117,0.18)] hover:border-purple-600/60 transition-all duration-300 group"
            >
              <div>
                {/* Header Kartu: Ikon & Judul */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-[#241247] border border-purple-700/40 flex items-center justify-center shrink-0 text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400/60 transition shadow-inner">
                    <Icon className="w-5 h-5 fill-cyan-400/10" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition">
                      {service.title}
                    </h3>
                    <span className="text-[11px] sm:text-xs text-slate-400 line-clamp-1">
                      {service.subtitle}
                    </span>
                  </div>
                </div>

                {/* Gambar Preview */}
                <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden mb-5 border border-purple-900/40 bg-neutral-900">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e071e]/70 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Deskripsi Lengkap */}
                <p className="text-md text-slate-300 leading-relaxed font-normal mb-6 text-justify sm:text-left">
                  {service.description}
                </p>
              </div>

              {/* Tombol CTA Pesan Layanan */}
              <div className="pt-2 mx-10 sm:mx-30">
                <Link
                  href={service.ctaHref}
                  className="w-full py-2.5 sm:py-3 rounded-full bg-[#1b0d38]/90 hover:bg-[#25124d] border border-purple-700/50 hover:border-cyan-400/50 text-xs sm:text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.99] group/btn"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-cyan-300 group-hover/btn:translate-x-1 transition-all" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}