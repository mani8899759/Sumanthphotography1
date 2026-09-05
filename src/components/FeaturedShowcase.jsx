import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';
import { LightboxModal } from './LightboxModal';
import { CustomCursor } from './CustomCursor';

// Easily editable 15-entry dataset with curated mixed ratios (4:5 portrait & 16:9 landscape)
const featuredMoments = [
  { id: 'fm-1', src: '/assets/wedding/wedding_01.jpg', ratio: 'portrait', category: 'WEDDING', alt: 'Wedding Couple Portrait' },
  { id: 'fm-2', src: '/assets/pre_wedding_hero.jpg', ratio: 'portrait', category: 'PRE-WEDDING', alt: 'Pre-Wedding Photography' },
  { id: 'fm-3', src: '/assets/wedding_ritual.jpg', ratio: 'portrait', category: 'RITUALS', alt: 'Mehendi & Henna Artistry' },
  { id: 'fm-4', src: '/assets/maternity_couple.jpg', ratio: 'portrait', category: 'PRE-WEDDING', alt: 'Intimate Couple Moment' },
  { id: 'fm-5', src: '/assets/wedding_reception.jpg', ratio: 'landscape', category: 'RECEPTION', alt: 'Grand Reception Ceremony' },
  { id: 'fm-6', src: '/assets/baby_bump_hero.jpg', ratio: 'landscape', category: 'MATERNITY', alt: 'Fine Art Maternity Session' },
  { id: 'fm-7', src: '/assets/hero_model.jpg', ratio: 'portrait', category: 'CANDID', alt: 'Candid Lifestyle Portrait' },
  { id: 'fm-8', src: '/assets/about_photographer.jpg', ratio: 'portrait', category: 'PORTRAITS', alt: 'Fine Art Studio Portrait' },
  { id: 'fm-9', src: '/assets/portrait_model.jpg', ratio: 'portrait', category: 'ENGAGEMENT', alt: 'Beauty & Elegance Portrait' },
  { id: 'fm-10', src: '/assets/wedding_ritual.jpg', ratio: 'portrait', category: 'HALDI', alt: 'Traditional Haldi Blessing' },
  { id: 'fm-11', src: '/assets/hero_model.jpg', ratio: 'portrait', category: 'PORTRAITS', alt: 'Personal Branding Headshot' },
  { id: 'fm-12', src: '/assets/wedding_reception.jpg', ratio: 'landscape', category: 'CELEBRATIONS', alt: 'Fairy Light Banquet Hall' },
  { id: 'fm-13', src: '/assets/wedding/wedding_02.jpg', ratio: 'portrait', category: 'WEDDING', alt: 'Heritage Temple Ceremony' },
  { id: 'fm-14', src: '/assets/maternity_couple.jpg', ratio: 'portrait', category: 'PRE-WEDDING', alt: 'Sunset Couple Session' },
  { id: 'fm-15', src: '/assets/baby_bump_hero.jpg', ratio: 'portrait', category: 'MATERNITY', alt: 'New Beginnings Outdoor Session' }
];

// Strict 12-column grid row configurations for exact left-to-right edge alignment across all 15 images
const gridLayouts = [
  // Row 1: Three 4:5 Portraits (4 + 4 + 4 = 12 cols)
  { colSpan: 'col-span-1 md:col-span-4', aspectRatio: 'aspect-[4/5]' },
  { colSpan: 'col-span-1 md:col-span-4', aspectRatio: 'aspect-[4/5]' },
  { colSpan: 'col-span-1 md:col-span-4', aspectRatio: 'aspect-[4/5]' },

  // Row 2: One 4:5 Portrait + One 16:9 Landscape (4 + 8 = 12 cols)
  { colSpan: 'col-span-1 md:col-span-4', aspectRatio: 'aspect-[4/5]' },
  { colSpan: 'col-span-1 md:col-span-8', aspectRatio: 'aspect-[16/9]' },

  // Row 3: One 16:9 Landscape + One 4:5 Portrait (8 + 4 = 12 cols)
  { colSpan: 'col-span-1 md:col-span-8', aspectRatio: 'aspect-[16/9]' },
  { colSpan: 'col-span-1 md:col-span-4', aspectRatio: 'aspect-[4/5]' },

  // Row 4: Three 4:5 Portraits (4 + 4 + 4 = 12 cols)
  { colSpan: 'col-span-1 md:col-span-4', aspectRatio: 'aspect-[4/5]' },
  { colSpan: 'col-span-1 md:col-span-4', aspectRatio: 'aspect-[4/5]' },
  { colSpan: 'col-span-1 md:col-span-4', aspectRatio: 'aspect-[4/5]' },

  // Row 5: One 4:5 Portrait + One 16:9 Landscape (4 + 8 = 12 cols)
  { colSpan: 'col-span-1 md:col-span-4', aspectRatio: 'aspect-[4/5]' },
  { colSpan: 'col-span-1 md:col-span-8', aspectRatio: 'aspect-[16/9]' },

  // Row 6: Three 4:5 Portraits (4 + 4 + 4 = 12 cols)
  { colSpan: 'col-span-1 md:col-span-4', aspectRatio: 'aspect-[4/5]' },
  { colSpan: 'col-span-1 md:col-span-4', aspectRatio: 'aspect-[4/5]' },
  { colSpan: 'col-span-1 md:col-span-4', aspectRatio: 'aspect-[4/5]' }
];

export const FeaturedShowcase = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorHovered, setCursorHovered] = useState(false);

  const handleOpenLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? featuredMoments.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === featuredMoments.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-white text-black py-20 lg:py-28 px-4 sm:px-8 border-t border-neutral-100 select-none">
      
      {/* Floating Custom VIEW Cursor Badge */}
      <CustomCursor isHovered={cursorHovered} text="VIEW" />

      <div className="w-[92vw] max-w-[1500px] mx-auto flex flex-col">
        
        {/* SECTION HEADING & SUBTITLE - Aligned to Container Left Edge */}
        <ScrollReveal className="text-left mb-12 sm:mb-16 space-y-3">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-black tracking-tight leading-none uppercase">
            SELECTED MOMENTS
          </h2>
          <p className="text-xs sm:text-sm font-medium tracking-wider text-neutral-500 uppercase">
            Weddings · Pre-Weddings · Celebrations
          </p>
        </ScrollReveal>

        {/* 15-IMAGE 12-COLUMN STRICT EDITORIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[12px] items-stretch mb-20">
          {featuredMoments.map((item, idx) => {
            const layout = gridLayouts[idx] || { colSpan: 'col-span-1 md:col-span-4', aspectRatio: 'aspect-[4/5]' };

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.9,
                  delay: (idx % 5) * 0.08,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={`${layout.colSpan} ${layout.aspectRatio} relative group overflow-hidden bg-neutral-900 cursor-pointer`}
                onMouseEnter={() => setCursorHovered(true)}
                onMouseLeave={() => setCursorHovered(false)}
                onClick={() => handleOpenLightbox(idx)}
              >
                {/* Photograph Asset */}
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Subtle Category Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-300 uppercase block mb-1">
                    {item.category} · FRAME {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h4 className="text-xs sm:text-sm font-semibold leading-tight">
                    {item.alt}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* SECTION END CTA */}
        <ScrollReveal className="text-center space-y-4 pt-12 border-t border-neutral-100 w-full">
          <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase block">
            MORE STORIES
          </span>
          <Link
            to="/weddings"
            className="inline-block text-base sm:text-lg font-extrabold uppercase tracking-tight text-black border-b-2 border-black py-2 cta-hover"
          >
            EXPLORE WEDDING PHOTOGRAPHY →
          </Link>
        </ScrollReveal>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        currentIndex={currentIndex}
        images={featuredMoments}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};

