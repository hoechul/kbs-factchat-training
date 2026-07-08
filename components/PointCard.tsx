"use client";

import { useState } from "react";
import { POINT_EXAMPLES } from "@/lib/curriculum";

export default function PointCard({
  head,
  desc,
  index,
}: {
  head: string;
  desc: string;
  index: number;
}) {
  const ex = POINT_EXAMPLES[head];
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    if (!ex) return;
    try {
      await navigator.clipboard.writeText(ex.body);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = ex.body;
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
      className={`rounded-2xl border bg-white p-5 shadow-sm transition ${
        open ? "border-brand/40 ring-1 ring-brand/20" : "border-slate-200"
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-sm font-bold text-brand">
          {index + 1}
        </span>
        <div className="min-w-0 flex-1">
          <h4 className="font-bold text-slate-900">{head}</h4>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">{desc}</p>

          {ex && (
            <>
              {/* 펼치기 버튼 */}
              <button
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                className={`mt-3 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold shadow-sm transition ${
                  open
                    ? "border border-slate-300 bg-white text-slate-600 hover:bg-slate-50"
                    : "bg-brand text-white shadow-brand/25 hover:bg-brand-deep"
                }`}
              >
                <span>{open ? "사례 접기" : "🔎 실무 사례 보기"}</span>
                <span className={`transition ${open ? "rotate-180" : ""}`}>
                  ▾
                </span>
              </button>

              {/* 펼친 내용 */}
              {open && (
                <div className="animate-fadeup mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-bold text-slate-800">
                      📋 {ex.title}
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
                  <pre className="mt-3 max-h-72 overflow-auto whitespace-pre-wrap rounded-lg bg-white p-3 font-sans text-[13px] leading-relaxed text-slate-700 ring-1 ring-slate-200">
                    {ex.body}
                  </pre>
                  {ex.tip && (
                    <p className="mt-3 flex gap-2 text-[13px] text-amber-600">
                      <span>💡</span>
                      <span>{ex.tip}</span>
                    </p>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
