"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Award, Briefcase, Handshake, ChevronRight } from "lucide-react";

// Definisi tipe props untuk komponen Counter
interface CounterProps {
  end: string | number;
  suffix?: string;
}

function Counter({ end, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const duration = 2000;
    const numericEnd = typeof end === "string" ? parseInt(end, 10) : end;

    const animateCount = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      const currentVal = percentage === 1 ? numericEnd : Math.floor(numericEnd * (1 - Math.pow(2, -10 * percentage)));

      setCount(currentVal);

      if (progress < duration) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [hasStarted, end]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function PortfolioSection() {
  const stats = [
    {
      value: "10",
      suffix: "+",
      label: "Tahun Pengalaman",
      desc: "Dalam industri fotografi & dokumentasi",
      icon: <Award className="w-6 h-6 text-purple-400 mb-2" />
    },
    {
      value: "200",
      suffix: "+",
      label: "Proyek Selesai",
      desc: "Event, Booth, & Campaign sukses",
      icon: <Briefcase className="w-6 h-6 text-purple-400 mb-2" />
    },
    {
      value: "45",
      suffix: "+",
      label: "Mitra & Klien",
      desc: "WO, Korporat, hingga Venue",
      icon: <Handshake className="w-6 h-6 text-purple-400 mb-2" />
    },
  ];

  // Daftar 8 poin benefit "Mengapa Harus Kami?"
  const benefits = [
    "Teknologi AI Photobooth generasi terbaru dengan hasil instan dan futuristik.",
    "Didukung oleh tim profesional berpengalaman di bidang fotografi event skala nasional.",
    "Kustomisasi frame, template, dan overlay digital yang 100% sesuai tema acara.",
    "Peralatan fotografi berstandar tinggi untuk menjamin kualitas visual terbaik.",
    "Proses cetak foto super cepat tanpa membuat tamu antrean terlalu lama.",
    "Integrasi galeri digital interaktif yang langsung bisa diunduh oleh para tamu.",
    "Layanan konsultasi konsep acara gratis untuk hasil dokumentasi yang maksimal.",
    "Komitmen penuh terhadap ketepatan waktu, kehandalan teknis, dan kepuasan klien."
  ];

  // Daftar logo/nama mitra untuk running text
  const partners = [
    { name: "1", logoUrl: "/images/mitra/1.png" },
    { name: "2", logoUrl: "/images/mitra/2.png" },
    { name: "3", logoUrl: "/images/mitra/3.png" },
    { name: "4", logoUrl: "/images/mitra/4.png" },
    { name: "5", logoUrl: "/images/mitra/5.png" },
    { name: "6", logoUrl: "/images/mitra/6.png" },
    { name: "13", logoUrl: "/images/mitra/13.png" },
    { name: "14", logoUrl: "/images/mitra/14.png" },
    { name: "16", logoUrl: "/images/mitra/16.png" },
    { name: "17", logoUrl: "/images/mitra/17.png" },
    { name: "23", logoUrl: "/images/mitra/23.png" },
    { name: "24", logoUrl: "/images/mitra/24.png" },
    { name: "25", logoUrl: "/images/mitra/25.png" },
    { name: "26", logoUrl: "/images/mitra/26.png" },
    { name: "27", logoUrl: "/images/mitra/27.png" },
  ];

  return (
    <section id="portofolio" className="w-full max-w-[100rem] mx-auto px-4 sm:px-6 py-10 scroll-mt-18">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center border-b border-slate-800 pb-8 mb-10 sm:mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2">
          Jejak Langkah
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Portofolio Kami
        </h2>
        {/* Kalimat Penjelas Usaha */}
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
          Berdiri sejak tahun 2014, Cekreks.id dibangun dengan dedikasi tinggi oleh tim profesional yang berpengalaman di industri fotografi, dokumentasi acara, hingga teknologi AI Photobooth modern untuk memberikan hasil kenangan terbaik di setiap momen spesial Anda.
        </p>
      </div>
      {/* Mengapa Harus Kami? (Desain Simpel & Minimalis Tanpa BG) */}
      <div className="mb-14 px-2 sm:px-4">
        <div className="text-center mb-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Mengapa Harus Kami?
          </h3>
        </div>

        {/* Grid lebih padat, tanpa background card, menggunakan garis batas bawah halus */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 py-2.5 border-b border-slate-800/60 hover:border-purple-500/40 transition-colors"
            >
              <div className="shrink-0 text-purple-400">
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </div>
              <p className="text-sm text-slate-300 leading-snug">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Grid (3 Kolom di Mobile, Deskripsi Panjang di-hidden khusus Mobile) */}
      <div className="grid grid-cols-3 gap-2 sm:gap-6 mb-16">
        {stats.map((stat, idx) => (
          <div key={idx} className="border-l-2 border-purple-500 pl-2 sm:pl-4 py-3 sm:py-4 bg-slate-900/40 rounded-r-lg">
            <div className="flex justify-center sm:justify-start">
              {stat.icon}
            </div>
            <div className="text-2xl sm:text-4xl font-extrabold text-white font-mono tracking-tight mb-0.5 sm:mb-1">
              <Counter end={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-purple-300 mb-0.5">
              {stat.label}
            </div>
            <div className="text-[11px] sm:text-xs text-slate-400 hidden sm:block">
              {stat.desc}
            </div>
          </div>
        ))}
      </div>

      {/* Pure Team Member Grid Gallery (2 kolom di mobile, 4 kolom di layar besar) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-20 items-end">
        {[
          {
            name: "Muhammad Revy",
            role: "Lead Photographer",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
          },
          {
            name: "Andi Pratama",
            role: "AI Booth Specialist",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
          },
          {
            name: "Siti Rahma",
            role: "Creative Director",
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
          },
          {
            name: "Rizky Ramadhan",
            role: "Technical Operator",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
          },
        ].map((member, idx) => (
          <div
            key={idx}
            className="relative h-64 sm:h-80 w-full flex items-end justify-center group"
          >
            {/* Foto PNG Transparan Murni */}
            <div className="relative w-full h-full">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bagian Mitra Kami (Running Text / Marquee) */}
      <div className="mt-12 pt-8 border-t border-slate-800/80">
        <div className="text-center mb-8">
          <p className="text-md font-semibold uppercase tracking-widest text-slate-400">
            Mitra Kami
          </p>
        </div>

        {/* Container Running Text dengan Efek Fade di Kiri & Kanan */}
        <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex animate-marquee whitespace-nowrap gap-12 items-center py-4">
            {/* Render dua kali agar pergerakannya mulus tanpa jeda */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105"
              >
                {partner.logoUrl ? (
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="h-20 md:h-30 w-auto object-contain transition-transform duration-300"
                  />
                ) : (
                  <span className="text-white font-semibold text-base tracking-wide">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}