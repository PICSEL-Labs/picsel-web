import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PICSEL - 포토부스를 찾고-찍고-사진 보관까지 한번에!",
  description:
    "내가 고른 공간에서 내가 만든 순간을 남기다. 지도 기반 탐색, 날짜와 장소 기록, 보관함 기반 정리로 포토부스를 찾고-찍고-기억하는 전 과정을 픽셀과 함께.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
