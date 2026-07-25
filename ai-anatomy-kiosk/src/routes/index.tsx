import { createFileRoute } from "@tanstack/react-router";
import { AmbientBackground } from "@/components/AmbientBackground";
import { Header } from "@/components/Header";
import { FilterBar } from "@/components/FilterBar";
import { RobotCanvas } from "@/components/RobotCanvas";
import { DetailCard } from "@/components/DetailCard";
import { BodModal } from "@/components/BodModal";
import { useActiveHotspot } from "@/hooks/useActiveHotspot";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Museum — History of AI — Interactive Anatomy Explorer" },
      {
        name: "description",
        content:
          "Interactive touchscreen kiosk mapping the anatomy of artificial intelligence — cognitive, sensory, physical and core subsystems explored through touch.",
      },
      {
        property: "og:title",
        content: "AI Museum — History of AI — Interactive Anatomy",
      },
      {
        property: "og:description",
        content:
          "Tap to explore 10 AI subsystems mapped to a humanoid body — from the Brain to AI Hands and Legs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const {
    filter,
    setFilter,
    activeId,
    bodOpen,
    setBodOpen,
    visible,
    active,
    toggle,
    startTour,
  } = useActiveHotspot();

  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      <AmbientBackground />
      <Header />
      <FilterBar filter={filter} onFilterChange={setFilter} onTourToggle={startTour} />
      <RobotCanvas
        visible={visible}
        activeId={activeId}
        onToggle={toggle}
        onBodToggle={() => setBodOpen(true)}
      />

      {active && <DetailCard hotspot={active} onClose={() => toggle(activeId!)} />}
      {bodOpen && <BodModal onClose={() => setBodOpen(false)} />}
    </main>
  );
}
