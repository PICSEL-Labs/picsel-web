"use client";

import { motion } from "motion/react";
import { Container, ScrollReveal } from "@shared/ui";
import PhoneMockup from "./PhoneMockup";

/**
 * FeatureBridgeSection — 주요 기능 브릿지 섹션
 * Feature 1(통합 지도) + Feature 2(네컷 보관함) 두 블록을 모바일 목업과 함께 배치
 */
export default function FeatureBridgeSection() {
  return (
    <section className="relative w-full overflow-hidden bg-pink-50">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 left-1/2 hidden h-600 w-[min(1200px,calc(100%-48px))] -translate-x-1/2 rounded-[40px] bg-white shadow-[-16px_-16px_40px_rgba(0,0,0,0.05)] lg:block"
      />

      <Container className="relative">
        <div className="flex flex-col items-center gap-12 pt-20 pb-30 lg:flex-row lg:justify-center lg:gap-30 lg:pt-20 lg:pb-50">
          <ScrollReveal direction="left" distance={50} duration={0.7}>
            <div className="w-full max-w-83 text-center lg:text-left">
              <h3 className="text-[24px] leading-normal font-bold sm:text-[28px] lg:text-[32px]">
                <span className="text-text-strong block">인생네컷, 하루필름 등</span>
                <span className="text-text-strong block">한눈에 찾고 취향대로 탐색하는</span>
                <span className="text-primary-strong block">포토부스 통합 지도</span>
              </h3>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" distance={50} duration={0.7} delay={0.15}>
            <PhoneMockup screenLabel="통합 지도" />
          </ScrollReveal>
        </div>

        <ScrollReveal distance={30} duration={0.7}>
          <p className="text-text-secondary mx-auto max-w-150 pb-30 text-center text-[14px] leading-normal font-bold sm:text-[16px] lg:pb-60 lg:text-[20px]">
            모노맨션, 플랜비스튜디오, 픽닷을 포함한
            <br className="hidden sm:block" />
            약 200개의 포토부스 브랜드를 한데 모은 포토부스 통합 지도!
            <br className="hidden sm:block" />
            지도 위 포토부스만 빠르게 찾을 수 있어요
          </p>
        </ScrollReveal>

        <div className="relative flex flex-col items-center gap-12 pb-30 lg:flex-row lg:justify-center lg:gap-30 lg:pb-50">
          {/* 데스크탑 한정 장식 — 기울어진 핑크 카드 4종 */}
          <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
            <div className="absolute top-1/2 left-[5%] h-100 w-70 -translate-y-1/2 -rotate-30 rounded-[28px] bg-pink-100 opacity-50" />
            <div className="absolute top-[20%] left-[18%] h-30 w-25 -rotate-30 rounded-2xl bg-pink-50 opacity-60" />
            <div className="absolute top-1/2 right-[5%] h-130 w-45 -translate-y-1/2 rotate-30 rounded-4xl bg-pink-100 opacity-60" />
            <div className="absolute right-[20%] bottom-[15%] h-25 w-35 rotate-30 rounded-2xl bg-pink-50 opacity-70" />
          </div>

          <ScrollReveal direction="left" distance={50} duration={0.7}>
            <div className="relative z-10">
              <PhoneMockup screenLabel="네컷 보관함" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" distance={50} duration={0.7} delay={0.15}>
            <div className="relative z-10 w-full max-w-83 text-center lg:text-left">
              <h3 className="text-[24px] leading-normal font-bold sm:text-[28px] lg:text-[32px]">
                <span className="text-text-strong block">모으고 기록해</span>
                <span className="text-text-strong block">다시 꺼내보는</span>
                <span className="text-primary-strong block">나만의 네컷 보관함</span>
              </h3>
              <motion.p
                className="text-text-secondary mt-6 text-[14px] leading-normal font-bold sm:text-[16px] lg:mt-8 lg:text-[20px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                &ldquo;이 사진 언제 어디서 찍었더라?&rdquo;
                <br />
                찍은 날짜와 장소를 함께 기록해
                <br />
                언제든 쉽게 꺼내 추억할 수 있어요
              </motion.p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
