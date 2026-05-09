import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@widgets/layout";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  SEO_KEYWORDS,
} from "@shared/constants/metadata";
import { generateWebAppJsonLd, generateOrganizationJsonLd } from "@shared/lib/seo";

/**
 * 전역 메타데이터
 * - metadataBase: OG 이미지 등 상대 경로의 기준 URL
 * - title.template: 서브 페이지 title에 ' | PICSEL' 자동 부착 (홈은 default 사용)
 * - openGraph: 카카오톡/SNS 공유 시 표시되는 정보 (이미지는 src/app/opengraph-image.png가 자동 적용)
 * - icons: src/app/{favicon.ico, icon.png, apple-icon.png}로 자동 처리되므로 명시 불필요
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [...SEO_KEYWORDS],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  alternates: {
    canonical: SITE_URL,
  },
  // 검색엔진 사이트 소유 확인
  // - google: picsel.team@gmail.com / Google Search Console
  // - naver:  you8753@naver.com / 네이버 웹마스터도구
  verification: {
    google: "OWbWnR3SDLBR5jRi2ZkceRTlhXCfx1S0gFgk19Qvadc",
    other: {
      "naver-site-verification": "a8dfc0574b62684001c582c7df8c9f588e898f5e",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {/* SEO: 전역 JSON-LD 구조화 데이터 (WebApplication + Organization) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([generateWebAppJsonLd(), generateOrganizationJsonLd()]),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
