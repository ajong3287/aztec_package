import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AZTEC ECO - 친환경 포장재 전문 솔루션",
  description: "플라스틱 뽁뽁이를 대체하는 친환경 포장재로 고객의 브랜드 가치를 높이고 지구 환경을 보호하세요. 종이 완충재, 생분해성 포장재, 맞춤형 솔루션 제공.",
  keywords: ["친환경 포장재", "종이 뽁뽁이", "생분해성 포장재", "친환경 완충재", "지속가능한 포장"],
  authors: [{ name: "AZTEC ECO" }],
  openGraph: {
    title: "AZTEC ECO - 친환경 포장재 전문 솔루션",
    description: "플라스틱 뽁뽁이를 대체하는 친환경 포장재 전문 업체",
    url: "https://aztec-eco.com",
    siteName: "AZTEC ECO",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
