"use client";

import { useEffect, useState } from "react";

const ITEMS = [
  { id: "overview", no: "", label: "교육 개요", group: "안내" },
  { id: "curriculum", no: "", label: "커리큘럼", group: "안내" },
  { id: "usecases", no: "", label: "실전 사용 사례", group: "안내" },
  { id: "intro", no: "01", label: "도입 · 멀티 LLM", group: "강의" },
  { id: "basic", no: "02", label: "기본 · 기능/보안", group: "강의" },
  { id: "advanced", no: "03", label: "심화 · 챗봇 실습", group: "강의" },
  { id: "outro", no: "04", label: "마무리 · Q&A", group: "강의" },
];

export default function SideMenu() {
  const [active, setActive] = useState<string>("overview");

  useEffect(() => {
    const sections = ITEMS.map((i) => document.getElementById(i.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    const onScroll = () => {
      // 화면 상단(헤더 아래 ~120px)을 지난 마지막 섹션을 활성으로
      const line = 140;
      let current = sections[0]?.id ?? "overview";
      for (const sec of sections) {
        if (sec.getBoundingClientRect().top <= line) current = sec.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav
      aria-label="목차"
      className="fixed left-5 top-24 z-40 hidden w-52 flex-col rounded-2xl border border-slate-200 bg-white/85 p-3 shadow-md backdrop-blur-md xl:flex"
    >
      <div className="mb-2 flex items-center gap-2 px-2">
        <span className="text-sm">📑</span>
        <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
          강의 목차
        </span>
      </div>

      <ul className="flex flex-col gap-0.5">
        {ITEMS.map((item, idx) => {
          const isActive = active === item.id;
          const showDivider = idx > 0 && ITEMS[idx - 1].group !== item.group;
          return (
            <li key={item.id}>
              {showDivider && (
                <div className="my-1.5 border-t border-dashed border-slate-200" />
              )}
              <a
                href={`#${item.id}`}
                className={`group flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm transition ${
                  isActive
                    ? "bg-brand/10 font-bold text-brand"
                    : "font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[10px] font-bold transition ${
                    isActive
                      ? "bg-brand text-white"
                      : item.no
                      ? "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                      : "bg-transparent text-slate-300"
                  }`}
                >
                  {item.no || "•"}
                </span>
                <span className="truncate">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>

      <a
        href="#top"
        className="mt-2 rounded-xl border border-slate-200 px-3 py-2 text-center text-xs font-semibold text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
      >
        맨 위로 ↑
      </a>
    </nav>
  );
}
