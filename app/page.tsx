import Nav from "@/components/Nav";
import CopyPrompt from "@/components/CopyPrompt";
import QuizCard from "@/components/QuizCard";
import { CURRICULUM, OVERVIEW, LLM_COMPARE } from "@/lib/curriculum";

export default function Home() {
  return (
    <main id="top" className="relative overflow-hidden bg-white">
      <Nav />

      {/* ===== HERO ===== */}
      <section className="grid-glow relative pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
          <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/15 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-5xl px-5 text-center">
          <div className="animate-fadeup mx-auto inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm text-slate-600">
            <span className="h-2 w-2 animate-pulse rounded-full bg-mint" />
            2026. 7. 10 · KBS 임직원 대상 · 2시간 완성
          </div>

          <h1 className="animate-fadeup mt-6 text-4xl font-black leading-[1.15] tracking-tight text-slate-900 sm:text-6xl">
            방송 실무, <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-brand via-sky-500 to-violet bg-clip-text text-transparent">
              멀티 LLM
            </span>
            으로 <br />
            더 빠르고 정확하게
          </h1>

          <p className="animate-fadeup mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            GPT · Claude · Gemini를 한 곳에서 골라 쓰는 생성형 AI 플랫폼{" "}
            <b className="text-slate-900">팩트챗(FactChat)</b>. 취재·구성·자막·행정
            업무에 바로 적용하는 실무 활용법을 2시간에 완성합니다.
          </p>

          <div className="animate-fadeup mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#curriculum"
              className="rounded-xl bg-brand px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-deep"
            >
              커리큘럼 살펴보기 →
            </a>
            <a
              href="#intro"
              className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 shadow-sm transition hover:bg-slate-50"
            >
              강의 시작하기
            </a>
          </div>

          {/* hero stat cards */}
          <div className="animate-fadeup mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { k: "120분", v: "총 교육 시간" },
              { k: "3종", v: "멀티 LLM 비교" },
              { k: "10+", v: "실무 프롬프트" },
              { k: "4개", v: "섹션별 퀴즈" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="text-2xl font-black text-slate-900">{s.k}</div>
                <div className="mt-1 text-xs text-slate-500">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OVERVIEW ===== */}
      <section id="overview" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <SectionHead
          eyebrow="교육 개요"
          title="한눈에 보는 오늘의 교육"
          desc="누가, 언제, 무엇을 배우는지 먼저 확인하세요."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {OVERVIEW.map((o) => (
            <div
              key={o.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
              <div className="text-3xl">{o.icon}</div>
              <div className="mt-3 text-xs font-medium uppercase tracking-wider text-slate-500">
                {o.label}
              </div>
              <div className="mt-1 text-lg font-bold text-slate-900">
                {o.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CURRICULUM TIMELINE ===== */}
      <section id="curriculum" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <SectionHead
          eyebrow="커리큘럼"
          title="2시간 · 4단계 학습 여정"
          desc="도입 → 기본 → 심화 → 마무리. 이론과 실습을 오가며 몸으로 익힙니다."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {CURRICULUM.map((c, i) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b ${c.color} p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md`}
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl font-black text-slate-900/10">
                  0{i + 1}
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                  {c.time}
                </span>
              </div>
              <div className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                {c.phase} · {c.badge}
              </div>
              <h3 className="mt-1 text-lg font-bold leading-snug text-slate-900">
                {c.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-slate-500">
                {c.summary}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-brand opacity-0 transition group-hover:opacity-100">
                자세히 →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ===== LLM COMPARE ===== */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <SectionHead
          eyebrow="주요 LLM 비교"
          title="일에 맞는 '전문가'를 고르세요"
          desc="모델마다 잘하는 일이 다릅니다. 팩트챗은 이 셋을 한 화면에서 골라 씁니다."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {LLM_COMPARE.map((m) => (
            <div
              key={m.name}
              className={`rounded-3xl border bg-gradient-to-b ${m.tone} p-6 shadow-sm`}
            >
              <div className="flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full ${m.dot}`} />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {m.tag}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-black text-slate-900">
                {m.name}
              </h3>
              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <div className="text-xs font-semibold text-slate-500">
                    강점
                  </div>
                  <p className="mt-0.5 text-slate-700">{m.strength}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500">
                    이럴 때 추천
                  </div>
                  <p className="mt-0.5 text-slate-700">{m.best}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-slate-500">
          💡 헷갈리면?{" "}
          <b className="text-slate-900">챗봇 비교(Multi-model)</b> 기능으로 두
          모델에게 동시에 물어보고 답을 비교하세요.
        </p>
      </section>

      {/* ===== CURRICULUM DETAIL SECTIONS ===== */}
      {CURRICULUM.map((c, ci) => (
        <section
          key={c.id}
          id={c.id}
          className={`border-t border-slate-100 py-16 sm:py-24 ${
            ci % 2 === 1 ? "bg-slate-50" : "bg-white"
          }`}
        >
          <div className="mx-auto max-w-5xl px-5">
            {/* header */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand">
                {c.phase}
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                {c.time}
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                {c.badge}
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              {c.title}
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">
              {c.summary}
            </p>

            {/* learning points */}
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {c.points.map((p, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-sm font-bold text-brand">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-900">{p.head}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* prompts */}
            {c.prompts && c.prompts.length > 0 && (
              <div className="mt-12">
                <div className="flex items-center gap-2">
                  <span className="text-lg">⚡</span>
                  <h3 className="text-xl font-bold text-slate-900">
                    바로 쓰는 실무 프롬프트
                  </h3>
                </div>
                <p className="mt-1 text-sm text-slate-500">
                  복사 버튼을 누르고 팩트챗에 붙여넣어 바로 실습하세요. 대괄호
                  [ ] 부분만 여러분의 내용으로 바꾸면 됩니다.
                </p>
                <div className="mt-5 grid gap-4">
                  {c.prompts.map((p, i) => (
                    <CopyPrompt key={i} prompt={p} />
                  ))}
                </div>
              </div>
            )}

            {/* quiz */}
            <div className="mt-12">
              <QuizCard quiz={c.quiz} index={ci + 1} />
            </div>
          </div>
        </section>
      ))}

      {/* ===== CTA / RESOURCES ===== */}
      <section className="border-t border-slate-100 bg-white py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            오늘 배운 걸 <span className="text-brand">내일 업무</span>에
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            이번 주, 매번 반복하는 업무 하나를 골라 나만의 챗봇 또는 프롬프트로
            만들어보세요. 작은 자동화가 가장 큰 변화를 만듭니다.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://docs.mindlogic.ai/docs/eland/factchat/getting-started/introduction"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-brand px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-deep"
            >
              팩트챗 공식 가이드 ↗
            </a>
            <a
              href="#top"
              className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 shadow-sm transition hover:bg-slate-50"
            >
              처음으로 ↑
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-slate-100 bg-slate-50 py-10">
        <div className="mx-auto max-w-6xl px-5 text-center text-sm text-slate-500">
          <p className="font-semibold text-slate-700">
            KBS 임직원 대상 팩트챗(FactChat) 활용 교육
          </p>
          <p className="mt-1">2026. 7. 10 · 총 2시간 · 이론 + 시연 & 실습</p>
          <p className="mt-3 text-xs">
            교육용 강의교안 · 콘텐츠는 팩트챗 공식 문서를 참고해 작성되었습니다.
          </p>
          <a
            href="https://github.com/hoechul/kbs-factchat-training"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-xs font-medium text-slate-500 underline underline-offset-4 transition hover:text-slate-900"
          >
            GitHub 소스 보기 ↗
          </a>
        </div>
      </footer>
    </main>
  );
}

function SectionHead({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="text-center">
      <div className="text-sm font-bold uppercase tracking-widest text-brand">
        {eyebrow}
      </div>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-slate-500">{desc}</p>
    </div>
  );
}
