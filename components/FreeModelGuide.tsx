// 카이로스챗 무료(무제한) 모델 활용법 — 토큰/크레딧 절약 가이드
// 근거: 카이로스챗은 모델별 '비용' 항목에 '무료(무제한)'로 표시됨 (공식 문서 chat 안내)

const FIND_STEPS = [
  "채팅 화면의 모델 선택 드롭다운(또는 챗봇 상세 정보)을 엽니다.",
  "각 모델의 '비용' 항목을 봅니다. '10,000 입력 토큰당 ○크레딧' 대신 '무료'로 표시된 모델이 무제한 모델입니다.",
  "'무료'로 표시된 모델 2개를 기본 모델로 지정해두고 반복 업무에 사용합니다.",
];

const FREE_MODELS = [
  {
    badge: "무료 모델 ①",
    role: "가벼운 범용 대화형",
    tone: "from-emerald-500/10 to-transparent border-emerald-200",
    dot: "bg-emerald-500",
    use: "짧은 질문, 맞춤법·표현 다듬기, 간단 요약, 아이디어 브레인스토밍, 형식 변환(표·불릿)",
    examples: [
      "이 문장을 더 자연스럽게 3가지 버전으로 바꿔줘",
      "회의 메모를 불릿 5개로 요약해줘",
      "이 내용을 표로 정리해줘",
    ],
    tip: "하루에도 수십 번 쓰는 자잘한 작업은 전부 여기서 처리하세요. 크레딧 0원입니다.",
  },
  {
    badge: "무료 모델 ②",
    role: "정리·초안형",
    tone: "from-sky-500/10 to-transparent border-sky-200",
    dot: "bg-sky-500",
    use: "개념 설명, 자료 구조화, 목차·초안 뼈대 잡기, 긴 글 1차 요약",
    examples: [
      "'지역 소멸' 배경지식을 5줄로 정리해줘",
      "보도자료 초안 뼈대(제목·리드·본문 소제목)를 잡아줘",
      "이 기사를 3문단으로 1차 요약해줘",
    ],
    tip: "'1차 정리'는 무료 모델로, '정밀 검수'만 크레딧 모델로 넘기면 토큰이 확 줄어듭니다.",
  },
];

const SAVE_STEPS = [
  {
    k: "STEP 1",
    t: "초안·반복작업은 무료 모델",
    d: "요약·초안·형식 변환·연습은 무제한 모델로. 여기서 아무리 많이 돌려도 크레딧이 소모되지 않습니다.",
  },
  {
    k: "STEP 2",
    t: "정밀 검수만 크레딧 모델",
    d: "최종 표현 다듬기, 민감한 판단, 정밀 팩트체크처럼 '품질이 중요한 마지막 단계'에서만 고성능(크레딧) 모델을 씁니다.",
  },
  {
    k: "STEP 3",
    t: "무료 결과를 붙여 '검수만' 요청",
    d: "무료 모델이 만든 결과를 크레딧 모델에 붙여넣고 \"이 초안을 검수·보완만 해줘\"라고 하면, 처음부터 다시 만드는 것보다 토큰이 훨씬 적게 듭니다.",
  },
];

export default function FreeModelGuide() {
  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-gradient-to-b from-brand/5 to-transparent p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-2">
        <span className="text-xl">💸</span>
        <h3 className="text-xl font-black text-slate-900 sm:text-2xl">
          토큰 0원! 무료 모델 200% 활용법
        </h3>
      </div>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
        카이로스챗에는 크레딧을 소모하지 않는 <b className="text-slate-900">무료(무제한)
        모델</b>이 제공됩니다. 이 무료 모델 2개만 잘 써도 대부분의 반복 업무는{" "}
        <b className="text-brand">크레딧 0원</b>으로 처리할 수 있습니다.
      </p>

      {/* 무료 모델 찾는 법 */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
        <div className="text-xs font-bold uppercase tracking-widest text-brand">
          먼저 · 무료 모델 찾는 법
        </div>
        <ol className="mt-3 space-y-2">
          {FIND_STEPS.map((s, i) => (
            <li key={i} className="flex gap-3 text-sm text-slate-700">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">
                {i + 1}
              </span>
              <span className="leading-relaxed">{s}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* 무료 모델 2개 카드 */}
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {FREE_MODELS.map((m) => (
          <div
            key={m.badge}
            className={`rounded-2xl border bg-gradient-to-b p-5 ${m.tone}`}
          >
            <div className="flex items-center gap-2">
              <span className={`h-2.5 w-2.5 rounded-full ${m.dot}`} />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {m.badge}
              </span>
            </div>
            <h4 className="mt-2 text-lg font-bold text-slate-900">{m.role}</h4>

            <div className="mt-3 text-xs font-semibold text-slate-500">
              이런 일에 쓰세요
            </div>
            <p className="mt-0.5 text-sm leading-relaxed text-slate-700">
              {m.use}
            </p>

            <div className="mt-3 text-xs font-semibold text-slate-500">
              실무 예시
            </div>
            <ul className="mt-1 space-y-1.5">
              {m.examples.map((ex, i) => (
                <li
                  key={i}
                  className="rounded-lg bg-white/70 px-3 py-1.5 font-sans text-[13px] text-slate-700 ring-1 ring-slate-200"
                >
                  “{ex}”
                </li>
              ))}
            </ul>

            <p className="mt-3 flex gap-2 text-[13px] text-amber-600">
              <span>💡</span>
              <span>{m.tip}</span>
            </p>
          </div>
        ))}
      </div>

      {/* 절약 3단계 전략 */}
      <div className="mt-6">
        <div className="text-sm font-bold text-slate-900">
          🧭 크레딧 절약 3단계 전략
        </div>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {SAVE_STEPS.map((s) => (
            <div
              key={s.k}
              className="rounded-2xl border border-slate-200 bg-white p-4"
            >
              <div className="text-[11px] font-bold uppercase tracking-widest text-brand">
                {s.k}
              </div>
              <div className="mt-1 font-bold text-slate-900">{s.t}</div>
              <p className="mt-1 text-[13px] leading-relaxed text-slate-600">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 주의 */}
      <p className="mt-5 rounded-xl border border-amber-200 bg-amber-50/60 p-4 text-[13px] leading-relaxed text-slate-700">
        ⚠️ <b>주의</b> · 무료 모델은 최신 정보·정밀도가 고성능 모델보다 낮을 수
        있습니다. 방송·공식 문서에 나가는 <b>사실·수치</b>는 반드시 고성능 모델 +
        사람의 최종 확인(팩트체크)을 거치세요.
      </p>
    </div>
  );
}
