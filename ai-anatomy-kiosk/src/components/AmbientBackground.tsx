export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(1000px 700px at 15% 15%, rgba(107,84,230,0.09), transparent 60%),
            radial-gradient(900px 600px at 85% 85%, rgba(31,168,155,0.08), transparent 55%),
            radial-gradient(800px 600px at 50% 50%, rgba(232,80,80,0.05), transparent 50%)
          `,
        }}
      />
    </div>
  );
}
