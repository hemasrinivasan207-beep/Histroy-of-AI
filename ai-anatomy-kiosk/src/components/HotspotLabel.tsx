import { CATEGORY_COLOR, ACTIVE_COLOR, type Hotspot } from "@/data/hotspots";

type HotspotLabelProps = {
  hotspot: Hotspot;
  isActive: boolean;
  onClick: (id: string) => void;
};

export function HotspotLabel({ hotspot, isActive, onClick }: HotspotLabelProps) {
  const color = isActive ? ACTIVE_COLOR : CATEGORY_COLOR[hotspot.category];
  const isLeft = hotspot.side === "left";

  return (
    <button
      onClick={() => onClick(hotspot.id)}
      className="absolute z-30 font-mono text-[9px] uppercase tracking-[0.15em] sm:text-[10px] transition-transform active:scale-105"
      style={{
        top: `${hotspot.ly}%`,
        left: `${hotspot.lx}%`,
        transform: `translate(${isLeft ? "-100%" : "0"}, -50%)`,
      }}
    >
      <span
        className="whitespace-nowrap rounded-md px-2 py-1 backdrop-blur-sm transition-all duration-300"
        style={{
          color,
          borderColor: `${color}${isActive ? "" : "40"}`,
          borderWidth: "1px",
          borderStyle: "solid",
          background: isActive ? `${ACTIVE_COLOR}15` : "rgba(251,247,240,0.85)",
          boxShadow: isActive
            ? `0 2px 12px ${ACTIVE_COLOR}30`
            : "0 1px 4px rgba(58,46,57,0.06)",
          fontWeight: isActive ? 600 : 400,
        }}
      >
        {hotspot.name}
      </span>
    </button>
  );
}
