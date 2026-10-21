import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/#beranda" className="flex items-center gap-3 group">
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#140b2b] border border-cyan-400/40 shadow-[0_0_15px_rgba(34,211,238,0.25)] transition group-hover:border-cyan-400">
        <div className="w-5 h-5 rounded-lg border-2 border-cyan-400/80 rotate-6" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-black tracking-wider text-white">
          CEKREKS<span className="text-cyan-400">.ID</span>
        </span>
        <span className="text-[10px] tracking-widest text-slate-400 font-medium uppercase -mt-1">
          AI Photobooth
        </span>
      </div>
    </Link>
  );
}