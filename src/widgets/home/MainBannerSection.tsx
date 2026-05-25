"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container, DownloadButton } from "@shared/ui";

export default function MainBannerSection() {
  return (
    <section className="bg-bg-dark pt-navbar lg:pt-navbar-lg relative overflow-hidden">
      <Container className="relative flex flex-col items-center gap-10 pt-12 pb-20 lg:flex-row lg:items-center lg:justify-center lg:gap-10 lg:pt-0 lg:pb-20">
        {/* Hero main image — Figma: h-[640px] w-[560px] */}
        <motion.div
          className="relative z-10 h-[400px] w-[280px] shrink-0 sm:h-[500px] sm:w-[440px] lg:h-[640px] lg:w-[560px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src="/home/home-main-image.png"
            alt="픽셀 앱 메인 비주얼"
            width={560}
            height={640}
            priority
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Right column (4278:41422) — Figma: flex flex-col gap-[40px] items-end pb-[40px]
            H1 그룹 (4278:41423): gap-[32px] items-end w-[450px] */}
        <div className="relative z-10 flex w-full flex-col items-center gap-8 lg:w-[450px] lg:items-end lg:gap-10 lg:pb-10">
          {/* H1 그룹: Title 블록 + Sub Text, gap-[32px] */}
          <div className="flex w-full flex-col items-center gap-6 lg:items-end lg:gap-8">
            {/* Title 블록 (4278:41424) — flex flex-col items-start, 두 행 사이 gap 0 */}
            <div className="relative w-full">
              {/* Sparkle 좌상단 (4278:41425) — Figma: top-[-36px] left-[calc(50%-94.03px)], h-[72px] w-[63.934px]
                  sparkle 하단이 "포토부스" 상단과 살짝 겹치도록 -36px 오프셋 */}
              <Image
                src="/icon/icon-sparkle-double.png"
                alt=""
                aria-hidden
                width={64}
                height={72}
                className="absolute -top-7 -left-2 z-10 hidden h-[48px] w-auto lg:-top-9 lg:left-[calc(50%-140px)] lg:block lg:h-[72px]"
              />
              {/* Sparkle 우중간 (4278:41436) — Figma 기준 좌측으로 더 붙여 "검색"에 가깝게 */}
              <Image
                src="/icon/icon-sparkle-single.png"
                alt=""
                aria-hidden
                width={48}
                height={48}
                className="absolute top-[42%] right-6 z-10 hidden h-[36px] w-auto lg:top-[62px] lg:right-auto lg:left-[calc(50%+115px)] lg:block lg:h-[48px]"
              />

              {/* Title row 1 (4278:41426) — flex gap-[10px] h-[84px] items-end whitespace-nowrap */}
              <motion.h1
                className="flex items-baseline justify-center gap-2.5 leading-[1.4] whitespace-nowrap lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <span className="text-[28px] font-bold text-pink-50 sm:text-[34px] lg:text-[40px]">
                  포토부스
                </span>
                <span className="text-primary text-[36px] font-extrabold sm:text-[48px] lg:text-[56px]">
                  검색
                </span>
                <span className="text-[28px] font-bold text-pink-50 sm:text-[34px] lg:text-[40px]">
                  부터
                </span>
              </motion.h1>

              {/* Title row 2 (4278:41431) — flex gap-[10px] h-[84px] items-end justify-end w-full */}
              <motion.h1
                className="flex items-baseline justify-center gap-2.5 leading-[1.4] whitespace-nowrap lg:justify-end"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <span className="text-[28px] font-bold text-pink-50 sm:text-[34px] lg:text-[40px]">
                  네컷사진
                </span>
                <span className="text-primary text-[36px] font-extrabold sm:text-[48px] lg:text-[56px]">
                  보관
                </span>
                <span className="text-[28px] font-bold text-pink-50 sm:text-[34px] lg:text-[40px]">
                  까지
                </span>
              </motion.h1>
            </div>

            {/* Sub Text (4278:41437) — text-right, NanumSquareRound:Bold 16px leading-[1.5] color #fecddd
                강조 없음 (한번에/더 쉽게는 주변과 동일한 색/굵기), PICSEL만 #ff6c9a */}
            <motion.div
              className="w-full text-center text-[14px] leading-[1.5] font-bold text-pink-200 lg:text-right lg:text-[16px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p>포토이즘, 포토시그니처, 하루필름 등</p>
              <p>
                <span className="text-primary">PICSEL</span>에서 다양한 포토부스 위치를 한번에 찾고
              </p>
              <p>네컷사진을 더 쉽게 꺼내보세요!</p>
            </motion.div>
          </div>

          {/* CTA 그룹 (4278:41439) — Figma: flex gap-[23px] items-start */}
          <motion.div
            className="flex items-start justify-center gap-[23px] lg:justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <DownloadButton variant="primary" />

            <div className="h-[64px] w-[64px] overflow-hidden rounded-lg bg-white lg:h-20 lg:w-20">
              <Image
                src="/qr/iOSappstore_qr.png"
                alt="앱 다운로드 QR 코드"
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
