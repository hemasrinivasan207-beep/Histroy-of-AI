import { CATEGORY_COLOR, ACTIVE_COLOR, type Hotspot } from "@/data/hotspots";

type DetailCardProps = {
  hotspot: Hotspot;
  onClose: () => void;
};

export function DetailCard({ hotspot, onClose }: DetailCardProps) {
  const color = CATEGORY_COLOR[hotspot.category];

  return (
    <div className="fixed bottom-4 right-4 z-40 w-[calc(100vw-2rem)] max-w-sm animate-fade-in">
      <div className="relative rounded-xl glass-card p-5 border border-cyan-500/40 shadow-[0_0_20px_rgba(79,209,197,0.15)]">
        {/* Category color top accent bar */}
        <div
          className="absolute inset-x-5 -top-px h-[2px] rounded-full"
          style={{ background: color }}
        />

        <button
          onClick={onClose}
          className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-lg text-muted transition-colors hover:bg-card-border hover:text-foreground"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="flex items-center gap-2">
          <span
            className="rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em]"
            style={{
              color,
              border: `1px solid ${color}30`,
              background: `${color}10`,
            }}
          >
            {hotspot.category}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            ID · {hotspot.id.toUpperCase()}
          </span>
        </div>

        <h2 className="mt-3 text-2xl font-bold tracking-wide" style={{ color: color }}>
          {hotspot.name}
        </h2>

        {hotspot.year !== "Core" && (
          <div
            className="mt-2 inline-flex items-center gap-2 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest"
            style={{
              color: ACTIVE_COLOR,
              border: `1px solid ${ACTIVE_COLOR}40`,
              background: `${ACTIVE_COLOR}10`,
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                background: ACTIVE_COLOR,
                boxShadow: `0 0 6px ${ACTIVE_COLOR}`,
              }}
            />
            Milestone · {hotspot.year}
          </div>
        )}

        <p className="mt-4 font-body text-sm leading-relaxed text-foreground">
          {hotspot.description}
        </p>

        {/* Fun fact */}
        <div
          className="mt-3 rounded-lg p-3 font-body text-xs leading-relaxed"
          style={{
            background: `${color}08`,
            border: `1px solid ${color}15`,
            color: "#5A4E59",
          }}
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
            ✦ Fun Fact
          </span>
          <p className="mt-1">{hotspot.funFact}</p>
        </div>

        {/* Origin Log */}
        <div className="mt-4">
          <p
            className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em]"
            style={{ color }}
          >
            ▸ Origin Log
          </p>
          <p className="font-body text-xs leading-relaxed text-muted">
            {hotspot.history}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-card-border pt-3 font-mono text-[10px] uppercase tracking-widest text-muted">
          <span>Status · Nominal</span>
          <span style={{ color: ACTIVE_COLOR }}>◉ Live</span>
        </div>
      </div>
    </div>
  );
}
