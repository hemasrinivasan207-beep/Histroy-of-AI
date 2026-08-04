export function Header() {
  return (
    <header className="relative z-10 w-full px-4 py-8 bg-transparent flex justify-center items-center">
      <div className="relative">
        {/* Main heading matching background color with a 5% minimal glow effect */}
        <h1 className="relative text-4xl md:text-6xl font-black text-slate-950 tracking-[0.2em] text-center drop-shadow-[0_0_8px_rgba(79,209,197,0.35)] uppercase">
          AI BOD
        </h1>
      </div>
    </header>
  );
}
