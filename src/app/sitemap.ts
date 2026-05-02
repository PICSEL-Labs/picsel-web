/**
 * sitemap.xml 자동 생성
 * - Google Search Console에 등록하여 크롤링 효율 향상
 * - Next.js가 빌드 시 /sitemap.xml 경로로 자동 서빙
 */

import type { MetadataRoute } from "next";
import { SITE_URL } from "@shared/constants/metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_URL}/features`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/team`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
