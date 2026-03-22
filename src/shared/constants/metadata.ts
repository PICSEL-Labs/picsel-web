/**
 * SEO 메타데이터 상수
 * - 각 페이지의 <title>, <meta description>, Open Graph 태그에 사용
 * - SITE_URL은 sitemap.xml, robots.txt, JSON-LD 구조화 데이터에도 참조됨
 */

// TODO: 도메인 확정 후 실제 URL로 교체
export const SITE_URL = "https://picsel.app";

export const SITE_NAME = "PICSEL";

export const SITE_DESCRIPTION =
  "내가 고른 공간에서 내가 만든 순간을 남기다. 지도 기반 탐색, 날짜와 장소 기록, 보관함 기반 정리로 포토부스를 찾고-찍고-기억하는 전 과정을 픽셀과 함께.";

/**
 * 페이지별 메타데이터
 * - 각 page.tsx에서 Next.js Metadata API로 export
 * - title은 layout.tsx의 template('%s | PICSEL')과 결합됨
 */
export const PAGE_METADATA = {
  home: {
    title: "포토부스를 찾고-찍고-사진 보관까지 한번에!",
    description: SITE_DESCRIPTION,
  },
  features: {
    title: "주요 기능",
    description:
      "포토부스 지도 탐색, QR 사진 업로드, 픽셀북 보관함까지. PICSEL의 핵심 기능을 소개합니다.",
  },
  team: {
    title: "팀원 소개",
    description:
      "포토부스에서 찍은 특별한 순간을 더 오래 남길 수 있도록 Picsel을 함께 만들어가는 Team PICSEL을 소개합니다.",
  },
  contact: {
    title: "문의하기",
    description: "PICSEL 서비스 이용에 관한 FAQ, 공지사항, 1:1 문의를 확인하세요.",
  },
} as const;
