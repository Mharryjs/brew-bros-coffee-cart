export const BREW_BROS_LOGO = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="%23241b14"/>
      <stop offset="70%" stop-color="%23120d09"/>
      <stop offset="100%" stop-color="%230a0705"/>
    </radialGradient>
    <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%23e8cca0"/>
      <stop offset="50%" stop-color="%23c59a58"/>
      <stop offset="100%" stop-color="%238a5d2b"/>
    </linearGradient>
    <linearGradient id="warmLight" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%23f5eedc"/>
      <stop offset="100%" stop-color="%23d6be92"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="%23000" flood-opacity="0.6"/>
    </filter>
  </defs>

  <!-- Base Circle with dark roast gradient -->
  <circle cx="250" cy="250" r="240" fill="url(%23bgGlow)"/>

  <!-- Outer Golden Bronze Ring -->
  <circle cx="250" cy="250" r="232" fill="none" stroke="url(%23goldRim)" stroke-width="14"/>
  <circle cx="250" cy="250" r="218" fill="none" stroke="%23120d09" stroke-width="3"/>
  <circle cx="250" cy="250" r="208" fill="none" stroke="url(%23goldRim)" stroke-width="4" stroke-opacity="0.85"/>

  <!-- Steam curves -->
  <g stroke="url(%23warmLight)" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.95" filter="url(%23shadow)">
    <path d="M242,122 C236,104 246,92 240,76 C238,70 234,66 237,60"/>
    <path d="M258,118 C266,102 258,88 266,74 C268,68 272,64 269,58"/>
  </g>

  <!-- Coffee Cup Group -->
  <g filter="url(%23shadow)">
    <!-- Cup Lid Top -->
    <path d="M214,136 C225,133 275,133 286,136 L283,144 L217,144 Z" fill="%23f5eedc"/>
    <!-- Lid Rim -->
    <rect x="204" y="144" width="92" height="13" rx="6" fill="%23f5eedc"/>
    <!-- Cup Body -->
    <path d="M208,157 L220,246 C221,254 227,260 235,260 L265,260 C273,260 279,254 280,246 L292,157 Z" fill="%231b140e" stroke="%23f5eedc" stroke-width="7"/>
    <!-- Cup Highlight details -->
    <path d="M218,170 L226,242" stroke="%23f5eedc" stroke-width="4" stroke-linecap="round" opacity="0.4"/>
    <path d="M276,170 C280,185 281,215 274,242" stroke="%23f5eedc" stroke-width="5" stroke-linecap="round" opacity="0.7"/>

    <!-- Cool Sunglasses -->
    <!-- Left Lens -->
    <path d="M207,208 L244,208 C244,222 238,236 226,236 C214,236 207,224 207,208 Z" fill="%230c0806" stroke="%23f5eedc" stroke-width="6.5" stroke-linejoin="round"/>
    <!-- Right Lens -->
    <path d="M256,208 L293,208 C293,224 286,236 274,236 C262,236 256,222 256,208 Z" fill="%230c0806" stroke="%23f5eedc" stroke-width="6.5" stroke-linejoin="round"/>
    <!-- Bridge -->
    <path d="M244,213 L256,213" stroke="%23f5eedc" stroke-width="6.5" stroke-linecap="round"/>
    <!-- Side arms -->
    <path d="M207,211 L203,212" stroke="%23f5eedc" stroke-width="6" stroke-linecap="round"/>
    <path d="M293,211 L297,212" stroke="%23f5eedc" stroke-width="6" stroke-linecap="round"/>
    <!-- Lens reflection -->
    <path d="M214,214 L222,228" stroke="%23f5eedc" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
    <path d="M263,214 L271,228" stroke="%23f5eedc" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
  </g>

  <!-- Typography: BREW BROS (Brush / Stenciled Aesthetic) -->
  <g filter="url(%23shadow)">
    <text x="250" y="324" text-anchor="middle" font-family="'Impact', 'Arial Black', sans-serif" font-weight="900" font-size="52" fill="%23f5eedc" letter-spacing="4" transform="rotate(-2 250 315)">
      BREW BROS
    </text>
  </g>

  <!-- Underline and Coffee Bean -->
  <g stroke="url(%23goldRim)" stroke-width="3" stroke-linecap="round">
    <line x1="165" y1="344" x2="228" y2="344"/>
    <line x1="272" y1="344" x2="335" y2="344"/>
  </g>
  <!-- Coffee Bean in Center -->
  <g transform="translate(250, 344) rotate(-22)" filter="url(%23shadow)">
    <ellipse cx="0" cy="0" rx="10" ry="14" fill="%23c59a58"/>
    <path d="M-1,-12 C4,-6 -4,6 1,12" stroke="%231a1209" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  </g>

  <!-- Taglines -->
  <text x="250" y="378" text-anchor="middle" font-family="'Montserrat', 'Arial', sans-serif" font-size="11.5" font-weight="800" fill="%23f5eedc" letter-spacing="5.5">
    GOOD COFFEE  •  BETTER VIBES
  </text>
  <text x="250" y="404" text-anchor="middle" font-family="'Montserrat', 'Arial', sans-serif" font-size="12" font-weight="800" fill="%23c59a58" letter-spacing="7">
    COFFEE CART
  </text>
</svg>`;
