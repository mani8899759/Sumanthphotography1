import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { LightboxModal } from './LightboxModal';
import { CustomCursor } from './CustomCursor';

/**
 * Calculate image-aware column spans and aspect ratios for perfect 12-col architectural alignment
 * eliminating side black bars completely while preserving portrait & landscape shapes.
 */
const calculateImageSpans = (images) => {
  const spans = [];
  let i = 0;

  while (i < images.length) {
    const item = images[i];
    const isLand = item.orientation === 'landscape' || item.ratio === 'landscape' || (item.aspectRatio && item.aspectRatio > 1.1);

    const next = images[i + 1];
    const isNextLand = next && (next.orientation === 'landscape' || next.ratio === 'landscape' || (next.aspectRatio && next.aspectRatio > 1.1));

    const third = images[i + 2];
    const isThirdLand = third && (third.orientation === 'landscape' || third.ratio === 'landscape' || (third.aspectRatio && third.aspectRatio > 1.1));

    // Pattern 1: Three consecutive Portraits -> 4 + 4 + 4 = 12 cols (aspect 4/5)
    if (!isLand && next && !isNextLand && third && !isThirdLand) {
      spans.push({ colSpan: 'col-span-1 md:col-span-4', aspect: 'aspect-[4/5]' });
      spans.push({ colSpan: 'col-span-1 md:col-span-4', aspect: 'aspect-[4/5]' });
      spans.push({ colSpan: 'col-span-1 md:col-span-4', aspect: 'aspect-[4/5]' });
      i += 3;
    }
    // Pattern 2: Portrait + Landscape -> 4 + 8 = 12 cols (aspect 4/5 + aspect 3/2)
    else if (!isLand && next && isNextLand) {
      spans.push({ colSpan: 'col-span-1 md:col-span-4', aspect: 'aspect-[4/5]' });
      spans.push({ colSpan: 'col-span-1 md:col-span-8', aspect: 'aspect-[3/2]' });
      i += 2;
    }
    // Pattern 3: Landscape + Portrait -> 8 + 4 = 12 cols (aspect 3/2 + aspect 4/5)
    else if (isLand && next && !isNextLand) {
      spans.push({ colSpan: 'col-span-1 md:col-span-8', aspect: 'aspect-[3/2]' });
      spans.push({ colSpan: 'col-span-1 md:col-span-4', aspect: 'aspect-[4/5]' });
      i += 2;
    }
    // Pattern 4: Two consecutive Landscapes -> 6 + 6 = 12 cols (aspect 3/2)
    else if (isLand && next && isNextLand && (i % 4 === 0)) {
      spans.push({ colSpan: 'col-span-1 md:col-span-6', aspect: 'aspect-[3/2]' });
      spans.push({ colSpan: 'col-span-1 md:col-span-6', aspect: 'aspect-[3/2]' });
      i += 2;
    }
    // Pattern 5: Solo Featured Landscape -> 12 cols full width (aspect 16/9)
    else if (isLand) {
      spans.push({ colSpan: 'col-span-1 md:col-span-12', aspect: 'aspect-[16/9]' });
      i += 1;
    }
    // Pattern 6: Single Portrait -> 4 cols (aspect 4/5)
    else {
      spans.push({ colSpan: 'col-span-1 md:col-span-4', aspect: 'aspect-[4/5]' });
      i += 1;
    }
  }
  return spans;
};

export const EditorialGallery = ({ images = [] }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorHovered, setCursorHovered] = useState(false);

  const spans = useMemo(() => calculateImageSpans(images), [images]);

  const handleOpenLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full bg-white py-12 lg:py-16 relative select-none">
      {/* Floating Custom VIEW Cursor Badge */}
      <CustomCursor isHovered={cursorHovered} text="VIEW" />

      {/* 94vw Viewport Container with 1600px Max-Width */}
      <div className="w-[94vw] max-w-[1600px] mx-auto">
        <div className="editorial-gallery-grid grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 md:gap-5 items-start">
          {images.map((item, idx) => {
            const spanInfo = spans[idx] || { colSpan: 'col-span-1 md:col-span-4', aspect: 'aspect-[4/5]' };

            return (
              <motion.div
                key={item.id || idx}
                initial={{ opacity: 0, y: 50, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.95,
                  delay: (idx % 3) * 0.08,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={`${spanInfo.colSpan} ${spanInfo.aspect} relative group overflow-hidden bg-neutral-900 cursor-pointer w-full rounded-xl`}
                onMouseEnter={() => setCursorHovered(true)}
                onMouseLeave={() => setCursorHovered(false)}
                onClick={() => handleOpenLightbox(idx)}
              >
                {/* Edge-to-Edge High-Fidelity Photograph — Zero Side Black Spaces & Protected Head Alignment */}
                <img
                  src={item.src}
                  alt={item.alt || item.caption || `Photograph ${idx + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-[center_15%] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />

                {/* Minimal Subtle Metadata Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white pointer-events-none">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-300 uppercase block mb-1">
                    {item.categoryName || 'EVENTS'} · FRAME {String(idx + 1).padStart(2, '0')} OF {images.length}
                  </span>
                  <h4 className="text-xs sm:text-sm font-semibold leading-tight">
                    {item.caption || item.alt}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        currentIndex={currentIndex}
        images={images}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};
