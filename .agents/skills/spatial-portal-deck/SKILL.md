---
name: spatial-portal-deck
description: >-
  Create, scaffold, or customize dark spatial editorial landing pages featuring a scroll-driven
  portal hero (two sliding panels, splitting display wordmark, duotone wash) and a physics-based
  throwable card deck (pointer drag, velocity throw, keyboard navigation, touch pan-y).
  Use whenever designing high-impact portfolios, studio showcases, hardware launches, or record labels.
---

# Spatial Portal & Throwable Deck Skill

This skill provides the comprehensive architecture, design rules, mathematical formulas, and code templates required to build a **Dark Spatial Editorial Landing Page** featuring:
1. A **Scroll-Driven Portal Hero** (two opaque panels parting outward, split wordmark tightening & separating, duotone wash, and travelling accent dots).
2. A **Physical Throwable Card Deck** (pointer drag physics, dynamic tilt, velocity throw, keyboard navigation, and mobile touch safety).
3. A **Statement Fold** (floating rotating seal, outlined `-webkit-text-stroke` numeral).
4. **Hairline Roster & Collapsing Dates Table**.
5. **Page-Edge Cropped Wordmark Footer**.

---

## 1. Design System & Style Tokens

### Color Palette Specification
```css
:root {
  /* Ground & Surfaces */
  --bg-ground: #0A0C0E;        /* Deep obsidian ground (or #0B0D0F) */
  --bg-secondary: #101317;     /* Elevated slate surface (or #121519) */

  /* Ink & Typography */
  --ink: #EDE7DC;              /* Warm bone ink / raw plaster (or #EFEBE4) */
  --ink-secondary: #9EA5A8;    /* Muted secondary ink (or #A0A7AC) */
  --ink-muted: #6C7378;        /* Subtle metadata grey (or #6C747B) */

  /* Dual Accents (Taken directly from photography) */
  --amber: #E8913C;            /* Terracotta / warm amber (or #D98A38) */
  --teal: #2E6B72;             /* Copper / slate teal (or #34747B) */

  /* Hairlines & Borders */
  --hairline: rgba(237, 231, 220, 0.13);
  --hairline-light: rgba(237, 231, 220, 0.25);
  
  /* Typography */
  --font-display: 'Syne', sans-serif;
  --font-sans: 'Sora', sans-serif;
}
```

### Strict Aesthetic Constraints
- **Accents Usage**: Accents (`--amber` and `--teal`) MUST be restricted exclusively to **typography, small dots (e.g. 4–6px), or hairline rules (1px borders)**. NEVER use accents as solid block background fills.
- **Drop Shadow Rule**: DO NOT use drop shadows, glows, or gradient banners anywhere on the page **except on the physical deck cards** (`box-shadow: 0 20px 45px rgba(0,0,0,0.65)`).
- **Typography Scale**:
  - Headings & Wordmarks: `'Syne'`, 600–800 weight, letter-spacing `-0.02em` to `-0.03em`.
  - Body & Metadata: `'Sora'`, 400–600 weight, 10.5px–15px, uppercase labels at `0.12em`–`0.15em` letter-spacing.

---

## 2. Portal Hero Architecture

### Layer Stack (Back to Front)
Inside a sticky stage (`position: sticky; top: 0; height: 100vh; overflow: hidden; isolation: isolate;`):
1. **Overscaled Hero Image**: `scale(1.2)` $\rightarrow$ settles to `scale(1.0)`.
2. **Duotone Wash Overlay**: `linear-gradient(135deg, amber, teal)` at `mix-blend-mode: overlay; opacity: 0` $\rightarrow$ rises to `0.4`.
3. **Radial Veil**: `radial-gradient(circle at center, transparent 15%, #0A0C0E 85%)`.
4. **Two Solid Panels**: `width: 51vw; height: 100%; position: absolute;` (left & right). Begin meeting at center (closed). Part outward past viewport width on scroll.
5. **Travelling Accent Dots**: Two 6px dots starting at center, travelling towards opposite diagonal corners (`-42vw, -38vh` and `+42vw, +38vh`).
6. **Splitting Portal Title**: Scaled up (`1.0` $\rightarrow$ `1.35`), tracking tightened (`-0.01em` $\rightarrow$ `-0.05em`), and halves translated outward (`translateX(-52%)` / `translateX(52%)`).
7. **Corner Metadata Pins**: 4 corners pinned with coordinates, volume/edition tags, and scroll hint.

### Portal Scroll Engine (JavaScript)
```javascript
const portalSection = document.getElementById('portal');
const heroBgImg = document.getElementById('hero-bg-img');
const duotoneWash = document.getElementById('duotone-wash');
const panelLeft = document.getElementById('panel-left');
const panelRight = document.getElementById('panel-right');
const dotAmber = document.getElementById('dot-amber');
const dotTeal = document.getElementById('dot-teal');
const portalTitle = document.getElementById('portal-title');
const spanLeft = document.getElementById('span-left');
const spanRight = document.getElementById('span-right');

function updatePortalOnScroll() {
  if (!portalSection) return;
  const portalRect = portalSection.getBoundingClientRect();
  const totalScrollableDistance = portalSection.offsetHeight - window.innerHeight;
  const currentScroll = -portalRect.top;
  const progress = Math.max(0, Math.min(1, currentScroll / totalScrollableDistance));

  // Panels part outward
  panelLeft.style.transform = `translate3d(${-progress * 105}%, 0, 0)`;
  panelRight.style.transform = `translate3d(${progress * 105}%, 0, 0)`;

  // Image settles
  heroBgImg.style.transform = `scale(${1.2 - progress * 0.2})`;
  duotoneWash.style.opacity = (progress * 0.42).toString();

  // Wordmark splits, tightens tracking, and scales up
  portalTitle.style.transform = `translate(-50%, -50%) scale(${1 + progress * 0.35})`;
  portalTitle.style.letterSpacing = `${(-0.01 - progress * 0.04).toFixed(4)}em`;
  spanLeft.style.transform = `translate3d(${-progress * 52}%, 0, 0)`;
  spanRight.style.transform = `translate3d(${progress * 52}%, 0, 0)`;

  // Dots travel to corners
  dotAmber.style.transform = `translate3d(calc(-50% - ${progress * 42}vw), calc(-50% - ${progress * 38}vh), 0)`;
  dotTeal.style.transform = `translate3d(calc(-50% + ${progress * 42}vw), calc(-50% + ${progress * 38}vh), 0)`;
}

window.addEventListener('scroll', updatePortalOnScroll, { passive: true });
```

---

## 3. Physical Throwable Card Deck Architecture

### Visual Stack Layering
Cards are stacked absolutely inside a square container (`width: 420px; height: 420px; touch-action: pan-y; outline: none;`).
- **Top Card (pos 0)**: `transform: translate3d(0, 0, 0) rotate(0deg) scale(1); z-index: 10; opacity: 1;`
- **Card 1 (pos 1)**: `transform: translate3d(-10px, -14px, 0) rotate(-3.5deg) scale(0.96); z-index: 9; opacity: 0.9;`
- **Card 2 (pos 2)**: `transform: translate3d(12px, -28px, 0) rotate(3deg) scale(0.92); z-index: 8; opacity: 0.8;`
- **Card 3 (pos 3)**: `transform: translate3d(-6px, -42px, 0) rotate(-1.5deg) scale(0.88); z-index: 7; opacity: 0.7;`
- **Card 4 (pos 4)**: `transform: translate3d(8px, -54px, 0) rotate(2deg) scale(0.84); z-index: 6; opacity: 0.6;`

### Physics, Drag & Keyboard Engine
```javascript
const deckContainer = document.getElementById('deck-container');
const cardEls = Array.from(document.querySelectorAll('.release-card'));
let topIndex = 0;
let isDragging = false, startX = 0, startY = 0, currentDx = 0, currentDy = 0, isAnimating = false;

function throwCard(direction = 1) {
  if (isAnimating) return;
  isAnimating = true;
  const topCard = cardEls[topIndex];
  topCard.classList.add('throwing');
  
  const throwDist = direction > 0 ? 550 : -550;
  topCard.style.transform = `translate3d(${throwDist}px, ${currentDy - 60}px, 0) rotate(${direction * 35}deg)`;
  topCard.style.opacity = '0';

  setTimeout(() => {
    topIndex = (topIndex + 1) % cardEls.length;
    isAnimating = false;
    currentDx = 0;
    currentDy = 0;
    renderStack();
  }, 320);
}

// Pointer Drag Handlers
deckContainer.addEventListener('pointerdown', (e) => {
  if (isAnimating) return;
  const topCard = cardEls[topIndex];
  if (!topCard || e.target.closest('.release-card') !== topCard) return;
  isDragging = true;
  startX = e.clientX; startY = e.clientY; currentDx = 0; currentDy = 0;
  topCard.classList.add('dragging');
  topCard.setPointerCapture(e.pointerId);
});

deckContainer.addEventListener('pointermove', (e) => {
  if (!isDragging) return;
  currentDx = e.clientX - startX;
  currentDy = e.clientY - startY;
  const topCard = cardEls[topIndex];
  topCard.style.transform = `translate3d(${currentDx}px, ${currentDy}px, 0) rotate(${currentDx * 0.08}deg) scale(1.03)`;
});

function onPointerRelease(e) {
  if (!isDragging) return;
  isDragging = false;
  const topCard = cardEls[topIndex];
  topCard.classList.remove('dragging');
  try { topCard.releasePointerCapture(e.pointerId); } catch(err) {}

  const threshold = deckContainer.offsetWidth * 0.1;
  if (Math.abs(currentDx) > threshold) {
    throwCard(currentDx > 0 ? 1 : -1);
  } else {
    topCard.style.transform = `translate3d(0, 0, 0) rotate(0deg) scale(1)`;
  }
}
deckContainer.addEventListener('pointerup', onPointerRelease);
deckContainer.addEventListener('pointercancel', onPointerRelease);

// Keyboard Accessibility
deckContainer.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') { e.preventDefault(); throwCard(1); }
  if (e.key === 'ArrowLeft') { e.preventDefault(); throwCard(-1); }
});
```

---

## 4. Statement Fold & Footer Specs

- **Statement Fold**: Outlined stroke index numeral:
  ```css
  .index-numeral {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: clamp(120px, 22vw, 320px);
    color: transparent;
    -webkit-text-stroke: 1px var(--hairline-light);
    opacity: 0.35;
  }
  ```
- **Floating Badge**: Rotates and drifts on scroll:
  ```javascript
  const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
  floatingDisk.style.transform = `translateY(calc(-50% + ${(scrollProgress - 0.5) * 120}px)) rotate(${scrollProgress * 75}deg)`;
  ```
- **Cropped Wordmark**:
  ```css
  .cropped-wordmark {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: clamp(48px, 13vw, 200px);
    line-height: 0.82;
    transform: translateY(22%);
    user-select: none;
    pointer-events: none;
  }
  ```

---

## 5. Verification Checklist

When building or testing a page using this skill, verify:
- [ ] Hero portal begins fully closed at top of page.
- [ ] Something in the hero travels **over 100px across the first 700px of scroll**.
- [ ] Portal reverses seamlessly when scrolling back up.
- [ ] Accent colors are never used as solid block background fills.
- [ ] No drop shadows or glows exist on any element except the deck cards.
- [ ] The card deck can be thrown with mouse/finger drag AND Left/Right keyboard arrows.
- [ ] `touch-action: pan-y` is applied so mobile vertical scrolling is uninterrupted.
- [ ] Dates table collapses to a clean 2-column card layout on `< 768px` viewports.
- [ ] Reveal animations are gated behind `prefers-reduced-motion` check.
