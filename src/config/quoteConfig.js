// ============================================================
// SUMANTH PHOTOGRAPHY — QUOTE BUILDER CONFIGURATION
// ============================================================
// Edit pricing, events, and services here.
// Never scatter prices across UI components.
// ============================================================

// ----------------------------------------------------------
// BRAND CONFIGURATION
// ----------------------------------------------------------
export const brandConfig = {
  brandName: 'Sumanth Photography',
  shortName: 'SP',
  tagline: 'Fine art & documentary photography studio based in Hyderabad, India.',
  primaryColor: '#0f172a',      // dark navy / charcoal
  accentColor: '#c0392b',       // crimson / red
  accentHover: '#a93226',
  heroImage: '/assets/wedding_hero.jpg',
  contactEmail: 'hello@sumanthphotography.com',
  phone: '+91 94918 18015',
  phoneHref: 'tel:+919491818015',
  location: 'Hyderabad, India',
  instagram: 'https://www.instagram.com/sumanth__photography07/',
  whatsapp: 'https://wa.me/919491818015',
};

// ----------------------------------------------------------
// SERVICE CATALOG
// All prices are in INR (₹). Edit here to change pricing.
// ----------------------------------------------------------
export const serviceCatalog = {
  traditionalPhoto: {
    id: 'traditionalPhoto',
    name: 'Traditional Photography',
    shortName: 'Trad. Photo',
    price: 8000,
    category: 'photo',
    icon: 'dslr',
    description: 'Classic DSLR photography coverage with our senior photographers.',
    image: '/assets/traditional-camera.webp',
  },
  traditionalVideo: {
    id: 'traditionalVideo',
    name: 'Traditional Videography',
    shortName: 'Trad. Video',
    price: 8000,
    category: 'video',
    icon: 'videoCamera',
    description: 'Full event video coverage with professional videographers.',
    image: '/assets/video-camera.webp',
  },
  candidPhoto: {
    id: 'candidPhoto',
    name: 'Candid Photography',
    shortName: 'Candid Photo',
    price: 15000,
    category: 'photo',
    icon: 'mirrorless',
    description: 'Artistic candid & documentary photography by our creative team.',
    image: '/assets/candid-camera.webp',
  },
  cinematicVideo: {
    id: 'cinematicVideo',
    name: 'Cinematic Video',
    shortName: 'Cinematic',
    price: 15000,
    category: 'video',
    icon: 'cinemaCamera',
    description: 'Filmic, cinematic storytelling with premium grade cinema cameras.',
    image: '/assets/cinema-camera.webp',
  },
  drone: {
    id: 'drone',
    name: 'Drone Coverage',
    shortName: 'Drone',
    price: 8000,
    category: 'aerial',
    icon: 'drone',
    description: 'Stunning aerial photography and videography from above.',
    image: '/assets/drone.webp',
  },
  ledScreen: {
    id: 'ledScreen',
    name: 'LED Screen',
    shortName: 'LED Screen',
    price: 15000,
    category: 'display',
    icon: 'ledScreen',
    description: 'Premium LED display panel for live event broadcast.',
    image: '/assets/led-screen.webp',
  },
};

// ----------------------------------------------------------
// ALBUM CONFIGURATION
// ----------------------------------------------------------
export const albumConfig = {
  pricePerSheet: 600,
  defaultSheets: 20,
  minSheets: 10,
  maxSheets: 100,
  stepSize: 5,
};

// ----------------------------------------------------------
// WEDDING SUB-EVENTS
// Define which services are available per wedding event.
// ----------------------------------------------------------
export const weddingSubEvents = {
  engagement: {
    id: 'engagement',
    name: 'Engagement',
    emoji: '💍',
    availableServices: ['traditionalPhoto', 'traditionalVideo', 'candidPhoto', 'cinematicVideo', 'drone'],
  },
  preWedding: {
    id: 'preWedding',
    name: 'Pre Wedding',
    emoji: '🌸',
    availableServices: ['candidPhoto', 'cinematicVideo', 'drone'],
  },
  brideHaldi: {
    id: 'brideHaldi',
    name: 'Bride Haldi',
    emoji: '🌼',
    availableServices: ['traditionalPhoto', 'traditionalVideo', 'candidPhoto', 'cinematicVideo'],
  },
  brideMaking: {
    id: 'brideMaking',
    name: 'Bride Making',
    emoji: '💄',
    availableServices: ['traditionalPhoto', 'candidPhoto', 'cinematicVideo'],
  },
  groomHaldi: {
    id: 'groomHaldi',
    name: 'Groom Haldi',
    emoji: '🌿',
    availableServices: ['traditionalPhoto', 'traditionalVideo', 'candidPhoto', 'cinematicVideo'],
  },
  groomMaking: {
    id: 'groomMaking',
    name: 'Groom Making',
    emoji: '👔',
    availableServices: ['traditionalPhoto', 'candidPhoto'],
  },
  sangeeth: {
    id: 'sangeeth',
    name: 'Sangeeth',
    emoji: '🎶',
    availableServices: ['traditionalPhoto', 'traditionalVideo', 'candidPhoto', 'cinematicVideo', 'drone', 'ledScreen'],
  },
  weddingDay: {
    id: 'weddingDay',
    name: 'Wedding Day',
    emoji: '🎊',
    availableServices: ['traditionalPhoto', 'traditionalVideo', 'candidPhoto', 'cinematicVideo', 'drone', 'ledScreen'],
  },
  vratham: {
    id: 'vratham',
    name: 'Vratham',
    emoji: '🪔',
    availableServices: ['traditionalPhoto', 'traditionalVideo', 'candidPhoto', 'cinematicVideo'],
  },
  reception: {
    id: 'reception',
    name: 'Reception',
    emoji: '✨',
    availableServices: ['traditionalPhoto', 'traditionalVideo', 'candidPhoto', 'cinematicVideo', 'drone', 'ledScreen'],
  },
};

// ----------------------------------------------------------
// MAIN EVENT CATALOG
// ----------------------------------------------------------
export const eventCatalog = {
  wedding: {
    id: 'wedding',
    name: 'Wedding & Pre Wedding',
    emoji: '👰',
    description: 'Complete wedding coverage from rituals to reception.',
    isWedding: true,
    subEvents: weddingSubEvents,
    // Wedding uses per-sub-event service selection (no global services here)
  },
  birthday: {
    id: 'birthday',
    name: 'Birthday',
    emoji: '🎂',
    description: 'Celebrations, milestone birthdays and surprise events.',
    isWedding: false,
    availableServices: ['traditionalPhoto', 'traditionalVideo', 'candidPhoto', 'cinematicVideo', 'drone', 'ledScreen'],
  },
  sareeCeremony: {
    id: 'sareeCeremony',
    name: 'Saree Ceremony',
    emoji: '🥻',
    description: 'Traditional saree draping ceremonies and cultural events.',
    isWedding: false,
    availableServices: ['traditionalPhoto', 'traditionalVideo', 'candidPhoto', 'cinematicVideo'],
  },
  houseWarming: {
    id: 'houseWarming',
    name: 'House Warming',
    emoji: '🏡',
    description: 'Gruhapravesam and new home blessings ceremony coverage.',
    isWedding: false,
    availableServices: ['traditionalPhoto', 'traditionalVideo', 'candidPhoto', 'cinematicVideo'],
  },
  corporate: {
    id: 'corporate',
    name: 'Corporate Events',
    emoji: '🏢',
    description: 'Conferences, launches, team events and brand photography.',
    isWedding: false,
    availableServices: ['traditionalPhoto', 'traditionalVideo', 'candidPhoto', 'cinematicVideo', 'drone', 'ledScreen'],
  },
  babyShower: {
    id: 'babyShower',
    name: 'Baby Shower',
    emoji: '🍼',
    description: 'Gentle, emotional baby shower and maternity celebration coverage.',
    isWedding: false,
    availableServices: ['traditionalPhoto', 'traditionalVideo', 'candidPhoto', 'cinematicVideo'],
  },
  cradleCeremony: {
    id: 'cradleCeremony',
    name: 'Cradle Ceremony',
    emoji: '🌙',
    description: 'Namakarana and traditional cradle ceremonies beautifully documented.',
    isWedding: false,
    availableServices: ['traditionalPhoto', 'traditionalVideo', 'candidPhoto', 'cinematicVideo'],
  },
  other: {
    id: 'other',
    name: 'Other Events',
    emoji: '🎉',
    description: 'Any other special event or celebration you need documented.',
    isWedding: false,
    availableServices: ['traditionalPhoto', 'traditionalVideo', 'candidPhoto', 'cinematicVideo', 'drone', 'ledScreen'],
  },
};

// ----------------------------------------------------------
// STEP CONFIGURATION — defines the flow order
// ----------------------------------------------------------
export const STEPS = {
  EVENT: 0,
  WEDDING_EVENTS: 1,
  SERVICES: 2,
  ALBUM: 3,
  REVIEW: 4,
  DETAILS: 5,
  SUCCESS: 6,
};

export const STEP_LABELS = ['Event', 'Details', 'Services', 'Album', 'Review', 'Your Info'];

// ----------------------------------------------------------
// UTILITY: Calculate total price from state
// ----------------------------------------------------------
export const calculateTotal = (selectedServices, albumSelected, albumSheets) => {
  let total = 0;

  // Sum all selected services across all events
  Object.values(selectedServices).forEach((services) => {
    services.forEach((serviceId) => {
      if (serviceCatalog[serviceId]) {
        total += serviceCatalog[serviceId].price;
      }
    });
  });

  // Album
  if (albumSelected && albumSheets > 0) {
    total += albumSheets * albumConfig.pricePerSheet;
  }

  return total;
};

// ----------------------------------------------------------
// UTILITY: Format price in Indian Rupee format
// ----------------------------------------------------------
export const formatPrice = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

// ----------------------------------------------------------
// QUOTE PAGE ISOLATED COVER CONFIGURATION
// ----------------------------------------------------------
export const quotePageConfig = {
  coverImage: '/assets/quote_cover.jpg',
  coverAlt: 'Build Your Photography Quote — Sumanth Photography',
  imageWidth: 1024,
  imageHeight: 805,
  aspectRatio: 1024 / 805,
};

