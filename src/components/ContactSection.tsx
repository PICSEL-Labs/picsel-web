"use client";

import { useState } from "react";

const categoryTabs = ["FAQ", "공지사항", "1:1 문의"];
const faqTabs = ["지도 검색", "업로드", "찜한 브랜드", "픽셀북", "계정", "기타/제휴"];

const faqItems: Record<string, { question: string; answer: string }[]> = {
  "지도 검색": [
    { question: "픽셀 지도 매장 정보가 실제와 다릅니다.", answer: "매장 정보는 주기적으로 업데이트되고 있습니다. 오류를 발견하시면 문의하기를 통해 알려주세요." },
    { question: "찾는 매장이 검색결과에 나오지 않아요.", answer: "현재 서비스 중인 포토부스 브랜드를 기준으로 매장 정보를 제공하고 있습니다. 누락된 매장은 문의를 통해 요청해주세요." },
  ],
  "업로드": [
    { question: "QR 업로드가 되지 않아요.", answer: "카메라 접근 권한을 확인해주세요. 설정에서 픽셀 앱의 카메라 권한을 허용해주시면 됩니다." },
  ],
  "찜한 브랜드": [
    { question: "찜한 브랜드는 어떻게 관리하나요?", answer: "마이페이지에서 찜한 브랜드를 확인하고 관리할 수 있습니다." },
  ],
  "픽셀북": [
    { question: "픽셀북은 몇 개까지 만들 수 있나요?", answer: "픽셀북은 제한 없이 원하는 만큼 만들 수 있습니다." },
  ],
  "계정": [
    { question: "회원 탈퇴는 어떻게 하나요?", answer: "마이페이지 > 설정 > 회원 탈퇴에서 진행할 수 있습니다." },
  ],
  "기타/제휴": [
    { question: "제휴 문의는 어떻게 하나요?", answer: "picsel.team@gmail.com으로 문의해주세요." },
  ],
};

export default function ContactSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeFaqTab, setActiveFaqTab] = useState("지도 검색");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="contact" className="bg-white">
      {/* Dark Banner */}
      <div className="bg-black">
        <div className="w-[1280px] mx-auto px-[100px] py-[80px] flex flex-col items-center">
          {/* Question mark graphic */}
          <div className="relative w-[260px] h-[200px] mb-[16px]">
            {/* Speech bubbles */}
            <div className="absolute top-[10px] left-[40px] w-[50px] h-[38px] bg-primary/40 rounded-[20px]" />
            <div className="absolute top-[0px] right-[30px] w-[42px] h-[32px] bg-primary/30 rounded-[16px]" />
            <div className="absolute bottom-[20px] right-[20px] w-[55px] h-[40px] bg-primary/35 rounded-[20px]" />
            <div className="absolute bottom-[30px] left-[20px] w-[45px] h-[35px] bg-primary/25 rounded-[18px]" />
            {/* Center images */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-[120px] h-[120px] rounded-[24px] bg-primary/25 rotate-[8deg]" />
                <div className="absolute top-[4px] left-[4px] w-[120px] h-[120px] rounded-[24px] bg-primary/15 -rotate-[8deg]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[56px] z-10">❓</div>
              </div>
            </div>
          </div>
          <h2 className="text-[36px] font-bold text-primary">PICSEL 문의</h2>
        </div>
      </div>

      <div className="w-[1280px] mx-auto px-[100px]">
        {/* Category Tabs */}
        <div className="flex justify-center gap-[12px] pt-[48px]">
          {categoryTabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveCategory(i)}
              className={`px-[24px] py-[8px] rounded-full text-[14px] font-medium border transition-all ${
                activeCategory === i
                  ? "border-black bg-black text-white"
                  : "border-border text-text-secondary hover:border-text-secondary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* FAQ Content */}
        {activeCategory === 0 && (
          <div className="py-[40px]">
            {/* Sub Tabs */}
            <div className="flex border-b-[2px] border-border">
              {faqTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setActiveFaqTab(tab); setOpenFaq(null); }}
                  className={`flex-1 py-[16px] text-center text-[14px] font-medium transition-all relative ${
                    activeFaqTab === tab ? "text-primary" : "text-text-gray hover:text-text-secondary"
                  }`}
                >
                  {tab}
                  {activeFaqTab === tab && (
                    <div className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-primary" />
                  )}
                </button>
              ))}
            </div>

            {/* Items */}
            <div className="mt-[24px] space-y-[8px]">
              {(faqItems[activeFaqTab] || []).map((item, i) => (
                <div key={i} className="border border-border rounded-[12px] overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-[32px] py-[24px] flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-[16px] text-text-primary">{item.question}</span>
                    <svg
                      className={`w-[20px] h-[20px] text-text-gray transition-transform flex-shrink-0 ml-4 ${openFaq === i ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-[32px] pb-[24px] text-[14px] text-text-secondary leading-[24px]">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Message */}
        <div className="pb-[64px]">
          <div className="bg-[#F8F8F8] rounded-[16px] px-[40px] py-[28px]">
            <p className="text-[14px] text-text-secondary leading-[24px]">
              픽셀 이용 중 불편한 점이나 궁금한 사항이 있다면 아래 구글폼을 작성하시거나,{" "}
              <span className="text-primary font-medium">picsel.team@gmail.com</span> 으로 언제든지 문의주세요.
              <br />확인 후 빠르게 답변드리겠습니다.
            </p>
            <p className="text-[14px] text-text-secondary mt-[12px]">
              보내주신 의견을 바탕으로 더 나은 픽셀을 만들어가겠습니다!
            </p>
            <p className="text-[14px] text-text-secondary mt-[12px]">
              픽셀이 도움이 되셨다면 앱스토어에서 평점과 후기를 남겨주세요.
              <br />여러분의 관심과 응원이 픽셀에게 큰 힘이 됩니다. 감사합니다💗
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
