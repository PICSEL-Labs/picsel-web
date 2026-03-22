import type { Metadata } from "next";
import { ContactSection } from "@widgets/contact";
import { PAGE_METADATA } from "@shared/constants/metadata";
import { FAQ_ITEMS } from "@shared/constants/contact-data";
import { generateFAQJsonLd } from "@shared/lib/seo";

/** SEO: 문의하기 페이지 메타데이터 */
export const metadata: Metadata = {
  title: PAGE_METADATA.contact.title,
  description: PAGE_METADATA.contact.description,
  openGraph: {
    title: PAGE_METADATA.contact.title,
    description: PAGE_METADATA.contact.description,
  },
};

const ALL_FAQ_ITEMS = Object.values(FAQ_ITEMS).flat();

export default function ContactPage() {
  return (
    <>
      {/* SEO: FAQ JSON-LD — Google 검색 결과에 FAQ 리치 스니펫 노출 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQJsonLd(ALL_FAQ_ITEMS)),
        }}
      />
      <ContactSection />
    </>
  );
}
