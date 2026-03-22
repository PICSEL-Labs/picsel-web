"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Container from "./Container";
import TwinkleStar from "./TwinkleStar";
import ScrollReveal from "./ScrollReveal";
import StaggerContainer, { staggerChildVariants } from "./StaggerContainer";

const tabs = ["포토부스 탐색", "사진 업로드", "픽셀북"];

const features = [
  {
    sections: [
      {
        tag: "지도 검색",
        headline: "전국 포토부스 매장만\n모아볼 수 있어요",
        body: "다른 검색 결과와 섞이지 않고 포토부스 위치를 정확하게 찾을 수 있어요",
        sectionHeadline: "한눈에 찾고 취향대로 탐색하는 포토부스 통합 지도",
        highlightWords: "포토부스 통합 지도",
      },
      {
        tag: "브랜드 필터",
        headline: "선호하는 브랜드 매장을\n필터링해서 바로 확인해요",
        body: "포토부스 브랜드를 하나하나 검색할 필요없이 좋아하는 브랜드를 골라서 찾아볼 수 있어요",
      },
      {
        tag: "브랜드 찜",
        headline: "좋아하는 브랜드는 찜!해서\n한눈에 확인해요",
        body: "좋아하는 브랜드를 매번 검색할 필요없이 찜한 브랜드에 저장해서 쉽고 편하게 찾아갈 수 있어요",
      },
    ],
  },
  {
    sections: [
      {
        tag: "QR 업로드",
        headline: "QR스캔 한번으로 빠르고\n간편한 사진 업로드",
        body: "번거로운 과정 없이 QR 스캔 한번으로 네컷사진을 바로 저장하세요",
        sectionHeadline: "복잡한 과정 없이, 쉽고 빠른 업로드",
        highlightWords: "쉽고 빠른 업로드",
      },
      {
        tag: "앨범에서 업로드",
        headline: "갤러리에서 잊혀진 네컷사진을\n픽셀북에 모아보세요",
        body: "예전에 찍어두고 잊고 있던 사진도 앨범에서 선택해 간편하게 저장할 수 있어요",
      },
    ],
  },
  {
    sections: [
      {
        tag: "내 픽셀",
        headline: "날짜와 장소로 모아보는\n나만의 네컷 피드",
        body: "대표사진인 네컷사진을 기준으로 언제, 어디서 찍었는지 한눈에 확인할 수 있어요",
        sectionHeadline: "모으고, 기록해 다시 보는 나만의 네컷 보관함",
        highlightWords: "나만의 네컷 보관함",
      },
      {
        tag: "픽셀북",
        headline: "주제별로 모아 정리하는\n나만의 픽셀북",
        body: "카테고리별로 사진을 정리하고, 그 안에서 날짜, 위치와 함께 일기를 쓸 수 있어요",
      },
    ],
  },
];

function PhoneMockup({ label }: { label: string }) {
  return (
    <div className="w-55 shrink-0 lg:w-75">
      <div className="rounded-8 lg:rounded-11 relative h-112.5 w-55 overflow-hidden border-[5px] border-[#333] bg-[#1A1A1A] shadow-2xl lg:h-153.5 lg:w-75 lg:border-[6px]">
        <div className="rounded-b-3 lg:rounded-b-3.5 absolute top-0 left-1/2 z-10 h-5.5 w-20 -translate-x-1/2 bg-[#333] lg:h-7 lg:w-25" />
        <div className="rounded-6.75 lg:rounded-9.5 flex h-full w-full items-center justify-center bg-linear-to-b from-[#222] to-[#111]">
          <span className="text-text-gray text-[12px] lg:text-[13px]">{label}</span>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const feature = features[activeTab];

  return (
    <section className="bg-white pt-15 lg:pt-22.5">
      {/* Dark Banner */}
      <div className="bg-black">
        <Container className="flex flex-col-reverse items-center gap-8 py-16 lg:min-h-134.5 lg:flex-row lg:justify-between lg:gap-0 lg:py-0">
          <StaggerContainer staggerDelay={0.2}>
            <motion.div className="h-37 w-30 lg:h-67.75 lg:w-55" variants={staggerChildVariants}>
              <TwinkleStar />
            </motion.div>
          </StaggerContainer>
          <StaggerContainer staggerDelay={0.2} className="max-w-129.25 text-center lg:text-right">
            <motion.h2
              className="text-[24px] leading-9.5 font-bold text-white sm:text-[28px] sm:leading-11 lg:text-[36px] lg:leading-14"
              variants={staggerChildVariants}
            >
              포토부스를 찾고-찍고-정리까지
              <br />
              픽셀에서 한번에!
            </motion.h2>
            <motion.p
              className="text-text-gray mt-4 text-[14px] leading-6 sm:text-[15px] lg:mt-6 lg:text-[16px] lg:leading-7"
              variants={staggerChildVariants}
            >
              지도 기반 탐색, 날짜와 장소 기록, 보관함 기반 정리로
              <br />더 쉽고 편하게 포토부스를 찾고 사진을 보관하세요
            </motion.p>
          </StaggerContainer>
        </Container>
      </div>

      {/* Tab Bar */}
      <Container>
        <div className="border-border flex border-b-2">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`relative flex-1 py-3.5 text-center text-[14px] font-semibold transition-colors lg:py-5 lg:text-[18px] ${
                activeTab === i ? "text-primary" : "text-text-gray hover:text-text-secondary"
              }`}
            >
              {tab}
              {activeTab === i && (
                <motion.div
                  className="bg-primary absolute right-0 -bottom-0.5 left-0 h-0.75"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </Container>

      {/* Feature Content */}
      <Container>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {feature.sections.map((section, i) => (
              <div key={`${activeTab}-${i}`}>
                {section.sectionHeadline && (
                  <ScrollReveal distance={40} duration={0.6}>
                    <div className="pt-15 pb-10 text-center lg:pt-40 lg:pb-20">
                      <h3 className="text-[24px] leading-9.5 font-bold sm:text-[32px] sm:leading-12 lg:text-[48px] lg:leading-16.75">
                        {section.sectionHeadline
                          .split(section.highlightWords || "")
                          .map((part, j, arr) => (
                            <span key={j}>
                              {part}
                              {j < arr.length - 1 && (
                                <span className="text-primary">{section.highlightWords}</span>
                              )}
                            </span>
                          ))}
                      </h3>
                      <div className="mt-1.5 flex justify-center">
                        <div className="via-primary/40 h-0.75 w-50 bg-linear-to-r from-transparent to-transparent lg:w-75" />
                      </div>
                    </div>
                  </ScrollReveal>
                )}

                <div
                  className={`flex flex-col items-center gap-8 pb-15 lg:flex-row lg:items-start lg:gap-20 lg:pb-30 ${
                    i % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <ScrollReveal
                    direction={i % 2 !== 0 ? "right" : "left"}
                    distance={50}
                    delay={0.1}
                  >
                    <PhoneMockup label={section.tag} />
                  </ScrollReveal>
                  <ScrollReveal
                    className="flex-1"
                    direction={i % 2 !== 0 ? "left" : "right"}
                    distance={50}
                    delay={0.2}
                  >
                    <div className="pt-0 text-center lg:pt-5 lg:text-left">
                      <span className="inline-block rounded-full bg-black px-5 py-1.5 text-[13px] font-medium text-white lg:px-6 lg:py-2 lg:text-[14px]">
                        {section.tag}
                      </span>
                      <h4 className="mt-4 text-[22px] leading-8.5 font-bold whitespace-pre-line sm:text-[28px] sm:leading-11 lg:mt-6 lg:text-[36px] lg:leading-14">
                        {section.headline}
                      </h4>
                      <p className="text-text-secondary mt-3 text-[14px] leading-6 lg:mt-6 lg:text-[16px] lg:leading-7">
                        {section.body}
                      </p>
                    </div>
                  </ScrollReveal>
                </div>

                {i < feature.sections.length - 1 && !feature.sections[i + 1].sectionHeadline && (
                  <div className="border-border my-5 border-t" />
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
