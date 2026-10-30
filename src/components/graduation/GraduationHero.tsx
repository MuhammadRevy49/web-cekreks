import { Sparkles, Clock, Film, ShieldCheck, Award } from "lucide-react";
import Image from "next/image";

export default function GraduationHero() {
  const quickHighlights = [
    { icon: <Clock className="w-3.5 h-3.5 text-cyan-400" />, label: "Sesi Fleksibel & Tepat Waktu" },
    { icon: <Film className="w-3.5 h-3.5 text-purple-400" />, label: "Cinematic Reels Video" },
    { icon: <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />, label: "Semua File Original" },
    { icon: <Award className="w-3.5 h-3.5 text-purple-400" />, label: "Cetak Frame Eksklusif" },
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-16 border-b border-white/10">
      {/* Kolom Kiri */}
      <div className="lg:col-span-7 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase bg-[#180d38] text-cyan-300 border border-cyan-400/30">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Detail Layanan Wisuda
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
          Layanan Fotografi & Videografi{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Graduation
          </span>
        </h1>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Hari kelulusan adalah bukti nyata dedikasi dan kerja kerasmu. Kami hadir untuk mengabadikan momen penuh kebanggaan bersama orang tua, keluarga, dan para sahabat dalam visual yang berkelas dan tak terlupakan.
        </p>

        {/* Quick Highlights */}
        <div className="flex flex-wrap gap-2.5 pt-2">
          {quickHighlights.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#140b2b]/90 border border-white/5 text-xs text-gray-300"
            >
              {item.icon}
              <span className="whitespace-nowrap">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-3">
          <a
            href="#pricing"
            className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-cyan-400 text-gray-950 hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] transition duration-300"
          >
            Lihat Pilihan Paket
          </a>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Cekreks.id,%20saya%20mau%20tanya%20layanan%20graduation"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-medium text-xs sm:text-sm bg-[#180d36] hover:bg-[#23134d] border border-white/10 text-white transition duration-300"
          >
            Hubungi Kami via WA
          </a>
        </div>
      </div>

      {/* Kolom Kanan: Foto Showcase Penuh */}
      <div className="lg:col-span-5">
        <div className="relative aspect-square w-full rounded-3xl overflow-hidden border border-cyan-400/30 shadow-[0_0_35px_rgba(34,211,238,0.18)] group">
          <Image
            src="/images/graduationtestimoni/16.jpg"
            alt="Dokumentasi Wisuda Cekreks.id"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </div>
      </div>
    </section>
  );
}