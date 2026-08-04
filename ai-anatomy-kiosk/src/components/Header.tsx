export function Header() {
  return (
    <header className="relative z-10 w-full px-4 py-6 flex justify-center items-center">
      <div className="relative">
        {/* Glowing background effect */}
        <div className="absolute -inset-1 blur-xl bg-cyan-400 opacity-60 rounded-full animate-pulse"></div>
        
        {/* Main heading */}
        <h1 className="relative text-3xl md:text-5xl font-extrabold text-cyan-400 tracking-widest text-center drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
          AI BOD
        </h1>
      </div>
    </header>
  );
}
