import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@widgets/layout";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@shared/constants/metadata";
import { generateWebAppJsonLd, generateOrganizationJsonLd } from "@shared/lib/seo";

/**
 * 전역 메타데이터
 * - metadataBase: OG 이미지 등 상대 경로의 기준 URL
 * - title.template: 서브 페이지 title에 ' | PICSEL' 자동 부착
 * - openGraph: 카카오톡/SNS 공유 시 표시되는 정보
 */
// TODO: 도메인 확정 후 SITE_URL 교체
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - 포토부스를 찾고-찍고-사진 보관까지 한번에!`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: SITE_NAME,
    // TODO: OG 이미지 추가
  },
  twitter: {
    card: "summary_large_image",
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
