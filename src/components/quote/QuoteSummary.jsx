import React from 'react';
import { motion } from 'framer-motion';
import {
  serviceCatalog,
  albumConfig,
  formatPrice,
  eventCatalog,
  weddingSubEvents,
} from '../../config/quoteConfig';

// ============================================================
// QUOTE SUMMARY — Step 5 (Review)
// Clean breakdown of all selections before final submission
// ============================================================

const SectionBlock = ({ title, emoji, onEdit, children }) => (
  <div className="border border-gray-100 rounded-2xl p-6 mb-4 bg-gray-50/60">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <span className="text-lg" role="img" aria-hidden="true">{emoji}</span>
        <h3 className="text-sm font-bold text-[#0f172a] uppercase tracking-wider">{title}</h3>
      </div>
      <button
        onClick={onEdit}
        className="text-xs font-semibold text-[#c0392b] hover:text-[#a93226] underline underline-offset-2 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c0392b] rounded"
      >
        Edit
      </button>
    </div>
    {children}
  </div>
);

const ServiceLine = ({ service }) => (
  <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
    <div className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-[#c0392b] flex-shrink-0" />
      <span className="text-sm text-gray-700">{service.name}</span>
    </div>
    <span className="text-sm font-semibold text-[#0f172a] tabular-nums">{formatPrice(service.price)}</span>
  </div>
);

export const QuoteSummary = ({
  selectedEvent,
  selectedWeddingEvents,
  selectedServices,
  albumSelected,
  albumSheets,
  totalPrice,
  onEditStep,
}) => {
  const isWedding = selectedEvent?.isWedding;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-2xl mx-auto"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-1.5 mb-4">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6L4.5 8.5L10 3" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-xs font-semibold text-green-700 uppercase tracking-wider">Almost Done!</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-3">
          Your Photography <span style={{ color: '#c0392b' }}>Quote</span>
        </h2>
        <p className="text-sm text-gray-500">Review your selections below before we save your date.</p>
      </div>

      {/* Event summary */}
      <SectionBlock
        title={selectedEvent?.name || 'Event'}
        emoji={selectedEvent?.emoji || '📅'}
        onEdit={() => onEditStep(0)}
      >
        {isWedding ? (
          // Wedding — show per-sub-event services
          selectedWeddingEvents.length > 0 ? (
            <div className="space-y-5">
              {selectedWeddingEvents.map((eventId) => {
                const subEvent = weddingSubEvents[eventId];
                const services = (selectedServices[eventId] || [])
                  .map((sid) => serviceCatalog[sid])
                  .filter(Boolean);

                return (
                  <div key={eventId}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-base" role="img" aria-hidden="true">{subEvent?.emoji}</span>
                      <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">{subEvent?.name}</span>
                    </div>
                    {services.length === 0 ? (
                      <p className="text-xs text-gray-400 italic ml-6">No services selected for this event.</p>
                    ) : (
                      <div className="ml-6">
                        {services.map((s) => <ServiceLine key={s.id} service={s} />)}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-gray-400 italic">No wedding events selected.</p>
          )
        ) : (
          // Non-wedding — single event services
          (() => {
            const services = (selectedServices[selectedEvent?.id] || [])
              .map((sid) => serviceCatalog[sid])
              .filter(Boolean);
            return services.length === 0 ? (
              <p className="text-sm text-gray-400 italic">No services selected.</p>
            ) : (
              services.map((s) => <ServiceLine key={s.id} service={s} />)
            );
          })()
        )}
      </SectionBlock>

      {/* Album section */}
      {albumSelected !== null && (
        <SectionBlock title="Album" emoji="📖" onEdit={() => onEditStep(3)}>
          {albumSelected ? (
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">{albumSheets} sheets × {formatPrice(albumConfig.pricePerSheet)}</span>
              <span className="text-sm font-semibold text-[#0f172a] tabular-nums">
                {formatPrice(albumSheets * albumConfig.pricePerSheet)}
              </span>
            </div>
          ) : (
            <p className="text-sm text-gray-400 italic">No album added.</p>
          )}
        </SectionBlock>
      )}

      {/* Total */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="rounded-2xl p-6 mt-6 text-center"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2">Estimated Total</p>
        <p className="text-4xl font-extrabold text-white tabular-nums">{formatPrice(totalPrice)}</p>
        <p className="text-xs text-gray-500 mt-2">+ GST as applicable · Subject to final confirmation</p>
      </motion.div>
    </motion.div>
  );
};
