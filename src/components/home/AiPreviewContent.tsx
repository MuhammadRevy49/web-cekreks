"use client";

import { useState, useEffect, useRef } from "react";

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
    { value: "10", suffix: "+", label: "Tahun Pengalaman", desc: "Dalam industri fotografi & dokumentasi" },
    { value: "200", suffix: "+", label: "Proyek Selesai", desc: "Event, Booth, & Campaign sukses" },
    { value: "45", suffix: "+", label: "Mitra & Klien", desc: "WO, Korporat, hingga Venue" },
  ];

  // Daftar galeri foto portofolio tim
  const portfolioImages = [
    {
      title: "Cyberpunk AI Photobooth",
      category: "AI PHOTOBOOTH",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
      photographer: "Tim Cekreks AI Booth",
    },
    {
      title: "The Royal Wedding Moment",
      category: "WEDDING EVENT",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
      photographer: "Tim Fotografer Wedding",
    },
    {
      title: "Annual Tech Summit Gala",
      category: "CORPORATE GALA",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
      photographer: "Tim Dokumentasi Korporat",
    },
  ];

  // Daftar logo/nama mitra untuk running text
  const partners = [
    { name: "Grand Ballroom", logoUrl: "/images/partners/grand-ballroom.png" },
    { name: "Nexus WO", logoUrl: "/images/partners/nexus.png" },
    { name: "TechCorp", logoUrl: "/images/partners/techcorp.png" },
    { name: "TechCorp", logoUrl: "/images/partners/techcorp.png" },
    { name: "TechCorp", logoUrl: "/images/partners/techcorp.png" },
    { name: "TechCorp", logoUrl: "/images/partners/techcorp.png" },
    { name: "TechCorp", logoUrl: "/images/partners/techcorp.png" },
    { name: "TechCorp", logoUrl: "/images/partners/techcorp.png" },
    { name: "TechCorp", logoUrl: "/images/partners/techcorp.png" },
    { name: "TechCorp", logoUrl: "/images/partners/techcorp.png" },
    { name: "TechCorp", logoUrl: "/images/partners/techcorp.png" },
    { name: "TechCorp", logoUrl: "/images/partners/techcorp.png" },
    { name: "TechCorp", logoUrl: "/images/partners/techcorp.png" },
    { name: "TechCorp", logoUrl: "/images/partners/techcorp.png" }, 
  ];

  return (
    <section id="portofolio" className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 scroll-mt-18">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center border-b border-slate-800 pb-8 mb-10 sm:mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2">
          Galeri & Pencapaian
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Portofolio Kami
        </h2>
        <p className="text-sm text-slate-400 mt-3 max-w-md">
          Momen nyata dan aksi profesional tim kami dalam mengabadikan berbagai skala acara Anda.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
        {stats.map((stat, idx) => (
          <div key={idx} className="border-l-2 border-purple-500 pl-4 py-4 bg-slate-900/40 rounded-r-lg">
            <div className="text-4xl font-extrabold text-white font-mono tracking-tight mb-1">
              <Counter end={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-sm font-semibold text-purple-300 mb-0.5">
              {stat.label}
            </div>
            <div className="text-xs text-slate-400">
              {stat.desc}
            </div>
          </div>
        ))}
      </div>

      {/* Pure Image Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
        {portfolioImages.map((item, idx) => (
          <div
            key={idx}
            className="group relative h-72 w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all duration-500 shadow-lg"
          >
            {/* Foto Background */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-85 group-hover:opacity-100"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

            {/* Kategori di Pojok Atas */}
            <span className="absolute top-3 left-3 px-3 py-1 text-[10px] font-bold tracking-wider text-purple-200 bg-slate-950/75 backdrop-blur-md border border-purple-800/50 rounded-full">
              {item.category}
            </span>

            {/* Informasi Teks saat Hover atau di Bawah Card */}
            <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform duration-300">
              <span className="text-[11px] text-purple-300 font-medium flex items-center gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
                {item.photographer}
              </span>
              <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-purple-200 transition-colors">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Bagian Mitra Kami (Running Text / Marquee) */}
      <div className="mt-12 pt-8 border-t border-slate-800/80">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Dipercaya Oleh Berbagai Mitra
          </p>
        </div>

        {/* Container Running Text dengan Efek Fade di Kiri & Kanan */}
        <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex animate-marquee whitespace-nowrap gap-4 items-center py-2">
            {/* Render dua kali agar pergerakannya mulus tanpa jeda */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900/50 border border-slate-800/80 text-slate-300 font-semibold text-sm tracking-wide shrink-0 hover:border-purple-500/40 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                {partner.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}