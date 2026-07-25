import robotImg from "@/assets/robot.png";
import { AI_BOD, CATEGORY_COLOR, ACTIVE_COLOR, type Hotspot } from "@/data/hotspots";
import { Hotspot as HotspotZone } from "./Hotspot";
import { HotspotLabel } from "./HotspotLabel";
import { ConnectorLines } from "./ConnectorLines";

type RobotCanvasProps = {
  visible: Hotspot[];
  activeId: string | null;
  onToggle: (id: string) => void;
  onBodToggle: () => void;
};

export function RobotCanvas({
  visible,
  activeId,
  onToggle,
  onBodToggle,
}: RobotCanvasProps) {
  return (
    <section className="relative z-10 mx-auto w-full max-w-[720px] px-4 pb-24 md:pb-16">
      <div
        className="relative w-full mx-auto animate-fade-in-scale"
        style={{ aspectRatio: "768 / 1536", maxWidth: "100%", animationDelay: "0.2s" }}
      >
        {/* Decorative rings */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-card-border opacity-50" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-card-border opacity-40" />

        {/* Robot image */}
        <img
          src={robotImg}
          alt="AI humanoid anatomy reference model"
          className="relative z-10 h-full w-full object-contain float-y"
          style={{
            filter: "drop-shadow(0 20px 40px rgba(58,46,57,0.12))",
          }}
          width={768}
          height={1536}
        />

        {/* SVG connector lines */}
        <ConnectorLines visible={visible} activeId={activeId} />

        {/* Body hotspot zones */}
        {visible.map((h) => (
          <HotspotZone
            key={`body-${h.id}`}
            hotspot={h}
            isActive={h.id === activeId}
            onClick={onToggle}
          />
        ))}

        {/* AI BOD chest hotspot */}
        <button
          onClick={onBodToggle}
          className="absolute z-30 -translate-x-1/2 -translate-y-1/2 transition-transform active:scale-110"
          style={{ left: `${AI_BOD.x}%`, top: `${AI_BOD.y}%` }}
          aria-label="AI Bod Central Mainframe"
        >
          <span className="relative block h-10 w-10 rounded-full hotspot-pulse sm:h-12 sm:w-12">
            <span
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle, ${CATEGORY_COLOR.Core}65, ${CATEGORY_COLOR.Cognitive}45 60%, transparent 75%)`,
                border: `2.5px solid ${CATEGORY_COLOR.Core}`,
                boxShadow: `0 0 24px ${CATEGORY_COLOR.Core}70, 0 0 48px ${CATEGORY_COLOR.Core}40`,
              }}
            />
            <span
              className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-md px-3 py-1 font-display text-xs font-bold uppercase tracking-[0.2em] sm:text-sm"
              style={{
                color: CATEGORY_COLOR.Core,
                border: `2px solid ${CATEGORY_COLOR.Core}50`,
                background: "rgba(251,247,240,0.94)",
              }}
            >
              AI BOD
            </span>
          </span>
        </button>

        {/* Text labels */}
        {visible.map((h) => (
          <HotspotLabel
            key={`lbl-${h.id}`}
            hotspot={h}
            isActive={h.id === activeId}
            onClick={onToggle}
          />
        ))}
      </div>
    </section>
  );
}
