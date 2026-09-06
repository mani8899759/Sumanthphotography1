// Helper generator to build narrative 30-item curated datasets with specific 4:5 portrait and 16:9 landscape ratios
const generateGalleryItems = (baseCategory, imagePool, captions) => {
  const items = [];
  for (let i = 1; i <= 30; i++) {
    // Intentionally mix 16:9 landscape every 4th or 7th image, rest 4:5 portrait
    const isLandscape = i % 4 === 2 || i % 7 === 0;
    const ratio = isLandscape ? "landscape" : "portrait";
    const src = imagePool[(i - 1) % imagePool.length];
    const caption = captions[(i - 1) % captions.length];

    items.push({
      id: `${baseCategory}-${i}`,
      src,
      ratio,
      caption: `${caption} — Frame ${String(i).padStart(2, '0')}`,
      alt: `${baseCategory} photography ${i}`
    });
  }
  return items;
};

// Available high-res photographic image assets pool
const imagePool = {
  weddings: [
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

const weddingCaptions = [
  "Establishing Venue & Atmosphere",
  "Heritage Architecture & Décor",
  "Bride Preparation & Jewellery Detail",
  "Intricate Mehendi Henna Artistry",
  "Groom Royal Attire & Turban Details",
  "Fine-Art Bridal Studio Portrait",
  "Traditional Sacred Varmala Ceremony",
  "Family Blessings & Candid Emotions",
  "Golden Hour Couple Portrait",
  "Sangeet Night Dance Celebration",
  "Grand Reception Fairy-Light Hall",
  "Closing Heirloom Memory"
];

const maternityCaptions = [
  "Serene Window Light Environmental Portrait",
  "Motherhood Grace & Flowing Gown",
  "Intimate Couple Embrace & Bond",
  "Minimalist Studio Maternity Silhouette",
  "Natural Light Outdoor Session",
  "Gentle Touch & New Beginnings Detail",
  "Family Connection & Expectation",
  "Timeless Fine-Art Maternity Portrait"
];

export const siteContent = {
  businessName: "SUMANTH PHOTOGRAPHY",
  tagline: "Fine art & documentary photography studio based in Hyderabad, India.",
  location: "Hyderabad, India",
  logo: "", // Empty initial logo placeholder preserving exact layout dimensions

  navLinks: [
    { name: "HOME", path: "/" },
    { name: "WEDDING PHOTOGRAPHY", path: "/weddings" },
    { name: "BABY BUMP SHOOTS", path: "/baby-maternity" },
    { name: "OTHERS", path: "/birthdays-events" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
    { name: "BUILD YOUR QUOTE →", path: "/build-your-quote" }
  ],

  hero: {
    image: "/assets/hero_model.jpg",
    headlineLine1: "Commercial",
    headlineLine2: "Photography",
    headlineLine3: "Studio",
    description: "We collaborate directly with organizations in Hyderabad to visually convey a brand, product or service message. Additionally, we partner with agencies, communication teams, and businesses to develop content for campaigns, websites, digital media, e-commerce, and print advertising.",
    ctaText: "View more"
  },

  introStatement: {
    heading: "SUMANTH PHOTOGRAPHY is a photography studio based in Hyderabad, Telangana.",
    body: "The Studio specialises in creating High Quality Imagery for Products and People for both Commercial and Individual use. Our Team includes Photographers, In-house Image Editor and we have relationships with Stylists, Make-up Artists, Models and Actors to provide complete Photo Production Services. We have developed extensive skills and an understanding of the photographic needs in the city, having served thousands of clients over the years. Currently, SUMANTH PHOTOGRAPHY is a small yet fast-growing business that focuses on a niche market in the photography industry. We specialize in producing high-quality imagery for brands, products, and individuals."
  },

  portrait: {
    heading: "Portrait Photography",
    text1: "We offer portrait and headshot photography services for both individuals and organizations.",
    text2: "Our services include a variety of high-quality portraits, such as professional business photos, female beauty shots, hero shots for men, LinkedIn profile pictures, ERAS headshots, and corporate environmental portraits.",
    image: "/assets/portrait_model.jpg"
  },

  printing: {
    heading: "High Quality Photo Printing",
    image: "/assets/printer.jpg",
    subheadingLine1: "Precision Color High-Quality",
    subheadingLine2: "Prints",
    body: "We use a Large Format 12 ink Pigment Ink Printer and Archival Inks and High-quality paper media to produce prints outstanding color precision. Additionally, we offer archival printing options."
  },

  // 01: WEDDING PHOTOGRAPHY
  weddings: {
    titleLine1: "Wedding",
    titleLine2: "Photography",
    subheading: "Stories told through quiet elegance & genuine emotion.",
    intro: "We document weddings with a fine-art and documentary approach, preserving sacred rituals, honest emotions, intimate moments, and the atmosphere of every celebration.",
    heroImage: "/assets/wedding_hero.jpg",
    gallery: generateGalleryItems("wedding", imagePool.weddings, weddingCaptions),
    ctaHeading: "Ready to document your story?",
    buttonText: "BUILD YOUR QUOTE →"
  },

  // 02: BABY BUMP SHOOTS
  babyBump: {
    titleLine1: "Baby Bump",
    titleLine2: "Shoots",
    subheading: "A quiet celebration of motherhood, connection, and new beginnings.",
    intro: "Maternity photography is a quiet tribute to one of life’s most profound transformations. We create intimate, fine-art maternity portraits that emphasize organic grace, natural light, and authentic emotional bond between partners and their growing family.",
    heroImage: "/assets/baby_bump_hero.jpg",
    gallery: generateGalleryItems("maternity", imagePool.maternity, maternityCaptions),
    ctaHeading: "Ready to document your story?",
    buttonText: "RESERVE YOUR SESSION →"
  },

  // 03: ABOUT
  about: {
    titleLine1: "About Sumanth",
    titleLine2: "Photography",
    subheading: "Fine art & documentary photography studio based in Hyderabad, India.",
    heroImage: "/assets/about_photographer.jpg",
    awardsImage: "/assets/awards/06.jpg",
    awardsTeamImage: "/assets/awards/IMG_2964.jpg",
    awards: [
      {
        id: "award-1",
        src: "/assets/awards/06.jpg",
        title: "BEST PHOTO STORY AWARD",
        subtitle: "Telangana Photography Akademi"
      },
      {
        id: "award-2",
        src: "/assets/awards/IMG_2964.jpg",
        title: "STUDIO RECOGNITION",
        subtitle: "Sumanth Photography Crew & Golden Trophy"
      },
      {
        id: "award-3",
        src: "/assets/awards/01.jpg",
        title: "NATIONAL WORKSHOP AWARD",
        subtitle: "5th National Level Photography Convention"
      },
      {
        id: "award-4",
        src: "/assets/awards/08.jpg",
        title: "STATE LEVEL PHOTOGRAPHY AWARD",
        subtitle: "Certificate of Excellence"
      },
      {
        id: "award-5",
        src: "/assets/awards/09.jpg",
        title: "HONOR & RECOGNITION PLAQUE",
        subtitle: "Special Achievement Felicitation"
      },
      {
        id: "award-6",
        src: "/assets/awards/05.jpg",
        title: "KHAMMAM PHOTO ARTS AWARD",
        subtitle: "Photography Excellence Workshop"
      }
    ],
    approachHeading: "THE WAY WE SEE STORIES",
    approachBody1: "At Sumanth Photography, we believe photography is an exercise in presence. Our work balances a documentary approach with a fine-art sensibility—capturing candid emotions as they unfold without intrusive direction.",
    approachBody2: "Based in Hyderabad, India, our team collaborates with clients across the globe. Whether documenting a heritage wedding, an intimate maternity milestone, or a commercial brand campaign, we approach every assignment with quiet discipline, aesthetic precision, and deep respect for the moment.",
    stats: [
      { number: "500+", label: "WEDDINGS DOCUMENTED" },
      { number: "10+", label: "YEARS EXPERIENCE" },
      { number: "100%", label: "BESPOKE STORYTELLING" },
      { number: "GLOBAL", label: "DESTINATION COVERAGE" }
    ],
    philosophyHeading: "EVERY FRAME SHOULD FEEL LIKE A MEMORY.",
    philosophyBody: "We move beyond trendy filters and artificial poses to create enduring visual heirlooms. Our images are crafted to evoke the raw atmosphere, tactile emotion, and genuine human connection of your story for decades to come.",
    ctaTitle: "LET'S DOCUMENT YOUR STORY.",
    buttonText: "BUILD YOUR QUOTE →"
  },

  // 04: CONTACT
  contact: {
    heroTitleLine1: "Let's create",
    heroTitleLine2: "something meaningful.",
    subheading: "Tell us about your celebration, session, or project and we'll get back to you with availability and next steps.",
    studio: "Hyderabad, India",
    phone: "+91 94918 18015",
    email: "hello@sumanthphotography.com",
    eventTypes: [
      "Wedding",
      "Pre-Wedding",
      "Baby Bump Shoot",
      "Birthday",
      "Event",
      "Portrait",
      "Other"
    ]
  },

  footer: {
    brandName: "SUMANTH PHOTOGRAPHY",
    tagline: "Fine art & documentary photography studio based in Hyderabad, India.",
    location: "Hyderabad, India",
    phone: "+91 94918 18015",
    email: "hello@sumanthphotography.com",
    copyright: "© 2026 SUMANTH PHOTOGRAPHY. ALL RIGHTS RESERVED. HYDERABAD · INDIA",
    links: [
      "Product and Commercial Photography Pricing",
      "Privacy policy",
      "Refund Policy for Professional Headshots",
      "Professional Headshots Booking Page"
    ]
  }
};
