"use client";

import { Container, ScrollReveal } from "@shared/ui";

/**
 * EmpathySection — 공감 섹션
 * 핑크 배경 질문 블록(Section 3) + 흰 배경 답변 블록(Section 4) 두 단으로 구성
 */
export default function EmpathySection() {
  return (
    <>
      <section className="bg-primary relative w-full overflow-hidden">
        <Container className="relative flex flex-col items-center gap-20 py-25 lg:gap-20 lg:py-40">
          {/* TODO: SVG 에셋 업로드 후 교체 */}
          <span
            aria-hidden
            className="absolute top-[58%] left-[calc(50%-185px)] hidden h-0.75 w-48.5 -rotate-[0.3deg] rounded-full bg-pink-100/80 lg:block"
          />
          {/* TODO: SVG 에셋 업로드 후 교체 */}
          <span
            aria-hidden
            className="absolute top-[36%] left-[calc(50%+212px)] hidden h-3 w-3 rotate-45 bg-pink-100 lg:block"
          />

          <ScrollReveal distance={40} duration={0.7}>
            <h2 className="flex flex-col items-center gap-1 text-center leading-[1.4] font-extrabold whitespace-nowrap">
              <span className="flex items-center text-[26px] sm:text-[32px] lg:text-[40px]">
                <span className="text-pink-100">원하는 포토부스</span>
                <span className="text-white">&nbsp;쉽게 찾고</span>
                <span className="text-pink-200">,</span>
              </span>
              <span className="flex items-center text-[26px] sm:text-[32px] lg:text-[40px]">
                <span className="text-white">편하게 추억</span>
                <span className="text-pink-100">하고 싶지 않으신가요?</span>
              </span>
            </h2>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="flex flex-col items-center gap-10 pt-20 pb-30 text-center lg:gap-10 lg:pt-40 lg:pb-60">
          <ScrollReveal distance={40} duration={0.7}>
            <h2 className="text-primary text-[24px] leading-[1.4] font-extrabold whitespace-nowrap sm:text-[32px] lg:text-[40px]">
              <span className="block">픽셀에서는 누구나 쉽게 찾고</span>
              <span className="block">다시 꺼내볼 수 있어요</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal distance={30} duration={0.7} delay={0.15}>
            <p className="text-text-secondary mx-auto max-w-205 text-center text-[14px] leading-normal font-bold sm:text-[16px] lg:text-[20px]">
              <span className="block">지도 기반 탐색, 날짜와 장소 기록, 보관함 기반 정리로</span>
              <span className="block">
                포토이즘, 포토그레이, BYTP, 돈룩업 등 원하는 포토부스 매장을 쉽게 찾고
              </span>
              <span className="block">픽셀과 함께 편하게 추억해보세요!</span>
            </p>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
