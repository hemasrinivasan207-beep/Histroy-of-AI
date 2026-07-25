import { ACTIVE_COLOR, type Hotspot } from "@/data/hotspots";

type ConnectorLinesProps = {
  visible: Hotspot[];
  activeId: string | null;
};

export function ConnectorLines({ visible, activeId }: ConnectorLinesProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 z-20 h-full w-full"
      aria-hidden
    >
      <defs>
        <marker
          id="arrow-active"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" fill={ACTIVE_COLOR} />
        </marker>
        <filter id="glow-soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {visible.map((h) => {
        const isActive = h.id === activeId;
        if (!isActive) return null;
        const midX = (h.lx + h.bx) / 2;
        const points = `${h.lx},${h.ly} ${midX},${h.ly} ${midX},${h.by} ${h.bx},${h.by}`;
        return (
          <g key={h.id} filter="url(#glow-soft)">
            <polyline
              points={points}
              fill="none"
              stroke={ACTIVE_COLOR}
              strokeWidth={0.55}
              strokeOpacity={1}
              markerEnd="url(#arrow-active)"
              vectorEffect="non-scaling-stroke"
              pathLength={100}
              strokeDasharray="100"
              strokeDashoffset="100"
              style={{ animation: "draw-line 0.6s ease-out forwards" }}
            />
          </g>
        );
      })}
    </svg>
  );
}
