"use client";

import { motion } from "motion/react";
import Container from "./Container";
import TwinkleStar from "./TwinkleStar";
import StaggerContainer, { staggerChildVariants } from "./StaggerContainer";

export default function MeaningSection() {
  return (
    <section className="bg-linear-to-b from-black to-[#333333]">
      <Container className="py-20 lg:py-40">
        <StaggerContainer staggerDelay={0.2}>
          {/* Headline */}
          <motion.div className="text-center" variants={staggerChildVariants}>
            <h2 className="text-[28px] leading-10.5 font-bold text-white lg:text-[40px] lg:leading-14">
              <span className="text-primary">픽셀</span>은 어떤 의미인가요?
            </h2>
          </motion.div>

          {/* Star */}
          <motion.div
            className="mt-7.5 flex justify-center lg:mt-10"
            variants={staggerChildVariants}
          >
            <TwinkleStar size={110} />
          </motion.div>

          {/* Body */}
          <motion.div className="mt-7.5 text-center lg:mt-10" variants={staggerChildVariants}>
            <div className="flex flex-wrap items-center justify-center gap-0">
              <span className="text-primary text-[16px] font-bold lg:text-[20px]">PICSEL</span>
              <span className="text-[16px] text-white lg:text-[20px]">
                은 Picture와 Select의 합성어로,
              </span>
            </div>
            <p className="mt-3 text-[16px] text-white lg:text-[20px]">
              <span className="relative inline-block">
                <span className="relative z-10 font-bold">
                  포토부스에서 셔터가 눌리는 찰나의 순간
                </span>
                <span className="from-primary/60 to-primary-light/60 absolute right-0 bottom-0 left-0 z-0 h-2 bg-linear-to-r" />
              </span>
              을 의미해요
            </p>
          </motion.div>
        </StaggerContainer>
      </Container>
    </section>
  );
}
