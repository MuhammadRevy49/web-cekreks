import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Logo from "@/components/common/Logo";

// Ikon TikTok kustom SVG
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

// Ikon Instagram kustom SVG
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const QUICK_LINKS = [
  { name: "Beranda", href: "/#beranda" },
  { name: "Layanan Utama", href: "/#layanan" },
  { name: "Paket & Harga", href: "/#harga" },
  { name: "Kontak", href: "/#kontak" },
];

const SERVICE_LINKS = [
  { name: "Wedding Photography", href: "/layanan/wedding" },
  { name: "Graduation", href: "/layanan/graduation" },
  { name: "Event dan Seminar", href: "/layanan/event-seminar" },
  { name: "Photobooth AI", href: "/layanan/photobooth" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0c051a] border-t border-purple-900/30 pt-16 pb-12 text-slate-300 font-sans">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6">
        
        {/* ================= 4 KOLOM UTAMA ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12">
          
          {/* Kolom 1: Logo & Deskripsi */}
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed font-normal max-w-sm mt-1">
              Solusi AI Photobooth terdepan untuk menghidupkan setiap momen pesta, pernikahan, gathering corporate, wisuda, dan pameran.
            </p>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div className="flex flex-col">
            <h4 className="text-sm font-bold text-white tracking-wide mb-4">
              Navigasi Cepat
            </h4>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-[13px] text-slate-400 hover:text-cyan-300 transition-colors duration-150"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Layanan Kami */}
          <div className="flex flex-col">
            <h4 className="text-sm font-bold text-white tracking-wide mb-4">
              Layanan Kami
            </h4>
            <ul className="flex flex-col gap-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-[13px] text-slate-400 hover:text-cyan-300 transition-colors duration-150"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 4: Hubungi Kami & Media Sosial */}
          <div id="kontak" className="flex flex-col scroll-mt-6">
            <h4 className="text-sm font-bold text-white tracking-wide mb-4">
              Hubungi Kami
            </h4>
            
            {/* Tombol Sosial Media Lingkaran */}
            <div className="flex items-center gap-3 mb-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#1b0d36] border border-purple-800/50 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-purple-900/40 transition-all duration-200"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full bg-[#1b0d36] border border-purple-800/50 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-purple-900/40 transition-all duration-200"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-[#1b0d36] border border-purple-800/50 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-purple-900/40 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            {/* Email Kontak */}
            <span className="text-xs sm:text-[13px] text-slate-400">
              Email:{" "}
              <a
                href="mailto:support@cekreks.id"
                className="hover:text-cyan-300 transition-colors"
              >
                support@cekreks.id
              </a>
            </span>
          </div>

        </div>

        {/* ================= GARIS & COPYRIGHT ================= */}
        <div className="border-t border-purple-900/40 pt-8 flex items-center justify-center text-center">
          <p className="text-xs text-slate-400 font-normal">
            &copy; 2026 CEKREKS.ID &mdash; All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}