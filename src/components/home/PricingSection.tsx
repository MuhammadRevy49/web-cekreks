import Link from "next/link";
import { Check } from "lucide-react";

interface PricingPlan {
  id: string;
  name: string;
  category: string;
  price: string;
  period: string;
  isPopular?: boolean;
  features: string[];
  buttonText: string;
  buttonHref: string;
}

const PRICING_PLANS: PricingPlan[] = [
  {
    id: "personal",
    name: "Personal Party",
    category: "SINGLE EVENT",
    price: "Rp 750.000",
    period: "/ event",
    features: [
      "Up to 300 AI Photos",
      "10 Pilihan Preset AI Theme",
      "QR Code Web Gallery",
      "Standar Frame Template",
    ],
    buttonText: "Pilih Paket",
    buttonHref: "/order/personal",
  },
  {
    id: "pro",
    name: "Pro Experience",
    category: "CORPORATE / WEDDING",
    price: "Rp 2.250.000",
    period: "/ event",
    isPopular: true,
    features: [
      "Unlimited AI Photo Generation",
      "50+ Custom Preset & Prompt AI",
      "Live Screen Slideshow Mode",
      "Custom Watermark & Branding",
      "Priority Cloud Processing",
    ],
    buttonText: "Pilih Paket Pro",
    buttonHref: "/order/pro",
  },
  {
    id: "enterprise",
    name: "Enterprise Agency",
    category: "VENDOR & WO",
    price: "Rp 5.900.000",
    period: "/ bulan",
    features: [
      "Unlimited Events per Month",
      "White-label App Logo sendiri",
      "Dedicated Support 24/7",
      "Custom AI Training Model",
    ],
    buttonText: "Hubungi Sales",
    buttonHref: "/contact-sales",
  },
];

export default function PricingSection() {
  return (
    <section id="harga" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col items-center scroll-mt-10">
      {/* ================= HEADER SECTION ================= */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-purple-400 mb-3">
          PAKET SESUAI KEBUTUHAN ACARA
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-[2.6rem] font-black text-white tracking-tight leading-tight">
          Pilih Paket{" "}
          <span className="text-[#22d3ee] drop-shadow-[0_0_20px_rgba(34,211,238,0.7)]">
            CEKREKS
          </span>{" "}
          Anda
        </h2>
      </div>

      {/* ================= 3 CARDS PRICING GRID ================= */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
        {PRICING_PLANS.map((plan) => {
          return (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? "bg-[#140b2e]/90 border-2 border-cyan-400/80 shadow-[0_0_35px_rgba(34,211,238,0.25),0_0_50px_rgba(168,85,247,0.2)] lg:-translate-y-3"
                  : "bg-[#110726]/80 border border-purple-800/40 shadow-[0_0_30px_rgba(112,26,117,0.12)] hover:border-purple-600/50"
              }`}
            >
              {/* Badge Paling Populer Melayang */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-5 py-1 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 text-white font-extrabold text-[11px] tracking-wider uppercase shadow-[0_0_15px_rgba(34,211,238,0.6)]">
                    PALING POPULER
                  </div>
                </div>
              )}

              <div>
                {/* Badge Kategori Acara */}
                <div className="mb-4">
                  <span
                    className={`inline-block px-3.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                      plan.isPopular
                        ? "bg-cyan-950/80 border border-cyan-500/40 text-cyan-300"
                        : "bg-purple-950/80 border border-purple-700/40 text-purple-300"
                    }`}
                  >
                    {plan.category}
                  </span>
                </div>

                {/* Nama Paket */}
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4">
                  {plan.name}
                </h3>

                {/* Harga */}
                <div className="flex items-baseline gap-1.5 mb-8">
                  <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {plan.period}
                  </span>
                </div>

                {/* Daftar Fitur */}
                <ul className="flex flex-col gap-3.5 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-cyan-400 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-[13px] text-slate-300 font-normal leading-relaxed">
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
                  className={`w-full py-3 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center transition-all duration-200 active:scale-[0.98] ${
                    plan.isPopular
                      ? "bg-gradient-to-r from-[#9333ea] via-[#c026d3] to-[#a855f7] text-white shadow-[0_0_25px_rgba(192,38,211,0.5)] hover:shadow-[0_0_35px_rgba(192,38,211,0.7)] hover:scale-105"
                      : "bg-[#180a33] border border-purple-700/50 hover:bg-purple-900/40 text-white hover:border-purple-500"
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}