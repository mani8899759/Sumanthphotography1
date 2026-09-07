// Structured dataset storing 32 curated items per subcategory (384 photographs total across 12 subcategories)

const imagePool = {
  wedding: [
    "/assets/wedding_reception.jpg",
    "/assets/wedding_ritual.jpg",
    "/assets/portrait_model.jpg",
    "/assets/hero_model.jpg"
  ],
  maternity: [
    "/assets/baby_bump_hero.jpg",
    "/assets/maternity_couple.jpg",
    "/assets/portrait_model.jpg",
    "/assets/hero_model.jpg"
  ],
  birthdays: [
    "/assets/hero_model.jpg",
    "/assets/wedding_reception.jpg",
    "/assets/portrait_model.jpg",
    "/assets/about_photographer.jpg"
  ],
  events: [
    "/assets/wedding_reception.jpg",
    "/assets/printer.jpg",
    "/assets/wedding_hero.jpg",
    "/assets/about_photographer.jpg"
  ]
};

const buildSubcategoryItems = (parentCategory, subId, poolKey, captions) => {
  const items = [];
  const pool = imagePool[poolKey];

  for (let i = 1; i <= 32; i++) {
    // Intentionally mix 16:9 landscape every 4th or 7th photograph, rest 4:5 portrait
    const isLandscape = i % 4 === 2 || i % 7 === 0;
    const ratio = isLandscape ? "landscape" : "portrait";
    const src = pool[(i - 1) % pool.length];
    const captionTitle = captions[(i - 1) % captions.length];

    items.push({
      id: `${subId}-${i}`,
      src,
      ratio,
      caption: `${captionTitle} — Frame ${String(i).padStart(2, '0')}`,
      categoryName: subId.toUpperCase().replace('-', ' '),
      alt: `${parentCategory} ${subId} photography ${i}`
    });
  }
  return items;
};

// Subcategory definitions for navigation and landing hubs
export const categoryTree = {
  weddings: {
    parentTitle: "Wedding Photography",
    parentPath: "/weddings",
    subcategories: [
      { id: "pre-wedding", name: "PRE-WEDDING", path: "/weddings/pre-wedding", heroImage: "/assets/pre_wedding_hero.jpg", desc: "Editorial portraits, architecture, landscapes, and destination pre-wedding story sessions." },
      { id: "engagement", name: "ENGAGEMENT", path: "/weddings/engagement", heroImage: "/assets/engagement_cover.jpg", desc: "Intimate promises of forever, ring exchanges, and candid family celebrations." },
      { id: "haldi", name: "HALDI", path: "/weddings/haldi", heroImage: "/assets/wedding_ritual.jpg", desc: "Vibrant yellow rituals, auspicious turmeric application, laughter, and playful moments." },
      { id: "ceremony", name: "WEDDING", path: "/weddings/ceremony", heroImage: "/assets/wedding_cover.jpg", desc: "Sacred phere, varmala, emotional kanyadaan, and timeless bridal dignity." },
      { id: "reception", name: "RECEPTION", path: "/weddings/reception", heroImage: "/assets/wedding_reception.jpg", desc: "High-fashion reception galas, first dances, fairy-light halls, and midnight toasts." }
    ]
  },
  babyMaternity: {
    parentTitle: "Baby / Maternity",
    parentPath: "/baby-maternity",
    subcategories: [
      { id: "maternity", name: "BABY BUMP / MATERNITY", path: "/baby-maternity/maternity", heroImage: "/assets/baby_bump_hero.jpg", desc: "Quiet celebrations of motherhood, window light silhouettes, and intimate couple bonds." },
      { id: "baby-shower", name: "BABY SHOWER", path: "/baby-maternity/baby-shower", heroImage: "/assets/maternity_couple.jpg", desc: "Warm family blessings, festive traditions, and joyful anticipation of new beginnings." },
      { id: "newborn", name: "NEWBORN / BABY", path: "/baby-maternity/newborn", heroImage: "/assets/portrait_model.jpg", desc: "Gentle baby portraits, tiny details, peaceful sleep moments, and early family warmth." }
    ]
  },
  others: {
    parentTitle: "Others",
    parentPath: "/birthdays-events",
    subcategories: [
      { id: "birthdays", name: "BIRTHDAYS", path: "/birthdays-events/birthdays", heroImage: "/assets/hero_model.jpg", desc: "Milestone birthday galas, cake cutting moments, and spontaneous party cheer." },
      { id: "events", name: "EVENTS", path: "/birthdays-events/events", heroImage: "/assets/events_cover.jpg", desc: "High-profile corporate galas, keynotes, stage performances, and cultural events." },
      { id: "celebrations", name: "OTHER CELEBRATIONS", path: "/birthdays-events/celebrations", heroImage: "/assets/celebrations_cover.jpg", desc: "Anniversaries, housewarmings, graduations, and multigenerational reunions." }
    ]
  }
};

const weddingCaptions = [
  "Establishing Atmosphere & Architectural Heritage",
  "Bride Preparation & Fine Art Jewellery Detail",
  "Intricate Henna Mehendi Storytelling",
  "Royal Groom Turban & Sword Details",
  "Sacred Varmala Floral Exchange",
  "Emotional Family Blessing & Tears of Joy",
  "Golden Hour Heritage Terrace Couple Portrait",
  "Sangeet Night Dance Energy & Fairy Lights",
  "Grand Banquet Hall Entrance",
  "Closing Heirloom Artifact Frame"
];

const maternityCaptions = [
  "Serene Window Backlight Environmental Portrait",
  "Motherhood Grace & Flowing Linen Gown",
  "Intimate Husband Embrace & Gentle Touch",
  "Minimalist Studio Shadow & Silhouette",
  "Outdoor Golden Meadow Session",
  "New Life Anticipation & Fine Art Detail"
];

const birthdayCaptions = [
  "Festive Birthday Setting & Warm Ambiance",
  "Candle Lighting & Joyful Cake Moment",
  "Spontaneous Laughter & Party Cheer",
  "Family Hugs & Milestone Keepsakes",
  "Decor Details & Birthday Sparkle"
];

const eventCaptions = [
  "Corporate Keynote & Stage Lighting",
  "High-Profile Networking & Guests",
  "Cultural Performance & Stage Moment",
  "Bespoke Event Design & Atmosphere",
  "Group Celebration & Toast"
];

import preWeddingItems from './preWeddingItems.json';
import weddingCeremonyItems from './weddingCeremonyItems.json';
import engagementItems from './engagementItems.json';
import eventsItems from './eventsItems.json';
import celebrationsItems from './celebrationsItems.json';

// Populate items per subcategory
export const galleryData = {
  // WEDDING SUBCATEGORIES
  "pre-wedding": preWeddingItems,
  "engagement": engagementItems,
  "haldi": buildSubcategoryItems("Weddings", "haldi", "wedding", weddingCaptions),
  "ceremony": weddingCeremonyItems,
  "reception": buildSubcategoryItems("Weddings", "reception", "wedding", weddingCaptions),

  // BABY / MATERNITY SUBCATEGORIES (96 images)
  "maternity": buildSubcategoryItems("Baby / Maternity", "maternity", "maternity", maternityCaptions),
  "baby-shower": buildSubcategoryItems("Baby / Maternity", "baby-shower", "maternity", maternityCaptions),
  "newborn": buildSubcategoryItems("Baby / Maternity", "newborn", "maternity", maternityCaptions),

  // OTHERS SUBCATEGORIES
  "birthdays": buildSubcategoryItems("Others", "birthdays", "birthdays", birthdayCaptions),
  // EVENTS: Real curated gallery — 56 unique photographs from the Events folder
  // events_cover.jpg is NOT included here; it is stored separately as heroImage in categoryTree.others
  "events": eventsItems,
  "celebrations": celebrationsItems
};
