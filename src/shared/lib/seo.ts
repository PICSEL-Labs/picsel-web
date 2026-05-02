/**
 * SEO 구조화 데이터(JSON-LD) 생성 헬퍼
 * - layout.tsx: WebApplication + Organization (전역)
 * - contact/page.tsx: FAQPage (Google FAQ 리치 스니펫)
 * - 각 함수가 반환하는 객체를 JSON.stringify하여 <script type="application/ld+json">에 삽입
 */

import { SITE_NAME, SITE_URL } from "@shared/constants/metadata";

/** Google 검색에 앱 정보 표시 (WebApplication 스키마) */
export function generateWebAppJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: SITE_NAME,
    description: "포토부스를 찾고-찍고-사진 보관까지 한번에!",
    applicationCategory: "PhotographyApplication",
    operatingSystem: "iOS, Android",
    // TODO: 도메인 확정 후 실제 URL로 교체
    url: SITE_URL,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KRW",
    },
  };
}

/** Google 검색에 조직 정보 표시 (Organization 스키마) */
export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Team PICSEL",
    // TODO: 도메인 확정 후 실제 URL로 교체
    url: SITE_URL,
    email: "picsel.team@gmail.com",
  };
}

/** Google 검색 결과에 FAQ 리치 스니펫 노출 (FAQPage 스키마) */
export function generateFAQJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
