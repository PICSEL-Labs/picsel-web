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
    <nav className="bg-bg-dark fixed top-0 right-0 left-0 z-50 px-4 transition-all duration-300 md:px-6 lg:px-(--spacing-page-lg)">
      <div className="h-navbar lg:h-navbar-lg mx-auto flex w-full items-center justify-between py-4">
        <Link href="/" className="flex items-center" aria-label="PICSEL 홈">
          <Image
            src="/page_svg/Logo.svg"
            alt="PICSEL"
            width={134}
            height={42}
            priority
            className="h-7 w-auto lg:h-10.5"
          />
        </Link>

        <div className="hidden items-center gap-2 md:flex lg:gap-4">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`font-round rounded-md px-4 py-4 text-[16px] leading-normal transition-colors ${
                  isActive
                    ? "text-primary font-extrabold"
                    : "hover:text-primary font-bold text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="메뉴 열기"
          aria-expanded={isMenuOpen}
          className="p-1 text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          >
            <motion.path
              animate={isMenuOpen ? { d: "M9 9L23 23" } : { d: "M4 6h24" }}
              transition={{ duration: 0.25 }}
            />
            <motion.path
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1, d: "M4 16h24" }}
              transition={{ duration: 0.15 }}
            />
            <motion.path
              animate={isMenuOpen ? { d: "M9 23L23 9" } : { d: "M4 26h24" }}
              transition={{ duration: 0.25 }}
            />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-18.5 right-4 origin-top-right md:hidden"
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <nav
              className="bg-bg-dark flex min-w-40 flex-col items-end gap-2 rounded-2xl px-4 pt-4 pb-6 shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.2),inset_4px_-2px_8px_rgba(255,255,255,0.15),0_2px_2px_rgba(0,0,0,0.2)]"
              aria-label="모바일 네비게이션"
            >
              {NAV_ITEMS.map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.label}
                    className="w-full"
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.04,
                      duration: 0.2,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`font-round block w-full px-4 py-4 text-center text-[16px] leading-normal transition-colors ${
                        isActive
                          ? "text-primary font-extrabold"
                          : "hover:text-primary font-bold text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
