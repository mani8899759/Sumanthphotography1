import React from 'react';
import { motion } from 'framer-motion';

// ============================================================
// STEP NAVIGATION — Previous / Next buttons
// ============================================================

export const StepNavigation = ({
  onNext,
  onPrev,
  canGoNext,
  canGoPrev,
  nextLabel = 'Next Step →',
  prevLabel = '← Previous',
  isLastStep = false,
}) => {
  return (
    <div className="flex items-center justify-between pt-10 mt-2 border-t border-gray-100">
      {/* Previous */}
      <div>
        {canGoPrev ? (
          <motion.button
            onClick={onPrev}
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-[#0f172a] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c0392b] rounded px-2 py-1"
            aria-label="Go to previous step"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {prevLabel}
          </motion.button>
        ) : (
          <div /> // Spacer
        )}
      </div>

      {/* Next */}
      <motion.button
        onClick={onNext}
        disabled={!canGoNext}
        whileHover={canGoNext ? { scale: 1.02, y: -1 } : {}}
        whileTap={canGoNext ? { scale: 0.98 } : {}}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-extrabold text-sm uppercase tracking-wider text-white cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c0392b] focus-visible:ring-offset-2"
        style={{
          background: canGoNext
            ? 'linear-gradient(135deg, #c0392b 0%, #a93226 100%)'
            : '#d1d5db',
          boxShadow: canGoNext ? '0 4px 16px rgba(192,57,43,0.3)' : 'none',
        }}
        aria-label={canGoNext ? nextLabel : 'Complete required selections to continue'}
        aria-disabled={!canGoNext}
      >
        {nextLabel}
        {!isLastStep && (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M4 2L9 7L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </motion.button>
    </div>
  );
};
