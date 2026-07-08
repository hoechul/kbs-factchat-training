"use client";

import { useState } from "react";
import type { UseCase } from "@/lib/curriculum";

const LEVEL_STYLE: Record<string, string> = {
  입문: "bg-mint/10 text-emerald-600 border-emerald-200",
  기초: "bg-brand/10 text-brand border-red-200",
  중급: "bg-violet/10 text-violet border-violet-200",
};

export default function UseCaseCard({ uc }: { uc: UseCase }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(uc.prompt.body);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = uc.prompt.body;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div
      className={`overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:shadow-md ${
        open ? "border-brand/40 ring-1 ring-brand/20" : "border-slate-200"
      }`}
    >
      {/* header (toggle) */}
      <div
        onClick={() => setOpen((v) => !v)}
        className="flex w-full cursor-pointer flex-col gap-4 p-6 sm:flex-row sm:items-start"
      >
        <span className="text-3xl leading-none">{uc.icon}</span>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${
                LEVEL_STYLE[uc.level] ?? ""
              }`}
            >
              {uc.level}
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500">
              ⏱ {uc.time}
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500">
              {uc.feature}
            </span>
          </div>
          <h3 className="mt-2 text-lg font-bold text-slate-900">{uc.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">
            {uc.goal}
          </p>
        </div>

        {/* 우측 상단 큰 버튼 */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen((v) => !v);
          }}
          aria-expanded={open}
          className={`flex shrink-0 items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-base font-bold shadow-sm transition ${
            open
              ? "border border-slate-300 bg-white text-slate-600 hover:bg-slate-50"
              : "bg-brand text-white shadow-brand/25 hover:bg-brand-deep"
          }`}
        >
          <span>{open ? "접기" : "사례 보기"}</span>
          <span className={`transition ${open ? "rotate-180" : ""}`}>▾</span>
        </button>
      </div>

      {/* body */}
      {open && (
        <div className="animate-fadeup border-t border-slate-100 px-6 pb-6 pt-5">
          {/* steps */}
          <div className="text-xs font-bold uppercase tracking-widest text-brand">
            따라 하기
          </div>
          <ol className="mt-3 space-y-2.5">
            {uc.steps.map((s, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-700">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{s}</span>
              </li>
            ))}
          </ol>

          {/* prompt */}
          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-bold text-slate-800">
                📋 붙여넣을 프롬프트 · {uc.prompt.title}
              </span>
              <button
                onClick={copy}
                className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  copied
                    ? "bg-mint/15 text-mint"
                    : "bg-brand text-white hover:bg-brand-deep"
                }`}
              >
                {copied ? "✓ 복사됨" : "복사"}
              </button>
            </div>
            <pre className="mt-3 max-h-64 overflow-auto whitespace-pre-wrap rounded-lg bg-white p-3 font-sans text-[13px] leading-relaxed text-slate-700 ring-1 ring-slate-200">
              {uc.prompt.body}
            </pre>
          </div>

          {/* result + tip */}
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4">
              <div className="text-xs font-bold text-emerald-700">
                ✅ 이런 결과가 나와요
              </div>
              <p className="mt-1 text-[13px] leading-relaxed text-slate-700">
                {uc.result}
              </p>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-4">
              <div className="text-xs font-bold text-amber-700">💡 초보자 팁</div>
              <p className="mt-1 text-[13px] leading-relaxed text-slate-700">
                {uc.tip}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
