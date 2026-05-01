"use client";

import { motion } from "motion/react";
import { Container, ScrollReveal } from "@shared/ui";

const FAQ_ITEMS = [
  "픽셀에서 탐색과 기록이 가능한 포토부스 브랜드는 어떤 것들이 있나요?",
  "픽셀에서 일부 브랜드만 검색되는데 어떻게 다른 브랜드를 찾을 수 있나요?",
  "사진은 어떻게 픽셀에 업로드 하나요?",
  "픽셀북은 무엇인가요?",
  "픽셀북에 사진을 추가하고 싶은데 어떻게 하나요?",
];

export default function FaqSection() {
  return (
    <section className="bg-bg-dark relative w-full overflow-hidden">
      <Container className="flex flex-col items-center gap-10 pt-20 pb-20 lg:gap-15 lg:pt-40 lg:pb-30">
        {/* Headline */}
        <ScrollReveal distance={40} duration={0.7}>
          {/* TODO: '?' 핑크 SVG 데코 에셋 업로드 후 교체 */}
          <div className="flex flex-col items-center gap-6 lg:gap-8">
            <span
              aria-hidden
              className="text-primary text-[64px] leading-none font-extrabold lg:text-[80px]"
            >
              ?
            </span>
            <h2 className="text-center text-[24px] leading-[1.4] font-extrabold text-white sm:text-[28px] lg:text-[32px]">
              더 궁금한 점이 있나요?
            </h2>
          </div>
        </ScrollReveal>

        {/* FAQ pills */}
        <div className="flex w-full flex-col items-center gap-3 lg:gap-4">
          {FAQ_ITEMS.map((question, i) => (
            <motion.button
              key={i}
              type="button"
              className="bg-bg-dark flex w-full max-w-[1080px] items-center justify-between gap-6 rounded-full px-6 py-5 shadow-[inset_-2px_-4px_12px_rgba(255,255,255,0.05),inset_-2px_-2px_8px_rgba(0,0,0,0.4),inset_2px_4px_8px_rgba(255,255,255,0.08)] transition-transform hover:scale-[1.01] active:scale-[0.99] lg:px-20 lg:py-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="text-left text-[14px] leading-[1.5] font-bold text-white sm:text-[16px] lg:text-[20px]">
                {question}
              </span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary shrink-0"
                aria-hidden
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
          ))}
        </div>
      </Container>
    </section>
  );
}
