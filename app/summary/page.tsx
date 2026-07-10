"use client";

import Link from "next/link";
import { CURRICULUM, LLM_COMPARE } from "@/lib/curriculum";

const CORE = [
  {
    icon: "🧭",
    label: "멀티 LLM",
    text: "GPT·Claude·Gemini를 한 화면에서 골라 쓴다. 일에 맞는 '전문가'를 바꿔 쓰는 것.",
  },
  {
    icon: "🎯",
    label: "모델 매칭",
    text: "요약·분석 = Claude · 최신 검색 = Gemini · 카피·창작 = GPT.",
  },
  {
    icon: "🔒",
    label: "안전 원칙",
    text: "개인정보는 가명 처리, 기밀은 올리지 않기. 방송 사실은 사람이 최종 확인.",
  },
];

const ACTIONS = [
  "매주 반복하는 업무 1개를 골라 나만의 챗봇 또는 프롬프트로 만든다.",
  "같은 질문을 두 모델에 넣어 답을 비교(교차 검증)하는 습관을 들인다.",
  "붙여넣기 전 개인정보는 가명 처리하고, 출처는 원문으로 재확인한다.",
];

export default function SummaryPage() {
  return (
    <main className="min-h-screen bg-[#e7f1ea] py-8 print:bg-white print:py-0">
      {/* ── 상단 컨트롤 (인쇄 시 숨김) ── */}
      <div className="no-print mx-auto mb-6 flex max-w-[820px] items-center justify-between px-5">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-50"
        >
          ← 교육 페이지로
        </Link>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-sm shadow-brand/25 transition hover:bg-brand-deep"
        >
          ⬇ PDF 다운로드 / 인쇄
        </button>
      </div>

      {/* ── A4 요약지 ── */}
      <article className="print-page mx-auto max-w-[820px] bg-white px-10 py-9 shadow-sm ring-1 ring-slate-200 print:max-w-none print:px-0 print:py-0 print:shadow-none print:ring-0">
        {/* header */}
        <header className="flex items-start justify-between border-b-2 border-brand pb-4">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-brand">
              <span className="h-2 w-2 rounded-full bg-brand" />
              1장 요약 · Cheat Sheet
            </div>
            <h1 className="mt-2 text-2xl font-black tracking-tight text-slate-900">
              KBS 카이로스챗 활용 교육
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              방송 실무, 멀티 LLM으로 더 빠르고 정확하게
            </p>
          </div>
          <div className="shrink-0 text-right text-[11px] leading-relaxed text-slate-500">
            <div className="font-semibold text-slate-700">2026. 7. 10 (금)</div>
            <div>총 2시간 · 이론 + 실습</div>
            <div>대상: KBS 전 구성원</div>
          </div>
        </header>

        {/* 핵심 3가지 */}
        <section className="mt-5">
          <h2 className="text-[13px] font-black text-slate-900">
            🔑 오늘의 핵심 3가지
          </h2>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {CORE.map((c) => (
              <div
                key={c.label}
                className="rounded-xl border border-slate-200 bg-slate-50 p-3"
              >
                <div className="text-[12px] font-bold text-slate-900">
                  {c.icon} {c.label}
                </div>
                <p className="mt-1 text-[11.5px] leading-snug text-slate-600">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 커리큘럼 4단계 */}
        <section className="mt-5">
          <h2 className="text-[13px] font-black text-slate-900">
            📚 2시간 학습 여정 (4단계)
          </h2>
          <div className="mt-2 space-y-1.5">
            {CURRICULUM.map((c, i) => (
              <div
                key={c.id}
                className="flex items-start gap-3 rounded-xl border border-slate-200 px-3 py-2"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-[12px] font-black text-brand">
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="text-[12.5px] font-bold text-slate-900">
                      {c.phase} · {c.title}
                    </span>
                    <span className="text-[10.5px] text-slate-400">
                      {c.time}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[11px] leading-snug text-slate-500">
                    {c.points.map((p) => p.head).join(" · ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LLM 비교 */}
        <section className="mt-5">
          <h2 className="text-[13px] font-black text-slate-900">
            🤖 주요 LLM 3종 — 일에 맞는 전문가 고르기
          </h2>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {LLM_COMPARE.map((m) => (
              <div
                key={m.name}
                className="rounded-xl border border-slate-200 p-3"
              >
                <div className="text-[12px] font-bold text-slate-900">
                  {m.name}
                </div>
                <div className="text-[10.5px] font-semibold text-brand">
                  {m.tag}
                </div>
                <p className="mt-1 text-[11px] leading-snug text-slate-600">
                  <span className="font-semibold text-slate-700">추천:</span>{" "}
                  {m.best}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 오늘의 액션 */}
        <section className="mt-5">
          <h2 className="text-[13px] font-black text-slate-900">
            ✅ 내일 바로 실천할 것
          </h2>
          <ol className="mt-2 space-y-1.5">
            {ACTIONS.map((a, i) => (
              <li
                key={i}
                className="flex gap-2 text-[12px] leading-snug text-slate-700"
              >
                <span className="font-black text-brand">{i + 1}.</span>
                <span>{a}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* footer */}
        <footer className="mt-6 border-t border-slate-200 pt-3 text-[10.5px] text-slate-400">
          KBS 임직원 대상 카이로스챗(KairosChat) 활용 교육 · 교육용 강의교안 ·
          콘텐츠는 카이로스챗 공식 문서를 참고해 작성되었습니다.
        </footer>
      </article>

      {/* 인쇄 안내 (인쇄 시 숨김) */}
      <p className="no-print mx-auto mt-5 max-w-[820px] px-5 text-center text-xs text-slate-400">
        💡 [PDF 다운로드] → 인쇄 대화상자에서 <b>대상: PDF로 저장</b>을 선택하면
        1장 요약본이 PDF로 저장됩니다.
      </p>
    </main>
  );
}
