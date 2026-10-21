import Navbar from "@/components/layout/Navbar";
import HeroSlider from "@/components/home/HeroSlider";
import ExperienceHero from "@/components/home/ExperienceHero";
import AiPreviewContent from "@/components/home/AiPreviewContent";
import ServiceSection from "@/components/home/ServicesSection";
import PricingSection from "@/components/home/PricingSection";
import { SlideItem } from "@/types";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/home/ContactSection";

const HERO_SLIDES: SlideItem[] = [
  {
    id: "1",
    tag: "CEKREKS HIGHLIGHT",
    title: "Abadikan Momen Sakral Anda!",
    description: "Kami abadikan dengan detail, mulai dari pengajian dan siraman, penyambutan, akad nikah, sungkeman, adat sawer, dan resepsi.",
    imageUrl: "/images/hero/graduation1.jpeg",
    imagePosition: "center 25%",
  },
  {
    id: "2",
    tag: "CEKREKS HIGHLIGHT",
    title: "Abadikan Momen wisuda Anda",
    description: "Pengambilan foto video peliputan prosesi wisuda, pembuatan buku tahunan, dan photobooth wisuda.",
    imageUrl: "/images/hero/graduation2.jpeg",
    imagePosition: "center top",
  },
];

export default function HomePage() {
  return (
    <div id="beranda" className="min-h-screen bg-[#0e071e] text-white flex flex-col items-center font-sans scroll-mt-6">
      <Navbar />
      
      {/* Container Konten Utama Vertikal (Column) */}
      <main className="w-full flex flex-col items-center gap-12 sm:gap-16 px-4 sm:px-6 pt-2 pb-20">
        <HeroSlider slides={HERO_SLIDES} />
        <ExperienceHero />
        <AiPreviewContent />
        <ServiceSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}