interface PhoneMockupProps {
  /** 스크린 영역 라벨 (스크린리더용, 실제 에셋 업로드 전까지 빈 화면) */
  screenLabel?: string;
  className?: string;
}

/**
 * PhoneMockup — iPhone 형태의 디바이스 목업
 * 모바일 234×480 / 데스크탑 332×682 사이즈, 노치 포함
 * 스크린은 실제 앱 스크린샷 에셋 업로드 후 배경 이미지로 교체 예정
 */
export default function PhoneMockup({ screenLabel, className = "" }: PhoneMockupProps) {
  return (
    <div className={`relative h-120 w-58.5 shrink-0 lg:h-170.5 lg:w-83 ${className}`}>
      <div className="bg-bg-dark relative h-full w-full rounded-[44px] p-1.5 shadow-[-12px_22px_32px_rgba(0,0,0,0.18),0_2px_8px_rgba(0,0,0,0.1)] lg:rounded-[56px] lg:p-2">
        <div
          role="img"
          aria-label={screenLabel}
          className="h-full w-full overflow-hidden rounded-[38px] bg-pink-50 lg:rounded-[48px]"
        />
        <div className="bg-bg-dark absolute top-1.5 left-1/2 h-4.5 w-20 -translate-x-1/2 rounded-b-[14px] lg:top-2 lg:h-6 lg:w-27.5" />
      </div>
    </div>
  );
}
