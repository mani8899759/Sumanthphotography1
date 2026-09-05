import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../config/quoteConfig';

// ============================================================
// SUCCESS SCREEN — Step 7
// Confirmation after form submission
// ============================================================

export const SuccessScreen = ({ totalPrice, customerName }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-xl mx-auto text-center py-12"
    >
      {/* Animated heart */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.3, 1] }}
        transition={{ duration: 0.7, delay: 0.2, times: [0, 0.6, 1], ease: 'easeOut' }}
        className="text-6xl mb-6 block"
        role="img"
        aria-label="heart"
      >
        ❤️
      </motion.div>

      {/* Checkmark circle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5, type: 'spring', stiffness: 300 }}
        className="w-20 h-20 bg-green-50 border-2 border-green-200 rounded-full flex items-center justify-center mx-auto mb-6"
      >
        <motion.svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.path
            d="M8 18L15 25.5L28 10"
            stroke="#16a34a"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.65, duration: 0.5, ease: 'easeOut' }}
          />
        </motion.svg>
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-3"
      >
        Your Quote Is Ready ❤️
      </motion.h2>

      {/* Personalized message */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.45 }}
        className="text-sm text-gray-500 max-w-sm mx-auto mb-8 leading-relaxed"
      >
        {customerName ? `Thank you, ${customerName.split(' ')[0]}! ` : 'Thank you! '}
        We've received your requirements and will get in touch with you shortly to discuss your photography package.
      </motion.p>

      {/* Quote total */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.45 }}
        className="inline-block rounded-2xl px-8 py-5 mb-8"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-1">
          Estimated Photography Quote
        </p>
        <p className="text-3xl font-extrabold text-white tabular-nums">{formatPrice(totalPrice)}</p>
        <p className="text-[10px] text-gray-500 mt-1">+ GST as applicable</p>
      </motion.div>

      {/* What happens next */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.45 }}
        className="bg-gray-50 border border-gray-100 rounded-2xl p-5 mb-8 text-left max-w-sm mx-auto"
      >
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">What Happens Next</h3>
        <div className="space-y-2.5">
          {[
            { step: '01', text: 'We review your quote request within 24 hours.' },
            { step: '02', text: 'Our team contacts you to confirm availability.' },
            { step: '03', text: 'We finalize your custom photography package.' },
            { step: '04', text: 'Your special date is officially locked in!' },
          ].map(({ step, text }) => (
            <div key={step} className="flex items-start gap-3">
              <span className="text-[10px] font-extrabold text-[#c0392b] w-5 flex-shrink-0 mt-0.5">{step}</span>
              <span className="text-xs text-gray-600 leading-relaxed">{text}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.45 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0f172a] text-white text-sm font-bold hover:bg-[#1e293b] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c0392b]"
        >
          ← Back to Home
        </Link>

        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-200 text-[#0f172a] text-sm font-bold hover:border-[#c0392b] hover:text-[#c0392b] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c0392b]"
          aria-label="Print quote (PDF generation coming soon)"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 6 2 18 2 18 9" />
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <rect x="6" y="14" width="12" height="8" />
          </svg>
          Download Quote
        </button>
      </motion.div>
    </motion.div>
  );
};
