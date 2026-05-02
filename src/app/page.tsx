import type { Metadata } from "next";
import {
  MainBannerSection,
  PainpointSection,
  EmpathySection,
  FeatureBridgeSection,
  ProcessFlowSection,
  FaqSection,
  AppealSection,
} from "@widgets/home";
import { PAGE_METADATA } from "@shared/constants/metadata";

/** SEO: 홈 페이지 메타데이터 — title.template에 의해 'PICSEL - ...' 형태로 렌더링 */
export const metadata: Metadata = {
  title: PAGE_METADATA.home.title,
  description: PAGE_METADATA.home.description,
  openGraph: {
    title: PAGE_METADATA.home.title,
    description: PAGE_METADATA.home.description,
  },
};

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
