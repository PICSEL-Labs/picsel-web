"use client";

import { motion } from "motion/react";
import Container from "./Container";
import TwinkleStar from "./TwinkleStar";

export default function MainBannerSection() {
  return (
    <section className="pt-navbar lg:pt-navbar-lg bg-black">
      <Container className="flex flex-col py-12 lg:min-h-111 lg:flex-row lg:items-center lg:justify-between lg:py-0">
        <div className="relative z-10 pr-32.5 lg:pr-0">
          <motion.h1
            className="text-[24px] leading-9.5 font-bold text-white sm:text-[28px] sm:leading-11 lg:text-[36px] lg:leading-14"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            포토부스를 찾고-찍고-사진 보관까지
            <br />
            <span className="text-primary">픽셀</span>에서 한번에!
          </motion.h1>
          <motion.p
            className="text-text-gray mt-4 text-[15px] font-normal lg:mt-6 lg:text-[18px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            내가 고른 공간에서 내가 만든 순간을 남기다
          </motion.p>
        </div>
        <motion.div
          className="h-37 w-30 shrink-0 self-center lg:h-80 lg:w-65 lg:self-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <TwinkleStar />
        </motion.div>
      </Container>
    </section>
  );
}
