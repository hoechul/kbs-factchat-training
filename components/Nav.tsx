"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#overview", label: "개요" },
  { href: "#curriculum", label: "커리큘럼" },
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
          ? "border-b border-white/10 bg-[#060913]/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-violet text-sm font-black text-white">
            F
          </span>
          <span className="text-[15px] font-bold tracking-tight text-white">
            KBS <span className="text-slate-400">×</span> 팩트챗 교육
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-200 md:hidden"
          aria-label="메뉴"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#060913]/95 px-5 py-3 md:hidden">
          <div className="grid grid-cols-3 gap-2">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg bg-white/5 px-3 py-2 text-center text-sm font-medium text-slate-200"
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
