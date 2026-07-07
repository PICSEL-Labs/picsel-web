"use client";

import { motion } from "motion/react";
import { Container, ScrollReveal } from "@shared/ui";

interface PainpointCard {
  icon: string;
  iconAlt: string;
  body: { text: string; highlight?: boolean }[];
}

const PAINPOINT_CARDS: PainpointCard[] = [
  {
    icon: "😥",
    iconAlt: "프레임 모름",
    body: [{ text: "현재 촬영 가능한 프레임이\n무엇인지 모르겠어요" }],
  },
  {
    icon: "😢",
    iconAlt: "브랜드 검색",
    body: [
      { text: "하루필름, 인생네컷, 포토그레이 등\n내가 원하는 브랜드의 매장을\n" },
      { text: "한눈에 찾기 어려워요", highlight: true },
    ],
  },
  {
    icon: "😣",
    iconAlt: "촬영 기억",
    body: [
      { text: "포토시그니처에서 찍었던 이 네컷사진··\n언제 어디서 찍었는지\n" },
      { text: "기억이 안 나요", highlight: true },
    ],
  },
  {
    icon: "😳",
    iconAlt: "앨범 정리",
    body: [
      { text: "앨범에서 네컷사진을\n찾기 번거로워서\n" },
      { text: "결국 다시 꺼내보지 않게 돼요", highlight: true },
    ],
  },
  {
    icon: "😖",
    iconAlt: "보정 아쉬움",
    body: [{ text: "보정이나 프레임 선택이\n아쉬워요" }],
  },
];

/**
 * PainpointSection — 페인포인트 카드 섹션
 * 사용자 불편 사례 5개를 카드로 표시(모바일 가로 스크롤 / 데스크탑 5-column)
 */
export default function PainpointSection() {
  return (
    <section className="bg-bg-dark relative w-full overflow-hidden">
      <Container className="flex flex-col items-center gap-10 pt-20 pb-30 lg:gap-16 lg:pt-20 lg:pb-40">
        <ScrollReveal distance={40} duration={0.7}>
          <h2 className="text-center text-[26px] leading-[1.4] font-extrabold whitespace-nowrap sm:text-[32px] lg:text-[40px]">
            <span className="block text-pink-50">그때 찍은 네컷사진,</span>
            <span className="text-primary block">왜 다시 찾기 힘들까요?</span>
          </h2>
        </ScrollReveal>

        <div className="w-full">
          <div className="-mx-(--spacing-page) flex items-start gap-4 overflow-x-auto px-(--spacing-page) pb-2 lg:mx-0 lg:justify-center lg:gap-12 lg:overflow-visible lg:px-10">
            {PAINPOINT_CARDS.map((card, i) => {
              const isFaded = i === 0 || i === PAINPOINT_CARDS.length - 1;
              return (
                <motion.div
                  key={i}
                  className={`flex w-55 shrink-0 flex-col items-center justify-center gap-2 self-stretch rounded-2xl bg-white px-6 pt-8 pb-10 shadow-[0_-2px_8px_rgba(0,0,0,0.1),inset_0_-2px_8px_rgba(0,0,0,0.05),inset_2px_4px_8px_rgba(255,255,255,0.25)] lg:w-65 ${
                    isFaded ? "lg:opacity-30" : ""
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: isFaded ? 0.3 : 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <span className="text-[30px] leading-none" role="img" aria-label={card.iconAlt}>
                    {card.icon}
                  </span>
                  <p className="text-text-secondary mt-1 w-full text-center text-[14px] leading-normal font-normal whitespace-pre-line lg:text-[16px]">
                    {card.body.map((seg, j) => (
                      <span
                        key={j}
                        className={seg.highlight ? "text-primary block font-extrabold" : undefined}
                      >
                        {seg.text}
                      </span>
                    ))}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <ScrollReveal distance={30} duration={0.7} delay={0.2}>
          <p className="mx-auto max-w-270 text-center text-[16px] leading-normal font-bold text-white lg:text-[20px]">
            사진은 남겼지만 어디 있는지 몰라 다시 찾지 못하고, 정리되지 않은 기록은 결국 꺼내보지
            않게 돼죠
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
