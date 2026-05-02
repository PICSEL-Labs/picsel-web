interface PhoneMockupProps {
  /** 스크린 영역 placeholder 라벨 (실제 에셋 업로드 전까지만 사용) */
  screenLabel?: string;
  className?: string;
}

/**
 * iPhone 13 미디엄 사이즈 목업 (332×682)
 * TODO: 실제 디바이스 프레임 + 스크린 이미지 에셋 업로드 후 background image 교체
 */
export default function PhoneMockup({
  screenLabel = "App Screen",
  className = "",
}: PhoneMockupProps) {
  return (
    <div className={`relative h-[480px] w-[234px] shrink-0 lg:h-[682px] lg:w-[332px] ${className}`}>
      {/* Phone body */}
      <div className="bg-bg-dark relative h-full w-full rounded-[44px] p-[6px] shadow-[-12px_22px_32px_rgba(0,0,0,0.18),0_2px_8px_rgba(0,0,0,0.1)] lg:rounded-[56px] lg:p-[8px]">
        {/* Screen */}
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[38px] bg-pink-50 lg:rounded-[48px]">
          <span className="text-text-secondary text-center text-[12px] leading-relaxed lg:text-[14px]">
            {screenLabel}
            <br />
            (TODO: 에셋)
          </span>
        </div>
        {/* Notch */}
        <div className="bg-bg-dark absolute top-[6px] left-1/2 h-[18px] w-[80px] -translate-x-1/2 rounded-b-[14px] lg:top-[8px] lg:h-[24px] lg:w-[110px]" />
      </div>
    </div>
  );
}
