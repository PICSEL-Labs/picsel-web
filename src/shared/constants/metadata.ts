/**
 * SEO 메타데이터 상수
 * - 각 페이지의 <title>, <meta description>, Open Graph 태그에 사용
 * - SITE_URL은 sitemap.xml, robots.txt, JSON-LD 구조화 데이터에도 참조됨
 */

export const SITE_URL = "https://picsel-web.pages.dev";

export const SITE_NAME = "PICSEL";

/** 홈/기본 페이지에 노출되는 풀 타이틀 (검색결과 카드 첫 줄) */
export const SITE_TITLE = "픽셀 Picsel | 포토부스 검색 & 네컷사진 보관 앱";

export const SITE_DESCRIPTION =
  "포토이즘, 인생네컷, 포토그레이 위치 등 전국 포토부스 통합 지도에서 한 번에 검색하고 네컷사진을 쉽게 보관하세요. 포토부스 검색 & 네컷사진 보관 앱, 픽셀.";

/** 공식 연락처/소셜 (Organization JSON-LD, footer 등에서 참조) */
export const CONTACT_EMAIL = "picsel.team@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/picsel_kr";

/** App Store 링크 (WebApplication JSON-LD, 다운로드 버튼에 참조) — iOS only */
export const APP_STORE_URL =
  "https://apps.apple.com/kr/app/picsel-%ED%94%BD%EC%85%80-%ED%8F%AC%ED%86%A0%EB%B6%80%EC%8A%A4-%EA%B2%80%EC%83%89-%EB%84%A4%EC%BB%B7%EC%82%AC%EC%A7%84-%EB%B3%B4%EA%B4%80/id6745767592";

/**
 * 타겟 SEO 키워드 (마케팅 협의안 기준)
 * - 1순위: 핵심 검색 의도 키워드
 * - 2순위: 확장 키워드
 * - 3순위: 브랜드 조합 키워드
 *
 * 참고: meta keywords의 SEO 가중치는 낮음. 본문/제목/설명에 자연스럽게 녹이는 게 핵심.
 */
export const SEO_KEYWORDS = [
  // 1순위
  "인생네컷 보관",
  "인생네컷 저장",
  "인생네컷 앨범",
  "인생네컷 정리",
  "네컷사진 보관",
  "네컷사진 저장",
  "네컷사진 앨범",
  "내 주변 포토부스",
  "포토부스 지도",
  "5분 거리 인생네컷",
  // 2순위
  "인생네컷 사진 보관",
  "인생네컷 사진 저장",
  "인생네컷 사진 정리",
  "인생네컷 사진 앨범",
  "네컷사진 기록",
  "네컷사진 정리",
  "포토부스 위치 찾기",
  "포토부스 지도 검색",
  "포토부스 통합지도",
  "포토부스 매장 찾기",
  // 3순위
  "내 주변 인생네컷",
  "내 주변 포토이즘 위치 찾기",
  "내 주변 하루필름 위치 찾기",
  "근처 포토그레이 위치 찾기",
  "근처 포토시그니처 위치 찾기",
  "근처 포토이즘 위치",
  "근처 하루필름 위치",
  "포토이즘 사진 보관",
  "하루필름 사진 보관",
  "포토그레이 사진 보관",
] as const;

/**
 * 페이지별 메타데이터
 * - 각 page.tsx에서 Next.js Metadata API로 export
 * - title은 layout.tsx의 template('%s | PICSEL')과 결합됨 (홈은 default 사용)
 */
export const PAGE_METADATA = {
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
