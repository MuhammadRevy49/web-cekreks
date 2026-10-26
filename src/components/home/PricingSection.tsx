import Link from "next/link";
import { Check } from "lucide-react";

interface PricingPlan {
  id: string;
  name: string;
  category: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
  buttonHref: string;
}

const PRICING_PLANS: PricingPlan[] = [
  {
    id: "wedding",
    name: "Wedding Package",
    category: "WEDDING",
    price: "Rp 3.500.000",
    period: "/ paket",
    features: [
      "Dokumentasi Akad & Resepsi",
      "Foto & Video Cinematic",
      "Unlimited Master Files",
      "Exclusive Leather Album",
      "Web Gallery & Cloud Drive",
    ],
    buttonText: "Lihat Selengkapnya",
    buttonHref: "/layanan/wedding",
  },
  {
    id: "graduation",
    name: "Graduation Package",
    category: "GRADUATION",
    price: "Rp 500.000",
    period: "/ sesi",
    features: [
      "Foto Personal & Bersama Keluarga",
      "Outdoor / Studio Setup",
      "All Softcopy File Google Drive",
      "20+ Edited Color Grading",
      "Cetak Frame Eksklusif",
    ],
    buttonText: "Lihat Selengkapnya",
    buttonHref: "/layanan/graduation",
  },
  {
    id: "event",
    name: "Event & Seminar",
    category: "EVENT & SEMINAR",
    price: "Rp 1.500.000",
    period: "/ acara",
    features: [
      "Dokumentasi Full Coverage",
      "Multi-Camera Setup (Photo & Video)",
      "Highlight Reels Video 1 Menit",
      "Same-Day Quick Preview Files",
      "Master File Resolusi Tinggi",
    ],
    buttonText: "Lihat Selengkapnya",
    buttonHref: "/layanan/event",
  },
  {
    id: "photobooth",
    name: "Photobooth Studio",
    category: "PHOTOBOOTH",
    price: "Rp 1.250.000",
    period: "/ 2 jam",
    features: [
      "Unlimited Instant Print",
      "Custom Frame Template",
      "Properti & Fun Backdrop",
      "Live QR Code Softcopy Download",
      "Crew & Operator Standby",
    ],
    buttonText: "Lihat Selengkapnya",
    buttonHref: "/layanan/photobooth",
  },
];

export default function PricingSection() {
  return (
    <section id="harga" className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 py-10 flex flex-col items-center scroll-mt-18">
      {/* ================= HEADER SECTION ================= */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
        <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-cyan-400 mb-3">
          Pilih Paket Anda
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Pilihan Paket Layanan
        </h2>
        <p className="text-md sm:text-md text-gray-400 mt-3 max-w-xl">
          Temukan layanan dokumentasi terbaik untuk setiap momen berharga Anda dengan standar visual profesional.
        </p>
      </div>

      {/* ================= 4 CARDS PRICING GRID ================= */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch pt-2">
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.id}
            className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between bg-[#140b2b]/90 border border-white/10 hover:border-cyan-400/50 shadow-[0_0_30px_rgba(11,5,24,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300 group"
          >
            <div>
              {/* Badge Kategori Acara */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#1e0f40] border border-cyan-400/30 text-cyan-300">
                  {plan.category}
                </span>
              </div>

              {/* Nama Paket */}
              <h3 className="text-lg sm:text-xl font-black text-white tracking-tight mb-4">
                {plan.name}
              </h3>

              {/* Harga dengan Label "Mulai dari" */}
              <div className="mb-6 pb-5 border-b border-white/10">
                <span className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  Mulai dari
                </span>
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <span className="text-xl sm:text-2xl font-black text-white tracking-tight text-cyan-400">
                    {plan.price}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Daftar Fitur */}
              <ul className="flex flex-col gap-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-cyan-400 stroke-[3]" />
                    </div>
                    <span className="text-xs text-gray-300 font-normal leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tombol Aksi */}
            <div className="pt-2">
              <Link
                href={plan.buttonHref}
                className="w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center bg-[#1f103d] hover:bg-cyan-400 hover:text-gray-950 text-white border border-cyan-400/30 transition-all duration-300 active:scale-[0.98] shadow-sm hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
              >
                {plan.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}