"use client";

import { useState } from "react";
import Image from "next/image";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp || !formData.message) return;

    // Arahkan atau kirim langsung ke WhatsApp
    const encodedMsg = encodeURIComponent(
      `Halo Tim CEKREKS.ID, saya ${formData.name}.\n\n${formData.message}\n\n(No WA: ${formData.whatsapp})`
    );
    window.open(`https://wa.me/6281234567890?text=${encodedMsg}`, "_blank");

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section
      id="kontak"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col scroll-mt-18"
    >
      {/* Header Section */}
      <div className="mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-2">
          Hubungi Kami
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 font-normal">
          Tinggalkan pesan, kami siap membantu kebutuhan fotografi Anda.
        </p>
      </div>

      {/* Grid 2 Kolom: Gambar Sisi Kiri & Form Sisi Kanan */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
        {/* Kolom Kiri: Foto Dokumentasi Tim / Studio */}
        <div className="relative w-full h-[360px] sm:h-[440px] lg:h-auto min-h-[380px] rounded-3xl overflow-hidden border border-purple-800/40 bg-neutral-900 shadow-[0_0_35px_rgba(112,26,117,0.2)]">
          <Image
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80"
            alt="Tim Dokumentasi Fotografi"
            fill
            className="object-cover object-center brightness-90 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e071e]/70 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Kolom Kanan: Card Formulir */}
        <div className="rounded-3xl border border-purple-800/40 bg-[#12072b]/85 backdrop-blur-md p-6 sm:p-9 flex flex-col justify-between shadow-[0_0_40px_rgba(112,26,117,0.18)]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Input Nama Lengkap */}
            <div className="flex flex-col gap-2">
              <label className="text-xs sm:text-sm font-semibold text-slate-200">
                Nama Lengkap
              </label>
              <input
                type="text"
                placeholder="Masukkan nama Anda"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full px-4 py-3 rounded-xl bg-[#0c051a]/90 border border-purple-800/60 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
              />
            </div>

            {/* Input No WhatsApps */}
            <div className="flex flex-col gap-2">
              <label className="text-xs sm:text-sm font-semibold text-slate-200">
                No WhatsApps<span className="text-pink-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Masukan No WA"
                value={formData.whatsapp}
                onChange={(e) =>
                  setFormData({ ...formData, whatsapp: e.target.value })
                }
                required
                className="w-full px-4 py-3 rounded-xl bg-[#0c051a]/90 border border-purple-800/60 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
              />
            </div>

            {/* Textarea Pesan */}
            <div className="flex flex-col gap-2">
              <label className="text-xs sm:text-sm font-semibold text-slate-200">
                Pesan Anda<span className="text-pink-500">*</span>
              </label>
              <textarea
                rows={4}
                placeholder="Tulis pesan di sini"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="w-full px-4 py-3 rounded-xl bg-[#0c051a]/90 border border-purple-800/60 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition resize-none"
              />
            </div>

            {/* Tombol Submit */}
            <button
              type="submit"
              className="mt-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#6929d9] via-[#4f46e5] to-[#0ea5e9] text-white font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(14,165,233,0.45)] hover:shadow-[0_0_28px_rgba(14,165,233,0.65)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Pesan</span>
            </button>

            {isSubmitted && (
              <div className="flex items-center gap-2 text-xs text-emerald-400 justify-center mt-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Pesan berhasil dialihkan ke WhatsApp!</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}