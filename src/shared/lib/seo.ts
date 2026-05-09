/**
 * SEO 구조화 데이터(JSON-LD) 생성 헬퍼
 * - layout.tsx: WebApplication + Organization (전역)
 * - contact/page.tsx: FAQPage (Google FAQ 리치 스니펫)
 * - 각 함수가 반환하는 객체를 JSON.stringify하여 <script type="application/ld+json">에 삽입
 */

import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  APP_STORE_URL,
} from "@shared/constants/metadata";

/** Google 검색에 앱 정보 표시 (WebApplication 스키마) — iOS 단독 출시 */
export function generateWebAppJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    applicationCategory: "PhotographyApplication",
    operatingSystem: "iOS",
    url: SITE_URL,
    installUrl: APP_STORE_URL,
    downloadUrl: APP_STORE_URL,
    sameAs: [APP_STORE_URL],
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
    url: SITE_URL,
    email: CONTACT_EMAIL,
    sameAs: [INSTAGRAM_URL],
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
