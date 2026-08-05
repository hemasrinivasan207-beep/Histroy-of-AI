import { useState } from "react";
import { DetailCard } from "@/components/DetailCard"; // Update this import path to wherever your DetailCard is located
import { HOTSPOTS, type Hotspot } from "@/data/hotspots"; // Update to your hotspots data file

export default function App() {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);

  const handleHotspotClick = (hotspot: Hotspot) => {
    // Immediately stop ongoing speech when switching to a different button
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setActiveHotspot(hotspot);
  };

  const handleCloseCard = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setActiveHotspot(null);
  };

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-gray-950 overflow-hidden">
      {/* Your Image / 3D Model Canvas Container goes here */}
      <div className="relative w-full max-w-4xl h-[600px] flex items-center justify-center">
        
        {/* Example Hotspot Buttons (Replace these with your actual button placements/rendering logic) */}
        <div className="absolute inset-0 pointer-events-none">
          {HOTSPOTS.map((hotspot) => (
            <button
              key={hotspot.id}
              onClick={() => handleHotspotClick(hotspot)}
              className="pointer-events-auto absolute px-3 py-1 bg-cyan-500/20 border border-cyan-400 text-cyan-200 rounded-md text-xs font-mono uppercase tracking-wider hover:bg-cyan-500/40 transition-all"
              style={{
                // Your custom coordinate styling per hotspot goes here
              }}
            >
              AI {hotspot.name}
            </button>
          ))}
        </div>

        {/* Detail Card Popup (Automatically handles left/right placement based on ID) */}
        {activeHotspot && (
          <DetailCard
            hotspot={activeHotspot}
            onClose={handleCloseCard}
          />
        )}
      </div>
    </main>
  );
}
