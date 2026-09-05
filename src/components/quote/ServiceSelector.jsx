import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { serviceCatalog, formatPrice } from '../../config/quoteConfig';
import { serviceSvgIconMap } from '../../config/iconSystem.jsx';

// ============================================================
// SERVICE CARD — Individual service with 100% transparent SVG icon
// Pure 1:1 Square tile design
// ============================================================

const ServiceCard = ({ service, isSelected, onToggle }) => {
  const [isFlashing, setIsFlashing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const flashTimer = useRef(null);

  const SvgIcon = serviceSvgIconMap[service.id];

  const handleClick = useCallback(() => {
    setIsFlashing(true);
    if (flashTimer.current) clearTimeout(flashTimer.current);
    flashTimer.current = setTimeout(() => setIsFlashing(false), 350);
    onToggle(service.id);
  }, [service.id, onToggle]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative w-full aspect-square flex flex-col items-center justify-center text-center p-3 rounded-2xl cursor-pointer group select-none"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="checkbox"
      aria-checked={isSelected}
      aria-label={`${service.name} — ${formatPrice(service.price)}`}
      tabIndex={0}
      style={{
        background: isSelected
          ? 'linear-gradient(135deg, #fff5f5 0%, #ffe8e8 100%)'
          : '#fafafa',
        border: `2px solid ${isSelected ? '#c0392b' : '#ebebeb'}`,
        boxShadow: isSelected
          ? '0 8px 32px rgba(192,57,43,0.15)'
          : '0 2px 12px rgba(0,0,0,0.04)',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {/* Camera shutter flash overlay */}
      <AnimatePresence>
        {isFlashing && (
          <motion.div
            key="flash"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.75, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="absolute inset-0 bg-white rounded-2xl z-10 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Red checkmark badge */}
      <AnimatePresence>
        {isSelected && (
          <motion.div
            key="check"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 20 }}
            className="absolute top-2.5 right-2.5 w-5 h-5 bg-[#c0392b] rounded-full flex items-center justify-center z-20 shadow-md"
          >
            <motion.svg width="9" height="9" viewBox="0 0 9 9" fill="none">
              <motion.path
                d="M1.5 4.5L3.5 6.5L7.5 2"
                stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 100% Transparent 1:1 Vector SVG Icon */}
      <motion.div
        animate={{
          scale: isSelected ? 1.1 : isHovered ? 1.05 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        className="w-11 h-11 mb-2 flex items-center justify-center aspect-square"
      >
        {SvgIcon ? (
          <SvgIcon />
        ) : (
          <span className="text-3xl" role="img" aria-label={service.name}>📷</span>
        )}
      </motion.div>

      {/* Service name */}
      <motion.p
        animate={{ color: isSelected ? '#c0392b' : '#0f172a' }}
        transition={{ duration: 0.2 }}
        className="text-[12px] sm:text-[13px] font-bold leading-tight mb-1 max-w-[95%]"
      >
        {service.name}
      </motion.p>

      {/* Price */}
      <motion.p
        animate={{
          color: isSelected ? '#c0392b' : '#6b7280',
        }}
        transition={{ duration: 0.2 }}
        className="text-[12px] font-semibold opacity-90"
      >
        {formatPrice(service.price)}
      </motion.p>
    </motion.div>
  );
};

// ============================================================
// SERVICE SELECTOR — Step 3
// ============================================================

export const ServiceSelector = ({
  eventLabel,
  eventEmoji,
  availableServiceIds,
  selectedServiceIds,
  onToggleService,
}) => {
  const services = availableServiceIds
    .map((id) => serviceCatalog[id])
    .filter(Boolean);

  const selectedCount = selectedServiceIds.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 mb-4">
          <span className="text-sm" role="img" aria-hidden="true">{eventEmoji}</span>
          <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">{eventLabel}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-3">
          What Coverage Do <br className="hidden sm:block" />
          <span style={{ color: '#c0392b' }}>You Want?</span>
        </h2>
        <p className="text-sm text-gray-500 max-w-sm mx-auto">
          Tap or click each service to add it to your package. Tap again to remove.
        </p>
      </div>

      {/* Selected count */}
      <div className="flex items-center justify-center gap-3 mb-8">
        {selectedCount === 0 ? (
          <span className="text-xs text-gray-400 italic">No services selected yet</span>
        ) : (
          <motion.span
            key={selectedCount}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-1.5 bg-red-50 text-[#c0392b] text-xs font-bold px-3 py-1 rounded-full border border-red-100"
          >
            {selectedCount} service{selectedCount !== 1 ? 's' : ''} selected
          </motion.span>
        )}
      </div>

      {/* Service cards grid — Pure 1:1 Square Tiles */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto px-2">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.07, duration: 0.4 }}
          >
            <ServiceCard
              service={service}
              isSelected={selectedServiceIds.includes(service.id)}
              onToggle={onToggleService}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
