"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { NAV_ITEMS } from "@shared/constants/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-bg-dark fixed top-0 right-0 left-0 z-50 px-(--spacing-page) transition-all duration-300 lg:px-(--spacing-page-lg)">
      <div className="h-navbar lg:h-navbar-lg mx-auto flex w-full items-center justify-between">
        {/* Logo — Figma: 134×42 wordmark */}
        <Link href="/" className="flex items-center" aria-label="PICSEL 홈">
          <Image
            src="/brand/logo.png"
            alt="PICSEL"
            width={134}
            height={42}
            priority
            className="h-7 w-auto lg:h-[42px]"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-4 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`px-4 py-4 text-[16px] font-bold transition-colors ${
                pathname === item.href
                  ? "text-primary font-extrabold"
                  : "hover:text-primary text-white"
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
                    className={`block py-3 text-[16px] font-bold transition-colors ${
                      pathname === item.href
                        ? "text-primary font-extrabold"
                        : "hover:text-primary text-white"
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
