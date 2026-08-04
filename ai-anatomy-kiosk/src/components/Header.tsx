export function Header() {
  return (
    <header className="relative z-10 w-full px-4 py-8 bg-transparent flex justify-center items-center">
      <div className="relative">
        {/* Main heading using Smooch Sans font, matching background color with a 5% minimal glow */}
        <h1 
          style={{ fontFamily: '"Smooch Sans", sans-serif' }}
          className="relative text-5xl md:text-7xl font-black text-slate-950 tracking-[0.15em] text-center drop-shadow-[0_0_8px_rgba(79,209,197,0.35)] uppercase"
        >
          AI BOD
        </h1>
      </div>
    </header>
  );
}
