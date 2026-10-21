import Image from "next/image";
import { Sparkles } from "lucide-react";

const PREVIEW_STEPS = [
  {
    step: "STEP 1: CAPTURE",
    title: "Foto Asli Tamu",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    isAi: false,
  },
  {
    step: "AI PROCESSING",
    title: "Gaya Cyberpunk Neon",
    imageUrl:
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
    isAi: true,
  },
  {
    step: "STEP 3: SHARE",
    title: "Cetak Instan & QR Code",
    imageUrl:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    isAi: false,
  },
];

export default function AiPreviewSection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6">
      {/* Bingkai Terminal Mac / Window Style */}
      <div className="rounded-3xl border border-purple-800/40 bg-[#12072b]/80 backdrop-blur-md p-3 sm:p-5 shadow-[0_0_50px_rgba(112,26,117,0.25)]">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-purple-900/40 px-2">
          {/* Mac Dots Buttons */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
            <span className="w-3 h-3 rounded-full bg-[#eab308]" />
            <span className="w-3 h-3 rounded-full bg-[#22c55e]" />
          </div>

          {/* Engine Title */}
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-slate-400">
            CEKREKS_AI_ENGINE_V4.2.LIVE
          </span>

          {/* Status Indicator */}
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-cyan-400 font-semibold">
              LIVE PREVIEW
            </span>
          </div>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mt-3 sm:mt-4">
          {PREVIEW_STEPS.map((item, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-purple-800/30 group bg-black/40"
            >
              {/* Gambar Step */}
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105 brightness-90"
              />

              {/* Gradient Gelap Bawah */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e071e] via-[#0e071e]/40 to-transparent" />

              {/* Label Step & Keterangan */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col">
                <div className="flex items-center gap-1.5 mb-1">
                  {item.isAi && (
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400/20" />
                  )}
                  <span
                    className={`text-[10px] sm:text-[11px] font-mono tracking-wider font-bold uppercase ${
                      item.isAi ? "text-cyan-400" : "text-slate-400"
                    }`}
                  >
                    {item.step}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}