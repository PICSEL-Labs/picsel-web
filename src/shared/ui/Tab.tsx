"use client";

import type { MouseEventHandler, ReactNode } from "react";

interface TabProps {
  selected?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
}

/**
 * Tab — 단일 탭 버튼
 * selected=true 시 핑크 텍스트 + 하단 핑크 인디케이터, false 시 회색 텍스트
 */
export default function Tab({ selected = false, onClick, children, className = "" }: TabProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "relative px-4 py-3 text-[16px] leading-none font-bold transition-colors " +
        (selected ? "text-primary" : "text-text-gray hover:text-text-light-gray") +
        (className ? " " + className : "")
      }
    >
      {children}
      <span
        aria-hidden
        className={
          "absolute right-0 -bottom-0.5 left-0 h-0.5 transition-colors " +
          (selected ? "bg-primary" : "bg-transparent")
        }
      />
    </button>
  );
}
