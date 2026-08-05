import { useEffect } from "react";
import { CATEGORY_COLOR, ACTIVE_COLOR, type Hotspot } from "@/data/hotspots";

type DetailCardProps = {
  hotspot: Hotspot;
  side?: "right" | "left";
  onClose: () => void;
};

export function DetailCard({ hotspot, onClose }: DetailCardProps) {
  const color = CATEGORY_COLOR[hotspot.category];

  // Automatically decide side based on ID
  const rightSideIds = ["eyes", "ears", "voice", "emotion", "hands"];
  const side = rightSideIds.includes(hotspot.id.toLowerCase()) ? "right" : "left";

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const speakContent = () => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const textToRead = `${hotspot.name}. ${hotspot.description}. Fun fact: ${hotspot.funFact}. Origin log: ${hotspot.history}`;
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 1.0; 
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  const handleClose = () => {
    stopSpeech();
    onClose();
  };

  // Position dynamically based on the calculated side
  const positionClass = side === "right" ? "fixed bottom-4 right-4 z-40" : "fixed bottom-4 left-4 z-40";

  return (
    <div className={`${positionClass} w-[calc(100vw-2rem)] max-w-sm animate-fade-in`}>
      <div 
        className="relative rounded-xl overflow-hidden shadow-2xl"
        style={{ border: "2px solid #4fd1c5", boxShadow: "0 0 30px rgba(79,209,197,0.5)" }}
      >
        <div className="glass-card p-5 relative bg-white/95 backdrop-blur-md">
          <div
            className="absolute inset-x-5 -top-px h-[2px] rounded-full"
            style={{ background: color }}
          />

          {/* Action Buttons */}
          <div className="absolute right-3 top-3 flex items-center gap-1.5">
            <button
              onClick={speakContent}
              className="grid h-7 w-7 place-items-center rounded-lg bg-cyan-500/15 border border-cyan-500/40 text-cyan-700 transition-colors hover:bg-cyan-500/25 text-sm font-bold shadow-sm"
              aria-label="Read Aloud"
            >
              🔊
            </button>
            <button
              onClick={stopSpeech}
              className="grid h-7 w-7 place-items-center rounded-lg bg-red-500/15 border border-red-500/40 text-red-700 transition-colors hover:bg-red-500/25 text-sm font-bold shadow-sm"
              aria-label="Stop Speech"
            >
              🔇
            </button>
            <button
              onClick={handleClose}
              className="grid h-7 w-7 place-items-center rounded-lg bg-gray-200/60 text-gray-700 transition-colors hover:bg-gray-300 text-sm font-bold"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span
              className="rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{
                color,
                border: `1px solid ${color}40`,
                background: `${color}15`,
              }}
            >
              {hotspot.category}
            </span>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-700">
              ID · {hotspot.id.toUpperCase()}
            </span>
          </div>

          <h2 className="mt-3 text-2xl font-black tracking-wide" style={{ color: color }}>
            {hotspot.name}
          </h2>

          {hotspot.year !== "Core" && (
            <div
              className="mt-2 inline-flex items-center gap-2 rounded-full px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest"
              style={{
                color: ACTIVE_COLOR,
                border: `1px solid ${ACTIVE_COLOR}50`,
                background: `${ACTIVE_COLOR}15`,
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

          {/* Description */}
          <p className="mt-4 font-body text-sm leading-relaxed text-gray-900">
            {hotspot.description}
          </p>

          <div
            className="mt-3 rounded-lg p-3 font-body text-xs leading-relaxed"
            style={{
              background: `${color}10`,
              border: `1px solid ${color}30`,
              color: "#1F1A1F",
            }}
          >
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-gray-800">
              ✦ Fun Fact
            </span>
            <p className="mt-1 text-gray-900">{hotspot.funFact}</p>
          </div>

          <div className="mt-4">
            <p
              className="mb-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{ color }}
            >
              ▸ Origin Log
            </p>
            <p className="font-body text-xs leading-relaxed text-gray-900">
              {hotspot.history}
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-3 font-mono text-[10px] font-bold uppercase tracking-widest text-gray-700">
            <span>Status · Nominal</span>
            <span style={{ color: ACTIVE_COLOR }}>◉ Live</span>
          </div>
        </div>
      </div>
    </div>
  );
}
