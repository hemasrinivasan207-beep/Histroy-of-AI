export function Header() {
  return (
    <header className="relative z-10 w-full px-4 py-8 bg-slate-950 flex justify-center items-center border-b border-slate-800">
      <div className="relative">
        {/* Main heading with minimal cyan glow and dark blue shadow */}
        <h1 className="relative text-4xl md:text-6xl font-black text-[#4FD1C5] tracking-[0.2em] text-center drop-shadow-[2px_2px_4px_rgba(0,0,139,0.9)] uppercase">
          AI BOD
        </h1>
      </div>
    </header>
  );
}
