import { CATEGORIES, CATEGORY_COLOR, type Category } from "@/data/hotspots";

type FilterBarProps = {
  filter: "All" | Category;
  onFilterChange: (cat: "All" | Category) => void;
  onTourToggle: () => void;
};

export function FilterBar({ filter, onFilterChange, onTourToggle }: FilterBarProps) {
  return (
    <nav className="relative z-10 flex flex-wrap items-center justify-center gap-2 px-4 py-4 md:gap-3">
      {CATEGORIES.map((cat) => {
        const isActive = filter === cat;
        const color = cat === "All" ? "#3A2E39" : CATEGORY_COLOR[cat as Category];
        return (
          <button
            key={cat}
            onClick={() => onFilterChange(cat)}
            className="group relative rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] transition-all sm:px-4 sm:py-2 sm:text-xs"
            style={
              isActive
                ? {
                    color,
                    borderColor: color,
                    borderWidth: "1.5px",
                    borderStyle: "solid",
                    background: `${color}12`,
                  }
                : {
                    color: "#8A7A85",
                    borderColor: "rgba(58,46,57,0.12)",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    background: "transparent",
                  }
            }
          >
            <span
              className="mr-1.5 inline-block h-2 w-2 rounded-full transition-all"
              style={{
                background: color,
                opacity: isActive ? 1 : 0.4,
                boxShadow: isActive ? `0 0 6px ${color}60` : "none",
              }}
            />
            {cat}
          </button>
        );
      })}
      <button
        onClick={onTourToggle}
        className="ml-2 rounded-full border border-card-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted transition-all hover:border-active hover:text-active sm:px-4 sm:py-2 sm:text-xs"
        title="Auto-tour through all systems"
      >
        ▶ Tour
      </button>
    </nav>
  );
}
