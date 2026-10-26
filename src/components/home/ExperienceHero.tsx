import Link from "next/link";
import { Sparkles, Rocket, Download, ChevronRight, Zap, Monitor } from "lucide-react";

export default function ExperienceHero() {
  return (
    <section className="relative w-full py-10 sm:py-20 px-4 sm:px-6 flex flex-col items-center text-center overflow-hidden">
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
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-start sm:items-center text-left sm:text-center">

        {/* 2. Judul Utama (Headline Multiline) */}
        <h1 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-white tracking-tight leading-[1.2] mb-1">
          Ubah Acara Anda Menjadi Kenangan Abadi Dengan{" "}
          {/* Menggunakan span/div pengganti p agar tidak merusak struktur h1 */}
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.2] text-[#e056fd] drop-shadow-[0_0_25px_rgba(224,86,253,0.7)] my-1">
            Cekreks Experience Booth
          </span>
        </h1>

        {/* Teks Neon Glow: Cyan Blue (Ditambahkan text-left sm:text-center agar konsisten) */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[3.25rem] font-black tracking-tight leading-[1.2] text-[#22d3ee] drop-shadow-[0_0_25px_rgba(34,211,238,0.7)] mb-6 text-left sm:text-center w-full">
          Teknologi Foto Acara Terkini
        </h1>

        {/* 3. Deskripsi Paragraf */}
        <p className="max-w-2xl text-sm sm:text-sm md:text-[16px] text-slate-300 font-normal leading-relaxed mb-8 text-left sm:text-center px-0 sm:px-2">
          Hadirkan photobooth kecerdasan buatan (AI) generasi berikutnya yang mengubah setiap jepretan foto tamu menjadi mahakarya visual futuristik secara instan, tanpa ribet, dan sangat interaktif.
        </p>

      </div>
    </section>
  );
}