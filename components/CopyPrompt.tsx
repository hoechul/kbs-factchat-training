"use client";

import { useState } from "react";
import type { Prompt } from "@/lib/curriculum";

export default function CopyPrompt({ prompt }: { prompt: Prompt }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.body);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard 미지원 환경 fallback
      const ta = document.createElement("textarea");
      ta.value = prompt.body;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md ${
        open ? "border-brand/40 ring-1 ring-brand/20" : "border-slate-200"
      }`}
    >
      {/* header (제목 클릭 → 펼치기) */}
      <div
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex cursor-pointer items-start justify-between gap-4 p-5"
      >
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-brand">
              실무 프롬프트
            </span>
          </div>
          <h4 className="mt-1 text-base font-bold text-slate-900">
            {prompt.title}
          </h4>
          <p className="mt-1 text-sm text-slate-500">🎬 {prompt.scene}</p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {open && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                copy();
              }}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                copied
                  ? "bg-mint/15 text-mint"
                  : "bg-brand text-white hover:bg-brand-deep"
              }`}
            >
              {copied ? "✓ 복사됨" : "복사"}
            </button>
          )}
          <span className="flex items-center gap-1 rounded-lg px-2 py-2 text-sm font-semibold text-slate-500">
            <span className="hidden sm:inline">{open ? "접기" : "펼치기"}</span>
            <span className={`transition ${open ? "rotate-180" : ""}`}>▾</span>
          </span>
        </div>
      </div>

      {/* body (펼쳤을 때만) */}
      {open && (
        <div className="animate-fadeup border-t border-slate-100 px-5 pb-5 pt-4">
          <pre className="max-h-72 overflow-auto whitespace-pre-wrap rounded-xl bg-slate-50 p-4 font-sans text-[13.5px] leading-relaxed text-slate-700 ring-1 ring-slate-200">
            {prompt.body}
          </pre>

          {prompt.tip && (
            <p className="mt-3 flex gap-2 text-[13px] text-amber-600">
              <span>💡</span>
              <span>{prompt.tip}</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
