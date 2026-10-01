const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.join(__dirname, '..', 'public', 'images', 'prototypes');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 800x600 Canvas settings
const W = 800;
const H = 600;

/**
 * 1. PROTOTYPE 1: TEK CONTA (Conta Kuralı)
 * Sadece tek bir conta, merkezde izole, profesyonel stüdyo zemininde
 */
async function generatePrototype1Conta() {
  console.log('Generating Prototype 1: Tek Conta...');

  // SVG representation of a single high-precision flange gasket with drop shadow & realistic industrial finish
  const svgConta = `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Studio Background Gradient -->
      <radialGradient id="bgGrad" cx="50%" cy="45%" r="75%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="50%" stop-color="#F8F9FA" />
        <stop offset="100%" stop-color="#E9ECEF" />
      </radialGradient>

      <!-- Soft Floor Contact Shadow -->
      <filter id="floorShadow" x="-20%" y="-20%" width="150%" height="150%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="16" />
        <feOffset dx="0" dy="24" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.28" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <!-- Gasket 3D Shadow -->
      <filter id="gasketShadow" x="-15%" y="-15%" width="130%" height="130%">
        <feDropShadow dx="0" dy="14" stdDeviation="12" flood-color="#1A2536" flood-opacity="0.32" />
        <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000000" flood-opacity="0.2" />
      </filter>

      <!-- Klingrite Texture / Color Gradient -->
      <radialGradient id="klingriteSurface" cx="42%" cy="38%" r="65%">
        <stop offset="0%" stop-color="#6BBFA0" />
        <stop offset="45%" stop-color="#4EAA87" />
        <stop offset="85%" stop-color="#3D8F70" />
        <stop offset="100%" stop-color="#327A5F" />
      </radialGradient>

      <!-- Bevel / Edge 3D Highlight -->
      <linearGradient id="edge3D" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#8CE0BE" stop-opacity="0.8" />
        <stop offset="30%" stop-color="#4EAA87" stop-opacity="0" />
        <stop offset="70%" stop-color="#235441" stop-opacity="0" />
        <stop offset="100%" stop-color="#1B4233" stop-opacity="0.9" />
      </linearGradient>

      <!-- Subdued Technical Grid Pattern -->
      <pattern id="fiberTexture" width="6" height="6" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="0.75" fill="#327A5F" opacity="0.3" />
        <circle cx="5" cy="5" r="0.5" fill="#8CE0BE" opacity="0.25" />
      </pattern>
    </defs>

    <!-- Background -->
    <rect width="${W}" height="${H}" fill="url(#bgGrad)" />

    <!-- Ambient Shadow Under Gasket -->
    <ellipse cx="400" cy="340" rx="205" ry="120" fill="#1A2536" opacity="0.12" filter="blur(20px)" />
    <ellipse cx="400" cy="325" rx="180" ry="100" fill="#1A2536" opacity="0.16" filter="blur(10px)" />

    <!-- Gasket Assembly Group with Drop Shadow -->
    <g filter="url(#gasketShadow)">
      <!-- Main Ring Outer & Inner Path (Gasket body: Outer R=180, Inner R=95) -->
      <path d="
        M 400 120
        A 180 180 0 1 0 400 480
        A 180 180 0 1 0 400 120
        Z
        M 400 205
        A 95 95 0 1 1 400 395
        A 95 95 0 1 1 400 205
        Z
      " fill="url(#klingriteSurface)" fill-rule="evenodd" />

      <!-- Surface Fiber Texture Layer -->
      <path d="
        M 400 120
        A 180 180 0 1 0 400 480
        A 180 180 0 1 0 400 120
        Z
        M 400 205
        A 95 95 0 1 1 400 395
        A 95 95 0 1 1 400 205
        Z
      " fill="url(#fiberTexture)" fill-rule="evenodd" />

      <!-- 3D Edge Highlight Ring -->
      <path d="
        M 400 120
        A 180 180 0 1 0 400 480
        A 180 180 0 1 0 400 120
        Z
        M 400 205
        A 95 95 0 1 1 400 395
        A 95 95 0 1 1 400 205
        Z
      " fill="url(#edge3D)" fill-rule="evenodd" />

      <!-- 8 Flange Bolt Holes (R_bolt = 140, r_hole = 13) -->
      <!-- Angle 0, 45, 90, 135, 180, 225, 270, 315 -->
      <!-- Hole Inner Shadow & Punch effect -->
      <g>
        <!-- Repeat 8 holes -->
        ${[0, 45, 90, 135, 180, 225, 270, 315].map(deg => {
          const rad = (deg * Math.PI) / 180;
          const cx = (400 + 138 * Math.cos(rad)).toFixed(2);
          const cy = (300 + 138 * Math.sin(rad)).toFixed(2);
          return `
            <!-- Hole Cutout (white cutout blending with background) -->
            <circle cx="${cx}" cy="${cy}" r="13" fill="#F4F6F8" />
            <!-- Hole Top Inner Shadow -->
            <path d="M ${cx - 13} ${cy} A 13 13 0 0 1 ${cx + 13} ${cy} Z" fill="#1B4233" opacity="0.6" />
            <!-- Hole Bottom Inner Rim Highlight -->
            <path d="M ${cx - 13} ${cy} A 13 13 0 0 0 ${cx + 13} ${cy} Z" fill="#8CE0BE" opacity="0.5" />
          `;
        }).join('\n')}
      </g>

      <!-- Inner Rim Chamfer / Stroke -->
      <circle cx="400" cy="300" r="95" fill="none" stroke="#235441" stroke-width="1.5" opacity="0.7" />
      <circle cx="400" cy="300" r="180" fill="none" stroke="#1B4233" stroke-width="1.5" opacity="0.7" />

      <!-- Standard Stamp Printing on Gasket (DIN EN 1514-1 / EMEK CONTA / DN100 PN16) -->
      <path id="stampCurveTop" d="M 280 280 A 130 130 0 0 1 520 280" fill="none" />
      <path id="stampCurveBottom" d="M 515 320 A 130 130 0 0 1 285 320" fill="none" />
      
      <text font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="bold" fill="#1C4535" opacity="0.75" letter-spacing="1.5">
        <textPath href="#stampCurveTop" startOffset="50%" text-anchor="middle">
          EMEK CONTA • ASBESTSIZ KLINGIRIT • DN100 PN16
        </textPath>
      </text>
      
      <text font-family="Arial, Helvetica, sans-serif" font-size="9" font-weight="600" fill="#1C4535" opacity="0.65" letter-spacing="1.2">
        <textPath href="#stampCurveBottom" startOffset="50%" text-anchor="middle">
          DIN EN 1514-1 • MAX 250°C / 40 BAR • LOT: EC-2026
        </textPath>
      </text>
    </g>

    <!-- Discreet Type Badge in bottom corner -->
    <g transform="translate(40, 525)">
      <rect width="180" height="34" rx="8" fill="#1A2536" opacity="0.9" />
      <text x="16" y="21" font-family="sans-serif" font-size="12" font-weight="bold" fill="#FFFFFF">KURAL 1: SADECE CONTA</text>
    </g>
  </svg>
  `;

  await sharp(Buffer.from(svgConta))
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'prototype_1_conta_single.webp'));

  console.log('✓ Prototype 1 created successfully.');
}

/**
 * 2. PROTOTYPE 2: PLAKA / LEVHA (Kenarda Plaka Kuralı)
 * Ortada kesilmiş conta + sağ üst köşede/kenarda ham plaka/levha numunesi
 */
async function generatePrototype2Plaka() {
  console.log('Generating Prototype 2: Plaka / Levha...');

  const svgPlaka = `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Studio Background Gradient -->
      <radialGradient id="bgGrad2" cx="50%" cy="45%" r="75%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="50%" stop-color="#F8F9FA" />
        <stop offset="100%" stop-color="#E9ECEF" />
      </radialGradient>

      <!-- Gasket 3D Shadow -->
      <filter id="gasketShadow2" x="-15%" y="-15%" width="130%" height="130%">
        <feDropShadow dx="0" dy="14" stdDeviation="12" flood-color="#1A2536" flood-opacity="0.32" />
        <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000000" flood-opacity="0.2" />
      </filter>

      <!-- Plate 3D Shadow -->
      <filter id="plateShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="6" dy="16" stdDeviation="14" flood-color="#1A2536" flood-opacity="0.35" />
      </filter>

      <!-- Klingrite Surface -->
      <radialGradient id="klingriteSurface2" cx="42%" cy="38%" r="65%">
        <stop offset="0%" stop-color="#6BBFA0" />
        <stop offset="45%" stop-color="#4EAA87" />
        <stop offset="85%" stop-color="#3D8F70" />
        <stop offset="100%" stop-color="#327A5F" />
      </radialGradient>

      <!-- Plate Perspective Surface Gradient -->
      <linearGradient id="plateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#72CAAA" />
        <stop offset="50%" stop-color="#4EAA87" />
        <stop offset="100%" stop-color="#2D7359" />
      </linearGradient>

      <!-- Plate Thickness Edge Gradient -->
      <linearGradient id="plateEdge" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#2B6B52" />
        <stop offset="100%" stop-color="#194031" />
      </linearGradient>

      <!-- Honeycomb Printed Brand Pattern for Sheet Material -->
      <pattern id="hexPattern" width="28" height="48" patternUnits="userSpaceOnUse">
        <path d="M 14 0 L 28 8 L 28 24 L 14 32 L 0 24 L 0 8 Z" fill="none" stroke="#2D7359" stroke-width="0.8" opacity="0.4" />
        <path d="M 14 32 L 28 40 L 28 56 L 14 64 L 0 56 L 0 40 Z" fill="none" stroke="#2D7359" stroke-width="0.8" opacity="0.4" />
        <text x="14" y="18" font-family="sans-serif" font-size="4" font-weight="bold" fill="#1C4535" opacity="0.4" text-anchor="middle">AFM-20</text>
      </pattern>
    </defs>

    <!-- Background -->
    <rect width="${W}" height="${H}" fill="url(#bgGrad2)" />

    <!-- Ambient Shadow Under Gasket -->
    <ellipse cx="340" cy="360" rx="190" ry="110" fill="#1A2536" opacity="0.12" filter="blur(20px)" />

    <!-- ============================================== -->
    <!-- KENARDA PLAKA / LEVHA NUMUNESİ (Sağ Üst Köşe) -->
    <!-- ============================================== -->
    <g filter="url(#plateShadow)" transform="translate(510, 45)">
      <!-- Isometric / Perspective Plate Slab -->
      <!-- Plate Thickness Edge Bottom (8px thickness) -->
      <path d="
        M 10 185
        L 220 185
        L 245 195
        L 245 203
        L 35 203
        L 10 193
        Z
      " fill="url(#plateEdge)" />

      <!-- Plate Thickness Edge Right -->
      <path d="
        M 220 25
        L 245 35
        L 245 195
        L 220 185
        Z
      " fill="#235441" />

      <!-- Main Plate Top Face (Skewed Rectangle Sheet Sample) -->
      <path d="
        M 35 15
        L 220 25
        L 220 185
        L 10 185
        Z
      " fill="url(#plateGradient)" stroke="#8CE0BE" stroke-width="1.2" />

      <!-- Pattern Overlay on Sheet -->
      <path d="
        M 35 15
        L 220 25
        L 220 185
        L 10 185
        Z
      " fill="url(#hexPattern)" />

      <!-- Thickness Tag Label on Plate -->
      <g transform="translate(30, 130)">
        <rect width="115" height="24" rx="4" fill="#FFFFFF" opacity="0.9" />
        <text x="57" y="16" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1C4535" text-anchor="middle">
          LEVHA PLAKA • 2.0 mm
        </text>
      </g>
    </g>

    <!-- ============================================== -->
    <!-- ANA KESİLMİŞ CONTA (Merkez & Sol Alan)           -->
    <!-- ============================================== -->
    <g filter="url(#gasketShadow2)">
      <!-- Main Ring Outer & Inner Path (Centered around (340, 330), R=160, r=85) -->
      <path d="
        M 340 170
        A 160 160 0 1 0 340 490
        A 160 160 0 1 0 340 170
        Z
        M 340 245
        A 85 85 0 1 1 340 415
        A 85 85 0 1 1 340 245
        Z
      " fill="url(#klingriteSurface2)" fill-rule="evenodd" />

      <!-- Bolt Holes (R=124, 8 holes) -->
      ${[0, 45, 90, 135, 180, 225, 270, 315].map(deg => {
        const rad = (deg * Math.PI) / 180;
        const cx = (340 + 124 * Math.cos(rad)).toFixed(2);
        const cy = (330 + 124 * Math.sin(rad)).toFixed(2);
        return `
          <circle cx="${cx}" cy="${cy}" r="11" fill="#F4F6F8" />
          <path d="M ${cx - 11} ${cy} A 11 11 0 0 1 ${cx + 11} ${cy} Z" fill="#1B4233" opacity="0.6" />
        `;
      }).join('\n')}

      <!-- Stamp Printing on Gasket -->
      <path id="stampCurveTop2" d="M 230 310 A 115 115 0 0 1 450 310" fill="none" />
      <text font-family="Arial, Helvetica, sans-serif" font-size="10" font-weight="bold" fill="#1C4535" opacity="0.75" letter-spacing="1.2">
        <textPath href="#stampCurveTop2" startOffset="50%" text-anchor="middle">
          EMEK CONTA • LEVHADAN CNC HASSAS KESİM
        </textPath>
      </text>
    </g>

    <!-- Discreet Type Badge in bottom corner -->
    <g transform="translate(40, 525)">
      <rect width="215" height="34" rx="8" fill="#B7410E" opacity="0.95" />
      <text x="16" y="21" font-family="sans-serif" font-size="12" font-weight="bold" fill="#FFFFFF">KURAL 2: KENARDA PLAKA</text>
    </g>
  </svg>
  `;

  await sharp(Buffer.from(svgPlaka))
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'prototype_2_plaka_levha.webp'));

  console.log('✓ Prototype 2 created successfully.');
}

/**
 * 3. PROTOTYPE 3: JONTA / ÇİFT CONTA (Jonta Kuralı)
 * Üst üste veya açılı yerleştirilmiş iki adet yapılmış conta
 */
async function generatePrototype3Jonta() {
  console.log('Generating Prototype 3: Jonta / Çift Conta...');

  const svgJonta = `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Studio Background Gradient -->
      <radialGradient id="bgGrad3" cx="50%" cy="45%" r="75%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="50%" stop-color="#F8F9FA" />
        <stop offset="100%" stop-color="#E9ECEF" />
      </radialGradient>

      <!-- Bottom Gasket Shadow -->
      <filter id="bottomShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#1A2536" flood-opacity="0.32" />
      </filter>

      <!-- Top Gasket Overlap Shadow on Bottom Gasket -->
      <filter id="overlapShadow" x="-25%" y="-25%" width="150%" height="150%">
        <feDropShadow dx="-8" dy="12" stdDeviation="10" flood-color="#0E1A29" flood-opacity="0.45" />
        <feDropShadow dx="-2" dy="4" stdDeviation="3" flood-color="#000000" flood-opacity="0.25" />
      </filter>

      <!-- Klingrite Surface Gasket 1 (Darker Green) -->
      <radialGradient id="gasket1Surface" cx="45%" cy="40%" r="65%">
        <stop offset="0%" stop-color="#5FB092" />
        <stop offset="50%" stop-color="#419877" />
        <stop offset="100%" stop-color="#28684F" />
      </radialGradient>

      <!-- Klingrite Surface Gasket 2 (Slightly Lighter / Top) -->
      <radialGradient id="gasket2Surface" cx="40%" cy="35%" r="65%">
        <stop offset="0%" stop-color="#76C9AA" />
        <stop offset="45%" stop-color="#55B38F" />
        <stop offset="85%" stop-color="#3D9172" />
        <stop offset="100%" stop-color="#2B6B52" />
      </radialGradient>
    </defs>

    <!-- Background -->
    <rect width="${W}" height="${H}" fill="url(#bgGrad3)" />

    <!-- Ambient Shadow Under Set -->
    <ellipse cx="400" cy="360" rx="230" ry="120" fill="#1A2536" opacity="0.16" filter="blur(22px)" />

    <!-- ============================================== -->
    <!-- 1. ALTTAKİ CONTA (Merkez: 430, 310, R=165, r=88)-->
    <!-- ============================================== -->
    <g filter="url(#bottomShadow)">
      <path d="
        M 430 145
        A 165 165 0 1 0 430 475
        A 165 165 0 1 0 430 145
        Z
        M 430 222
        A 88 88 0 1 1 430 398
        A 88 88 0 1 1 430 222
        Z
      " fill="url(#gasket1Surface)" fill-rule="evenodd" />

      <!-- Bolt Holes (8 holes, R=126) -->
      ${[0, 45, 90, 135, 180, 225, 270, 315].map(deg => {
        const rad = (deg * Math.PI) / 180;
        const cx = (430 + 126 * Math.cos(rad)).toFixed(2);
        const cy = (310 + 126 * Math.sin(rad)).toFixed(2);
        return `<circle cx="${cx}" cy="${cy}" r="11" fill="#F4F6F8" />`;
      }).join('\n')}
    </g>

    <!-- ============================================== -->
    <!-- 2. ÜSTTEKİ CONTA (Merkez: 340, 280, R=165, r=88)-->
    <!-- Hafif sola ve yukarı kaydırılmış çift conta     -->
    <!-- ============================================== -->
    <g filter="url(#overlapShadow)">
      <path d="
        M 340 115
        A 165 165 0 1 0 340 445
        A 165 165 0 1 0 340 115
        Z
        M 340 192
        A 88 88 0 1 1 340 368
        A 88 88 0 1 1 340 192
        Z
      " fill="url(#gasket2Surface)" fill-rule="evenodd" />

      <!-- Bolt Holes (8 holes, R=126) -->
      ${[0, 45, 90, 135, 180, 225, 270, 315].map(deg => {
        const rad = (deg * Math.PI) / 180;
        const cx = (340 + 126 * Math.cos(rad)).toFixed(2);
        const cy = (280 + 126 * Math.sin(rad)).toFixed(2);
        return `
          <circle cx="${cx}" cy="${cy}" r="11" fill="#F4F6F8" />
          <path d="M ${cx - 11} ${cy} A 11 11 0 0 1 ${cx + 11} ${cy} Z" fill="#1B4233" opacity="0.6" />
        `;
      }).join('\n')}

      <!-- Stamp Printing on Top Gasket -->
      <path id="stampCurveJonta" d="M 230 260 A 115 115 0 0 1 450 260" fill="none" />
      <text font-family="Arial, Helvetica, sans-serif" font-size="10" font-weight="bold" fill="#1C4535" opacity="0.8" letter-spacing="1.2">
        <textPath href="#stampCurveJonta" startOffset="50%" text-anchor="middle">
          EMEK CONTA • JONTA FLANŞ ÇİFTİ • 2'Lİ TAKIM
        </textPath>
      </text>
    </g>

    <!-- Discreet Type Badge in bottom corner -->
    <g transform="translate(40, 525)">
      <rect width="210" height="34" rx="8" fill="#1A2536" opacity="0.95" />
      <text x="16" y="21" font-family="sans-serif" font-size="12" font-weight="bold" fill="#FFFFFF">KURAL 3: JONTA (2'Lİ ÇİFT)</text>
    </g>
  </svg>
  `;

  await sharp(Buffer.from(svgJonta))
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'prototype_3_jonta_double.webp'));

  console.log('✓ Prototype 3 created successfully.');
}

async function run() {
  await generatePrototype1Conta();
  await generatePrototype2Plaka();
  await generatePrototype3Jonta();
  console.log('All 3 prototypes generated in public/images/prototypes/');
}

run();
