"use client";

import { motion } from "motion/react";
import Container from "./Container";
import ScrollReveal from "./ScrollReveal";
import StaggerContainer, { staggerChildVariants } from "./StaggerContainer";

const teamMembers = [
  {
    role: "Product Manager",
    nameEn: "Kim Kyeongjin",
    nameKo: "김경진",
    tags: ["#ENTP", "#서비스기획"],
    emoji: "👩‍💼",
  },
  {
    role: "Product Designer",
    nameEn: "Jeong Daeun",
    nameKo: "정다은",
    tags: ["#INFP", "#UXUI디자인"],
    emoji: "👩‍🎨",
  },
  {
    role: "Frontend Developer",
    nameEn: "Kim Hyunjung",
    nameKo: "김현중",
    tags: ["#ENTJ", "#프론트엔드"],
    emoji: "👨‍💻",
  },
  {
    role: "Frontend Developer",
    nameEn: "Chae Surin",
    nameKo: "채수린",
    tags: ["#ESTP", "#프론트엔드"],
    emoji: "👩‍💻",
  },
  {
    role: "Backend Developer",
    nameEn: "Cho Junhee",
    nameKo: "조준희",
    tags: ["#ENFP", "#백엔드"],
    emoji: "🧑‍💻",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-black pt-30 pb-15 lg:pt-42.5 lg:pb-20">
      <Container>
        {/* Header */}
        <StaggerContainer className="mb-10 text-center lg:mb-15" staggerDelay={0.15}>
          <motion.h2
            className="text-[32px] leading-12 font-bold lg:text-[40px] lg:leading-14"
            variants={staggerChildVariants}
          >
            <span className="text-white">Team </span>
            <span className="text-primary">PICSEL</span>
          </motion.h2>
          <motion.p
            className="text-text-gray mt-4 text-[14px] leading-6 lg:mt-6 lg:text-[16px] lg:leading-6.5"
            variants={staggerChildVariants}
          >
            안녕하세요.
            <br />
            포토부스에서 찍은 특별한 순간을 더 오래 남길 수 있도록
            <br />
            Picsel을 함께 만들어가는 Team Picsel입니다.
          </motion.p>
          <motion.p
            className="text-text-gray mt-3 text-[14px] lg:mt-4 lg:text-[16px]"
            variants={staggerChildVariants}
          >
            앞으로의 Picsel의 꾸준한 성장을 응원해주세요💗
          </motion.p>
          <motion.div variants={staggerChildVariants}>
            <button className="bg-primary hover:bg-primary-dark mt-5 inline-flex items-center gap-2 rounded-full px-5 py-3 text-[14px] font-medium text-white transition-colors lg:mt-6">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram 구경가기
            </button>
          </motion.div>
        </StaggerContainer>

        {/* Team Cards */}
        <div className="space-y-10">
          {teamMembers.map((member, i) => (
            <ScrollReveal key={member.nameEn} delay={i * 0.1} distance={40}>
              <div className="relative">
                <div className="absolute -top-4.5 left-6 z-10 lg:left-11.75">
                  <span className="text-text-gray border-border-dark rounded-full border bg-black px-3 py-1.5 text-[12px] font-medium lg:text-[14px]">
                    {member.role}
                  </span>
                </div>
                <motion.div
                  className="bg-bg-card rounded-4 border-border-dark flex flex-col items-center gap-6 border p-6 transition-colors sm:flex-row sm:p-8 lg:gap-16 lg:p-16"
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(255, 45, 120, 0.5)",
                  }}
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <motion.div
                    className="rounded-4 flex h-30 w-30 shrink-0 items-center justify-center bg-[#2C2C2E] sm:h-40 sm:w-40 lg:h-60 lg:w-60"
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <span className="text-[48px] sm:text-[56px] lg:text-[80px]">
                      {member.emoji}
                    </span>
                  </motion.div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-[18px] font-bold text-white sm:text-[22px] lg:text-[26px]">
                      {member.nameEn}
                    </h3>
                    <p className="text-primary mt-1 text-[16px] font-bold lg:text-[20px]">
                      {member.nameKo}
                    </p>
                    <div className="mt-3 flex justify-center gap-2 sm:justify-start lg:mt-4">
                      {member.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-primary/20 text-primary rounded-full px-3 py-1.5 text-[11px] font-semibold lg:px-4 lg:py-2 lg:text-[12px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
