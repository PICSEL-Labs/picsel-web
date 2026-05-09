import {
  MainBannerSection,
  PainpointSection,
  EmpathySection,
  FeatureBridgeSection,
  ProcessFlowSection,
  FaqSection,
  AppealSection,
} from "@widgets/home";

/**
 * 홈 페이지 메타데이터는 layout.tsx의 default(SITE_TITLE / SITE_DESCRIPTION / OG)를 그대로 사용.
 * 풀 타이틀이 이미 "픽셀 Picsel | 포토부스 검색 & 네컷사진 보관 앱" 형태라 template(`%s | PICSEL`) 미적용이 정답.
 */
export default function IntroPage() {
  return (
    <>
      <MainBannerSection />
      <PainpointSection />
      <EmpathySection />
      <FeatureBridgeSection />
      <ProcessFlowSection />
      <FaqSection />
      <AppealSection />
    </>
  );
}
