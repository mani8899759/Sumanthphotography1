import React from 'react';
import { motion } from 'framer-motion';
import { eventCatalog } from '../../config/quoteConfig';
import { eventSvgIconMap } from '../../config/iconSystem.jsx';

// ============================================================
// EVENT SELECTOR — Step 1
// 100% Transparent Vector SVGs, pure 1:1 square aspect ratio tiles
// ============================================================

const EventTile = ({ event, isSelected, onSelect }) => {
  const SvgIcon = eventSvgIconMap[event.id];

  return (
    <motion.button
      onClick={() => onSelect(event)}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative w-full aspect-square flex flex-col items-center justify-center text-center p-3 rounded-2xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c0392b] focus-visible:ring-offset-2 group"
      style={{
        background: isSelected
          ? 'linear-gradient(135deg, #fff5f5 0%, #ffe8e8 100%)'
          : '#fafafa',
        border: `2px solid ${isSelected ? '#c0392b' : '#ebebeb'}`,
        boxShadow: isSelected
          ? '0 8px 32px rgba(192,57,43,0.15), 0 2px 8px rgba(192,57,43,0.08)'
          : '0 2px 12px rgba(0,0,0,0.04)',
      }}
      aria-pressed={isSelected}
      aria-label={`Select ${event.name}`}
    >
      {/* Selection checkmark — top right */}
      {isSelected && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          className="absolute top-2.5 right-2.5 w-5 h-5 bg-[#c0392b] rounded-full flex items-center justify-center shadow-md z-10"
        >
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
            <path d="M1.5 4.5L3.5 6.5L7.5 2" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      )}

      {/* 100% Transparent 1:1 Vector Icon */}
      <motion.div
        animate={{ scale: isSelected ? 1.1 : 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="w-11 h-11 mb-2.5 flex items-center justify-center aspect-square"
      >
        {SvgIcon ? (
          <SvgIcon />
        ) : (
          <div className="w-10 h-10 flex items-center justify-center text-2xl" aria-hidden="true">
            {event.emoji}
          </div>
        )}
      </motion.div>

      {/* Event name — stacked cleanly */}
      <span
        className="text-[12px] sm:text-[13px] font-bold leading-snug block max-w-[90%]"
        style={{ color: isSelected ? '#c0392b' : '#1a1a2e' }}
      >
        {event.id === 'wedding' ? (
          <>
            <span className="block font-extrabold text-[13px] sm:text-[14px]">Wedding</span>
            <span className="block text-[11px] sm:text-[12px] opacity-80 font-semibold mt-0.5">& Pre-Wedding</span>
          </>
        ) : (
          event.name
        )}
      </span>
    </motion.button>
  );
};

export const EventSelector = ({ selectedEvent, onSelectEvent }) => {
  const events = Object.values(eventCatalog);

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
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-3">
          What Are You <span style={{ color: '#c0392b' }}>Celebrating?</span>
        </h2>
        <p className="text-sm text-gray-500 max-w-md mx-auto">
          Select the type of event you'd like us to photograph and we'll build your perfect package.
        </p>
      </div>

      {/* Event Grid — 1:1 Pure Square Tiles */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
          >
            <EventTile
              event={event}
              isSelected={selectedEvent?.id === event.id}
              onSelect={onSelectEvent}
            />
          </motion.div>
        ))}
      </div>

      {selectedEvent && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-sm text-gray-500 mt-6"
        >
          Great choice! Click <strong className="text-[#c0392b]">Next Step</strong> to continue.
        </motion.p>
      )}
    </motion.div>
  );
};
