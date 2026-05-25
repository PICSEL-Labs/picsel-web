import Image from "next/image";
import { APP_STORE_URL } from "@shared/constants/metadata";

type Variant = "primary" | "white";

interface DownloadButtonProps {
  variant?: Variant;
  className?: string;
}

const ASSET: Record<Variant, string> = {
  primary: "/page_svg/download-btn-primary.svg",
  white: "/page_svg/download-btn-white.svg",
};

/**
 * DownloadButton — App Store 다운로드 CTA 버튼
 * - primary(핑크 배경) / white(흰 배경) 두 가지 variant
 * - public/page_svg의 디자인 자산 SVG를 그대로 사용
 */
export default function DownloadButton({
  variant = "primary",
  className = "",
}: DownloadButtonProps) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="App Store에서 PICSEL 다운로드"
      className={
        "inline-block transition-transform hover:scale-[1.02] active:scale-[0.98]" +
        (className ? " " + className : "")
      }
    >
      <Image src={ASSET[variant]} alt="App 다운로드" width={240} height={56} priority />
    </a>
  );
}
