"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Container from "./Container";
import ScrollReveal from "./ScrollReveal";
import StaggerContainer, { staggerChildVariants } from "./StaggerContainer";

const categoryTabs = ["FAQ", "공지사항", "1:1 문의"];
const faqTabs = ["지도 검색", "업로드", "찜한 브랜드", "픽셀북", "계정", "기타/제휴"];

const noticeItems = [
  {
    date: "2025.03.15",
    title: "Picsel v1.2.0 업데이트 안내",
    content:
      "앨범에서 업로드 기능이 추가되었습니다. 이제 QR 스캔 없이도 갤러리에서 직접 사진을 업로드할 수 있습니다. 또한 픽셀북 공유 기능이 개선되어 더 편리하게 친구들과 공유할 수 있습니다.",
  },
  {
    date: "2025.02.20",
    title: "포토부스 브랜드 추가 안내",
    content:
      "인생네컷, 하루필름, 포토이즘 등 신규 포토부스 브랜드가 추가되었습니다. 지도 검색에서 더 많은 매장을 찾아보세요.",
  },
  {
    date: "2025.01.10",
    title: "Picsel 서비스 정식 오픈",
    content:
      "안녕하세요, Picsel 팀입니다. 포토부스 사진을 더 오래, 더 특별하게 간직할 수 있는 Picsel이 정식 오픈되었습니다. 많은 이용 부탁드립니다!",
  },
];

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
  const [openNotice, setOpenNotice] = useState<number | null>(null);

  return (
    <section className="bg-white pt-15 lg:pt-22.5">
      {/* Dark Banner */}
      <div className="bg-black">
        <Container className="flex flex-col items-center py-15 lg:py-20">
          <StaggerContainer staggerDelay={0.2} className="flex flex-col items-center">
            <motion.div
              className="relative mb-4 h-40 w-50 lg:h-50 lg:w-65"
              variants={staggerChildVariants}
            >
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
            </motion.div>
            <motion.h2
              className="text-primary text-[28px] font-bold lg:text-[36px]"
              variants={staggerChildVariants}
            >
              PICSEL 문의
            </motion.h2>
          </StaggerContainer>
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

        <AnimatePresence mode="wait">
          {activeCategory === 0 && (
            <motion.div
              key="faq"
              className="py-8 lg:py-10"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* FAQ Sub Tabs */}
              <div className="border-border flex overflow-x-auto border-b-2">
                {faqTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveFaqTab(tab);
                      setOpenFaq(null);
                    }}
                    className={`relative min-w-fit flex-1 px-2 py-3 text-center text-[12px] font-medium whitespace-nowrap transition-colors lg:py-4 lg:text-[14px] ${
                      activeFaqTab === tab
                        ? "text-primary"
                        : "text-text-gray hover:text-text-secondary"
                    }`}
                  >
                    {tab}
                    {activeFaqTab === tab && (
                      <motion.div
                        className="bg-primary absolute right-0 -bottom-0.5 left-0 h-0.5"
                        layoutId="faq-tab-indicator"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* FAQ Items */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFaqTab}
                  className="mt-4 space-y-2 lg:mt-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {(faqItems[activeFaqTab] || []).map((item, i) => (
                    <div key={i} className="border-border rounded-3 overflow-hidden border">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-gray-50 lg:px-8 lg:py-6"
                      >
                        <span className="text-text-primary text-[14px] lg:text-[16px]">
                          {item.question}
                        </span>
                        <motion.svg
                          className="text-text-gray ml-4 h-4.5 w-4.5 shrink-0 lg:h-5 lg:w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          animate={{ rotate: openFaq === i ? 180 : 0 }}
                          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </motion.svg>
                      </button>
                      <AnimatePresence>
                        {openFaq === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="text-text-secondary px-5 pb-4 text-[13px] leading-5.5 lg:px-8 lg:pb-6 lg:text-[14px] lg:leading-6">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}

          {activeCategory === 1 && (
            <motion.div
              key="notice"
              className="py-8 lg:py-10"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="space-y-2">
                {noticeItems.map((item, i) => (
                  <div key={i} className="border-border rounded-3 overflow-hidden border">
                    <button
                      onClick={() => setOpenNotice(openNotice === i ? null : i)}
                      className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-gray-50 lg:px-8 lg:py-6"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-text-gray shrink-0 text-[12px] lg:text-[13px]">
                          {item.date}
                        </span>
                        <span className="text-text-primary text-[14px] lg:text-[16px]">
                          {item.title}
                        </span>
                      </div>
                      <motion.svg
                        className="text-text-gray ml-4 h-4.5 w-4.5 shrink-0 lg:h-5 lg:w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        animate={{
                          rotate: openNotice === i ? 180 : 0,
                        }}
                        transition={{
                          duration: 0.25,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                    </button>
                    <AnimatePresence>
                      {openNotice === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.25,
                            ease: [0.25, 0.1, 0.25, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="text-text-secondary px-5 pb-4 text-[13px] leading-5.5 lg:px-8 lg:pb-6 lg:text-[14px] lg:leading-6">
                            {item.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeCategory === 2 && (
            <motion.div
              key="inquiry"
              className="py-8 lg:py-10"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="rounded-4 border-border border p-6 lg:p-10">
                <h3 className="text-text-primary text-[18px] font-bold lg:text-[22px]">
                  1:1 문의하기
                </h3>
                <p className="text-text-secondary mt-2 text-[13px] leading-5.5 lg:text-[14px] lg:leading-6">
                  픽셀 이용 중 불편한 점이나 궁금한 사항이 있다면 아래 방법으로 문의해주세요.
                  <br />
                  확인 후 빠르게 답변드리겠습니다.
                </p>

                <div className="mt-6 space-y-4 lg:mt-8">
                  <div className="rounded-3 flex items-center gap-4 bg-[#F8F8F8] p-4 lg:p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black lg:h-12 lg:w-12">
                      <svg
                        className="h-5 w-5 text-white lg:h-6 lg:w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-text-primary text-[14px] font-medium lg:text-[16px]">
                        이메일 문의
                      </p>
                      <p className="text-primary mt-0.5 text-[13px] font-medium lg:text-[14px]">
                        picsel.team@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="rounded-3 flex items-center gap-4 bg-[#F8F8F8] p-4 lg:p-6">
                    <div className="bg-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full lg:h-12 lg:w-12">
                      <svg
                        className="h-5 w-5 text-white lg:h-6 lg:w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-text-primary text-[14px] font-medium lg:text-[16px]">
                        구글폼 문의
                      </p>
                      <p className="text-text-secondary mt-0.5 text-[12px] lg:text-[13px]">
                        자세한 내용을 작성하여 문의할 수 있습니다
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-text-gray mt-5 text-[12px] lg:mt-6 lg:text-[13px]">
                  * 문의 접수 후 영업일 기준 1~2일 내 답변드립니다.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <ScrollReveal distance={30} duration={0.5}>
          <div className="pb-12 lg:pb-16">
            <div className="rounded-4 bg-[#F8F8F8] px-5 py-5 lg:px-10 lg:py-7">
              <p className="text-text-secondary text-[13px] leading-5.5 lg:text-[14px] lg:leading-6">
                픽셀 이용 중 불편한 점이나 궁금한 사항이 있다면 아래 구글폼을 작성하시거나,{" "}
                <span className="text-primary font-medium">picsel.team@gmail.com</span> 으로
                언제든지 문의주세요.
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
        </ScrollReveal>
      </Container>
    </section>
  );
}
