import { CATEGORIES, CATEGORY_COLOR, type Category } from "@/data/hotspots";

type FilterBarProps = {
  filter: "All" | Category;
  onFilterChange: (cat: "All" | Category) => void;
  onTourToggle: () => void;
};

export function FilterBar({ filter, onFilterChange, onTourToggle }: FilterBarProps) {
  return (
    <nav className="relative z-10 flex flex-wrap items-center justify-center gap-2 px-4 py-4 sm:gap-3 md:gap-4">
      {CATEGORIES.map((cat) => {
        const isActive = filter === cat;
        const color = cat === "All" ? "#3A2E39" : CATEGORY_COLOR[cat as Category];
        return (
          <button
            key={cat}
            onClick={() => onFilterChange(cat)}
            className="group relative rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] transition-all sm:px-6 sm:py-2.5 sm:text-base md:text-lg"
            style={
              isActive
                ? {
                    color,
                    borderColor: color,
                    borderWidth: "2.5px",
                    borderStyle: "solid",
                    background: `${color}18`,
                  }
                : {
                    color: "#3A2E39",
                    borderColor: "rgba(58,46,57,0.2)",
                    borderWidth: "2px",
                    borderStyle: "solid",
                    background: "rgba(58,46,57,0.04)",
                  }
            }
          >
            <span
              className="mr-2 inline-block h-3 w-3 rounded-full transition-all"
              style={{
                background: color,
                opacity: isActive ? 1 : 0.5,
                boxShadow: isActive ? `0 0 8px ${color}70` : "none",
              }}
            />
            {cat}
          </button>
        );
      })}
      <button
        onClick={onTourToggle}
        className="ml-1 rounded-full border-2 border-card-border bg-[rgba(58,46,57,0.04)] px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-muted transition-all hover:border-active hover:text-active sm:px-6 sm:py-2.5 sm:text-base md:text-lg"
        title="Auto-tour through all systems"
      >
        ▶ Tour
      </button>
    </nav>
  );
}
