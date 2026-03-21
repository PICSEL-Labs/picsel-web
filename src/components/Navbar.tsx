"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "서비스 소개", href: "/" },
    { label: "주요 기능", href: "/features" },
    { label: "팀원 소개", href: "/team" },
    { label: "문의하기", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-(--spacing-page) lg:px-(--spacing-page-lg) ${
        scrolled || isMenuOpen
          ? "bg-black/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="w-full mx-auto flex items-center justify-between h-navbar lg:h-navbar-lg">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5">
          <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
            <path d="M10 0C10.5 8 14 12 20 14C14 16 10.5 20 10 28C9.5 20 6 16 0 14C6 12 9.5 8 10 0Z" fill="#FF2D78"/>
          </svg>
          <span className="text-5 lg:text-5.5 font-extrabold tracking-tight text-primary">
            PICSEL
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-4 font-medium transition-colors ${
                pathname === item.href
                  ? "text-text-white"
                  : "text-text-white/80 hover:text-text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMenuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-border-dark">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 text-4 font-medium transition-colors ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-text-white/80 hover:text-text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
