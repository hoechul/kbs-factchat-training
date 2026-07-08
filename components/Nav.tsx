"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#overview", label: "개요" },
  { href: "#curriculum", label: "커리큘럼" },
  { href: "#usecases", label: "사용사례" },
  { href: "#intro", label: "도입" },
  { href: "#basic", label: "기본" },
  { href: "#advanced", label: "심화" },
  { href: "#outro", label: "마무리" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-slate-200 bg-white/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#top" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/kbs-logo.png"
            alt="KBS"
            className="h-8 w-auto"
            width={739}
            height={140}
          />
          <span className="text-[15px] font-bold tracking-tight text-slate-900">
            <span className="text-slate-400">×</span> 팩트챗 교육
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 md:hidden"
          aria-label="메뉴"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white/95 px-5 py-3 md:hidden">
          <div className="grid grid-cols-3 gap-2">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg bg-slate-100 px-3 py-2 text-center text-sm font-medium text-slate-700"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
