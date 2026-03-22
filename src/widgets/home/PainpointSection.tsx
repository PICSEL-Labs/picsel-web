"use client";

import { ScrollReveal } from "@shared/ui";

const painpoints = [
  { emoji: "😣", text: "현재 촬영 가능한 프레임이\n무엇인지 모르겠어요", highlight: "" },
  { emoji: "😢", text: "내가 원하는 브랜드 매장을\n", highlight: "한눈에 찾기 어려워요" },
  { emoji: "🤔", text: "언제 어디서 찍었는지\n", highlight: "기억이 안 나요" },
  {
    emoji: "😮‍💨",
    text: "앨범에서 네컷사진을 찾기 번거로워서\n",
    highlight: "결국 다시 꺼내보지 않게 돼요",
  },
  { emoji: "😞", text: "보정이나 프레임 선택이\n아쉬워요", highlight: "" },
];

export default function PainpointSection() {
  const doubled = [...painpoints, ...painpoints];

  return (
    <section className="overflow-hidden bg-linear-to-b from-[#333333] to-white py-10 lg:py-15">
      <ScrollReveal distance={60} duration={0.8}>
        <div className="relative">
          <div className="animate-scroll flex w-max gap-4 lg:gap-6">
            {doubled.map((item, i) => (
              <div
                key={i}
                className="bg-bg-card rounded-5 flex h-35 w-60 shrink-0 flex-col items-center justify-center px-4 lg:h-42 lg:w-76.25 lg:px-6"
              >
                <div className="rounded-2.5 mb-2 flex h-9 w-9 items-center justify-center bg-[#2C2C2E] text-[20px] lg:h-10 lg:w-10 lg:text-[22px]">
                  {item.emoji}
                </div>
                <p className="text-text-light-gray text-center text-[12px] leading-5 whitespace-pre-line lg:text-[14px] lg:leading-6">
                  {item.text}
                  {item.highlight && (
                    <span className="text-primary font-semibold">{item.highlight}</span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
