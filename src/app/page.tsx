import Navbar from "@/components/layout/Navbar";
import HeroSlider from "@/components/home/HeroSlider";
import { SlideItem } from "@/types";

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
    <div className="min-h-screen bg-[#0e071e] text-white flex flex-col items-center p-2 sm:p-4 md:p-2 font-sans">
      <Navbar />
      <main className="w-full flex justify-center mt-2">
        <HeroSlider slides={HERO_SLIDES} />
      </main>
    </div>
  );
}