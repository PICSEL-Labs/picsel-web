"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Container, ScrollReveal } from "@shared/ui";

type FaqItem = { question: string; answer?: string };

const FAQ_ITEMS: FaqItem[] = [
  { question: "픽셀에서 탐색과 기록이 가능한 포토부스 브랜드는 어떤 것들이 있나요?" },
  { question: "픽셀에서 일부 브랜드만 검색되는데 어떻게 다른 브랜드를 찾을 수 있나요?" },
  { question: "사진은 어떻게 픽셀에 업로드 하나요?" },
  { question: "픽셀북은 무엇인가요?" },
  { question: "픽셀북에 사진을 추가하고 싶은데 어떻게 하나요?" },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="bg-bg-dark relative w-full overflow-hidden">
      <Container className="flex flex-col items-center gap-10 pt-20 pb-20 lg:gap-15 lg:pt-40 lg:pb-30">
        {/* Headline */}
        <ScrollReveal distance={40} duration={0.7}>
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
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIdx === i;
            const hasAnswer = Boolean(item.answer);
            return (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`bg-bg-dark w-full max-w-270 overflow-hidden shadow-[inset_-2px_-4px_12px_rgba(255,255,255,0.05),inset_-2px_-2px_8px_rgba(0,0,0,0.4),inset_2px_4px_8px_rgba(255,255,255,0.08)] ${
                  isOpen ? "rounded-3xl" : "rounded-full"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  disabled={!hasAnswer}
                  onClick={() => hasAnswer && setOpenIdx(isOpen ? null : i)}
                  className={`flex w-full items-center justify-between gap-6 px-6 py-5 transition-transform lg:px-20 lg:py-8 ${
                    hasAnswer
                      ? "cursor-pointer hover:scale-[1.005] active:scale-[0.995]"
                      : "cursor-default"
                  }`}
                >
                  <span className="text-left text-[14px] leading-normal font-bold text-white sm:text-[16px] lg:text-[20px]">
                    {item.question}
                  </span>
                  {hasAnswer && (
                    <motion.svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary shrink-0"
                      aria-hidden
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.svg>
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && item.answer && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <div className="px-6 pb-6 lg:px-20 lg:pb-8">
                        <p className="text-text-light-gray text-left text-[14px] leading-[1.6] sm:text-[15px] lg:text-[16px]">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
