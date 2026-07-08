import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KBS 팩트챗(FactChat) 활용 교육 | 2시간 완성 실무 과정",
  description:
    "KBS 임직원을 위한 멀티 LLM 플랫폼 '팩트챗' 실무 활용 교육. 멀티 LLM 개념부터 나만의 챗봇·RAG 구축, 방송 실무 프롬프트, 섹션별 퀴즈까지 2시간 완성 강의교안.",
  keywords: [
    "KBS",
    "팩트챗",
    "FactChat",
    "멀티 LLM",
    "생성형 AI 교육",
    "챗봇 만들기",
    "RAG",
    "프롬프트 엔지니어링",
  ],
  openGraph: {
    title: "KBS 팩트챗 활용 교육 · 2시간 완성",
    description:
      "멀티 LLM부터 나만의 챗봇·RAG까지, 방송 실무에 바로 쓰는 팩트챗 교육 커리큘럼.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
