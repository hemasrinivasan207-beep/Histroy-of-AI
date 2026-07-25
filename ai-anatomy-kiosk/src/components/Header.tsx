export function Header() {
  return (
    <header className="relative z-10 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b-2 border-card-border px-4 py-4 sm:flex sm:flex-wrap sm:justify-between md:px-10">
      <div className="flex min-w-0 items-center gap-3">
        <div
          className="grid h-10 w-10 shrink-0 place-items-center rounded-lg font-mono text-sm font-bold"
          style={{
            background: "linear-gradient(135deg, #6B54E6, #1FA89B)",
            color: "#FBF7F0",
          }}
        >
          AI
        </div>
        <div className="min-w-0">
          <h1 className="truncate text-base font-bold tracking-[0.15em] text-foreground sm:text-xl md:text-2xl">
            AI Museum
          </h1>
          <p className="truncate font-mono text-xs uppercase tracking-widest text-muted sm:text-sm">
            Zone 2 — History of AI — Interactive Anatomy
          </p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-3 font-mono text-xs font-semibold uppercase tracking-widest text-muted sm:gap-4 sm:text-sm">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-physical shadow-[0_0_8px_rgba(77,184,92,0.6)]" />
          <span className="hidden sm:inline">Active</span>
        </span>
        <span className="hidden sm:inline">10 Systems</span>
        <span className="hidden md:inline">Touch to Explore</span>
      </div>
    </header>
  );
}
