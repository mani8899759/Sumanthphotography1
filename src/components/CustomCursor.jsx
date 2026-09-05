import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = ({ isHovered, text = "VIEW" }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch capability to automatically disable custom cursor on mobile
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouchDevice || !isHovered) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
      className="fixed z-[90] -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-white/90 text-black shadow-2xl backdrop-blur-sm border border-black/10"
    >
      <span className="text-[10px] font-extrabold uppercase tracking-widest text-black">
        {text}
      </span>
    </motion.div>
  );
};
