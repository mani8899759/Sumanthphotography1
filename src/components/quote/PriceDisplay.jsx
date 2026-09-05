import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { formatPrice } from '../../config/quoteConfig';

// ============================================================
// LIVE PRICE DISPLAY
// Sticky estimated total that animates when price changes
// ============================================================

// Animated number counter
const AnimatedPrice = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [direction, setDirection] = useState(1);
  const prevValue = useRef(value);

  useEffect(() => {
    setDirection(value >= prevValue.current ? 1 : -1);
    prevValue.current = value;

    // Animate counting
    const start = displayValue;
    const end = value;
    const diff = end - start;
    if (diff === 0) return;

    const duration = Math.min(600, Math.abs(diff) / 50 + 200);
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + diff * eased);
      setDisplayValue(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <motion.span
      key={value}
      initial={{ opacity: 0.5, y: direction * 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="tabular-nums"
    >
      {formatPrice(displayValue)}
    </motion.span>
  );
};

export const PriceDisplay = ({ total, isSticky = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${isSticky ? 'sticky top-20 z-40' : ''} flex justify-center`}
    >
      <div className="bg-[#0f172a] text-white rounded-2xl px-8 py-5 shadow-2xl flex items-center gap-6 min-w-[280px]">
        <div className="flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-1">
            Estimated Quote
          </p>
          <div className="text-2xl font-extrabold tracking-tight leading-none">
            <AnimatedPrice value={total} />
          </div>
          {total > 0 && (
            <p className="text-[10px] text-gray-500 mt-1">+ GST as applicable</p>
          )}
        </div>
        {total > 0 && (
          <motion.div
            animate={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl"
          >
            📸
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
