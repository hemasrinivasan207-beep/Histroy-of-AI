export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(1000px 700px at 15% 15%, rgba(142,124,255,0.07), transparent 60%),
            radial-gradient(900px 600px at 85% 85%, rgba(46,196,182,0.06), transparent 55%),
            radial-gradient(800px 600px at 50% 50%, rgba(255,107,107,0.04), transparent 50%)
          `,
        }}
      />
    </div>
  );
}
