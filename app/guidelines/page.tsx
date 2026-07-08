"use client";

import Link from "next/link";
import {
  GL_META,
  GL_HISTORY,
  GL_NORMS,
  GL_RULES,
  GL_LANGUAGE,
  GL_APPENDIX,
  GL_SOURCES,
} from "@/lib/guidelines";

export default function GuidelinesPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-8 print:bg-white print:py-0">
      {/* ── 상단 컨트롤 (인쇄 시 숨김) ── */}
      <div className="no-print mx-auto mb-6 flex max-w-[840px] items-center justify-between px-5">
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

      {/* ── 문서 본문 ── */}
      <article className="print-page mx-auto max-w-[840px] bg-white px-11 py-10 shadow-sm ring-1 ring-slate-200 print:max-w-none print:px-0 print:py-0 print:shadow-none print:ring-0">
        {/* header */}
        <header className="border-b-2 border-brand pb-4">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-brand">
            <span className="h-2 w-2 rounded-full bg-brand" />
            참고 정리본 · Reference
          </div>
          <h1 className="mt-2 text-[26px] font-black leading-tight tracking-tight text-slate-900">
            {GL_META.title}
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            {GL_META.subtitle} · {GL_META.updated}
          </p>
        </header>

        {/* 면책 */}
        <div className="mt-4 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-[11.5px] leading-relaxed text-amber-800">
          <b>⚠️ 안내</b> — {GL_META.disclaimer}
        </div>

        {/* 연혁 */}
        <section className="mt-6">
          <h2 className="text-[14px] font-black text-slate-900">
            📌 KBS 방송제작 가이드라인 연혁
          </h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {GL_HISTORY.map((h) => (
              <div
                key={h.year}
                className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5"
              >
                <span className="text-[12px] font-black text-brand">
                  {h.year}
                </span>
                <span className="text-[11.5px] text-slate-600">{h.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 방송규범 6대 원칙 */}
        <section className="mt-6">
          <h2 className="text-[14px] font-black text-slate-900">
            ① KBS 방송규범 — 6대 원칙
          </h2>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {GL_NORMS.map((n, i) => (
              <div
                key={n.key}
                className="rounded-xl border border-slate-200 p-3"
              >
                <div className="text-[12.5px] font-bold text-slate-900">
                  {i + 1}. {n.key}
                </div>
                <p className="mt-1 text-[11px] leading-snug text-slate-600">
                  {n.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 보도·제작 핵심 준수사항 */}
        <section className="mt-6">
          <h2 className="text-[14px] font-black text-slate-900">
            ② 보도·제작 핵심 준수사항
          </h2>
          <div className="mt-2 space-y-2">
            {GL_RULES.map((r) => (
              <div
                key={r.title}
                className="rounded-xl border border-slate-200 p-3"
              >
                <div className="text-[12.5px] font-bold text-slate-900">
                  {r.icon} {r.title}
                </div>
                <ul className="mt-1.5 space-y-1">
                  {r.items.map((it, j) => (
                    <li
                      key={j}
                      className="flex gap-1.5 text-[11px] leading-snug text-slate-600"
                    >
                      <span className="text-brand">•</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 방송 표기·언어 규정 */}
        <section className="mt-6 break-inside-avoid">
          <h2 className="text-[14px] font-black text-slate-900">
            ③ 방송 표기·언어 규정
          </h2>
          <p className="mt-1 text-[10.5px] text-slate-400">
            방송통신심의위원회 「방송언어가이드라인」 및 국립국어원 어문규범 기준
          </p>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {GL_LANGUAGE.map((g) => (
              <div
                key={g.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-3"
              >
                <div className="text-[12.5px] font-bold text-slate-900">
                  {g.title}
                </div>
                <ul className="mt-1.5 space-y-1">
                  {g.items.map((it, j) => (
                    <li
                      key={j}
                      className="flex gap-1.5 text-[11px] leading-snug text-slate-600"
                    >
                      <span className="text-brand">•</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 부록 */}
        <section className="mt-6 break-inside-avoid">
          <h2 className="text-[14px] font-black text-slate-900">
            ④ 2020 개정본 부록 (수록 규정)
          </h2>
          <ul className="mt-2 space-y-1">
            {GL_APPENDIX.map((a, i) => (
              <li
                key={i}
                className="flex gap-2 text-[12px] leading-snug text-slate-700"
              >
                <span className="font-black text-brand">{i + 1}.</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 출처 */}
        <footer className="mt-7 break-inside-avoid border-t border-slate-200 pt-3">
          <div className="text-[11px] font-bold text-slate-500">📚 출처</div>
          <ul className="mt-1.5 space-y-1">
            {GL_SOURCES.map((s) => (
              <li key={s.url} className="text-[10.5px] leading-snug text-slate-500">
                • {s.name}
                <span className="ml-1 text-slate-400 print:inline">
                  ({s.url})
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[10px] text-slate-400">
            KBS 임직원 대상 팩트챗(FactChat) 활용 교육 · 참고용 비공식 정리본 ·
            원문은 KBS 사내 가이드라인을 확인하세요.
          </p>
        </footer>
      </article>

      <p className="no-print mx-auto mt-5 max-w-[840px] px-5 text-center text-xs text-slate-400">
        💡 [PDF 다운로드] → 인쇄 대화상자에서 <b>대상: PDF로 저장</b>을 선택하면
        문서가 PDF로 저장됩니다. (사내 RAG 학습 자료로 활용 가능)
      </p>
    </main>
  );
}
