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
    title: "Branded Exhibition Booths",
    description: "Kustomisasi Watermark & Frame Perusahaan Secara Cerdas",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: "2",
    tag: "CEKREKS INNOVATION",
    title: "AI Face Swap Experience",
    description: "Transformasi Foto Pengunjung Secara Instan Menggunakan AI Generatif",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80",
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