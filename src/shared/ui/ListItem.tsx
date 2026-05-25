"use client";

import { useState, type ReactNode } from "react";

interface ListItemProps {
  question: ReactNode;
  answer: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

/**
 * ListItem — 펼침 가능한 FAQ 행
 * 헤더 클릭 시 답변 영역 토글, 우측 화살표 아이콘이 상하 회전으로 상태 표현
 */
export default function ListItem({
  question,
  answer,
  defaultOpen = false,
  className = "",
}: ListItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={"bg-bg-card overflow-hidden rounded-lg" + (className ? " " + className : "")}>
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[16px] font-bold text-white transition-colors hover:bg-white/5"
      >
        <span className="flex-1">{question}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
          className={"text-primary shrink-0 transition-transform " + (isOpen ? "rotate-180" : "")}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {isOpen && (
        <div className="text-text-light-gray border-t border-white/10 px-6 py-5 text-[14px] leading-relaxed font-normal">
          {answer}
        </div>
      )}
    </div>
  );
}
