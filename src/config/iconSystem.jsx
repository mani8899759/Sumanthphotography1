import React from 'react';

// ============================================================
// CENTRALIZED ICON SYSTEM — 100% Transparent Vector SVGs (1:1 Aspect Ratio)
// All icons designed in a clean 1:1 square viewport (48x48) with NO background
// ============================================================

// ----------------------------------------------------------
// 1. MAIN EVENT ICONS — 100% Transparent 1:1 Vector SVGs
// ----------------------------------------------------------

// Wedding & Pre-Wedding — Golden Rings & Garland
export const WeddingIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <circle cx="19" cy="22" r="10" stroke="#d4af37" strokeWidth="2.5" fill="none" />
    <circle cx="29" cy="22" r="10" stroke="#c0392b" strokeWidth="2.5" fill="none" />
    <path d="M22 13.5 L24 10 L26 13.5" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="24" cy="9" r="2" fill="#38bdf8" />
    <path d="M14 34 Q24 42 34 34" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" fill="none" strokeDasharray="3 2" />
    <circle cx="24" cy="38" r="2" fill="#d4af37" />
  </svg>
);

// Birthday — Cake & Candle Sparkle
export const BirthdayIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <rect x="10" y="26" width="28" height="14" rx="3" fill="#f43f5e" />
    <rect x="14" y="18" width="20" height="9" rx="2" fill="#fb7185" />
    <path d="M10 26 Q17 30 24 26 Q31 30 38 26" fill="#fff1f2" />
    <path d="M14 18 Q19 21 24 18 Q29 21 34 18" fill="#ffffff" />
    <rect x="23" y="11" width="2" height="7" rx="1" fill="#f59e0b" />
    <path d="M24 6 Q26 9 24 11 Q22 9 24 6 Z" fill="#ef4444" />
  </svg>
);

// Saree Ceremony — Traditional Saree Motif
export const SareeCeremonyIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <path d="M14 10 Q24 6 34 10 L38 38 Q24 42 10 38 Z" fill="#9333ea" />
    <path d="M14 10 L38 38" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M10 38 Q24 42 38 38" stroke="#d4af37" strokeWidth="3" fill="none" />
    <circle cx="24" cy="24" r="3" fill="#f59e0b" />
  </svg>
);

// House Warming — Kalash / Traditional House
export const HouseWarmingIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <path d="M8 22 L24 8 L40 22" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <rect x="12" y="22" width="24" height="18" rx="2" fill="#ffedd5" stroke="#ea580c" strokeWidth="2" />
    <path d="M20 40 V28 A4 4 0 0 1 28 28 V40" fill="#c0392b" />
    <circle cx="24" cy="18" r="2.5" fill="#f59e0b" />
  </svg>
);

// Corporate — Building & Stage
export const CorporateIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <rect x="12" y="12" width="24" height="28" rx="2" fill="#1e293b" />
    <rect x="16" y="16" width="5" height="5" rx="1" fill="#38bdf8" />
    <rect x="27" y="16" width="5" height="5" rx="1" fill="#38bdf8" />
    <rect x="16" y="24" width="5" height="5" rx="1" fill="#38bdf8" />
    <rect x="27" y="24" width="5" height="5" rx="1" fill="#38bdf8" />
    <rect x="20" y="32" width="8" height="8" fill="#0f172a" />
  </svg>
);

// Baby Shower — Pram / Stroller
export const BabyShowerIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <path d="M12 20 Q12 32 24 32 Q36 32 36 20 H12 Z" fill="#38bdf8" />
    <path d="M12 20 A12 12 0 0 1 24 8 H36 V20 H12 Z" fill="#7dd3fc" />
    <circle cx="18" cy="36" r="4" fill="#0284c7" />
    <circle cx="30" cy="36" r="4" fill="#0284c7" />
    <path d="M36 14 L42 10" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// Cradle Ceremony — Wooden Cradle
export const CradleCeremonyIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <path d="M8 12 H40 M12 12 V32 M36 12 V32" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" />
    <rect x="14" y="20" width="20" height="12" rx="3" fill="#fde68a" stroke="#d97706" strokeWidth="2" />
    <path d="M10 38 Q24 44 38 38" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

// Other Events — Sparklers & Party
export const OtherEventsIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <path d="M24 8 L24 40 M8 24 L40 24 M12 12 L36 36 M36 12 L12 36" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="24" r="5" fill="#ef4444" />
    <circle cx="12" cy="12" r="2" fill="#3b82f6" />
    <circle cx="36" cy="12" r="2" fill="#ec4899" />
    <circle cx="12" cy="36" r="2" fill="#10b981" />
    <circle cx="36" cy="36" r="2" fill="#8b5cf6" />
  </svg>
);

export const eventSvgIconMap = {
  wedding:       WeddingIcon,
  birthday:      BirthdayIcon,
  sareeCeremony: SareeCeremonyIcon,
  houseWarming:  HouseWarmingIcon,
  corporate:     CorporateIcon,
  babyShower:    BabyShowerIcon,
  cradleCeremony:CradleCeremonyIcon,
  other:         OtherEventsIcon,
};

// ----------------------------------------------------------
// 2. SERVICE COVERAGE ICONS — 100% Transparent 1:1 Vector SVGs
// ----------------------------------------------------------

export const DroneIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <path d="M12 12 L36 36 M36 12 L12 36" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
    <rect x="18" y="18" width="12" height="12" rx="3.5" fill="#0f172a" stroke="#1e293b" strokeWidth="1.5" />
    <circle cx="24" cy="24" r="3.5" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1" />
    <circle cx="24" cy="24" r="1.5" fill="#60a5fa" />
    <ellipse cx="11" cy="11" rx="6" ry="2" fill="#64748b" opacity="0.8" transform="rotate(-30 11 11)" />
    <ellipse cx="37" cy="11" rx="6" ry="2" fill="#64748b" opacity="0.8" transform="rotate(30 37 11)" />
    <ellipse cx="11" cy="37" rx="6" ry="2" fill="#64748b" opacity="0.8" transform="rotate(30 11 37)" />
    <ellipse cx="37" cy="37" rx="6" ry="2" fill="#64748b" opacity="0.8" transform="rotate(-30 37 37)" />
    <circle cx="11" cy="11" r="2" fill="#0f172a" stroke="#334155" strokeWidth="1" />
    <circle cx="37" cy="11" r="2" fill="#0f172a" stroke="#334155" strokeWidth="1" />
    <circle cx="11" cy="37" r="2" fill="#0f172a" stroke="#334155" strokeWidth="1" />
    <circle cx="37" cy="37" r="2" fill="#0f172a" stroke="#334155" strokeWidth="1" />
    <circle cx="11" cy="8" r="1" fill="#ef4444" />
    <circle cx="37" cy="8" r="1" fill="#ef4444" />
  </svg>
);

export const LedScreenIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <rect x="7" y="8" width="34" height="24" rx="3" fill="#0f172a" stroke="#1e293b" strokeWidth="1.8" />
    <rect x="9" y="10" width="30" height="20" rx="1.5" fill="#030712" />
    <rect x="11" y="12" width="7" height="7" rx="1" fill="#ef4444" opacity="0.9" />
    <rect x="20.5" y="12" width="7" height="7" rx="1" fill="#3b82f6" opacity="0.9" />
    <rect x="30" y="12" width="7" height="7" rx="1" fill="#10b981" opacity="0.9" />
    <rect x="11" y="21" width="7" height="7" rx="1" fill="#f59e0b" opacity="0.9" />
    <rect x="20.5" y="21" width="7" height="7" rx="1" fill="#8b5cf6" opacity="0.9" />
    <rect x="30" y="21" width="7" height="7" rx="1" fill="#ec4899" opacity="0.9" />
    <path d="M24 32 L24 39" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M16 40 L32 40" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="39" cy="30" r="0.8" fill="#22c55e" />
  </svg>
);

export const TraditionalPhotoIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <rect x="8" y="14" width="32" height="22" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
    <path d="M18 14 L20 10 H28 L30 14 Z" fill="#0f172a" stroke="#334155" strokeWidth="1" />
    <circle cx="24" cy="25" r="7.5" fill="#0f172a" stroke="#d4af37" strokeWidth="1.5" />
    <circle cx="24" cy="25" r="4.5" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
    <circle cx="22" cy="23" r="1.5" fill="white" opacity="0.6" />
    <circle cx="35" cy="18" r="1.5" fill="#ef4444" />
    <rect x="11" y="18" width="4" height="2" rx="1" fill="#475569" />
  </svg>
);

export const TraditionalVideoIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <rect x="6" y="14" width="24" height="20" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
    <path d="M30 20 L40 14 V34 L30 28 Z" fill="#0f172a" stroke="#334155" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="15" cy="24" r="5" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
    <circle cx="15" cy="24" r="2.5" fill="#38bdf8" opacity="0.8" />
    <circle cx="9" cy="18" r="1" fill="#ef4444" />
    <rect x="10" y="10" width="12" height="4" rx="1" fill="#334155" />
  </svg>
);

export const CandidPhotoIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <rect x="7" y="15" width="34" height="21" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <rect x="14" y="11" width="10" height="4" rx="1" fill="#334155" />
    <circle cx="27" cy="25.5" r="7" fill="#1e293b" stroke="#e2e8f0" strokeWidth="1.5" />
    <circle cx="27" cy="25.5" r="4" fill="#0284c7" />
    <circle cx="25.5" cy="24" r="1.2" fill="white" opacity="0.8" />
    <rect x="10" y="19" width="6" height="2" rx="1" fill="#c0392b" />
  </svg>
);

export const CinematicVideoIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <rect x="8" y="16" width="22" height="18" rx="3" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <path d="M30 19 L40 13 V35 L30 29 Z" fill="#1e293b" stroke="#475569" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M12 16 V10 H24 V16" stroke="#475569" strokeWidth="2" strokeLinecap="round" fill="none" />
    <circle cx="19" cy="25" r="4.5" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.2" />
    <circle cx="19" cy="25" r="2" fill="#fbbf24" opacity="0.9" />
    <circle cx="28" cy="20" r="1.2" fill="#ef4444" />
  </svg>
);

// ----------------------------------------------------------
// 3. WEDDING SUB-EVENT ICONS — 100% Transparent 1:1 Vector SVGs
// ----------------------------------------------------------

export const EngagementIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <circle cx="24" cy="30" r="12" stroke="#b8860b" strokeWidth="2.2" fill="none"/>
    <circle cx="24" cy="30" r="8.5" stroke="#d4af37" strokeWidth="1.2" fill="none" strokeDasharray="2 2"/>
    <polygon points="24,8 19,16 24,14 29,16" fill="#d4af37" stroke="#b8860b" strokeWidth="1" strokeLinejoin="round"/>
    <path d="M18 16 L14 22 L24 20 L34 22 L30 16" fill="#f0d060" stroke="#b8860b" strokeWidth="1" strokeLinejoin="round"/>
    <circle cx="24" cy="15" r="2.8" fill="#a8d8f0" stroke="#6aade0" strokeWidth="0.8"/>
  </svg>
);

export const PreWeddingIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <path d="M16 36 Q16 28 12 26 Q8 24 8 20 A6 6 0 0 1 20 20 Q20 24 16 26 Q14 28 14 32" stroke="#c77" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <circle cx="14" cy="15" r="4" fill="#e9a0a0" stroke="#c77" strokeWidth="1.5"/>
    <path d="M32 36 Q32 28 36 26 Q40 24 40 20 A6 6 0 0 0 28 20 Q28 24 32 26 Q34 28 34 32" stroke="#77a" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <circle cx="34" cy="15" r="4" fill="#a0a0e9" stroke="#77a" strokeWidth="1.5"/>
    <path d="M20 32 Q24 36 28 32" stroke="#c0392b" strokeWidth="2" fill="none" strokeLinecap="round"/>
  </svg>
);

export const BrideHaldiIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <ellipse cx="24" cy="32" rx="14" ry="8" fill="#f5d020" stroke="#d4a000" strokeWidth="2"/>
    <path d="M10 32 Q10 22 24 22 Q38 22 38 32" fill="#f9e44d" stroke="#d4a000" strokeWidth="2"/>
    <ellipse cx="24" cy="22" rx="14" ry="4" fill="#fbe96a" stroke="#d4a000" strokeWidth="1.5"/>
    <circle cx="24" cy="21" r="4.5" fill="#f5d020" stroke="#d4a000" strokeWidth="1"/>
  </svg>
);

export const BrideMakingIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <rect x="18" y="8" width="12" height="28" rx="4" fill="#d63b6e" stroke="#b02255" strokeWidth="1.5"/>
    <rect x="19" y="12" width="10" height="8" rx="2" fill="#e8547e"/>
    <path d="M18 12 Q24 8 30 12" fill="#ff7da0" stroke="#d63b6e" strokeWidth="1"/>
  </svg>
);

export const GroomHaldiIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <ellipse cx="24" cy="33" rx="13" ry="7" fill="#e8c820" stroke="#c4a000" strokeWidth="2"/>
    <path d="M11 33 Q11 23 24 23 Q37 23 37 33" fill="#f0d840" stroke="#c4a000" strokeWidth="2"/>
    <ellipse cx="24" cy="23" rx="13" ry="3.5" fill="#f5e060" stroke="#c4a000" strokeWidth="1.5"/>
  </svg>
);

export const GroomMakingIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <circle cx="24" cy="13" r="6.5" fill="#e8d0c0" stroke="#c4a890" strokeWidth="1.5"/>
    <path d="M14 42 L14 26 Q14 22 24 22 Q34 22 34 26 L34 42" fill="#1a1a2e" stroke="#2d2d44" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M20 22 L24 30 L28 22" fill="#c0392b" stroke="#a02020" strokeWidth="1"/>
  </svg>
);

export const SangeethIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <ellipse cx="13" cy="37" rx="5" ry="4" fill="#9b59b6" stroke="#7d3c98" strokeWidth="1.5"/>
    <ellipse cx="31" cy="37" rx="5" ry="4" fill="#9b59b6" stroke="#7d3c98" strokeWidth="1.5"/>
    <path d="M18 37 L18 16 L36 10 L36 31" stroke="#7d3c98" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const WeddingDayIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <circle cx="18" cy="12" r="5" fill="#e8d0c0" stroke="#c4a890" strokeWidth="1.5"/>
    <circle cx="30" cy="12" r="5" fill="#e8d0c0" stroke="#c4a890" strokeWidth="1.5"/>
    <path d="M12 42 L12 26 Q12 22 18 22" fill="#d4af37" stroke="#b8860b" strokeWidth="1.5"/>
    <path d="M36 42 L36 26 Q36 22 30 22" fill="#c0392b" stroke="#a02020" strokeWidth="1.5"/>
  </svg>
);

export const VrathamIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <path d="M14 32 Q14 38 24 38 Q34 38 34 32 Q34 26 24 26 Q14 26 14 32 Z" fill="#d4af37" stroke="#b8860b" strokeWidth="1.5"/>
    <ellipse cx="30" cy="16" rx="2.5" ry="4" fill="#f0a030" stroke="#e07020" strokeWidth="1"/>
  </svg>
);

export const ReceptionIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <rect x="6" y="30" width="36" height="12" rx="3" fill="#1a1a2e" stroke="#2d2d44" strokeWidth="1.5"/>
    <rect x="10" y="18" width="28" height="14" rx="2" fill="#2d1a4e" stroke="#4d2a7e" strokeWidth="1.5"/>
  </svg>
);

// ----------------------------------------------------------
// MAPS & EXPORTS
// ----------------------------------------------------------
export const weddingSubEventIconMap = {
  engagement:   EngagementIcon,
  preWedding:   PreWeddingIcon,
  brideHaldi:   BrideHaldiIcon,
  brideMaking:  BrideMakingIcon,
  groomHaldi:   GroomHaldiIcon,
  groomMaking:  GroomMakingIcon,
  sangeeth:     SangeethIcon,
  weddingDay:   WeddingDayIcon,
  vratham:      VrathamIcon,
  reception:    ReceptionIcon,
};

export const serviceSvgIconMap = {
  traditionalPhoto: TraditionalPhotoIcon,
  traditionalVideo: TraditionalVideoIcon,
  candidPhoto:      CandidPhotoIcon,
  cinematicVideo:   CinematicVideoIcon,
  drone:            DroneIcon,
  ledScreen:        LedScreenIcon,
};
