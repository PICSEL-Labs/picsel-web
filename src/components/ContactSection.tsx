"use client";

import { useState } from "react";
import Container from "./Container";

const categoryTabs = ["FAQ", "공지사항", "1:1 문의"];
const faqTabs = ["지도 검색", "업로드", "찜한 브랜드", "픽셀북", "계정", "기타/제휴"];

const faqItems: Record<string, { question: string; answer: string }[]> = {
  "지도 검색": [
    {
      question: "픽셀 지도 매장 정보가 실제와 다릅니다.",
      answer:
        "매장 정보는 주기적으로 업데이트되고 있습니다. 오류를 발견하시면 문의하기를 통해 알려주세요.",
    },
    {
      question: "찾는 매장이 검색결과에 나오지 않아요.",
      answer:
        "현재 서비스 중인 포토부스 브랜드를 기준으로 매장 정보를 제공하고 있습니다. 누락된 매장은 문의를 통해 요청해주세요.",
    },
  ],
  업로드: [
    {
      question: "QR 업로드가 되지 않아요.",
      answer:
        "카메라 접근 권한을 확인해주세요. 설정에서 픽셀 앱의 카메라 권한을 허용해주시면 됩니다.",
    },
  ],
  "찜한 브랜드": [
    {
      question: "찜한 브랜드는 어떻게 관리하나요?",
      answer: "마이페이지에서 찜한 브랜드를 확인하고 관리할 수 있습니다.",
    },
  ],
  픽셀북: [
    {
      question: "픽셀북은 몇 개까지 만들 수 있나요?",
      answer: "픽셀북은 제한 없이 원하는 만큼 만들 수 있습니다.",
    },
  ],
  계정: [
    {
      question: "회원 탈퇴는 어떻게 하나요?",
      answer: "마이페이지 > 설정 > 회원 탈퇴에서 진행할 수 있습니다.",
    },
  ],
  "기타/제휴": [
    {
      question: "제휴 문의는 어떻게 하나요?",
      answer: "picsel.team@gmail.com으로 문의해주세요.",
    },
  ],
};

export default function ContactSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeFaqTab, setActiveFaqTab] = useState("지도 검색");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="bg-white pt-15 lg:pt-22.5">
      {/* Dark Banner */}
      <div className="bg-black">
        <Container className="flex flex-col items-center py-15 lg:py-20">
          <div className="relative mb-4 h-40 w-50 lg:h-50 lg:w-65">
            <div className="bg-primary/40 rounded-5 absolute top-2.5 left-10 h-9.5 w-12.5" />
            <div className="bg-primary/30 rounded-4 absolute top-0 right-7.5 h-8 w-10.5" />
            <div className="bg-primary/35 rounded-5 absolute right-5 bottom-5 h-10 w-13.75" />
            <div className="bg-primary/25 rounded-4.5 absolute bottom-7.5 left-5 h-8.75 w-11.25" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="rounded-6 bg-primary/25 h-25 w-25 rotate-[8deg] lg:h-30 lg:w-30" />
                <div className="rounded-6 bg-primary/15 absolute top-1 left-1 h-25 w-25 -rotate-[8deg] lg:h-30 lg:w-30" />
                <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-[48px] lg:text-[56px]">
                  ❓
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-primary text-[28px] font-bold lg:text-[36px]">PICSEL 문의</h2>
        </Container>
      </div>

      <Container>
        {/* Category Tabs */}
        <div className="flex justify-center gap-2 pt-8 lg:gap-3 lg:pt-12">
          {categoryTabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveCategory(i)}
              className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-all lg:px-6 lg:text-[14px] ${
                activeCategory === i
                  ? "border-black bg-black text-white"
                  : "border-border text-text-secondary hover:border-text-secondary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeCategory === 0 && (
          <div className="py-8 lg:py-10">
            <div className="border-border flex overflow-x-auto border-b-2">
              {faqTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveFaqTab(tab);
                    setOpenFaq(null);
                  }}
                  className={`relative min-w-fit flex-1 px-2 py-3 text-center text-[12px] font-medium whitespace-nowrap transition-all lg:py-4 lg:text-[14px] ${
                    activeFaqTab === tab
                      ? "text-primary"
                      : "text-text-gray hover:text-text-secondary"
                  }`}
                >
                  {tab}
                  {activeFaqTab === tab && (
                    <div className="bg-primary absolute right-0 -bottom-0.5 left-0 h-0.5" />
                  )}
                </button>
              ))}
            </div>

            <div className="mt-4 space-y-2 lg:mt-6">
              {(faqItems[activeFaqTab] || []).map((item, i) => (
                <div key={i} className="border-border rounded-3 overflow-hidden border">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-gray-50 lg:px-8 lg:py-6"
                  >
                    <span className="text-text-primary text-[14px] lg:text-[16px]">
                      {item.question}
                    </span>
                    <svg
                      className={`text-text-gray ml-4 h-4.5 w-4.5 shrink-0 transition-transform lg:h-5 lg:w-5 ${openFaq === i ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="text-text-secondary px-5 pb-4 text-[13px] leading-5.5 lg:px-8 lg:pb-6 lg:text-[14px] lg:leading-6">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="pb-12 lg:pb-16">
          <div className="rounded-4 bg-[#F8F8F8] px-5 py-5 lg:px-10 lg:py-7">
            <p className="text-text-secondary text-[13px] leading-5.5 lg:text-[14px] lg:leading-6">
              픽셀 이용 중 불편한 점이나 궁금한 사항이 있다면 아래 구글폼을 작성하시거나,{" "}
              <span className="text-primary font-medium">picsel.team@gmail.com</span> 으로 언제든지
              문의주세요.
              <br />
              확인 후 빠르게 답변드리겠습니다.
            </p>
            <p className="text-text-secondary mt-3 text-[13px] lg:text-[14px]">
              보내주신 의견을 바탕으로 더 나은 픽셀을 만들어가겠습니다!
            </p>
            <p className="text-text-secondary mt-3 text-[13px] lg:text-[14px]">
              픽셀이 도움이 되셨다면 앱스토어에서 평점과 후기를 남겨주세요.
              <br />
              여러분의 관심과 응원이 픽셀에게 큰 힘이 됩니다. 감사합니다💗
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
