"use client";

import { useState } from "react";
import Image from "next/image";
import { SlideItem } from "@/types";

interface HeroSliderProps {
  slides: SlideItem[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="w-full max-w-7xl relative rounded-2xl md:rounded-3xl overflow-hidden border border-purple-800/40 bg-gradient-to-b from-[#160b33] to-[#0d061c] shadow-[0_0_40px_rgba(112,26,117,0.18)]">
      {/* Container dibuat dengan aspect ratio dinamis agar proporsional di mobile & desktop */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[21/9] max-h-[520px] bg-neutral-900 overflow-hidden">
        
        {/* Render semua slide untuk efek cross-fade yang mulus */}
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id || idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                fill
                priority={idx === 0}
                className="object-cover object-center opacity-85 brightness-90"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e071e] via-[#0e071e]/40 to-transparent" />

              {/* Konten Kiri Bawah (ikut fade per slide) */}
              <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 md:bottom-12 md:left-12 max-w-xl z-20">
                <span className="inline-block text-[10px] sm:text-xs font-extrabold tracking-widest uppercase text-cyan-400 mb-1">
                  {slide.tag}
                </span>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-1.5 drop-shadow-md">
                  {slide.title}
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {slide.description}
                </p>
              </div>
            </div>
          );
        })}

        {/* Dots Pagination (Tetap di layer teratas z-30) */}
        <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 md:bottom-12 md:right-12 z-30 flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Buka slide ${idx + 1}`}
              className={`transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? "w-6 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                  : "w-2 h-2 rounded-full bg-slate-600/70 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}