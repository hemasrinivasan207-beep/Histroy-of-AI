import { useMemo, useState, useCallback, useRef } from "react";
import { HOTSPOTS, type Category } from "@/data/hotspots";

export function useActiveHotspot() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [bodOpen, setBodOpen] = useState(false);
  const tourRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const visible = useMemo(
    () => HOTSPOTS.filter((h) => filter === "All" || h.category === filter),
    [filter],
  );

  const active = HOTSPOTS.find((h) => h.id === activeId) ?? null;

  const toggle = useCallback((id: string) => {
    if (tourRef.current) {
      clearInterval(tourRef.current);
      tourRef.current = null;
    }
    setActiveId((prev) => (prev === id ? null : id));
  }, []);

  const changeFilter = useCallback((cat: "All" | Category) => {
    if (tourRef.current) {
      clearInterval(tourRef.current);
      tourRef.current = null;
    }
    setFilter(cat);
    setActiveId(null);
  }, []);

  const startTour = useCallback(() => {
    if (tourRef.current) {
      clearInterval(tourRef.current);
      tourRef.current = null;
      return;
    }
    let index = 0;
    const items = visible;
    if (items.length === 0) return;

    setActiveId(items[index]!.id);
    tourRef.current = setInterval(() => {
      index = (index + 1) % items.length;
      setActiveId(items[index]!.id);
    }, 3000);
  }, [visible]);

  return {
    filter,
    setFilter: changeFilter,
    activeId,
    setActiveId,
    bodOpen,
    setBodOpen,
    visible,
    active,
    toggle,
    startTour,
    isTouring: tourRef.current !== null,
  };
}
