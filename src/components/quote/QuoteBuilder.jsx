import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  STEPS,
  eventCatalog,
  weddingSubEvents,
  calculateTotal,
  albumConfig,
} from '../../config/quoteConfig';

import { ProgressIndicator } from './ProgressIndicator';
import { PriceDisplay } from './PriceDisplay';
import { EventSelector } from './EventSelector';
import { WeddingEventSelector } from './WeddingEventSelector';
import { ServiceSelector } from './ServiceSelector';
import { AlbumSelector } from './AlbumSelector';
import { QuoteSummary } from './QuoteSummary';
import { CustomerForm } from './CustomerForm';
import { SuccessScreen } from './SuccessScreen';
import { StepNavigation } from './StepNavigation';

// ============================================================
// QUOTE BUILDER — Main Orchestrator
// Manages all state and step transitions
// ============================================================

// Slide animation variants for step transitions
const stepVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 60 : -60,
    opacity: 0,
  }),
};

const initialState = {
  currentStep: STEPS.EVENT,
  direction: 1,
  selectedEvent: null,
  selectedWeddingEvents: [],       // ['engagement', 'sangeeth', ...]
  currentWeddingEventIndex: 0,     // which sub-event we're picking services for
  selectedServices: {},            // { eventKey: ['traditionalPhoto', ...] }
  albumSelected: null,
  albumSheets: albumConfig.defaultSheets,
  submittedCustomerData: null,
};

export const QuoteBuilder = () => {
  const [state, setState] = useState(initialState);

  const totalPrice = calculateTotal(
    state.selectedServices,
    state.albumSelected,
    state.albumSheets
  );

  // ---- Step helpers ----

  const isWedding = state.selectedEvent?.isWedding;

  // Get current step context (for wedding: which sub-event are we on)
  const getCurrentWeddingEvent = () => {
    if (!isWedding) return null;
    const id = state.selectedWeddingEvents[state.currentWeddingEventIndex];
    return id ? weddingSubEvents[id] : null;
  };

  // ---- State updaters ----

  const setStep = useCallback((step, direction = 1) => {
    setState((prev) => ({ ...prev, currentStep: step, direction }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSelectEvent = useCallback((event) => {
    setState((prev) => ({
      ...prev,
      selectedEvent: event,
      // Clear wedding selections if event changed
      selectedWeddingEvents: event.id !== prev.selectedEvent?.id ? [] : prev.selectedWeddingEvents,
      selectedServices: event.id !== prev.selectedEvent?.id ? {} : prev.selectedServices,
      currentWeddingEventIndex: 0,
    }));
  }, []);

  const handleToggleWeddingEvent = useCallback((eventId) => {
    setState((prev) => {
      const exists = prev.selectedWeddingEvents.includes(eventId);
      const newList = exists
        ? prev.selectedWeddingEvents.filter((e) => e !== eventId)
        : [...prev.selectedWeddingEvents, eventId];

      // Remove services for deselected event
      const newServices = { ...prev.selectedServices };
      if (exists) delete newServices[eventId];

      return {
        ...prev,
        selectedWeddingEvents: newList,
        selectedServices: newServices,
      };
    });
  }, []);

  const handleToggleService = useCallback((serviceId) => {
    const eventKey = isWedding
      ? state.selectedWeddingEvents[state.currentWeddingEventIndex]
      : state.selectedEvent?.id;

    if (!eventKey) return;

    setState((prev) => {
      const current = prev.selectedServices[eventKey] || [];
      const newServices = current.includes(serviceId)
        ? current.filter((s) => s !== serviceId)
        : [...current, serviceId];
      return {
        ...prev,
        selectedServices: {
          ...prev.selectedServices,
          [eventKey]: newServices,
        },
      };
    });
  }, [isWedding, state.selectedWeddingEvents, state.currentWeddingEventIndex, state.selectedEvent]);

  const handleSetAlbum = useCallback((value) => {
    setState((prev) => ({ ...prev, albumSelected: value }));
  }, []);

  const handleSetSheets = useCallback((count) => {
    setState((prev) => ({ ...prev, albumSheets: count }));
  }, []);

  const handleSubmitForm = useCallback((customerData) => {
    setState((prev) => ({
      ...prev,
      currentStep: STEPS.SUCCESS,
      direction: 1,
      submittedCustomerData: customerData,
    }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleEditStep = useCallback((targetStep) => {
    setState((prev) => ({ ...prev, currentStep: targetStep, direction: -1 }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // ---- Navigation logic ----

  const handleNext = useCallback(() => {
    const { currentStep } = state;

    if (currentStep === STEPS.EVENT) {
      if (!state.selectedEvent) return;
      if (isWedding) {
        setStep(STEPS.WEDDING_EVENTS, 1);
      } else {
        setStep(STEPS.SERVICES, 1);
      }
      return;
    }

    if (currentStep === STEPS.WEDDING_EVENTS) {
      if (state.selectedWeddingEvents.length === 0) return;
      setState((prev) => ({ ...prev, currentStep: STEPS.SERVICES, currentWeddingEventIndex: 0, direction: 1 }));
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentStep === STEPS.SERVICES) {
      if (isWedding) {
        const nextIndex = state.currentWeddingEventIndex + 1;
        if (nextIndex < state.selectedWeddingEvents.length) {
          // More wedding sub-events to configure
          setState((prev) => ({ ...prev, currentWeddingEventIndex: nextIndex }));
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      setStep(STEPS.ALBUM, 1);
      return;
    }

    if (currentStep === STEPS.ALBUM) {
      if (state.albumSelected === null) return;
      setStep(STEPS.REVIEW, 1);
      return;
    }

    if (currentStep === STEPS.REVIEW) {
      setStep(STEPS.DETAILS, 1);
      return;
    }
  }, [state, isWedding, setStep]);

  const handlePrev = useCallback(() => {
    const { currentStep } = state;

    if (currentStep === STEPS.WEDDING_EVENTS) {
      setStep(STEPS.EVENT, -1);
      return;
    }

    if (currentStep === STEPS.SERVICES) {
      if (isWedding) {
        if (state.currentWeddingEventIndex > 0) {
          setState((prev) => ({
            ...prev,
            currentWeddingEventIndex: prev.currentWeddingEventIndex - 1,
          }));
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        setStep(STEPS.WEDDING_EVENTS, -1);
        return;
      }
      setStep(STEPS.EVENT, -1);
      return;
    }

    if (currentStep === STEPS.ALBUM) {
      setStep(STEPS.SERVICES, -1);
      // Reset to first wedding sub-event when going back to services
      if (isWedding) {
        setState((prev) => ({
          ...prev,
          currentStep: STEPS.SERVICES,
          currentWeddingEventIndex: prev.selectedWeddingEvents.length - 1,
          direction: -1,
        }));
      }
      return;
    }

    if (currentStep === STEPS.REVIEW) {
      setStep(STEPS.ALBUM, -1);
      return;
    }

    if (currentStep === STEPS.DETAILS) {
      setStep(STEPS.REVIEW, -1);
      return;
    }
  }, [state, isWedding, setStep]);

  // ---- Can navigate? ----

  const canGoNext = (() => {
    const { currentStep } = state;
    if (currentStep === STEPS.EVENT) return !!state.selectedEvent;
    if (currentStep === STEPS.WEDDING_EVENTS) return state.selectedWeddingEvents.length > 0;
    if (currentStep === STEPS.SERVICES) return true; // services optional per event
    if (currentStep === STEPS.ALBUM) return state.albumSelected !== null;
    if (currentStep === STEPS.REVIEW) return true;
    return false;
  })();

  const canGoPrev = state.currentStep > STEPS.EVENT && state.currentStep !== STEPS.SUCCESS;

  // ---- Next button label ----

  const getNextLabel = () => {
    const { currentStep } = state;
    if (currentStep === STEPS.SERVICES && isWedding) {
      const nextIndex = state.currentWeddingEventIndex + 1;
      if (nextIndex < state.selectedWeddingEvents.length) {
        const nextEvent = weddingSubEvents[state.selectedWeddingEvents[nextIndex]];
        return `Next: ${nextEvent?.name || 'Next Event'} →`;
      }
      return 'Continue to Album →';
    }
    if (currentStep === STEPS.ALBUM) return 'Review My Quote →';
    if (currentStep === STEPS.REVIEW) return 'Enter My Details →';
    return 'Next Step →';
  };

  // ---- Render current step content ----

  const currentWeddingEvent = getCurrentWeddingEvent();

  const renderStep = () => {
    const { currentStep } = state;

    if (currentStep === STEPS.SUCCESS) {
      return (
        <SuccessScreen
          totalPrice={totalPrice}
          customerName={state.submittedCustomerData?.name}
        />
      );
    }

    return (
      <>
        {/* Step content */}
        {currentStep === STEPS.EVENT && (
          <EventSelector
            selectedEvent={state.selectedEvent}
            onSelectEvent={handleSelectEvent}
          />
        )}

        {currentStep === STEPS.WEDDING_EVENTS && (
          <WeddingEventSelector
            selectedWeddingEvents={state.selectedWeddingEvents}
            onToggleWeddingEvent={handleToggleWeddingEvent}
          />
        )}

        {currentStep === STEPS.SERVICES && (
          isWedding && currentWeddingEvent ? (
            <ServiceSelector
              eventLabel={currentWeddingEvent.name}
              eventEmoji={currentWeddingEvent.emoji}
              availableServiceIds={currentWeddingEvent.availableServices}
              selectedServiceIds={state.selectedServices[currentWeddingEvent.id] || []}
              onToggleService={handleToggleService}
            />
          ) : !isWedding && state.selectedEvent ? (
            <ServiceSelector
              eventLabel={state.selectedEvent.name}
              eventEmoji={state.selectedEvent.emoji}
              availableServiceIds={state.selectedEvent.availableServices || []}
              selectedServiceIds={state.selectedServices[state.selectedEvent.id] || []}
              onToggleService={handleToggleService}
            />
          ) : null
        )}

        {currentStep === STEPS.ALBUM && (
          <AlbumSelector
            albumSelected={state.albumSelected}
            albumSheets={state.albumSheets}
            onSetAlbum={handleSetAlbum}
            onSetSheets={handleSetSheets}
          />
        )}

        {currentStep === STEPS.REVIEW && (
          <QuoteSummary
            selectedEvent={state.selectedEvent}
            selectedWeddingEvents={state.selectedWeddingEvents}
            selectedServices={state.selectedServices}
            albumSelected={state.albumSelected}
            albumSheets={state.albumSheets}
            totalPrice={totalPrice}
            onEditStep={handleEditStep}
          />
        )}

        {currentStep === STEPS.DETAILS && (
          <CustomerForm
            onSubmit={handleSubmitForm}
            totalPrice={totalPrice}
          />
        )}

        {/* Navigation — not shown on DETAILS (form has its own submit) or SUCCESS */}
        {currentStep !== STEPS.DETAILS && currentStep !== STEPS.SUCCESS && (
          <StepNavigation
            onNext={handleNext}
            onPrev={handlePrev}
            canGoNext={canGoNext}
            canGoPrev={canGoPrev}
            nextLabel={getNextLabel()}
          />
        )}
        {currentStep === STEPS.DETAILS && (
          <StepNavigation
            onNext={() => {}}
            onPrev={handlePrev}
            canGoNext={false}
            canGoPrev={canGoPrev}
            nextLabel=""
            isLastStep
          />
        )}
      </>
    );
  };

  // ---- Wedding sub-event progress (for services step) ----

  const showWeddingSubProgress = state.currentStep === STEPS.SERVICES && isWedding && state.selectedWeddingEvents.length > 1;

  return (
    <div className="w-full">
      {/* Progress indicator — not shown on SUCCESS */}
      {state.currentStep !== STEPS.SUCCESS && (
        <ProgressIndicator
          currentStep={state.currentStep}
          isWedding={isWedding}
        />
      )}

      {/* Wedding sub-event mini progress */}
      {showWeddingSubProgress && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center gap-1.5 mb-6"
        >
          {state.selectedWeddingEvents.map((id, idx) => {
            const ev = weddingSubEvents[id];
            const isActive = idx === state.currentWeddingEventIndex;
            const isDone = idx < state.currentWeddingEventIndex;
            return (
              <div
                key={id}
                className="flex items-center gap-1.5"
                title={ev?.name}
              >
                <div
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: isDone ? '#c0392b' : isActive ? '#c0392b' : '#e5e7eb',
                    transform: isActive ? 'scale(1.4)' : 'scale(1)',
                  }}
                />
                {idx < state.selectedWeddingEvents.length - 1 && (
                  <div className="w-4 h-px bg-gray-200" />
                )}
              </div>
            );
          })}
          <span className="text-xs text-gray-400 ml-2">
            {state.currentWeddingEventIndex + 1} of {state.selectedWeddingEvents.length}
          </span>
        </motion.div>
      )}

      {/* Price display — not shown on SUCCESS */}
      {state.currentStep !== STEPS.SUCCESS && state.currentStep !== STEPS.EVENT && (
        <div className="mb-8">
          <PriceDisplay total={totalPrice} isSticky={false} />
        </div>
      )}

      {/* Main step content with slide transition */}
      <AnimatePresence mode="wait" custom={state.direction}>
        <motion.div
          key={`${state.currentStep}-${state.currentWeddingEventIndex}`}
          custom={state.direction}
          variants={stepVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
