"use client";

import Tab from "./Tab";

interface TabBarProps {
  items: readonly string[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

/**
 * TabBar — 탭 그룹 (선택된 항목 1개)
 * items 배열을 받아 가로 Tab 묶음으로 렌더, 하단 회색 디바이더 라인 포함
 */
export default function TabBar({ items, value, onChange, className = "" }: TabBarProps) {
  return (
    <div
      role="tablist"
      className={"relative flex items-center gap-2 border-b border-white/10" + (className ? " " + className : "")}
    >
      {items.map((item) => (
        <Tab key={item} selected={item === value} onClick={() => onChange(item)}>
          {item}
        </Tab>
      ))}
    </div>
  );
}
