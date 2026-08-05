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
      "AI Bod. Integrated Cybernetic Intelligence System. AI Bod is the fully-integrated central mainframe binding every cognitive, sensory and physical subsystem into a single cybernetic organism...";

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 1.0;

    // keep reference
    utteranceRef.current = utterance;

    // reset reference when speech ends
    utterance.onend = () => {
      utteranceRef.current = null;
    };

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeech = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
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
        {/* Action Buttons */}
        <div className="absolute right-3 top-3 flex items-center gap-1.5">
          <button onClick={speakContent}>🔊 Read</button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClose(); // ❌ stops speech and closes
            }}
          >
            ✕
          </button>
        </div>

        {/* Content ... */}
      </div>
    </div>
  );
}
