import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';
import { LightboxModal } from './LightboxModal';
import { CustomCursor } from './CustomCursor';
import { selectedMoments } from '../data/selectedMomentsData';

export const FeaturedShowcase = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorHovered, setCursorHovered] = useState(false);

  const handleOpenLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? selectedMoments.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === selectedMoments.length - 1 ? 0 : prev + 1));
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
            Weddings · Pre-Weddings · Engagements
          </p>
        </ScrollReveal>

        {/* 18-IMAGE 12-COLUMN STRICT EDITORIAL GRID */}
        <div className="featured-showcase-grid grid grid-cols-1 md:grid-cols-12 gap-[12px] items-stretch mb-20">
          {selectedMoments.map((item, idx) => {
            const colSpan = item.colSpan || 'col-span-1 md:col-span-4';
            const aspectRatio = item.aspectRatio || 'aspect-[4/5]';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.9,
                  delay: (idx % 5) * 0.08,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={`${colSpan} ${aspectRatio} relative group overflow-hidden bg-neutral-900 cursor-pointer`}
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

                {/* Subtle Hover Category Overlay */}
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
        images={selectedMoments}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
