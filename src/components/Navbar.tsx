"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "서비스 소개", href: "#intro" },
    { label: "주요 기능", href: "#features" },
    { label: "팀원 소개", href: "#team" },
    { label: "문의하기", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="w-[1280px] mx-auto flex items-center justify-between h-[90px] px-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1.5">
          <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
            <path d="M10 0C10.5 8 14 12 20 14C14 16 10.5 20 10 28C9.5 20 6 16 0 14C6 12 9.5 8 10 0Z" fill="#FF2D78"/>
          </svg>
          <span className="text-[22px] font-extrabold tracking-tight text-primary">
            PICSEL
          </span>
        </a>

        {/* Nav Links */}
        <div className="flex items-center gap-[32px]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[16px] font-medium text-text-white/80 hover:text-text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
