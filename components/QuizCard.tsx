"use client";

import { useState } from "react";
import type { Quiz } from "@/lib/curriculum";

export default function QuizCard({ quiz, index }: { quiz: Quiz; index: number }) {
  const [selected, setSelected] = useState<number | null>(null);
  const revealed = selected !== null;

  return (
    <div className="rounded-3xl border border-amber-300/60 bg-amber-50 p-6 sm:p-7">
      <div className="flex items-center gap-2 text-amber-600">
        <span className="text-lg">🧠</span>
        <span className="text-xs font-bold uppercase tracking-widest">
          팩트챗 퀴즈 #{index}
        </span>
      </div>

      <p className="mt-3 text-lg font-bold leading-snug text-slate-900">
        {quiz.question}
      </p>

      <div className="mt-5 grid gap-2.5">
        {quiz.options.map((opt, i) => {
          const isAnswer = i === quiz.answer;
          const isPicked = i === selected;
          let cls =
            "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50";
          if (revealed && isAnswer)
            cls = "border-mint/60 bg-mint/10 text-slate-900";
          else if (revealed && isPicked && !isAnswer)
            cls = "border-accent/60 bg-accent/10 text-slate-900";
          else if (revealed)
            cls = "border-slate-200 bg-white text-slate-400 opacity-70";

          return (
            <button
              key={i}
              disabled={revealed}
              onClick={() => setSelected(i)}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${cls}`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  revealed && isAnswer
                    ? "bg-mint text-white"
                    : revealed && isPicked
                    ? "bg-accent text-white"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {revealed && isAnswer ? "✓" : String.fromCharCode(65 + i)}
              </span>
              <span>{opt}</span>
            </button>
          );
        })}
      </div>

      {revealed && (
        <div className="animate-fadeup mt-5 rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-sm font-bold text-mint">
            {selected === quiz.answer ? "🎉 정답입니다!" : "🔎 아쉬워요 — 정답 해설"}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
            {quiz.explain}
          </p>
          <button
            onClick={() => setSelected(null)}
            className="mt-3 text-xs font-semibold text-slate-500 underline underline-offset-4 hover:text-slate-900"
          >
            다시 풀기
          </button>
        </div>
      )}
    </div>
  );
}
