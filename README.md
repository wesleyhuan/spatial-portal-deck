# Spatial Portal & Throwable Deck

An editorial, high-contrast dark web experience featuring a **scroll-driven portal hero** and a **physics-based throwable card deck**.

![Spatial Portal Deck Preview](assets/hero-bg.jpg)

---

## 🌟 Key Features

- **The Portal Hero**:
  - Two opaque panels part outward across the viewport to reveal full-bleed background media on scroll.
  - A signature splitting display wordmark that scales up, tightens tracking, and separates outward simultaneously.
  - Strictly bound to scroll position—plays smoothly in both directions.
- **Throwable Physical Card Deck**:
  - Stacked cards with subtle offset scale, rotation, and elevation.
  - Pointer event drag physics (`pointerdown`, `pointermove`, `pointerup`) with cursor tracking, dynamic tilt, and velocity throw.
  - Accessible keyboard navigation (`Left` and `Right` arrow keys) and mobile `touch-action: pan-y` support.
  - Interactive progress indicator dots and active card reader.
- **Statement Fold**:
  - Outlined `-webkit-text-stroke` index numeral.
  - Circular floating badge that drifts vertically and rotates with scroll velocity.
- **Dark Editorial Design System**:
  - **Ground**: Deep obsidian (`#0B0D0F` / `#0A0C0E`)
  - **Ink**: Warm bone / raw plaster (`#EFEBE4` / `#EDE7DC`)
  - **Strict Accents**: Amber & Teal restricted to typography, dots, and hairline rules.
  - High-performance, zero-framework vanilla HTML5, CSS3, and ES6 JavaScript.

---

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/wesleyhuan/spatial-portal-deck.git
cd spatial-portal-deck
```

### 2. Run locally
Start any static local server:

**Using Python:**
```bash
python -m http.server 8080
```

**Using Node.js:**
```bash
npx http-server . -p 8080
```

Then open [http://localhost:8080](http://localhost:8080) in your web browser.

---

## 📂 Project Structure

```
├── index.html         # Semantic HTML structure across 6 core sections
├── styles.css         # Design tokens, spatial grid, hairline rules & animations
├── script.js          # Scroll-driven portal dynamics & card deck physics
├── assets/            # High-resolution architectural photography & SVG badges
│   ├── hero-bg.jpg
│   ├── statement-disk.png
│   ├── album1.jpg - album5.jpg
│   └── *.svg
├── download_photos.py # Helper script for photo asset curation
└── generate_assets.js # Procedural SVG asset generator
```

---

## 📄 License
MIT License. Feel free to use and adapt for your own portfolio, studio, or brand landing pages.
