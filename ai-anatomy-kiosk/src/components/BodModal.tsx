import { useEffect, useRef } from "react";
import { CATEGORY_COLOR, ACTIVE_COLOR } from "@/data/hotspots";

type BodModalProps = {
  onClose: () => void;
};

export function BodModal({ onClose }: BodModalProps) {
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    return () => {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const speakContent = () => {
    if (!("speechSynthesis" in window)) return;

    // stop anything already playing
    window.speechSynthesis.cancel();

    const textToRead =
      "AI Bod. Integrated Cybernetic Intelligence System. AI Bod is the fully-integrated central mainframe binding every cognitive, sensory and physical subsystem into a single cybernetic organism. Cognitive stacks, including Brain, Memory and Emotion cores, orchestrate reasoning, contextual recall, and affective interpretation through the neural bus. Sensory modules, including Eyes, Ears, Face, and Voice, feed a continuous multi-modal telemetry stream into the mainframe, allowing environmental awareness and human-parity social interaction in real time. Physical actuators, including Hands and Legs, receive fused motion plans generated from cognitive intent and sensory grounding. The AI Heart serves as the power and thermal management matrix, distributing energy across the chassis via a solid-state lithium core with intelligent throttling. Operational philosophy prioritises adaptive coexistence.";

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 1.0;

    // keep reference
    utteranceRef.current = utterance;

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeech = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.pause();   // force break
      window.speechSynthesis.cancel();  // clear queue
      utteranceRef.current = null;
    }
  };

  const handleClose = () => {
    stopSpeech(); // stop voice immediately
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center p-4 backdrop-blur-sm animate-fade-in"
      style={{ background: "rgba(251,247,240,0.7)" }}
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-xl glass-card p-6 sm:p-8 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Coral accent bar */}
        <div className="absolute inset-x-6 -top-px h-[2px] rounded-full bg-core" />

        {/* Action Buttons (Read Aloud & Close) */}
        <div className="absolute right-3 top-3 flex items-center gap-1.5">
          <button
            onClick={speakContent}
            className="grid h-7 px-2.5 place-items-center rounded-lg font-mono text-[10px] uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 transition-colors hover:bg-cyan-500/20"
            aria-label="Read Aloud"
          >
            🔊 Read
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClose(); // ❌ stops speech and closes
            }}
            className="grid h-8 w-8 place-items-center rounded-lg text-muted transition-colors hover:bg-card-border hover:text-foreground"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="flex items-center gap-2">
          <span
            className="rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em]"
            style={{
              color: CATEGORY_COLOR.Core,
              border: `1px solid ${CATEGORY_COLOR.Core}30`,
              background: `${CATEGORY_COLOR.Core}10`,
            }}
          >
            Core Mainframe
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            ID · AI-BOD-000
          </span>
        </div>

        <h2 className="mt-3 text-3xl font-black tracking-wide text-core sm:text-4xl">
          AI BOD
        </h2>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
          Integrated Cybernetic Intelligence System
        </p>

        {/* ... rest of your content unchanged ... */}
      </div>
    </div>
  );
}
