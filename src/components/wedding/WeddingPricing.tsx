"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { WEDDING_PACKAGES } from "@/constants/weddingData";

export default function WeddingPricing() {
  const [selectedTiers, setSelectedTiers] = useState<Record<number, number>>({
    0: 0,
    1: 1, // default ke Premium 2 (rekomendasi)
    2: 0,
  });

  const handleSelectTier = (catIndex: number, tierIndex: number) => {
    setSelectedTiers((prev) => ({ ...prev, [catIndex]: tierIndex }));
  };

  return (
    <section id="pricing" className="scroll-mt-18">
      <div className="text-left mb-10">
        <span className="text-xs font-bold tracking-widest uppercase text-cyan-400">
          Pilihan Investasi
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
          Daftar Paket Pernikahan
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm mt-1">
          Pilih sub-paket di dalam masing-masing kategori untuk melihat detail benefit dan penawaran harga.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {WEDDING_PACKAGES.map((pkg, catIdx) => {
          const activeTierIdx = selectedTiers[catIdx] ?? 0;
          const currentPlan = pkg.tiers[activeTierIdx];

          return (
            <div
              key={catIdx}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? "bg-gradient-to-b from-[#1e0f40] to-[#12082b] border-2 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.22)]"
                  : "bg-[#140b2b]/85 border border-white/10 hover:border-cyan-400/40"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-6 px-3.5 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase bg-cyan-400 text-gray-950">
                  Rekomendasi
                </div>
              )}

              <div>
                {/* Header Paket */}
                <div className="border-b border-white/10 pb-5 mb-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400">
                    {pkg.tagline}
                  </span>
                  <h3 className="text-xl font-black text-white mt-1">
                    {pkg.categoryName}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    {pkg.desc}
                  </p>

                  {/* Sub-tier Switcher */}
                  <div className="mt-5 p-1 rounded-xl bg-[#0b0518] border border-white/10 flex gap-1">
                    {pkg.tiers.map((tier, tIdx) => {
                      const isActive = activeTierIdx === tIdx;
                      return (
                        <button
                          key={tier.id}
                          type="button"
                          onClick={() => handleSelectTier(catIdx, tIdx)}
                          className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-semibold transition-all duration-200 cursor-pointer ${
                            isActive
                              ? "bg-cyan-400 text-gray-950 shadow-sm"
                              : "text-gray-400 hover:text-white"
                          }`}
                        >
                          {tier.name}
                        </button>
                      );
                    })}
                  </div>

                  {/* Nominal Harga */}
                  <div className="mt-5 pt-2">
                    <span className="text-[11px] text-gray-400 block">
                      Harga ({currentPlan.name}):
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-white block mt-0.5">
                      {currentPlan.price}
                    </span>
                  </div>
                </div>

                {/* List Benefit */}
                <div className="mb-7">
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-3">
                    Benefit yang didapat:
                  </span>
                  <ul className="space-y-2.5 min-h-[180px]">
                    {currentPlan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tombol Pemesanan */}
              <a
                href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                  `Halo Cekreks.id, saya tertarik booking ${pkg.categoryName} (${currentPlan.name}) dengan harga${currentPlan.price}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-xl font-bold text-xs text-center transition-all duration-300 ${
                  pkg.popular
                    ? "bg-cyan-400 text-gray-950 hover:bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                    : "bg-[#1f103d] hover:bg-cyan-500 hover:text-gray-950 text-white border border-cyan-400/30"
                }`}
              >
                Pesan {currentPlan.name}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}