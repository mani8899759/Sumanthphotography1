import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LightboxModal = ({ isOpen, currentIndex, images, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImg = images[currentIndex] || images[0];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 select-none"
        onClick={onClose}
      >
        {/* TOP BAR */}
        <div className="w-full flex items-center justify-between z-10 text-white" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tracking-widest text-neutral-400">
              {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>
            {currentImg.caption && (
              <span className="hidden sm:inline-block text-xs font-medium text-neutral-300 border-l border-neutral-800 pl-3">
                {currentImg.caption}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            ✕
          </button>
        </div>

        {/* MAIN IMAGE CONTAINER */}
        <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
          <motion.img
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            src={currentImg.src}
            alt={currentImg.alt || 'Portfolio Photograph'}
            className="max-h-[82vh] max-w-[92vw] object-contain shadow-2xl select-none"
          />

          {/* PREV / NEXT NAVIGATION CONTROLS */}
          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-6 w-12 h-12 bg-black/60 hover:bg-black border border-neutral-800 flex items-center justify-center text-white text-lg transition-all hover:scale-110 cursor-pointer"
            aria-label="Previous Image"
          >
            ←
          </button>

          <button
            onClick={onNext}
            className="absolute right-2 sm:right-6 w-12 h-12 bg-black/60 hover:bg-black border border-neutral-800 flex items-center justify-center text-white text-lg transition-all hover:scale-110 cursor-pointer"
            aria-label="Next Image"
          >
            →
          </button>
        </div>

        {/* BOTTOM CAPTION BAR (MOBILE) */}
        {currentImg.caption && (
          <div className="sm:hidden text-center text-xs text-neutral-400 py-1" onClick={(e) => e.stopPropagation()}>
            {currentImg.caption}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
