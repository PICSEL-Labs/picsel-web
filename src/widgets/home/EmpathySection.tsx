"use client";

import { Container, ScrollReveal } from "@shared/ui";

export default function EmpathySection() {
  return (
    <>
      {/* Section 3 (4278:41469) — 핑크 배경 질문
          Figma: bg #ff6c9a, py-[160px] px-[100px], gap-[80px], H3 font NanumSquare ExtraBold 40px leading-[1.4],
          two flex rows with gap-[4px] */}
      <section className="bg-primary relative w-full overflow-hidden">
        <Container className="relative flex flex-col items-center gap-20 py-25 lg:gap-20 lg:py-40">
          {/* Decorative underline (4278:41478) — TODO: SVG 에셋 업로드 후 교체.
              Figma: 아래 두 번째 줄 "편하게 추억" 좌측 밑줄, w-[194px] */}
          <span
            aria-hidden
            className="absolute top-[58%] left-[calc(50%-185px)] hidden h-[3px] w-[194px] -rotate-[0.3deg] rounded-full bg-pink-100/80 lg:block"
          />
          {/* Decorative sparkle (4278:41479) — TODO: SVG 에셋 업로드 후 교체.
              Figma: 첫 번째 줄 우측, w-[31px] h-[32px] */}
          <span
            aria-hidden
            className="absolute top-[36%] left-[calc(50%+212px)] hidden h-3 w-3 rotate-45 bg-pink-100 lg:block"
          />

          <ScrollReveal distance={40} duration={0.7}>
            <h2 className="flex flex-col items-center gap-1 text-center leading-[1.4] font-extrabold whitespace-nowrap">
              {/* Row 1: 원하는 포토부스(pink-100) 쉽게 찾고(white) ,(pink-200) */}
              <span className="flex items-center text-[26px] sm:text-[32px] lg:text-[40px]">
                <span className="text-pink-100">원하는 포토부스</span>
                <span className="text-white">&nbsp;쉽게 찾고</span>
                <span className="text-pink-200">,</span>
              </span>
              {/* Row 2: 편하게 추억(white) 하고 싶지 않으신가요?(pink-100) */}
              <span className="flex items-center text-[26px] sm:text-[32px] lg:text-[40px]">
                <span className="text-white">편하게 추억</span>
                <span className="text-pink-100">하고 싶지 않으신가요?</span>
              </span>
            </h2>
          </ScrollReveal>
        </Container>
      </section>

      {/* Section 4 (4278:41483) — 흰 배경 답변
          Figma: bg white, pt-[160px] pb-[240px] px-[100px], gap-[40px],
          headline 40px ExtraBold #ff6c9a leading-[1.4], body 20px Bold #676b79 leading-[1.5] */}
      <section className="bg-white">
        <Container className="flex flex-col items-center gap-10 pt-20 pb-30 text-center lg:gap-10 lg:pt-40 lg:pb-60">
          <ScrollReveal distance={40} duration={0.7}>
            <h2 className="text-primary text-[24px] leading-[1.4] font-extrabold whitespace-nowrap sm:text-[32px] lg:text-[40px]">
              <span className="block">픽셀에서는 누구나 쉽게 찾고</span>
              <span className="block">다시 꺼내볼 수 있어요</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal distance={30} duration={0.7} delay={0.15}>
            <p className="text-text-secondary mx-auto max-w-[820px] text-center text-[14px] leading-[1.5] font-bold sm:text-[16px] lg:text-[20px]">
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
