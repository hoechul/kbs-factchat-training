"use client";

import { useState } from "react";
import type { Prompt } from "@/lib/curriculum";

export default function CopyPrompt({ prompt }: { prompt: Prompt }) {
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
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
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
        <button
          onClick={copy}
          className={`shrink-0 rounded-xl px-4 py-2 text-sm font-semibold transition ${
            copied
              ? "bg-mint/15 text-mint"
              : "bg-brand text-white hover:bg-brand-deep"
          }`}
        >
          {copied ? "✓ 복사됨" : "복사"}
        </button>
      </div>

      <pre className="mt-4 max-h-72 overflow-auto whitespace-pre-wrap rounded-xl bg-slate-50 p-4 font-sans text-[13.5px] leading-relaxed text-slate-700 ring-1 ring-slate-200">
        {prompt.body}
      </pre>

      {prompt.tip && (
        <p className="mt-3 flex gap-2 text-[13px] text-amber-600">
          <span>💡</span>
          <span>{prompt.tip}</span>
        </p>
      )}
    </div>
  );
}
