/**
 * robots.txt 자동 생성
 * - 검색 엔진 크롤러의 접근 규칙 정의
 * - sitemap.xml 위치를 크롤러에 알려줌
 */

import type { MetadataRoute } from "next";
import { SITE_URL } from "@shared/constants/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
