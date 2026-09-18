import React from 'react';

interface DjelajahLogoProps {
  className?: string;
  size?: number;
  showHoverEffect?: boolean;
}

/**
 * Vector reproduction of the official "DJELAJAH DONGGALA" circular emblem logo:
 * - Concentric ochre circular framing rings
 * - Sweeping canopy arch with radiating sunbeams
 * - Central play button (interactive virtual tour & storytelling)
 * - Sweeping path arrow leading to the heritage building
 * - Colonial heritage architecture (historic Kota Tua Donggala trade office)
 * - Folded perspective map with compass location pin & secondary compass dial
 */
export const DjelajahLogo: React.FC<DjelajahLogoProps> = ({ 
  className = "w-11 h-11", 
  size,
  showHoverEffect = true 
}) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center shrink-0 rounded-full select-none ${
        showHoverEffect ? 'transition-transform duration-200 group-hover:scale-105' : ''
      } ${className}`}
      style={size ? { width: size, height: size } : undefined}
    >
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        {/* Background circle */}
        <circle cx="200" cy="200" r="195" fill="#FFFFFF" />

        {/* Outer thin ring */}
        <circle 
          cx="200" 
          cy="200" 
          r="188" 
          stroke="#D47A22" 
          strokeWidth="3.5" 
          fill="none" 
        />

        {/* Inner thick prominent ring */}
        <circle 
          cx="200" 
          cy="200" 
          r="172" 
          stroke="#D47A22" 
          strokeWidth="16" 
          fill="none" 
        />

        {/* ===================================================================
            1. TOP CANOPY / SWEEPING ARCH WITH HATCHED SUNBEAMS
            =================================================================== */}
        {/* Canopy curved shape */}
        <path
          d="M 92 235 C 85 170 120 95 210 90 C 275 87 325 125 345 175 C 330 160 270 110 205 110 C 135 110 105 175 92 235 Z"
          fill="#D47A22"
        />

        {/* Radiating sunbeam lines on the right side of the canopy arch */}
        <g stroke="#D47A22" strokeWidth="2.5" strokeLinecap="round" opacity="0.9">
          <line x1="265" y1="108" x2="300" y2="155" />
          <line x1="277" y1="113" x2="310" y2="158" />
          <line x1="289" y1="120" x2="320" y2="162" />
          <line x1="301" y1="128" x2="328" y2="167" />
          <line x1="312" y1="138" x2="335" y2="173" />
          <line x1="322" y1="149" x2="340" y2="180" />
        </g>

        {/* Inner canopy contour */}
        <path
          d="M 104 228 C 114 175 142 122 208 120 C 260 118 300 152 322 188"
          stroke="#D47A22"
          strokeWidth="3"
          fill="none"
        />

        {/* ===================================================================
            2. CENTER PLAY BUTTON (VIRTUAL TOUR & MULTIMEDIA SYMBOL)
            =================================================================== */}
        <polygon 
          points="162,142 162,188 202,165" 
          fill="#D47A22" 
        />

        {/* ===================================================================
            3. SWEEPING DYNAMIC ARROW
            =================================================================== */}
        {/* Curved arrow path */}
        <path
          d="M 170 202 C 205 185 240 165 272 155"
          stroke="#D47A22"
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
        />
        {/* Arrowhead */}
        <polygon 
          points="270,140 292,152 265,165 273,153" 
          fill="#D47A22" 
        />

        {/* ===================================================================
            4. COLONIAL HERITAGE BUILDING (RIGHT FOREGROUND)
            =================================================================== */}
        <g id="colonial-building">
          {/* Main building ochre base silhouette */}
          <path
            d="M 232 245 L 232 300 L 265 308 L 268 245 Z"
            fill="#D47A22"
          />
          <path
            d="M 268 190 L 332 205 L 328 250 L 268 245 Z"
            fill="#D47A22"
          />
          <path
            d="M 268 245 L 328 250 L 325 315 L 265 308 Z"
            fill="#D47A22"
          />
          <path
            d="M 232 200 L 268 190 L 268 245 L 232 245 Z"
            fill="#D47A22"
          />

          {/* Roof Pediment with arched bell tower niche */}
          <path
            d="M 276 188 L 276 168 C 276 160 286 156 295 156 C 304 156 312 160 312 168 L 312 195 Z"
            fill="#D47A22"
          />
          {/* Arched niche inside pediment */}
          <path
            d="M 288 174 C 288 168 292 164 295 164 C 298 164 302 168 302 174 L 302 186 L 288 186 Z"
            fill="#FFFFFF"
          />

          {/* Cornice dividers (White architectural moldings) */}
          <path d="M 229 200 L 270 190 L 334 204" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M 229 248 L 270 244 L 331 251" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M 229 303 L 267 310 L 328 316" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />

          {/* Upper floor arched windows (Left wing & Right wing) */}
          {/* Upper window 1 (left) */}
          <path
            d="M 242 212 C 242 205 247 202 254 202 C 261 202 265 205 265 212 L 265 233 L 242 233 Z"
            fill="#FFFFFF"
          />
          {/* Upper window 2 (right) */}
          <path
            d="M 280 216 C 280 208 286 204 296 204 C 305 204 311 208 311 216 L 310 236 L 279 236 Z"
            fill="#FFFFFF"
          />

          {/* Balustrade railings under 2nd floor windows */}
          <g stroke="#D47A22" strokeWidth="1.8">
            <line x1="243" y1="230" x2="264" y2="230" />
            <line x1="247" y1="230" x2="247" y2="236" />
            <line x1="253" y1="230" x2="253" y2="236" />
            <line x1="259" y1="230" x2="259" y2="236" />

            <line x1="281" y1="233" x2="309" y2="233" />
            <line x1="286" y1="233" x2="286" y2="240" />
            <line x1="294" y1="233" x2="294" y2="240" />
            <line x1="302" y1="233" x2="302" y2="240" />
          </g>

          {/* Ground floor grand arched loggia colonnades */}
          {/* Ground arch 1 (left) */}
          <path
            d="M 242 266 C 242 254 249 250 257 250 C 265 250 270 254 270 266 L 270 304 L 242 301 Z"
            fill="#FFFFFF"
          />
          {/* Ground arch 2 (right) */}
          <path
            d="M 282 270 C 282 258 290 253 300 253 C 310 253 316 258 316 270 L 315 311 L 282 307 Z"
            fill="#FFFFFF"
          />

          {/* Dividing vertical column between wings */}
          <line x1="269" y1="190" x2="267" y2="310" stroke="#FFFFFF" strokeWidth="4" />

          {/* Building corner quoins / stones (left edge) */}
          <g fill="#FFFFFF">
            <rect x="230" y="206" width="5" height="4" />
            <rect x="230" y="217" width="5" height="4" />
            <rect x="230" y="228" width="5" height="4" />
            <rect x="230" y="255" width="5" height="4" />
            <rect x="230" y="266" width="5" height="4" />
            <rect x="230" y="278" width="5" height="4" />
          </g>
        </g>

        {/* ===================================================================
            5. FOLDED MAP & COMPASS PIN (BOTTOM-LEFT)
            =================================================================== */}
        {/* Winding trail leading to building */}
        <path
          d="M 195 265 C 215 270 230 282 245 295"
          stroke="#D47A22"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Base connecting curve to outer frame */}
        <path
          d="M 135 305 C 160 315 200 322 240 318"
          stroke="#D47A22"
          strokeWidth="4"
          fill="none"
        />

        {/* Perspective folded map */}
        <g id="folded-map">
          {/* Map outline */}
          <path
            d="M 112 260 L 152 250 L 195 264 L 202 290 L 158 280 L 110 295 Z"
            fill="#FFFFFF"
            stroke="#D47A22"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          {/* Fold crease lines */}
          <line x1="152" y1="250" x2="158" y2="280" stroke="#D47A22" strokeWidth="3.5" />
          {/* Map road contours */}
          <path d="M 118 274 L 140 268 L 154 272" stroke="#D47A22" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 168 268 L 190 274" stroke="#D47A22" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Primary Compass Location Pin (Teardrop) */}
        <g id="primary-pin">
          {/* Pin shape */}
          <path
            d="M 155 205 C 140 205 130 217 130 232 C 130 248 155 275 155 275 C 155 275 180 248 180 232 C 180 217 170 205 155 205 Z"
            fill="#D47A22"
            stroke="#FFFFFF"
            strokeWidth="2.5"
          />
          {/* Inner white circle */}
          <circle cx="155" cy="230" r="13" fill="#FFFFFF" />
          {/* Compass rose markings inside pin */}
          <circle cx="155" cy="230" r="9" stroke="#D47A22" strokeWidth="1.8" fill="none" />
          {/* Cardinal tick marks */}
          <line x1="155" y1="219" x2="155" y2="223" stroke="#D47A22" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="155" y1="237" x2="155" y2="241" stroke="#D47A22" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="144" y1="230" x2="148" y2="230" stroke="#D47A22" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="162" y1="230" x2="166" y2="230" stroke="#D47A22" strokeWidth="1.8" strokeLinecap="round" />
          {/* Angled compass needle */}
          <polygon points="152,233 155,223 158,233 155,228" fill="#D47A22" />
          <polygon points="152,227 155,237 158,227 155,232" fill="#D47A22" opacity="0.6" />
        </g>

        {/* Secondary small compass badge (Resting beside the pin) */}
        <g id="secondary-compass">
          <circle cx="188" cy="254" r="14" fill="#FFFFFF" stroke="#D47A22" strokeWidth="3" />
          <circle cx="188" cy="254" r="9" stroke="#D47A22" strokeWidth="1.5" fill="none" />
          {/* 4-point star needle */}
          <polygon points="188,247 190,253 195,254 190,255 188,261 186,255 181,254 186,253" fill="#D47A22" />
        </g>
      </svg>
    </div>
  );
};
