import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STEP_LABELS } from '../../config/quoteConfig';

// ============================================================
// PROGRESS INDICATOR
// Minimal dot/label step indicator with red accent for active
// ============================================================

const stepFlow = [
  { label: 'Event', icon: '📅' },
  { label: 'Services', icon: '📷' },
  { label: 'Album', icon: '📖' },
  { label: 'Review', icon: '✅' },
  { label: 'Your Info', icon: '📝' },
];

export const ProgressIndicator = ({ currentStep, isWedding }) => {
  // Map internal steps to display steps
  // Steps: 0=EVENT, 1=WEDDING_EVENTS(if wedding)/SERVICES, 2=SERVICES, 3=ALBUM, 4=REVIEW, 5=DETAILS
  const getDisplayStep = () => {
    if (currentStep === 0) return 0;
    if (currentStep === 1 && isWedding) return 1; // wedding sub-events = still "Services"
    if (currentStep === 1 || currentStep === 2) return 1;
    if (currentStep === 3) return 2;
    if (currentStep === 4) return 3;
    if (currentStep === 5) return 4;
    return 0;
  };

  const displayStep = getDisplayStep();

  return (
    <div className="flex items-center justify-center gap-0 py-8 select-none" role="navigation" aria-label="Quote builder progress">
      {stepFlow.map((step, index) => {
        const isCompleted = index < displayStep;
        const isActive = index === displayStep;

        return (
          <React.Fragment key={step.label}>
            {/* Step dot + label */}
            <div className="flex flex-col items-center gap-1.5">
              <motion.div
                animate={{
                  scale: isActive ? 1.2 : 1,
                  backgroundColor: isCompleted ? '#c0392b' : isActive ? '#c0392b' : '#e5e7eb',
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="w-3 h-3 rounded-full relative"
              >
                {isCompleted && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 4L3 5.5L6.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
              <span
                className="text-[10px] font-semibold uppercase tracking-wider whitespace-nowrap"
                style={{ color: isActive ? '#c0392b' : isCompleted ? '#1a1a2e' : '#9ca3af' }}
              >
                {step.label}
              </span>
            </div>

            {/* Connector line */}
            {index < stepFlow.length - 1 && (
              <div className="flex-1 h-px mx-2 mb-5 relative" style={{ minWidth: '20px', maxWidth: '60px' }}>
                <div className="absolute inset-0 bg-gray-200 rounded" />
                <motion.div
                  className="absolute inset-y-0 left-0 rounded"
                  style={{ backgroundColor: '#c0392b' }}
                  animate={{ width: index < displayStep ? '100%' : '0%' }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
