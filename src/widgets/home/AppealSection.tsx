"use client";

import { motion } from "motion/react";
import {
  Container,
  DownloadButton,
  StaggerContainer,
  TwinkleStar,
  staggerChildVariants,
} from "@shared/ui";

/**
 * AppealSection — 하단 클로징 CTA 섹션
 * 중앙 트윙클 + 핑크 헤드라인 + 본문 + App Store 다운로드 버튼 구성
 */
export default function AppealSection() {
  return (
    <section className="bg-bg-dark relative w-full overflow-hidden">
      <Container className="flex flex-col items-center gap-10 pt-10 pb-30 text-center lg:gap-15 lg:pt-10 lg:pb-50">
        <StaggerContainer staggerDelay={0.2}>
          <motion.div className="mx-auto flex justify-center" variants={staggerChildVariants}>
            <TwinkleStar size={140} />
          </motion.div>

          <motion.h2
            className="mt-10 text-[26px] leading-[1.4] font-extrabold text-white sm:text-[32px] lg:mt-15 lg:text-[40px]"
            variants={staggerChildVariants}
          >
            <span className="text-primary">순간을 더 잘 찾고,</span>
            <br />
            <span className="text-primary">더 잘 기억할 수 있도록</span>
          </motion.h2>

          <motion.p
            className="mt-6 text-[14px] leading-[1.6] font-bold text-pink-200 sm:text-[16px] lg:mt-10 lg:text-[20px]"
            variants={staggerChildVariants}
          >
            디지털 최소 단위인 픽셀이 모여 한 장의 사진이 되는 것처럼,
            <br />
            수많은 특별한 순간을 모아{" "}
            <span className="font-extrabold text-pink-50">나만의 포토부스 아카이브</span>를
            <br className="hidden sm:block" />
            함께 만들어봐요!
          </motion.p>

          <motion.div
            className="mt-10 flex justify-center lg:mt-15"
            variants={staggerChildVariants}
          >
            <DownloadButton variant="primary" />
          </motion.div>
        </StaggerContainer>
      </Container>
    </section>
  );
}
