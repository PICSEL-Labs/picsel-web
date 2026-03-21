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
    <div className="w-[220px] lg:w-[300px] flex-shrink-0">
      <div className="relative w-[220px] lg:w-[300px] h-[450px] lg:h-[614px] bg-[#1A1A1A] rounded-[32px] lg:rounded-[44px] border-[5px] lg:border-[6px] border-[#333] overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] lg:w-[100px] h-[22px] lg:h-[28px] bg-[#333] rounded-b-[12px] lg:rounded-b-[14px] z-10" />
        <div className="w-full h-full bg-gradient-to-b from-[#222] to-[#111] flex items-center justify-center rounded-[27px] lg:rounded-[38px]">
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
    <section className="bg-white pt-[60px] lg:pt-[90px]">
      {/* Dark Banner */}
      <div className="bg-black">
        <Container className="flex flex-col-reverse lg:flex-row items-center lg:justify-between py-16 lg:py-0 lg:min-h-[538px] gap-8 lg:gap-0">
          <div className="w-[120px] h-[148px] lg:w-[220px] lg:h-[271px]">
            <TwinkleStar />
          </div>
          <div className="text-center lg:text-right max-w-[517px]">
            <h2 className="text-[24px] sm:text-[28px] lg:text-[36px] font-bold text-white leading-[38px] sm:leading-[44px] lg:leading-[56px]">
              포토부스를 찾고-찍고-정리까지
              <br />
              픽셀에서 한번에!
            </h2>
            <p className="mt-4 lg:mt-[24px] text-[14px] sm:text-[15px] lg:text-[16px] text-text-gray leading-[24px] lg:leading-[28px]">
              지도 기반 탐색, 날짜와 장소 기록, 보관함 기반 정리로
              <br />
              더 쉽고 편하게 포토부스를 찾고 사진을 보관하세요
            </p>
          </div>
        </Container>
      </div>

      {/* Tab Bar */}
      <Container>
        <div className="flex border-b-[2px] border-border">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`flex-1 py-[14px] lg:py-[20px] text-center text-[14px] lg:text-[18px] font-semibold transition-all relative ${
                activeTab === i ? "text-primary" : "text-text-gray hover:text-text-secondary"
              }`}
            >
              {tab}
              {activeTab === i && (
                <div className="absolute bottom-[-2px] left-0 right-0 h-[3px] bg-primary" />
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
              <div className="text-center pt-[60px] lg:pt-[160px] pb-[40px] lg:pb-[80px]">
                <h3 className="text-[24px] sm:text-[32px] lg:text-[48px] font-bold leading-[38px] sm:leading-[48px] lg:leading-[67px]">
                  {section.sectionHeadline.split(section.highlightWords || "").map((part, j, arr) => (
                    <span key={j}>
                      {part}
                      {j < arr.length - 1 && (
                        <span className="text-primary">{section.highlightWords}</span>
                      )}
                    </span>
                  ))}
                </h3>
                <div className="flex justify-center mt-[6px]">
                  <div className="w-[200px] lg:w-[300px] h-[3px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                </div>
              </div>
            )}

            <div
              className={`flex flex-col lg:flex-row items-center lg:items-start gap-[32px] lg:gap-[80px] pb-[60px] lg:pb-[120px] ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <PhoneMockup label={section.tag} />
              <div className="flex-1 text-center lg:text-left pt-0 lg:pt-[20px]">
                <span className="inline-block px-[20px] lg:px-[24px] py-[6px] lg:py-[8px] bg-black text-white text-[13px] lg:text-[14px] font-medium rounded-full">
                  {section.tag}
                </span>
                <h4 className="text-[22px] sm:text-[28px] lg:text-[36px] font-bold leading-[34px] sm:leading-[44px] lg:leading-[56px] mt-[16px] lg:mt-[24px] whitespace-pre-line">
                  {section.headline}
                </h4>
                <p className="text-[14px] lg:text-[16px] text-text-secondary mt-[12px] lg:mt-[24px] leading-[24px] lg:leading-[28px]">
                  {section.body}
                </p>
              </div>
            </div>

            {i < feature.sections.length - 1 && !feature.sections[i + 1].sectionHeadline && (
              <div className="border-t border-border my-[20px]" />
            )}
          </div>
        ))}
      </Container>
    </section>
  );
}
