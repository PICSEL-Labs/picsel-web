"use client";

import { motion } from "motion/react";
import { Container, ScrollReveal } from "@shared/ui";
import PhoneMockup from "./PhoneMockup";

const PROCESS_STEPS = [
  { step: 1, label: "사진 업로드" },
  { step: 2, label: "날짜, 위치 저장" },
  { step: 3, label: "보관할 픽셀북 선택" },
];

export default function ProcessFlowSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <Container className="flex flex-col items-center gap-16 pt-20 pb-20 lg:gap-21 lg:pt-40">
        {/* Headline */}
        <ScrollReveal distance={40} duration={0.7}>
          <h3 className="text-center text-[24px] leading-[1.5] font-bold sm:text-[28px] lg:text-[32px]">
            <span className="text-text-strong block">복잡한 과정 없이</span>
            <span className="text-primary-strong block">쉽고 빠른 업로드</span>
          </h3>
        </ScrollReveal>

        {/* Step indicator */}
        <div className="flex w-full flex-col items-center gap-4 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-x-7 lg:gap-y-0 lg:px-25">
          {PROCESS_STEPS.map((item, i) => (
            <div key={item.step} className="flex items-center gap-2 lg:gap-7">
              <motion.div
                className="flex w-[160px] items-center justify-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
              >
                <span className="bg-primary flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[14px] leading-none font-extrabold text-white shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
                  {item.step}
                </span>
                <span className="text-primary-strong text-[14px] leading-[1.4] font-bold lg:text-[16px]">
                  {item.label}
                </span>
              </motion.div>

              {/* Connector dotted line — only between, not after last */}
              {i < PROCESS_STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="hidden h-px w-[140px] lg:block"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, #ff6c9a 0 6px, transparent 6px 12px)",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Mockup */}
        <ScrollReveal distance={40} duration={0.7} delay={0.2}>
          <PhoneMockup screenLabel="업로드 화면" />
        </ScrollReveal>
      </Container>
    </section>
  );
}
