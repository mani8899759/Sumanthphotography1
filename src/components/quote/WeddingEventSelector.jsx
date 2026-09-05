import React from 'react';
import { motion } from 'framer-motion';
import { weddingSubEvents } from '../../config/quoteConfig';
import { weddingSubEventIconMap } from '../../config/iconSystem.jsx';

// ============================================================
// WEDDING EVENT SELECTOR — Step 2 (Wedding only)
// 100% Transparent Vector SVGs, pure 1:1 square tiles
// ============================================================

const WeddingEventTile = ({ event, isSelected, onToggle }) => {
  const IconComponent = weddingSubEventIconMap[event.id];

  return (
    <motion.button
      onClick={() => onToggle(event.id)}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative w-full aspect-square flex flex-col items-center justify-center text-center p-3 rounded-2xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c0392b] focus-visible:ring-offset-2 group"
      style={{
        background: isSelected
          ? 'linear-gradient(135deg, #fff5f5 0%, #ffe8e8 100%)'
          : '#fafafa',
        border: `2px solid ${isSelected ? '#c0392b' : '#e8e8e8'}`,
        boxShadow: isSelected
          ? '0 6px 24px rgba(192,57,43,0.15)'
          : '0 2px 8px rgba(0,0,0,0.04)',
      }}
      aria-pressed={isSelected}
      aria-label={`${isSelected ? 'Deselect' : 'Select'} ${event.name}`}
    >
      {/* Checkmark badge — top right */}
      <div
        className="absolute top-2.5 right-2.5 w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 transition-colors duration-200 z-10"
        style={{
          borderColor: isSelected ? '#c0392b' : '#cbd5e1',
          backgroundColor: isSelected ? '#c0392b' : 'transparent',
        }}
      >
        {isSelected && (
          <motion.svg
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500, damping: 20 }}
            width="9" height="9" viewBox="0 0 10 10" fill="none"
          >
            <path d="M2 5L4 7.5L8.5 2" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </motion.svg>
        )}
      </div>

      {/* 100% Transparent 1:1 Vector Icon */}
      <motion.div
        animate={{ scale: isSelected ? 1.1 : 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="w-10 h-10 mb-2 flex items-center justify-center aspect-square"
      >
        {IconComponent ? <IconComponent /> : null}
      </motion.div>

      {/* Sub-event name */}
      <span
        className="text-[11px] sm:text-[12px] font-bold leading-tight block max-w-[95%] truncate"
        style={{ color: isSelected ? '#c0392b' : '#1a1a2e' }}
      >
        {event.name}
      </span>

      {/* Available service count tag */}
      <span className="text-[9px] text-gray-400 mt-1 font-medium">
        {event.availableServices.length} services
      </span>
    </motion.button>
  );
};

export const WeddingEventSelector = ({ selectedWeddingEvents, onToggleWeddingEvent }) => {
  const events = Object.values(weddingSubEvents);
  const selectedCount = selectedWeddingEvents.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      {/* Heading */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-1.5 mb-3">
          <span className="text-xs font-bold text-[#c0392b] uppercase tracking-wider">Wedding Package</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-3">
          Which Wedding Events <br className="hidden sm:block" />
          <span style={{ color: '#c0392b' }}>Do You Need?</span>
        </h2>
        <p className="text-sm text-gray-500 max-w-lg mx-auto">
          Select all the wedding events you'd like photographed. You'll choose specific services for each one in the next step.
        </p>
      </div>

      {/* Selection count indicator */}
      {selectedCount > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-5"
        >
          <span className="inline-flex items-center gap-1.5 bg-[#c0392b] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 5L4 7.5L8 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {selectedCount} event{selectedCount !== 1 ? 's' : ''} selected
          </span>
        </motion.div>
      )}

      {/* Events Grid — 1:1 Pure Square Tiles (5 columns on desktop, 2-3 on mobile) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-4xl mx-auto">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.03, duration: 0.3 }}
          >
            <WeddingEventTile
              event={event}
              isSelected={selectedWeddingEvents.includes(event.id)}
              onToggle={onToggleWeddingEvent}
            />
          </motion.div>
        ))}
      </div>

      {selectedCount === 0 && (
        <p className="text-center text-xs text-gray-400 mt-6">
          Select at least one event to continue.
        </p>
      )}
    </motion.div>
  );
};
