"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Globe, User } from "lucide-react";
import Logo from "@/components/common/Logo";
import { NAV_ITEMS } from "@/constants/navigation";

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("Beranda");

  return (
    <header className="w-full max-w-7xl flex items-center justify-between py-4 px-4 sm:px-6">
      <Logo />

      {/* Navigasi Kapsul Tengah */}
      <nav className="hidden lg:flex items-center gap-1 bg-[#1a0f35]/80 backdrop-blur-md border border-purple-800/40 px-3 py-1.5 rounded-full shadow-inner shadow-purple-900/30">
        {NAV_ITEMS.map((item) => {
          const isActive = activeNav === item.name;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActiveNav(item.name)}
              className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_12px_rgba(6,182,212,0.5)]"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>{item.name}</span>
              {item.hasDropdown && (
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 stroke-[2.5]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Aksi Kanan */}
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c113b]/80 border border-purple-800/40 text-xs text-slate-300 hover:border-purple-600 transition">
          <Globe className="w-3.5 h-3.5 text-purple-300" />
          <span>Bahasa (ID)</span>
          <ChevronDown className="w-3 h-3 text-slate-400" />
        </button>

        <Link
          href="/login"
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1c113b]/80 border border-purple-800/40 text-xs font-medium text-slate-200 hover:bg-purple-900/40 hover:border-cyan-400/50 transition"
        >
          <User className="w-3.5 h-3.5" />
          <span>Login</span>
        </Link>
      </div>
    </header>
  );
}