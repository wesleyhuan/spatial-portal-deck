const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// 1. Architecture Hero BG SVG (Full bleed high-res artwork: raw concrete walls, geometric light beams, timber grid lines, terracotta & copper accent rules)
const heroBgSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <radialGradient id="heroGlow" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#181C21" />
      <stop offset="60%" stop-color="#121519" />
      <stop offset="100%" stop-color="#0B0D0F" />
    </radialGradient>
    <linearGradient id="terracottaBeam" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D98A38" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#D98A38" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="copperBeam" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#34747B" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#34747B" stop-opacity="0"/>
    </linearGradient>
    <pattern id="concreteTexture" width="120" height="120" patternUnits="userSpaceOnUse">
      <circle cx="15" cy="20" r="1.2" fill="#EFEBE4" opacity="0.05"/>
      <circle cx="50" cy="80" r="0.8" fill="#EFEBE4" opacity="0.04"/>
      <circle cx="95" cy="35" r="1.0" fill="#EFEBE4" opacity="0.06"/>
      <circle cx="70" cy="105" r="0.7" fill="#EFEBE4" opacity="0.03"/>
    </pattern>
  </defs>

  <!-- Ground & Concrete Grain -->
  <rect width="1920" height="1080" fill="url(#heroGlow)" />
  <rect width="1920" height="1080" fill="url(#concreteTexture)" />

  <!-- Architectural Structure & Beam Grid -->
  <g opacity="0.55">
    <!-- Cantilevered Concrete Blocks -->
    <polygon points="200,100 1720,100 1520,380 400,380" fill="none" stroke="#EFEBE4" stroke-opacity="0.1" stroke-width="1.5"/>
    <polygon points="350,380 1570,380 1370,820 550,820" fill="none" stroke="#EFEBE4" stroke-opacity="0.12" stroke-width="1.5"/>
    
    <!-- Drafting Grid Hairlines -->
    <line x1="100" y1="540" x2="1820" y2="540" stroke="#EFEBE4" stroke-opacity="0.08" stroke-width="1"/>
    <line x1="960" y1="50" x2="960" y2="1030" stroke="#EFEBE4" stroke-opacity="0.08" stroke-width="1"/>
    
    <line x1="400" y1="0" x2="400" y2="1080" stroke="#EFEBE4" stroke-opacity="0.05" stroke-dasharray="8 8"/>
    <line x1="1520" y1="0" x2="1520" y2="1080" stroke="#EFEBE4" stroke-opacity="0.05" stroke-dasharray="8 8"/>

    <!-- Light Rays & Diagonal Structural Beams -->
    <line x1="200" y1="100" x2="1720" y2="980" stroke="url(#terracottaBeam)" stroke-width="1.5"/>
    <line x1="1720" y1="100" x2="200" y2="980" stroke="url(#copperBeam)" stroke-width="1.5"/>

    <!-- Structural Portal Aperture Ring -->
    <circle cx="960" cy="540" r="320" fill="none" stroke="#EFEBE4" stroke-opacity="0.12" stroke-width="1" stroke-dasharray="12 6"/>
    <circle cx="960" cy="540" r="220" fill="none" stroke="#34747B" stroke-opacity="0.4" stroke-width="1.5"/>
  </g>

  <!-- Accent Typography in Photo -->
  <text x="960" y="490" text-anchor="middle" font-family="'Syne', sans-serif" font-weight="700" font-size="26" fill="#EFEBE4" opacity="0.35" letter-spacing="0.4em">MONOLITH ARCHITECTURAL STAGE</text>
  <text x="960" y="580" text-anchor="middle" font-family="'Sora', sans-serif" font-weight="500" font-size="12" fill="#A0A7AC" opacity="0.4" letter-spacing="0.3em">RAW CONCRETE &amp; HEAVY TIMBER // 001–005</text>
</svg>`;

fs.writeFileSync(path.join(assetsDir, 'hero-bg.svg'), heroBgSvg);

// 2. Floating Statement Seal SVG (Architectural Rose / Compass Seal)
const statementImgSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="sealGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#181C21"/>
      <stop offset="70%" stop-color="#0B0D0F"/>
      <stop offset="100%" stop-color="#121519"/>
    </radialGradient>
  </defs>
  <circle cx="300" cy="300" r="280" fill="url(#sealGrad)" stroke="rgba(239,235,228,0.15)" stroke-width="2"/>
  
  <!-- Architectural Drafting Grid -->
  <circle cx="300" cy="300" r="240" fill="none" stroke="rgba(239,235,228,0.06)" stroke-width="1"/>
  <circle cx="300" cy="300" r="200" fill="none" stroke="rgba(239,235,228,0.08)" stroke-width="1" stroke-dasharray="12 6"/>
  <circle cx="300" cy="300" r="160" fill="none" stroke="#34747B" stroke-opacity="0.5" stroke-width="1.5"/>

  <!-- Compass Lines -->
  <line x1="300" y1="40" x2="300" y2="560" stroke="rgba(239,235,228,0.1)" stroke-width="1"/>
  <line x1="40" y1="300" x2="560" y2="300" stroke="rgba(239,235,228,0.1)" stroke-width="1"/>

  <!-- Center Seal -->
  <circle cx="300" cy="300" r="80" fill="#121519" stroke="#D98A38" stroke-width="1"/>
  <circle cx="300" cy="300" r="10" fill="#0B0D0F" stroke="rgba(239,235,228,0.3)" stroke-width="1"/>
  <text x="300" y="270" text-anchor="middle" font-family="'Sora', sans-serif" font-size="10" fill="#D98A38" letter-spacing="0.2em">MNL-MATRIX</text>
  <text x="300" y="338" text-anchor="middle" font-family="'Sora', sans-serif" font-size="9" fill="#A0A7AC" letter-spacing="0.15em">52°31'N 13°24'E</text>
</svg>`;

fs.writeFileSync(path.join(assetsDir, 'statement-disk.svg'), statementImgSvg);

// 3. Project Case Study Blueprint Generator
function createProjectCoverSvg(code, title, location, year, colorAccent, geometricShape) {
  const accentHex = colorAccent === 'terracotta' ? '#D98A38' : '#34747B';
  const secondaryHex = colorAccent === 'terracotta' ? '#34747B' : '#D98A38';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
    <rect width="600" height="600" fill="#121519"/>
    <rect width="596" height="596" x="2" y="2" fill="none" stroke="rgba(239,235,228,0.12)" stroke-width="2"/>
    
    <!-- Drafting Grid -->
    <g opacity="0.15">
      <line x1="60" y1="0" x2="60" y2="600" stroke="#EFEBE4" stroke-width="1"/>
      <line x1="540" y1="0" x2="540" y2="600" stroke="#EFEBE4" stroke-width="1"/>
      <line x1="0" y1="60" x2="600" y2="60" stroke="#EFEBE4" stroke-width="1"/>
      <line x1="0" y1="540" x2="600" y2="540" stroke="#EFEBE4" stroke-width="1"/>
    </g>

    <!-- Structural Drawing Geometry -->
    <g transform="translate(300,270)">
      ${geometricShape(accentHex, secondaryHex)}
    </g>

    <!-- Header Metadata -->
    <text x="60" y="45" font-family="'Sora', sans-serif" font-weight="600" font-size="12" fill="${accentHex}" letter-spacing="0.15em">${code}</text>
    <text x="540" y="45" text-anchor="end" font-family="'Sora', sans-serif" font-weight="500" font-size="12" fill="#A0A7AC" letter-spacing="0.15em">${year} // ARCHIVAL SPEC</text>
    <line x1="60" y1="60" x2="540" y2="60" stroke="rgba(239,235,228,0.13)" stroke-width="1"/>

    <!-- Bottom Typography -->
    <line x1="60" y1="470" x2="540" y2="470" stroke="rgba(239,235,228,0.13)" stroke-width="1"/>
    <text x="60" y="505" font-family="'Syne', sans-serif" font-weight="800" font-size="28" fill="#EFEBE4" letter-spacing="-0.02em">${title.toUpperCase()}</text>
    <text x="60" y="532" font-family="'Sora', sans-serif" font-weight="500" font-size="13" fill="#A0A7AC" letter-spacing="0.12em">${location.toUpperCase()}</text>
    
    <!-- Accent Dot -->
    <circle cx="530" cy="515" r="4" fill="${accentHex}"/>
  </svg>`;
}

// 5 Architectural Case Studies
const proj1 = createProjectCoverSvg(
  'MNL-001', 'Villa Vacuum', 'Berlin, Germany', '2024', 'terracotta',
  (accent, sec) => `
    <polygon points="-120,-100 120,-100 150,110 -150,110" fill="none" stroke="${accent}" stroke-width="2"/>
    <rect x="-80" y="-60" width="160" height="120" fill="none" stroke="rgba(239,235,228,0.2)" stroke-width="1"/>
    <line x1="-150" y1="110" x2="150" y2="-100" stroke="${sec}" stroke-width="1"/>
    <circle cx="0" cy="0" r="70" fill="none" stroke="${accent}" stroke-width="1" stroke-dasharray="6 4"/>
  `
);

const proj2 = createProjectCoverSvg(
  'MNL-002', 'Timber Pavilion', 'Zurich, Switzerland', '2025', 'copper',
  (accent, sec) => `
    <rect x="-130" y="-130" width="260" height="260" fill="none" stroke="${accent}" stroke-width="2"/>
    <line x1="-130" y1="-130" x2="130" y2="130" stroke="${sec}" stroke-width="1.5"/>
    <line x1="130" y1="-130" x2="-130" y2="130" stroke="${accent}" stroke-width="1.5"/>
    <rect x="-60" y="-60" width="120" height="120" fill="none" stroke="rgba(239,235,228,0.25)" stroke-width="1"/>
  `
);

const proj3 = createProjectCoverSvg(
  'MNL-003', 'Monolith Vault', 'Kyoto, Japan', '2025', 'terracotta',
  (accent, sec) => `
    <circle cx="0" cy="0" r="140" fill="none" stroke="${accent}" stroke-width="2"/>
    <path d="M -140,0 A 140,140 0 0,1 140,0 Z" fill="none" stroke="${sec}" stroke-width="1.5"/>
    <line x1="-150" y1="0" x2="150" y2="0" stroke="#EFEBE4" stroke-width="1"/>
    <circle cx="0" cy="-60" r="6" fill="${accent}"/>
  `
);

const proj4 = createProjectCoverSvg(
  'MNL-004', 'Sub-Terranean Studio', 'Reykjavik, Iceland', '2026', 'copper',
  (accent, sec) => `
    <polygon points="0,-140 140,100 -140,100" fill="none" stroke="${accent}" stroke-width="2"/>
    <polygon points="0,140 140,-100 -140,-100" fill="none" stroke="${sec}" stroke-width="1.5" stroke-dasharray="8 4"/>
    <line x1="-140" y1="0" x2="140" y2="0" stroke="rgba(239,235,228,0.2)" stroke-width="1"/>
  `
);

const proj5 = createProjectCoverSvg(
  'MNL-005', 'Aperture Residence', 'Oslo, Norway', '2026', 'terracotta',
  (accent, sec) => `
    <circle cx="0" cy="0" r="130" fill="none" stroke="rgba(239,235,228,0.2)" stroke-width="1"/>
    <rect x="-100" y="-100" width="200" height="200" fill="none" stroke="${accent}" stroke-width="2"/>
    <circle cx="0" cy="0" r="65" fill="none" stroke="${sec}" stroke-width="1.5"/>
    <circle cx="-50" cy="-50" r="4" fill="${accent}"/>
  `
);

fs.writeFileSync(path.join(assetsDir, 'album1.svg'), proj1);
fs.writeFileSync(path.join(assetsDir, 'album2.svg'), proj2);
fs.writeFileSync(path.join(assetsDir, 'album3.svg'), proj3);
fs.writeFileSync(path.join(assetsDir, 'album4.svg'), proj4);
fs.writeFileSync(path.join(assetsDir, 'album5.svg'), proj5);

console.log('Successfully generated all Monolith Architects SVG assets!');
