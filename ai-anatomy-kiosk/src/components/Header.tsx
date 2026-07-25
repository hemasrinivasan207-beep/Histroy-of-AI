export function Header() {
  return (
    <header className="relative z-10 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-card-border px-4 py-4 sm:flex sm:flex-wrap sm:justify-between md:px-10">
      <div className="flex min-w-0 items-center gap-3">
        <div
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg font-mono text-xs font-bold"
          style={{
            background: "linear-gradient(135deg, #8E7CFF, #2EC4B6)",
            color: "#FBF7F0",
          }}
        >
          AI
        </div>
        <div className="min-w-0">
          <h1 className="truncate text-sm font-bold tracking-[0.15em] text-foreground sm:text-lg md:text-xl">
            AI Museum
          </h1>
          <p className="truncate font-mono text-[10px] uppercase tracking-widest text-muted">
            Zone 2 — History of AI — Interactive Anatomy
          </p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-muted sm:gap-4">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-physical shadow-[0_0_6px_rgba(107,203,119,0.5)]" />
          <span className="hidden sm:inline">Active</span>
        </span>
        <span className="hidden sm:inline">10 Systems</span>
        <span className="hidden md:inline">Touch to Explore</span>
      </div>
    </header>
  );
}
