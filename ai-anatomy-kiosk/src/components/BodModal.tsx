import { CATEGORY_COLOR, ACTIVE_COLOR } from "@/data/hotspots";

type BodModalProps = {
  onClose: () => void;
};

export function BodModal({ onClose }: BodModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center p-4 backdrop-blur-sm animate-fade-in"
      style={{ background: "rgba(251,247,240,0.7)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-xl glass-card p-6 sm:p-8 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Coral accent bar */}
        <div className="absolute inset-x-6 -top-px h-[2px] rounded-full bg-core" />

        <button
          onClick={onClose}
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-lg text-muted transition-colors hover:bg-card-border hover:text-foreground"
          aria-label="Close"
        >
          ✕
        </button>

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

        <div className="mt-5 space-y-4 font-body text-sm leading-relaxed text-foreground">
          <p>
            <strong style={{ color: CATEGORY_COLOR.Cognitive }}>AI Bod</strong> is the
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
            The <strong style={{ color: CATEGORY_COLOR.Core }}>AI Heart</strong> serves as
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
              style={{ border: `1px solid ${s.color}20`, background: `${s.color}08` }}
            >
              <p className="font-mono text-[9px] uppercase tracking-widest text-muted">
                {s.k}
              </p>
              <p className="mt-1 font-mono text-xs" style={{ color: s.color }}>
                {s.v}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-card-border pt-3 font-mono text-[10px] uppercase tracking-widest text-muted">
          <span>Mainframe · Synced</span>
          <span style={{ color: ACTIVE_COLOR }}>◉ Core Link Active</span>
        </div>
      </div>
    </div>
  );
}
