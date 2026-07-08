"use client";

import type { MouseEventHandler, ReactNode } from "react";

interface TagProps {
  selected?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
}

/**
 * Tag — 알약형 필터 태그
 * Default(다크 배경 + 흰 텍스트) / Selected(흰 배경 + 핑크 텍스트)
 */
export default function Tag({ selected = false, onClick, children, className = "" }: TagProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={
        "rounded-full px-5 py-3 text-[14px] leading-none font-bold transition-colors " +
        (selected ? "text-primary bg-white" : "bg-bg-card text-white hover:bg-white/15") +
        (className ? " " + className : "")
      }
    >
      {children}
    </button>
  );
}
