import type { Metadata } from "next";
import { TeamSection } from "@widgets/team";
import { PAGE_METADATA } from "@shared/constants/metadata";

/** SEO: 팀원 소개 페이지 메타데이터 */
export const metadata: Metadata = {
  title: PAGE_METADATA.team.title,
  description: PAGE_METADATA.team.description,
  openGraph: {
    title: PAGE_METADATA.team.title,
    description: PAGE_METADATA.team.description,
  },
};

export default function TeamPage() {
  return <TeamSection />;
}
