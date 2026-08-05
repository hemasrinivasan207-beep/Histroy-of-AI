import { useEffect } from "react";
import { CATEGORY_COLOR, ACTIVE_COLOR } from "@/data/hotspots";

type BodModalProps = {
  onClose: () => void;
};

export function BodModal({ onClose }: BodModalProps) {
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

    const textToRead = "AI Bod. Integrated Cybernetic Intelligence System. AI Bod is the fully-integrated central mainframe binding every cognitive, sensory and physical subsystem into a single cybernetic organism. Cognitive stacks, including Brain, Memory and Emotion cores, orchestrate reasoning, contextual recall, and affective interpretation through the neural bus. Sensory modules, including Eyes, Ears, Face, and Voice, feed a continuous multi-modal telemetry stream into the mainframe, allowing environmental awareness and human-parity social interaction in real time. Physical actuators, including Hands and Legs, receive fused motion plans generated from cognitive intent and sensory grounding. The AI Heart serves as the power and thermal management matrix, distributing energy across the chassis via a solid-state lithium core with intelligent throttling. Operational philosophy prioritises adaptive coexistence.";
    
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

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center p-4 backdrop-blur-md animate-fade-in"
      style={{ background: "rgba(251,247,240,0.8)" }}
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-xl glass-card p-6 sm:p-8 animate-fade-in-scale shadow-2xl bg-white/95"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-x-6 -top-px h-[2px] rounded-full bg-core" />

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
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            className="grid h-8 w-8 place-items-center rounded-lg bg-gray-200/60 text-gray-700 transition-colors hover:bg-gray-300 text-sm font-bold"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span
            className="rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{
              color: CATEGORY_COLOR.Core,
              border: `1px solid ${CATEGORY_COLOR.Core}40`,
              background: `${CATEGORY_COLOR.Core}15`,
            }}
          >
            Core Mainframe
          </span>
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-700">
            ID · AI-BOD-000
          </span>
        </div>

        <h2 className="mt-3 text-3xl font-black tracking-wide text-core sm:text-4xl">
          AI BOD
        </h2>
        <p className="mt-1 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-gray-700">
          Integrated Cybernetic Intelligence System
        </p>

        {/* Main Content */}
        <div className="mt-5 space-y-4 font-body text-sm leading-relaxed text-gray-900">
          <p>
            <strong className="font-bold" style={{ color: CATEGORY_COLOR.Cognitive }}>AI Bod</strong> is the
            fully-integrated central mainframe binding every cognitive, sensory and
            physical subsystem into a single cybernetic organism. Cognitive stacks — the
            Brain, Memory and Emotion cores — orchestrate reasoning, contextual recall and
            affective interpretation through the neural bus.
          </p>
          <p>
            Sensory modules — Eyes, Ears, Face and Voice — feed a continuous multi-modal
            telemetry stream into the mainframe, allowing environmental awareness and
            human-parity social interaction in real time. Physical actuators — Hands and
            Legs — receive fused motion plans generated from cognitive intent and sensory
            grounding.
          </p>
          <p>
            The <strong className="font-bold" style={{ color: CATEGORY_COLOR.Core }}>AI Heart</strong> serves as
            the power and thermal management matrix, distributing energy across the
            chassis via a solid-state lithium core with intelligent throttling.
            Operational philosophy prioritises adaptive coexistence: sensing intent,
            reasoning ethically, and acting with minimum energy and maximum precision.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { k: "Cognitive", v: "3 cores", color: CATEGORY_COLOR.Cognitive },
            { k: "Sensory", v: "4 arrays", color: CATEGORY_COLOR.Sensory },
            { k: "Physical", v: "2 systems", color: CATEGORY_COLOR.Physical },
            { k: "Power", v: "Solid-state", color: CATEGORY_COLOR.Core },
          ].map((s) => (
            <div
              key={s.k}
              className="rounded-lg p-3 text-center"
              style={{ border: `1px solid ${s.color}30`, background: `${s.color}12` }}
            >
              <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-gray-800">
                {s.k}
              </p>
              <p className="mt-1 font-mono text-xs font-bold" style={{ color: s.color }}>
                {s.v}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-3 font-mono text-[10px] font-bold uppercase tracking-widest text-gray-700">
          <span>Mainframe · Synced</span>
          <span style={{ color: ACTIVE_COLOR }}>◉ Core Link Active</span>
        </div>
      </div>
    </div>
  );
}
