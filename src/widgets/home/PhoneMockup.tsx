interface PhoneMockupProps {
  /** 스크린 영역 placeholder 라벨 (실제 에셋 업로드 전까지만 사용) */
  screenLabel?: string;
  className?: string;
}

/**
 * PhoneMockup — iPhone 형태의 디바이스 목업
 * 모바일 234×480 / 데스크탑 332×682 사이즈, 노치 포함
 * TODO: 실제 디바이스 프레임 + 스크린 이미지 에셋 업로드 후 배경 이미지로 교체
 */
export default function PhoneMockup({
  screenLabel = "App Screen",
  className = "",
}: PhoneMockupProps) {
  return (
    <div className={`relative h-120 w-58.5 shrink-0 lg:h-170.5 lg:w-83 ${className}`}>
      <div className="bg-bg-dark relative h-full w-full rounded-[44px] p-1.5 shadow-[-12px_22px_32px_rgba(0,0,0,0.18),0_2px_8px_rgba(0,0,0,0.1)] lg:rounded-[56px] lg:p-2">
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[38px] bg-pink-50 lg:rounded-[48px]">
          <span className="text-text-secondary text-center text-[12px] leading-relaxed lg:text-[14px]">
            {screenLabel}
            <br />
            (TODO: 에셋)
          </span>
        </div>
        <div className="bg-bg-dark absolute top-1.5 left-1/2 h-4.5 w-20 -translate-x-1/2 rounded-b-[14px] lg:top-2 lg:h-6 lg:w-27.5" />
      </div>
    </div>
  );
}
