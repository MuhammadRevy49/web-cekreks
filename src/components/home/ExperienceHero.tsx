import Link from "next/link";
import { Sparkles, Rocket, Download, ChevronRight, Zap, Monitor } from "lucide-react";

export default function ExperienceHero() {
  return (
    <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 flex flex-col items-center text-center overflow-hidden">
      {/* ================= BACKGROUND GRID & GLOW ================= */}
      {/* Background Grid Pattern Tipis */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00f2fe 1px, transparent 1px),
            linear-gradient(to bottom, #00f2fe 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Radial Gradient Glow di Belakang Teks Utama */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* ================= CONTENT CONTAINER ================= */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* 1. Badge Atas: Pengalaman Foto Masa Depan */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b0c36]/90 border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.25)] mb-8">
          <Sparkles className="w-3.5 h-3.5 text-purple-400 fill-purple-400" />
          <span className="text-xs font-semibold text-purple-200 tracking-wide">
            Pengalaman Foto Masa Depan
          </span>
        </div>

        {/* 2. Judul Utama (Headline Multiline) */}
        <h1 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-white tracking-tight leading-[1.2] mb-4 text-center">
            Ubah Acara Anda Menjadi Kenangan <br />
            Abadi Dengan
        </h1>

        {/* Teks Neon Glow: Pink Magenta */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.2] text-[#e056fd] drop-shadow-[0_0_25px_rgba(224,86,253,0.7)] mb-1">
          Cekreks Experience Booth
        </h2>

        {/* Teks Neon Glow: Cyan Blue */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.2] text-[#22d3ee] drop-shadow-[0_0_25px_rgba(34,211,238,0.7)] mb-6">
          Teknologi Foto Acara Terkini
        </h2>

        {/* 3. Deskripsi Paragraf */}
        <p className="max-w-2xl text-xs sm:text-sm md:text-[15px] text-slate-300 font-normal leading-relaxed mb-8 px-2">
          Hadirkan photobooth kecerdasan buatan (AI) generasi berikutnya yang mengubah setiap jepretan foto tamu menjadi mahakarya visual futuristik secara instan, tanpa ribet, dan sangat interaktif.
        </p>

        {/* 5. Grup Tombol Aksi (CTA Buttons) */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          
          {/* Tombol Kiri: Coba Booth AI Sekarang (Warna Magenta/Pink) */}
          <div className="flex flex-col items-center">
            <Link
              href="/try"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#c026d3] via-[#d946ef] to-[#ec4899] text-white font-bold text-sm shadow-[0_0_25px_rgba(217,70,239,0.5)] hover:shadow-[0_0_35px_rgba(217,70,239,0.75)] hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span>Coba Booth AI Sekarang</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </Link>
            <div className="flex items-center gap-1.5 mt-2.5 text-[11px] text-slate-400">
              <Zap className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              <span>Tidak perlu instal, gunakan di web</span>
            </div>
          </div>

          {/* Tombol Kanan: Instal Aplikasi Kami (Warna Cyan/Biru) */}
          <div className="flex flex-col items-center">
            <Link
              href="/download"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#0284c7] via-[#06b6d4] to-[#22d3ee] text-white font-bold text-sm shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:shadow-[0_0_35px_rgba(6,182,212,0.75)] hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Instal Aplikasi Kami</span>
            </Link>
            <div className="flex items-center gap-1.5 mt-2.5 text-[11px] text-slate-400">
              <Monitor className="w-3.5 h-3.5 text-cyan-400" />
              <span>Instal app di desktop, windows, android, ios & tablets</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}