"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { NAV_ITEMS } from "@shared/constants/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-black/80 px-(--spacing-page) backdrop-blur-md transition-all duration-300 lg:px-(--spacing-page-lg)">
      <div className="h-navbar lg:h-navbar-lg mx-auto flex w-full items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5">
          <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
            <path
              d="M10 0C10.5 8 14 12 20 14C14 16 10.5 20 10 28C9.5 20 6 16 0 14C6 12 9.5 8 10 0Z"
              fill="#FF2D78"
            />
          </svg>
          <span className="text-primary text-[20px] font-extrabold tracking-tight lg:text-[22px]">
            PICSEL
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-[16px] font-medium transition-colors ${
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
        <button className="p-2 text-white lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <motion.path
              animate={isMenuOpen ? { d: "M6 6l12 12" } : { d: "M4 6h16" }}
              transition={{ duration: 0.25 }}
            />
            <motion.path
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1, d: "M4 12h16" }}
              transition={{ duration: 0.15 }}
            />
            <motion.path
              animate={isMenuOpen ? { d: "M6 18L18 6" } : { d: "M4 18h16" }}
              transition={{ duration: 0.25 }}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="border-border-dark overflow-hidden border-t bg-black/95 backdrop-blur-md lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="space-y-1 px-6 py-4">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.05,
                    duration: 0.2,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-3 text-[16px] font-medium transition-colors ${
                      pathname === item.href
                        ? "text-primary"
                        : "text-text-white/80 hover:text-text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
