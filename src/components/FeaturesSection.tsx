"use client";

import { useState } from "react";
import Container from "./Container";
import TwinkleStar from "./TwinkleStar";

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
    <div className="w-55 lg:w-75 shrink-0">
      <div className="relative w-55 lg:w-75 h-112.5 lg:h-153.5 bg-[#1A1A1A] rounded-8 lg:rounded-11 border-[5px] lg:border-[6px] border-[#333] overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 lg:w-25 h-5.5 lg:h-7 bg-[#333] rounded-b-3 lg:rounded-b-3.5 z-10" />
        <div className="w-full h-full bg-linear-to-b from-[#222] to-[#111] flex items-center justify-center rounded-6.75 lg:rounded-9.5">
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
        <Container className="flex flex-col-reverse lg:flex-row items-center lg:justify-between py-16 lg:py-0 lg:min-h-134.5 gap-8 lg:gap-0">
          <div className="w-30 h-37 lg:w-55 lg:h-67.75">
            <TwinkleStar />
          </div>
          <div className="text-center lg:text-right max-w-129.25">
            <h2 className="text-[24px] sm:text-[28px] lg:text-[36px] font-bold text-white leading-9.5 sm:leading-11 lg:leading-14">
              포토부스를 찾고-찍고-정리까지
              <br />
              픽셀에서 한번에!
            </h2>
            <p className="mt-4 lg:mt-6 text-[14px] sm:text-[15px] lg:text-[16px] text-text-gray leading-6 lg:leading-7">
              지도 기반 탐색, 날짜와 장소 기록, 보관함 기반 정리로
              <br />
              더 쉽고 편하게 포토부스를 찾고 사진을 보관하세요
            </p>
          </div>
        </Container>
      </div>

      {/* Tab Bar */}
      <Container>
        <div className="flex border-b-2 border-border">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`flex-1 py-3.5 lg:py-5 text-center text-[14px] lg:text-[18px] font-semibold transition-all relative ${
                activeTab === i ? "text-primary" : "text-text-gray hover:text-text-secondary"
              }`}
            >
              {tab}
              {activeTab === i && (
                <div className="absolute -bottom-0.5 left-0 right-0 h-0.75 bg-primary" />
              )}
            </button>
          ))}
        </div>
      </Container>

      {/* Feature Content */}
      <Container>
        {feature.sections.map((section, i) => (
          <div key={`${activeTab}-${i}`}>
            {section.sectionHeadline && (
              <div className="text-center pt-15 lg:pt-40 pb-10 lg:pb-20">
                <h3 className="text-[24px] sm:text-[32px] lg:text-[48px] font-bold leading-9.5 sm:leading-12 lg:leading-16.75">
                  {section.sectionHeadline.split(section.highlightWords || "").map((part, j, arr) => (
                    <span key={j}>
                      {part}
                      {j < arr.length - 1 && (
                        <span className="text-primary">{section.highlightWords}</span>
                      )}
                    </span>
                  ))}
                </h3>
                <div className="flex justify-center mt-1.5">
                  <div className="w-50 lg:w-75 h-0.75 bg-linear-to-r from-transparent via-primary/40 to-transparent" />
                </div>
              </div>
            )}

            <div
              className={`flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-20 pb-15 lg:pb-30 ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <PhoneMockup label={section.tag} />
              <div className="flex-1 text-center lg:text-left pt-0 lg:pt-5">
                <span className="inline-block px-5 lg:px-6 py-1.5 lg:py-2 bg-black text-white text-[13px] lg:text-[14px] font-medium rounded-full">
                  {section.tag}
                </span>
                <h4 className="text-[22px] sm:text-[28px] lg:text-[36px] font-bold leading-8.5 sm:leading-11 lg:leading-14 mt-4 lg:mt-6 whitespace-pre-line">
                  {section.headline}
                </h4>
                <p className="text-[14px] lg:text-[16px] text-text-secondary mt-3 lg:mt-6 leading-6 lg:leading-7">
                  {section.body}
                </p>
              </div>
            </div>

            {i < feature.sections.length - 1 && !feature.sections[i + 1].sectionHeadline && (
              <div className="border-t border-border my-5" />
            )}
          </div>
        ))}
      </Container>
    </section>
  );
}
