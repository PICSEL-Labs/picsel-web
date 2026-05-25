import Image from "next/image";

interface PicselWordmarkProps {
  width?: number;
  className?: string;
  priority?: boolean;
}

/**
 * PicselWordmark — PICSEL 핑크 워드마크 이미지
 * - PICSEL@4x.png 원본 비율(623:210) 유지하며 width prop으로 사이즈 조절
 */
export default function PicselWordmark({
  width = 623,
  className = "",
  priority = false,
}: PicselWordmarkProps) {
  // 디자인 자산 원본 비율 623:210 (≈ 2.97)
  const height = Math.round((width * 210) / 623);

  return (
    <Image
      src="/page_png/PICSEL@4x.png"
      alt="PICSEL"
      width={width}
      height={height}
      priority={priority}
      className={"h-auto w-full max-w-full select-none " + className}
      sizes={`${width}px`}
    />
  );
}
