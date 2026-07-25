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
      className="absolute z-30 font-display text-sm font-bold uppercase tracking-[0.12em] transition-transform active:scale-105 sm:text-base md:text-lg"
      style={{
        top: `${hotspot.ly}%`,
        left: `${hotspot.lx}%`,
        transform: `translate(${isLeft ? "-100%" : "0"}, -50%)`,
      }}
    >
      <span
        className="whitespace-nowrap rounded-md px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-sm transition-all duration-300"
        style={{
          color,
          borderColor: `${color}${isActive ? "" : "60"}`,
          borderWidth: "2px",
          borderStyle: "solid",
          background: isActive ? `${ACTIVE_COLOR}20` : "rgba(251,247,240,0.94)",
          boxShadow: isActive
            ? `0 4px 20px ${ACTIVE_COLOR}40`
            : "0 2px 8px rgba(58,46,57,0.1)",
          fontWeight: 700,
        }}
      >
        {hotspot.name}
      </span>
    </button>
  );
}
