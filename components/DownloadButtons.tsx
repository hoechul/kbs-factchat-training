import type { DownloadFile } from "@/lib/curriculum";

export default function DownloadButtons({
  downloads,
}: {
  downloads?: DownloadFile[];
}) {
  if (!downloads || downloads.length === 0) return null;

  return (
    <div className="mt-4 rounded-2xl border border-brand/20 bg-brand/5 p-4">
      <div className="text-xs font-bold uppercase tracking-widest text-brand">
        📥 실습 자료 내려받기
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {downloads.map((d) => (
          <a
            key={d.path}
            href={d.path}
            download={d.filename}
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-bold text-white shadow-sm shadow-brand/25 transition hover:bg-brand-deep"
          >
            <span>📄</span>
            <span>{d.label}</span>
            <span className="text-xs opacity-80">PDF ↓</span>
          </a>
        ))}
      </div>
      <p className="mt-2 text-[12px] text-slate-500">
        버튼을 누르면 PDF가 바로 다운로드됩니다. (교육용 예시 자료)
      </p>
    </div>
  );
}
