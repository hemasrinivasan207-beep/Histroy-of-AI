export function Header() {
  return (
    <header className="relative z-10 w-full py-10 flex justify-center items-center bg-slate-950 border-b border-slate-800">
      <div className="relative">
        {/* Glow */}
        <div className="absolute inset-0 blur-3xl bg-cyan-400/30 rounded-full"></div>

        {/* Title */}
        <h1
          className="relative text-5xl md:text-7xl font-black tracking-[0.25em] text-cyan-300 text-center"
          style={{
            textShadow: `
              0 0 10px #22d3ee,
              0 0 20px #22d3ee,
              0 0 40px #22d3ee,
              0 0 80px #22d3ee
            `,
          }}
        >
          AI BOD
        </h1>
      </div>
    </header>
  );
}
