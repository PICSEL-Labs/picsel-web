"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container, DownloadButton } from "@shared/ui";

/**
 * MainBannerSection — 홈 히어로 영역
 * 좌측 메인 앱 비주얼 + 우측 카피/CTA(App Store 다운로드 버튼·QR) 구성
 */
export default function MainBannerSection() {
  return (
    <section className="bg-bg-dark pt-navbar lg:pt-navbar-lg relative overflow-hidden">
      <Container className="relative flex flex-col items-center gap-10 pt-12 pb-20 lg:flex-row lg:items-center lg:justify-center lg:gap-10 lg:pt-0 lg:pb-20">
        <motion.div
          className="relative z-10 h-100 w-70 shrink-0 sm:h-125 sm:w-110 lg:h-160 lg:w-140"
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

        <div className="relative z-10 flex w-full flex-col items-center gap-8 lg:w-[450px] lg:items-end lg:gap-10 lg:pb-10">
          <div className="flex w-full flex-col items-center gap-6 lg:items-end lg:gap-8">
            <div className="relative w-full">
              {/* sparkle 하단이 "포토부스" 상단과 살짝 겹치도록 -top-9 오프셋 */}
              <Image
                src="/icon/icon-sparkle-double.png"
                alt=""
                aria-hidden
                width={64}
                height={72}
                className="absolute -top-7 -left-2 z-10 hidden h-12 w-auto lg:-top-11 lg:left-[calc(50%-120px)] lg:block lg:h-18"
              />
              <Image
                src="/icon/icon-sparkle-single.png"
                alt=""
                aria-hidden
                width={48}
                height={48}
                className="absolute top-[42%] right-6 z-10 hidden h-9 w-auto lg:top-12 lg:right-auto lg:left-[calc(50%+128px)] lg:block lg:h-12"
              />

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

            <motion.div
              className="w-full text-center text-[14px] leading-normal font-bold text-pink-200 lg:text-right lg:text-[16px]"
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

          <motion.div
            className="flex items-start justify-center gap-[23px] lg:justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <DownloadButton variant="primary" />

            <div className="h-16 w-16 overflow-hidden rounded-lg bg-white lg:h-20 lg:w-20">
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
