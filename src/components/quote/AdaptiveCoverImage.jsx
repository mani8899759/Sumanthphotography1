import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * AdaptiveCoverImage Component
 *
 * Automatically detects natural image aspect ratio to present 100% of the photograph
 * without unwanted cropping, stretching, or distortion.
 * Adapts container aspect ratio dynamically to match image dimensions.
 */
export const AdaptiveCoverImage = ({
  src,
  alt = 'Build Your Quote Cover',
  initialAspectRatio = 1024 / 805, // Default natural aspect ratio (1.272:1) for quote cover
  className = '',
  style = {},
  captionLeft = 'PREMIUM WEDDING PHOTOGRAPHY · HYDERABAD',
  captionRight = '📸 500+ WEDDINGS DOCUMENTED',
  motionProps = {},
}) => {
  const [aspectRatio, setAspectRatio] = useState(initialAspectRatio);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.target;
    if (naturalWidth && naturalHeight) {
      setAspectRatio(naturalWidth / naturalHeight);
    }
    setIsLoaded(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden rounded-3xl w-full bg-gray-900 ${className}`}
      style={{
        aspectRatio: `${aspectRatio}`,
        maxHeight: '75vh',
        boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
        ...style,
      }}
      {...motionProps}
    >
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        className={`w-full h-full object-contain object-center transition-all duration-700 hover:scale-[1.01] ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="eager"
        style={{
          filter: 'brightness(0.97) contrast(1.03)',
        }}
      />

      {/* Subtle cinematic gradient overlay at bottom */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 65%, rgba(0,0,0,0.45) 100%)',
        }}
      />

      {/* Overlay Captions */}
      {(captionLeft || captionRight) && (
        <div className="absolute bottom-4 left-5 right-5 sm:bottom-6 sm:left-8 sm:right-8 flex items-end justify-between gap-4">
          {captionLeft && (
            <span className="text-white/90 text-[10px] sm:text-xs font-semibold uppercase tracking-wider drop-shadow-sm">
              {captionLeft}
            </span>
          )}
          {captionRight && (
            <span className="bg-black/40 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              {captionRight}
            </span>
          )}
        </div>
      )}
    </motion.div>
  );
};
