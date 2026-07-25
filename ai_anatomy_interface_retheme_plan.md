# AI Human Anatomy Interface — Re-Theme & Completion Plan
### AI Museum — Zone 2 (History of AI), Standing Touchscreen Kiosk

---

## 1. What's Already Built (Audit)

Based on `PROJECT_DETAILS.md`, your team already has a fully working interactive console:

- **Stack**: TanStack Start + React 19 + Vite 7 + Tailwind v4 + TypeScript, targeting Cloudflare Workers.
- **Content**: 10 body-mapped AI subsystems (Brain, Memory, Emotion, Eyes, Ears, Face, Voice, Heart,
  Hands, Legs) grouped into 4 categories (Cognitive, Sensory, Physical, Core), each with a year,
  description, and short history — plus a central "AI BOD" chest hotspot.
- **Interaction**: category filter bar, click-to-reveal animated connector lines, a holographic
  detail card, all already working.
- **Visual treatment (current)**: dark cyberpunk — neon cyan/magenta on near-black, scanlines, grid
  background, glowing hotspots.

**This is a strong, functionally complete base.** The work needed here is a **visual re-theme**,
not a rebuild — every interaction, data point, and animation already works; only the color system
(and a few related effects) need to change.

---

## 2. The Core Ask

> Replace the dark neon cyberpunk theme with a **mild, colorful, moderate** theme — no dark
> backgrounds — designed to feel inviting on a standing touchscreen to a mixed school/college/
> faculty crowd, rather than clinical or intense.

---

## 3. New Design Token System

### Why this exact palette
Your Sign Language Interpreter project already established a warm, mixed-color palette
specifically for this event (ivory background, coral/teal/sunflower/periwinkle/mint accents) —
and it already satisfies everything this brief is asking for: light, moderate, colorful, not dark.
**Reusing it here isn't a shortcut — it's a deliberate choice that gives your whole museum a
cohesive visual identity** across different stations, instead of every project looking like an
unrelated product. The category mapping below preserves the *meaning* of the original cyberpunk
palette (violet=mind, cyan=senses, green=body, magenta=core) while translating each into its
warmer, mild equivalent.

### Color
| Token | Hex | Used For |
|---|---|---|
| Background | `#FBF7F0` (warm ivory) | Page background — replaces near-black |
| Ink / primary text | `#3A2E39` (plum) | Headlines, body text |
| Muted text | `#8A7A85` | Captions, status labels, timestamps |
| **Cognitive** (was violet) | `#8E7CFF` (periwinkle) | Brain, Memory, Emotion |
| **Sensory** (was neon cyan) | `#2EC4B6` (teal) | Eyes, Ears, Face, Voice |
| **Physical** (was neon green) | `#6BCB77` (mint) | Hands, Legs |
| **Core** (was magenta) | `#FF6B6B` (coral) | Heart / AI BOD |
| **Active / selected state** | `#FFC145` (sunflower) | Replaces the old all-purpose magenta highlight — a distinct color so "currently selected" never gets confused with a category color |

### Type
- **Display face** (headline, subsystem names): *Space Grotesk* — geometric, technical
  personality without tipping into sci-fi cliché.
- **Data/mono face** (years, status pills, IDs): *IBM Plex Mono* — keeps a "readout" feel for
  labels like `EST. 1956` or system status, without needing neon to feel technical.
- **Body face** (descriptions, history text): *IBM Plex Sans* — clean and legible for longer text
  in the detail card.

*(This is the same type pairing already used in your AI Anatomy Kiosk touchscreen build — reusing
it here reinforces the shared visual language across your event's two anatomy-themed stations.)*

### Layout / Effects — What Changes, What Stays
| Element | Current (dark theme) | New (mild theme) |
|---|---|---|
| Background | Near-black + grid pattern + neon corner glows + vignette | Ivory `#FBF7F0`, with very soft, low-opacity ambient color washes (periwinkle/teal/coral) instead of hard neon glows |
| `.grid-bg` | Visible tech grid | Either remove, or reduce to a very faint (≤5% opacity) grid — decorative texture only, not a dominant element |
| `.scanline` / `.scanline-inner` | Animated CRT scan sweep | **Remove.** Scanlines are a dark/retro-terminal signifier that actively fights against a "mild, inviting" feel |
| `.neon-text` / `.neon-border` | Bright cyan glow | Replace glow with a simple solid-color border/text in the category color — clean, not glowing |
| `.glass-panel` (detail card) | Dark translucent glass | Light frosted card: white/ivory translucent background, soft shadow, a colored top border matching the active category |
| `.hotspot-pulse` | Neon radial pulse | Keep the pulse *animation*, recolor to the new category colors — softer, still lively |
| `.float-y` (robot floating animation) | — | **Keep as-is** — this subtle motion works regardless of color theme |
| Connector lines (SVG draw animation) | Glowing cyan/magenta | Slate-gray `#8A7A85` by default, turning sunflower `#FFC145` when active — keep the draw-in animation, just recolor |
| Robot render (`robot.png`) | White/silver robot with cyan glow accents | Should still read well against ivory as-is (light robot on light background works); optional future enhancement: re-render with warmer accent lighting if your team wants a perfect match, but not required |

---

## 4. Optional Consideration: Copy Tone

Not required by your brief, but worth a look: current header copy ("NEURAL DIAGNOSTIC CONSOLE",
"SIG DB%", "SIC · OMEGA") leans heavily cyberpunk/clinical. If you want the *whole* experience —
not just the colors — to feel more inviting to a school-age visitor, consider softening this
copy too (e.g., "AI Museum · History of AI" instead of "NEURAL DIAGNOSTIC CONSOLE"). This is
optional — flagging it because color and copy tone work together, but your instructions were
specifically about the color theme, so treat this as a nice-to-have, not a requirement.

---

## 5. Step-by-Step Implementation Plan

### Step 1 — Update the color tokens (`src/styles.css`)
- Replace the dark background and neon utility classes with the new tokens from Section 3.
- Remove `.scanline` / `.scanline-inner` entirely (both the CSS and the JSX element rendering it
  in `index.tsx`).
- Rewrite `.glass-panel` for a light frosted-card look (white/ivory translucent + soft shadow
  instead of dark glass).
- Update `.hotspot-pulse` and `.neon-text`/`.neon-border` to use the new category colors instead
  of neon cyan.

### Step 2 — Update the category color map (`src/routes/index.tsx`)
Replace the existing `CATEGORY_COLOR` object:
```ts
// Before
Cognitive → #c77dff
Sensory   → #00f3ff
Physical  → #39ff88
Core      → #ff0055

// After
Cognitive → #8E7CFF
Sensory   → #2EC4B6
Physical  → #6BCB77
Core      → #FF6B6B
```
Update the "active/selected" highlight color (currently hardcoded to magenta `#ff0055`) to
sunflower `#FFC145`.

### Step 3 — Update the background treatment
Replace the grid + hard neon corner gradients + vignette with the soft ambient color washes
described in Section 3's layout table. Keep it subtle — the background should feel calm, not busy.

### Step 4 — Update connector line + SVG styling
Change the `polyline` stroke color and glow filter to slate-gray by default, sunflower when the
hotspot is active — keep the existing `draw-line` animation exactly as-is, only recolor it.

### Step 5 — Visual QA pass
Compare against the checklist in Section 7 before moving to deployment.

---

## 6. Deployment Plan — Standing Touchscreen Kiosk

- **Good news on layout**: your robot render is already a **768×1536 portrait aspect ratio** —
  this naturally fits a vertical standing touchscreen without any layout rework.
- **Running it at the booth**: since there's no backend/database enabled (confirmed in your
  project details), you have two options:
  - **Option A — Keep it hosted**: if Lovable has published this to a live URL, you can simply
    open that URL in the touchscreen's browser in fullscreen/kiosk mode. Simplest option if venue
    Wi-Fi is reliable.
  - **Option B — Run it locally (recommended for reliability)**: build the project
    (`npm run build`) and serve it locally on the kiosk device, the same way as your other web
    projects — this avoids any dependency on venue internet during the event.
- **Kiosk mode**: launch the browser in fullscreen kiosk mode on the touchscreen device, same
  approach as your other interactive stations (e.g. `chrome --kiosk --touch-events <url>`).
- **Touch targets**: double-check hotspot click areas are large enough for finger taps (not just
  precise mouse clicks) — this matters more now that it's moving from a demo screen to a public
  touchscreen.

---

## 7. Testing Checklist

- [ ] All 10 hotspots + AI BOD readable and tappable against the new light background.
- [ ] Category filter bar colors match the new palette and remain distinguishable from each other.
- [ ] Detail card is legible — text contrast checked against the new light card background.
- [ ] Connector line animation still draws correctly in the new color.
- [ ] Scanline effect fully removed (not just hidden/invisible — actually removed to avoid any
      leftover performance cost).
- [ ] Tested on the actual touchscreen hardware — not just a laptop browser — for touch
      responsiveness and readability under venue lighting.
- [ ] Confirmed working fully offline if using Option B deployment (Section 6).

---

## 8. Task Breakdown

| Task | Owner Suggestion |
|---|---|
| Update `styles.css` tokens (Section 5, Step 1) | Whoever owns styling |
| Update `CATEGORY_COLOR` + active state (Step 2) | Same person, since it's a small, related change |
| Background + connector line recolor (Steps 3–4) | Same person or a second contributor working in parallel |
| Visual QA pass (Step 5) | Whole team — get a few outside opinions, not just the builder's |
| Deployment + kiosk setup (Section 6) | Whoever is handling the physical booth setup |
| Touchscreen testing (Section 7) | Testing lead, ideally with a few outside testers, not just the dev |

---

## 9. Success Criteria

- [ ] No dark backgrounds remain anywhere in the interface.
- [ ] Palette matches (or clearly derives from) the museum's established mild color system.
- [ ] All original interactions (filter, hotspot click, connector animation, detail card) still
      work exactly as before — this is a re-skin, not a rebuild, so nothing should break.
- [ ] Confirmed working and readable on the actual standing touchscreen hardware.
- [ ] Runs reliably for the full event without depending on unstable venue Wi-Fi (if Option B
      deployment is used).

---

*Next step: Section 5's file-by-file changes are the actual work — start with `styles.css`
(Step 1) since most other changes just consume those same tokens once they're defined.*
