import { CATEGORY_COLOR, ACTIVE_COLOR, type Hotspot } from "@/data/hotspots";

type HotspotProps = {
  hotspot: Hotspot;
  isActive: boolean;
  onClick: (id: string) => void;
};

export function Hotspot({ hotspot, isActive, onClick }: HotspotProps) {
  const color = isActive ? ACTIVE_COLOR : CATEGORY_COLOR[hotspot.category];

  return (
    <button
      onClick={() => onClick(hotspot.id)}
      className="absolute z-30 -translate-x-1/2 -translate-y-1/2 transition-transform active:scale-110"
      style={{ left: `${hotspot.bx}%`, top: `${hotspot.by}%`, width: "8%", height: "5%" }}
      aria-label={`${hotspot.name} zone`}
    >
      <span
        className={`block h-full w-full rounded-full transition-all duration-300 ${isActive ? "hotspot-pulse" : ""}`}
        style={{
          background: isActive ? `${color}22` : "transparent",
          border: isActive ? `1.5px solid ${color}` : "1.5px solid transparent",
          boxShadow: isActive ? `0 0 16px ${color}40, 0 0 32px ${color}20` : "none",
        }}
      />
    </button>
  );
}
