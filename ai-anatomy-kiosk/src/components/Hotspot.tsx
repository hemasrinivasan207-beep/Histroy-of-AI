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
      style={{
        left: `${hotspot.bx}%`,
        top: `${hotspot.by}%`,
        width: "12%",
        height: "7%",
      }}
      aria-label={`${hotspot.name} zone`}
    >
      <span
        className={`block h-full w-full rounded-full transition-all duration-300 ${isActive ? "hotspot-pulse" : ""}`}
        style={{
          background: isActive ? `${color}30` : "transparent",
          border: isActive ? `2.5px solid ${color}` : "2.5px solid transparent",
          boxShadow: isActive ? `0 0 24px ${color}60, 0 0 48px ${color}30` : "none",
        }}
      />
    </button>
  );
}
