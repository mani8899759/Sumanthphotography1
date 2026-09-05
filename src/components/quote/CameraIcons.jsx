import React from 'react';

// ============================================================
// CAMERA & EQUIPMENT SVG ILLUSTRATIONS
// Transparent floating objects — no backgrounds, no borders.
// Each SVG is a clean silhouette/line illustration.
// ============================================================

export const CameraIcons = {

  // DSLR Camera — Traditional Photography
  dslr: ({ className = '', style = {} }) => (
    <svg
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* Camera body */}
      <rect x="20" y="50" width="160" height="100" rx="12" fill="#1a1a2e" />
      <rect x="20" y="50" width="160" height="100" rx="12" fill="url(#bodyGrad)" />
      {/* Top grip */}
      <rect x="110" y="25" width="55" height="35" rx="8" fill="#0f0f1a" />
      {/* Mode dial */}
      <circle cx="145" cy="48" r="12" fill="#2d2d44" />
      <circle cx="145" cy="48" r="8" fill="#1a1a2e" />
      <rect x="144" y="40" width="2" height="6" rx="1" fill="#c0392b" />
      {/* Lens barrel */}
      <circle cx="88" cy="100" r="42" fill="#111122" />
      <circle cx="88" cy="100" r="42" stroke="#2d2d44" strokeWidth="3" />
      <circle cx="88" cy="100" r="34" fill="#0a0a15" />
      <circle cx="88" cy="100" r="34" stroke="#333355" strokeWidth="2" />
      <circle cx="88" cy="100" r="22" fill="#050510" />
      <circle cx="88" cy="100" r="10" fill="#0d0d22" />
      {/* Lens reflections */}
      <ellipse cx="82" cy="93" rx="5" ry="3" fill="#1a3a6e" opacity="0.6" />
      <ellipse cx="93" cy="107" rx="3" ry="2" fill="#1a3a6e" opacity="0.4" />
      {/* Viewfinder */}
      <rect x="115" y="55" width="22" height="15" rx="4" fill="#0f0f1a" stroke="#2d2d44" strokeWidth="1.5" />
      {/* Shutter button */}
      <circle cx="125" cy="45" r="6" fill="#c0392b" />
      <circle cx="125" cy="45" r="4" fill="#a93226" />
      {/* Hot shoe */}
      <rect x="72" y="46" width="35" height="5" rx="2" fill="#2d2d44" />
      {/* Flash indicator */}
      <rect x="30" y="58" width="18" height="8" rx="2" fill="#1a1a2e" stroke="#333355" strokeWidth="1" />
      {/* Grip texture lines */}
      <rect x="155" y="60" width="15" height="2" rx="1" fill="#2d2d44" opacity="0.6" />
      <rect x="155" y="65" width="15" height="2" rx="1" fill="#2d2d44" opacity="0.6" />
      <rect x="155" y="70" width="15" height="2" rx="1" fill="#2d2d44" opacity="0.6" />
      <rect x="155" y="75" width="15" height="2" rx="1" fill="#2d2d44" opacity="0.6" />
      <defs>
        <linearGradient id="bodyGrad" x1="20" y1="50" x2="180" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2d2d44" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),

  // Mirrorless Camera — Candid Photography
  mirrorless: ({ className = '', style = {} }) => (
    <svg
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* Body */}
      <rect x="25" y="40" width="150" height="105" rx="14" fill="#1a1a2e" />
      {/* Top bar */}
      <rect x="25" y="40" width="150" height="30" rx="14" fill="#0f0f1a" />
      <rect x="25" y="55" width="150" height="15" fill="#0f0f1a" />
      {/* Lens */}
      <circle cx="90" cy="100" r="45" fill="#0d0d20" />
      <circle cx="90" cy="100" r="45" stroke="#2d2d44" strokeWidth="2.5" />
      <circle cx="90" cy="100" r="36" fill="#080815" />
      <circle cx="90" cy="100" r="26" fill="#050510" />
      <circle cx="90" cy="100" r="14" fill="#0a0a1a" />
      <circle cx="90" cy="100" r="7" fill="#060612" />
      {/* Lens highlight */}
      <ellipse cx="83" cy="92" rx="6" ry="3.5" fill="#1e3a6e" opacity="0.55" />
      {/* EVF bump */}
      <rect x="60" y="28" width="40" height="20" rx="5" fill="#111125" />
      <rect x="67" y="32" width="26" height="12" rx="3" fill="#0a0a18" />
      {/* Shutter */}
      <circle cx="148" cy="45" r="8" fill="#c0392b" />
      <circle cx="148" cy="45" r="5.5" fill="#a93226" />
      {/* Mode dial */}
      <circle cx="130" cy="45" r="11" fill="#1d1d30" stroke="#2d2d44" strokeWidth="1.5" />
      <line x1="130" y1="34" x2="130" y2="39" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" />
      {/* LCD screen area */}
      <rect x="140" y="65" width="28" height="60" rx="4" fill="#0a0a18" stroke="#1d1d30" strokeWidth="1" />
      {/* Control wheel */}
      <circle cx="157" cy="140" r="9" fill="#1a1a2e" stroke="#2d2d44" strokeWidth="1.5" />
    </svg>
  ),

  // Video Camera — Traditional Videography
  videoCamera: ({ className = '', style = {} }) => (
    <svg
      viewBox="0 0 220 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* Main body */}
      <rect x="10" y="45" width="140" height="90" rx="10" fill="#1a1a2e" />
      {/* Shoulder pad area */}
      <rect x="10" y="45" width="140" height="30" rx="10" fill="#111122" />
      <rect x="10" y="60" width="140" height="15" fill="#111122" />
      {/* Lens system */}
      <rect x="148" y="52" width="58" height="76" rx="6" fill="#0d0d1e" />
      <circle cx="177" cy="90" r="30" fill="#080812" />
      <circle cx="177" cy="90" r="30" stroke="#1d1d30" strokeWidth="2" />
      <circle cx="177" cy="90" r="22" fill="#050510" />
      <circle cx="177" cy="90" r="13" fill="#030308" />
      <circle cx="177" cy="90" r="6" fill="#0a0a18" />
      <ellipse cx="170" cy="83" rx="5" ry="3" fill="#1a3a6e" opacity="0.5" />
      {/* Zoom ring */}
      <rect x="148" y="75" width="58" height="8" fill="#1a1a2e" opacity="0.5" />
      {/* Handle */}
      <rect x="45" y="15" width="50" height="38" rx="8" fill="#111122" />
      {/* Record button */}
      <circle cx="70" cy="32" r="9" fill="#c0392b" />
      <circle cx="70" cy="32" r="6" fill="#e74c3c" />
      <circle cx="70" cy="32" r="3" fill="#c0392b" />
      {/* ND filter dial */}
      <rect x="18" y="90" width="15" height="35" rx="4" fill="#0d0d1e" stroke="#1d1d30" strokeWidth="1" />
      {/* Microphone */}
      <rect x="28" y="20" width="12" height="28" rx="6" fill="#1d1d2e" stroke="#2d2d44" strokeWidth="1" />
      {/* Audio level indicators */}
      <rect x="100" y="92" width="30" height="3" rx="1.5" fill="#1a3a1a" />
      <rect x="100" y="92" width="18" height="3" rx="1.5" fill="#2a8a2a" />
      <rect x="100" y="98" width="30" height="3" rx="1.5" fill="#1a3a1a" />
      <rect x="100" y="98" width="22" height="3" rx="1.5" fill="#2a8a2a" />
    </svg>
  ),

  // Cinema Camera — Cinematic Video
  cinemaCamera: ({ className = '', style = {} }) => (
    <svg
      viewBox="0 0 220 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* Main box body */}
      <rect x="40" y="35" width="130" height="110" rx="8" fill="#111122" />
      <rect x="40" y="35" width="130" height="110" rx="8" stroke="#1d1d30" strokeWidth="1.5" />
      {/* Lens mount */}
      <circle cx="105" cy="95" r="48" fill="#0a0a18" />
      <circle cx="105" cy="95" r="48" stroke="#2d2d44" strokeWidth="3" />
      <circle cx="105" cy="95" r="38" fill="#060610" />
      <circle cx="105" cy="95" r="28" fill="#030308" />
      <circle cx="105" cy="95" r="16" fill="#080815" />
      <circle cx="105" cy="95" r="7" fill="#0d0d22" />
      {/* Lens reflections */}
      <ellipse cx="96" cy="85" rx="7" ry="4" fill="#1a3a6e" opacity="0.6" />
      <ellipse cx="113" cy="103" rx="4" ry="2.5" fill="#1a3a6e" opacity="0.35" />
      {/* Top handle */}
      <rect x="65" y="10" width="80" height="35" rx="8" fill="#0d0d1e" stroke="#1d1d30" strokeWidth="1.5" />
      <rect x="78" y="18" width="55" height="20" rx="5" fill="#080812" />
      {/* Record button */}
      <circle cx="185" cy="50" r="10" fill="#c0392b" />
      <circle cx="185" cy="50" r="7" fill="#e74c3c" />
      {/* Side panel details */}
      <rect x="152" y="55" width="18" height="5" rx="2" fill="#1d1d30" />
      <rect x="152" y="65" width="18" height="5" rx="2" fill="#1d1d30" />
      <rect x="152" y="75" width="18" height="5" rx="2" fill="#1d1d30" />
      {/* Screen / monitor port */}
      <rect x="155" y="85" width="25" height="18" rx="3" fill="#0a0a18" stroke="#1d1d30" strokeWidth="1" />
      {/* Battery / media slots */}
      <rect x="42" y="95" width="16" height="28" rx="3" fill="#0d0d1e" stroke="#1d1d30" strokeWidth="1" />
      <rect x="42" y="105" width="16" height="2" rx="1" fill="#1a3a1a" />
      <rect x="42" y="110" width="10" height="2" rx="1" fill="#2a6a2a" />
      {/* Cooling vents */}
      <line x1="170" y1="110" x2="170" y2="135" stroke="#1d1d30" strokeWidth="1.5" />
      <line x1="175" y1="110" x2="175" y2="135" stroke="#1d1d30" strokeWidth="1.5" />
      <line x1="180" y1="110" x2="180" y2="135" stroke="#1d1d30" strokeWidth="1.5" />
    </svg>
  ),

  // Drone — Aerial Coverage
  drone: ({ className = '', style = {} }) => (
    <svg
      viewBox="0 0 220 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* Body */}
      <rect x="80" y="65" width="60" height="50" rx="10" fill="#1a1a2e" />
      <rect x="80" y="65" width="60" height="50" rx="10" stroke="#2d2d44" strokeWidth="1.5" />
      {/* Center cross arms */}
      <rect x="10" y="82" width="200" height="16" rx="8" fill="#111122" />
      <rect x="96" y="30" width="28" height="110" rx="8" fill="#111122" />
      {/* Arm joints */}
      <circle cx="110" cy="90" r="18" fill="#1a1a2e" stroke="#2d2d44" strokeWidth="1.5" />
      <circle cx="110" cy="90" r="10" fill="#0d0d1e" />
      {/* Motors */}
      <circle cx="20" cy="90" r="16" fill="#0f0f1e" stroke="#1d1d30" strokeWidth="1.5" />
      <circle cx="200" cy="90" r="16" fill="#0f0f1e" stroke="#1d1d30" strokeWidth="1.5" />
      <circle cx="110" cy="35" r="16" fill="#0f0f1e" stroke="#1d1d30" strokeWidth="1.5" />
      <circle cx="110" cy="145" r="16" fill="#0f0f1e" stroke="#1d1d30" strokeWidth="1.5" />
      {/* Propellers */}
      <ellipse cx="20" cy="90" rx="28" ry="5" fill="#111122" opacity="0.8" />
      <ellipse cx="200" cy="90" rx="28" ry="5" fill="#111122" opacity="0.8" />
      <ellipse cx="110" cy="35" rx="5" ry="28" fill="#111122" opacity="0.8" />
      <ellipse cx="110" cy="145" rx="5" ry="28" fill="#111122" opacity="0.8" />
      {/* Camera gimbal */}
      <circle cx="110" cy="90" r="6" fill="#c0392b" />
      <rect x="104" y="95" width="12" height="14" rx="3" fill="#0d0d1e" stroke="#1d1d30" strokeWidth="1" />
      <circle cx="110" cy="100" r="5" fill="#080812" />
      <circle cx="110" cy="100" r="3" fill="#0d0d18" />
      {/* Status LEDs */}
      <circle cx="88" cy="70" r="3" fill="#c0392b" />
      <circle cx="132" cy="70" r="3" fill="#2a8a2a" />
    </svg>
  ),

  // LED Screen — Display
  ledScreen: ({ className = '', style = {} }) => (
    <svg
      viewBox="0 0 220 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* Screen frame */}
      <rect x="15" y="20" width="190" height="120" rx="10" fill="#0d0d1e" />
      <rect x="15" y="20" width="190" height="120" rx="10" stroke="#2d2d44" strokeWidth="2" />
      {/* Screen inner */}
      <rect x="22" y="27" width="176" height="106" rx="7" fill="#050510" />
      {/* LED pixel grid pattern */}
      {[0,1,2,3,4,5,6].map(col =>
        [0,1,2,3,4].map(row => (
          <rect
            key={`${col}-${row}`}
            x={28 + col * 24}
            y={33 + row * 20}
            width="18"
            height="14"
            rx="2"
            fill={`hsl(${(col * 40 + row * 30) % 360}, 60%, 20%)`}
            opacity="0.7"
          />
        ))
      )}
      {/* Warm light glow overlay */}
      <rect x="22" y="27" width="176" height="106" rx="7" fill="url(#screenGlow)" />
      {/* Stand */}
      <rect x="95" y="140" width="30" height="22" rx="4" fill="#0d0d1e" />
      <rect x="75" y="158" width="70" height="8" rx="4" fill="#0d0d1e" stroke="#1d1d30" strokeWidth="1" />
      {/* Power indicator */}
      <circle cx="196" cy="130" r="4" fill="#2a8a2a" />
      {/* Port details */}
      <rect x="20" y="128" width="20" height="6" rx="2" fill="#1d1d30" />
      <rect x="45" y="128" width="10" height="6" rx="2" fill="#1d1d30" />
      <defs>
        <radialGradient id="screenGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#c0392b" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#1a1a6e" stopOpacity="0.12" />
        </radialGradient>
      </defs>
    </svg>
  ),
};

export default CameraIcons;
