import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { albumConfig, formatPrice } from '../../config/quoteConfig';

// ============================================================
// ALBUM SELECTOR — Step 4
// Yes/No album selection + sheet quantity counter
// ============================================================

export const AlbumSelector = ({
  albumSelected,
  albumSheets,
  onSetAlbum,
  onSetSheets,
}) => {
  const albumTotal = albumSelected ? albumSheets * albumConfig.pricePerSheet : 0;

  const decreaseSheets = () => {
    if (albumSheets > albumConfig.minSheets) {
      onSetSheets(Math.max(albumConfig.minSheets, albumSheets - albumConfig.stepSize));
    }
  };

  const increaseSheets = () => {
    if (albumSheets < albumConfig.maxSheets) {
      onSetSheets(Math.min(albumConfig.maxSheets, albumSheets + albumConfig.stepSize));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <div className="text-5xl mb-4" role="img" aria-label="album">📖</div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-3">
          Would You Like an <span style={{ color: '#c0392b' }}>Album?</span>
        </h2>
        <p className="text-sm text-gray-500 max-w-md mx-auto">
          Premium photo albums — a timeless heirloom for your most treasured memories.
        </p>
      </div>

      {/* Yes / No choice */}
      <div className="flex justify-center gap-4 mb-10">
        {[
          { value: true, label: 'Yes, I want one!', emoji: '✅' },
          { value: false, label: 'No, skip album', emoji: '❌' },
        ].map(({ value, label, emoji }) => (
          <motion.button
            key={String(value)}
            onClick={() => onSetAlbum(value)}
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex flex-col items-center gap-2 px-8 py-6 rounded-2xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c0392b]"
            style={{
              border: `2px solid ${albumSelected === value ? '#c0392b' : '#e5e7eb'}`,
              background: albumSelected === value
                ? 'linear-gradient(135deg, #fff5f5 0%, #ffe8e8 100%)'
                : '#fafafa',
              boxShadow: albumSelected === value
                ? '0 6px 24px rgba(192,57,43,0.14)'
                : '0 2px 8px rgba(0,0,0,0.04)',
              minWidth: '140px',
            }}
            aria-pressed={albumSelected === value}
          >
            <span className="text-2xl" role="img" aria-hidden="true">{emoji}</span>
            <span
              className="text-sm font-bold"
              style={{ color: albumSelected === value ? '#c0392b' : '#1a1a2e' }}
            >
              {label}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Sheet counter — only shown if album selected */}
      <AnimatePresence>
        {albumSelected === true && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="max-w-sm mx-auto text-center">
              {/* Per-sheet price */}
              <p className="text-xs text-gray-500 mb-4 uppercase tracking-wider font-semibold">
                {formatPrice(albumConfig.pricePerSheet)} per sheet
              </p>

              {/* Counter */}
              <div className="flex items-center justify-center gap-6 mb-6">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={decreaseSheets}
                  disabled={albumSheets <= albumConfig.minSheets}
                  className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-xl font-bold text-gray-500 hover:border-[#c0392b] hover:text-[#c0392b] transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c0392b]"
                  aria-label="Decrease album sheets"
                >
                  −
                </motion.button>

                <div className="text-center">
                  <motion.span
                    key={albumSheets}
                    initial={{ scale: 1.3, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="block text-4xl font-extrabold text-[#0f172a] tabular-nums"
                  >
                    {albumSheets}
                  </motion.span>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">sheets</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={increaseSheets}
                  disabled={albumSheets >= albumConfig.maxSheets}
                  className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-xl font-bold text-gray-500 hover:border-[#c0392b] hover:text-[#c0392b] transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c0392b]"
                  aria-label="Increase album sheets"
                >
                  +
                </motion.button>
              </div>

              {/* Album price calculation */}
              <motion.div
                key={albumTotal}
                initial={{ scale: 0.95, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.25 }}
                className="bg-red-50 border border-red-100 rounded-xl p-4 inline-block min-w-[220px]"
              >
                <p className="text-xs text-gray-500 mb-1">
                  {albumSheets} sheets × {formatPrice(albumConfig.pricePerSheet)}
                </p>
                <p className="text-2xl font-extrabold text-[#c0392b]">{formatPrice(albumTotal)}</p>
              </motion.div>

              <p className="text-xs text-gray-400 mt-4">
                Min {albumConfig.minSheets} sheets · Max {albumConfig.maxSheets} sheets
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {albumSelected === false && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm text-gray-400 italic"
        >
          No album added. You can always add one later.
        </motion.p>
      )}
    </motion.div>
  );
};
