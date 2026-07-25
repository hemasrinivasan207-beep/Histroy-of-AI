export type Category = "Cognitive" | "Sensory" | "Physical" | "Core";
export type Side = "left" | "right";

export type Hotspot = {
  id: string;
  name: string;
  category: Category;
  year: string;
  description: string;
  history: string;
  milestone: string;
  funFact: string;
  bx: number;
  by: number;
  lx: number;
  ly: number;
  side: Side;
};

export const CATEGORIES: ("All" | Category)[] = [
  "All",
  "Cognitive",
  "Sensory",
  "Physical",
  "Core",
];

export const CATEGORY_COLOR: Record<Category, string> = {
  Cognitive: "#8E7CFF",
  Sensory: "#2EC4B6",
  Physical: "#6BCB77",
  Core: "#FF6B6B",
};

export const ACTIVE_COLOR = "#FFC145";

export const AI_BOD = { x: 50, y: 34 };

export const HOTSPOTS: Hotspot[] = [
  {
    id: "brain",
    name: "AI Brain",
    category: "Cognitive",
    year: "1956",
    description:
      "Core neural architecture and reasoning engine handling high-level decision making and multi-layered deep processing across transformer stacks.",
    history:
      "Conceptualized at the 1956 Dartmouth Summer Research Project, evolving from symbolic logic and expert systems to modern deep neural networks and transformer models.",
    milestone: "Transformer architecture achieves human-level reasoning benchmarks",
    funFact:
      "The largest AI models now have over 1 trillion parameters — more connections than some estimates of the human brain's synapses",
    bx: 50,
    by: 9,
    lx: 82,
    ly: 5,
    side: "right",
  },
  {
    id: "memory",
    name: "AI Memory",
    category: "Cognitive",
    year: "1980s",
    description:
      "High-capacity vector database and contextual knowledge graph storing long-term historical interactions and semantic links for retrieval-augmented cognition.",
    history:
      "Stemming from relational databases and knowledge representation frameworks of the 1980s, scaling into modern high-capacity vector databases and semantic knowledge graphs.",
    milestone:
      "Vector databases enable instant semantic search across billions of documents",
    funFact:
      "AI memory systems can store and recall information in milliseconds — tasks that would take humans hours of searching",
    bx: 55,
    by: 12,
    lx: 84,
    ly: 14,
    side: "right",
  },
  {
    id: "eyes",
    name: "AI Eyes",
    category: "Sensory",
    year: "1966",
    description:
      "Advanced computer vision and spatial mapping arrays processing high-definition optical feeds, object tracking and depth reconstruction.",
    history:
      "Originated in the 1960s with MIT's Summer Vision Project, moving through edge-detection algorithms to modern real-time spatial mapping and optical transformers.",
    milestone: "Real-time object detection now processes 120+ frames per second",
    funFact:
      "AI Eyes can detect faces from over 500 meters away — far beyond human visual capability",
    bx: 47,
    by: 13,
    lx: 16,
    ly: 7,
    side: "left",
  },
  {
    id: "ears",
    name: "AI Ears",
    category: "Sensory",
    year: "1971",
    description:
      "Acoustic signal processing and automatic speech recognition subsystem filtering ambient noise into machine commands via neural acoustic models.",
    history:
      "Rooted in early DARPA speech understanding research in the 1970s, evolving from template-matching to Hidden Markov Models and modern neural acoustic transcribers.",
    milestone:
      "Modern speech recognition achieves 97% accuracy — matching human performance",
    funFact:
      "AI Ears can identify over 300 distinct sound classes, from footsteps to heartbeats, in real time",
    bx: 42,
    by: 15,
    lx: 14,
    ly: 16,
    side: "left",
  },
  {
    id: "face",
    name: "AI Face",
    category: "Sensory",
    year: "1991",
    description:
      "Facial recognition, identity verification and expression projection panel scanning facial features while rendering interactive emotive cues.",
    history:
      "Grounded in 1990s eigenface matching and biometric security research, evolving into real-time facial feature tracking and expressive LED projection matrices.",
    milestone: "Facial recognition accuracy now exceeds 99.9% on benchmark datasets",
    funFact:
      "AI Face systems can detect over 43 facial muscle movements to read micro-expressions humans miss",
    bx: 50,
    by: 16,
    lx: 82,
    ly: 24,
    side: "right",
  },
  {
    id: "voice",
    name: "AI Voice",
    category: "Sensory",
    year: "1980s",
    description:
      "Synthetic verbal communication suite generating natural speech patterns and dynamic vocal responses via neural text-to-speech pipelines.",
    history:
      "Evolved from early formant and concatenative speech synthesis systems in the 1980s to modern neural TTS capable of human-like intonation.",
    milestone: "Neural TTS now generates speech indistinguishable from human recordings",
    funFact:
      "AI Voice can clone any speaker's voice from just 3 seconds of audio — raising both accessibility and deepfake concerns",
    bx: 52,
    by: 19,
    lx: 14,
    ly: 25,
    side: "left",
  },
  {
    id: "emotion",
    name: "AI Emotion",
    category: "Cognitive",
    year: "2010s",
    description:
      "Affective computing and behavioral analysis layer interpreting human emotional states via micro-expressions, pitch shifts and multi-modal cues.",
    history:
      "Emerged in the 2010s with the rise of affective computing, integrating computer vision, sentiment analysis, and multi-modal behavioral psychology frameworks.",
    milestone:
      "Multi-modal emotion AI combines text, voice, and facial cues for 85%+ accuracy",
    funFact:
      "AI Emotion systems can detect subtle mood shifts in customer support calls before the person even realizes they're frustrated",
    bx: 45,
    by: 27,
    lx: 14,
    ly: 38,
    side: "left",
  },
  {
    id: "heart",
    name: "AI Heart",
    category: "Core",
    year: "Core",
    description:
      "Power distribution and thermal management matrix regulating electrical current across all subsystems and monitoring efficiency in real time.",
    history:
      "Evolved alongside mobile robotics power systems, transitioning from lead-acid cells to modern solid-state lithium matrices with intelligent thermal throttling.",
    milestone: "Solid-state batteries now deliver 2x energy density of lithium-ion",
    funFact:
      "A single AI data center uses as much electricity as a small city — making efficient power management critical",
    bx: 50,
    by: 36,
    lx: 84,
    ly: 48,
    side: "right",
  },
  {
    id: "hands",
    name: "AI Hands",
    category: "Physical",
    year: "1961",
    description:
      "Multi-axis force-feedback robotic manipulators designed with high-resolution tactile sensors for delicate assembly and gripping operations.",
    history:
      "Began with the Unimate industrial robotic arms in 1961, advancing into multi-axis force-feedback manipulators with advanced tactile skin sensors.",
    milestone:
      "Modern robotic hands can thread a needle and lift a 50kg object with equal precision",
    funFact:
      "AI Hands with tactile sensors can feel texture differences thinner than a human hair",
    bx: 26,
    by: 56,
    lx: 12,
    ly: 62,
    side: "left",
  },
  {
    id: "legs",
    name: "AI Legs",
    category: "Physical",
    year: "1996",
    description:
      "Bipedal locomotion framework utilizing onboard inertial measurement units (IMUs) to adjust stride and navigate uneven terrain in real time.",
    history:
      "Pioneered by early bipedal research at Waseda University and Honda's P-series, culminating in 1996 with Honda P2 and refined by reinforcement-learning locomotion.",
    milestone:
      "Boston Dynamics robots now navigate rubble, stairs, and ice with 98% stability",
    funFact:
      "AI Legs can learn to walk in simulation in just 20 minutes — a task that takes human babies over a year",
    bx: 55,
    by: 78,
    lx: 84,
    ly: 82,
    side: "right",
  },
];
