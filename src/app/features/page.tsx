import type { Metadata } from "next";
import { FeaturesSection } from "@widgets/features";
import { PAGE_METADATA } from "@shared/constants/metadata";

/** SEO: 주요 기능 페이지 메타데이터 */
export const metadata: Metadata = {
  title: PAGE_METADATA.features.title,
  description: PAGE_METADATA.features.description,
  openGraph: {
    title: PAGE_METADATA.features.title,
    description: PAGE_METADATA.features.description,
  },
};

export default function FeaturesPage() {
  return <FeaturesSection />;
}
