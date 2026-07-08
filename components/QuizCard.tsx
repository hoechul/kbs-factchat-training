"use client";

import { useState } from "react";
import type { Quiz } from "@/lib/curriculum";

export default function QuizCard({ quiz, index }: { quiz: Quiz; index: number }) {
  const [selected, setSelected] = useState<number | null>(null);
  const revealed = selected !== null;

  return (
    <div className="rounded-3xl border border-amber-400/20 bg-gradient-to-br from-amber-500/10 to-transparent p-6 sm:p-7">
      <div className="flex items-center gap-2 text-amber-300">
        <span className="text-lg">🧠</span>
        <span className="text-xs font-bold uppercase tracking-widest">
          팩트챗 퀴즈 #{index}
        </span>
      </div>

      <p className="mt-3 text-lg font-bold leading-snug text-white">
        {quiz.question}
      </p>

      <div className="mt-5 grid gap-2.5">
        {quiz.options.map((opt, i) => {
          const isAnswer = i === quiz.answer;
          const isPicked = i === selected;
          let cls =
            "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]";
          if (revealed && isAnswer)
            cls = "border-mint/50 bg-mint/15 text-white";
          else if (revealed && isPicked && !isAnswer)
            cls = "border-accent/50 bg-accent/15 text-white";
          else if (revealed) cls = "border-white/5 bg-white/[0.02] opacity-60";

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
                    ? "bg-mint text-black"
                    : revealed && isPicked
                    ? "bg-accent text-white"
                    : "bg-white/10 text-slate-300"
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
        <div className="animate-fadeup mt-5 rounded-2xl border border-white/10 bg-black/30 p-4">
          <p className="text-sm font-bold text-mint">
            {selected === quiz.answer ? "🎉 정답입니다!" : "🔎 아쉬워요 — 정답 해설"}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
            {quiz.explain}
          </p>
          <button
            onClick={() => setSelected(null)}
            className="mt-3 text-xs font-semibold text-slate-400 underline underline-offset-4 hover:text-white"
          >
            다시 풀기
          </button>
        </div>
      )}
    </div>
  );
}
