import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { siteContent } from '../config/siteContent';
import { ScrollReveal, ImageReveal } from '../components/ScrollReveal';
import { PageTransition } from '../components/PageTransition';
import { LightboxModal } from '../components/LightboxModal';

const AwardShowcaseSlider = ({ awards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (isPaused || !awards || awards.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % awards.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, awards]);

  if (!awards || awards.length === 0) return null;

  const current = awards[currentIndex];

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? awards.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % awards.length);
  };

  return (
    <>
      <div 
        className="w-full h-full relative group overflow-hidden bg-neutral-900 cursor-pointer select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onClick={() => setLightboxOpen(true)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={current.id || currentIndex}
            src={current.src}
            alt={current.title}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </AnimatePresence>

        {/* Subtle gradient overlay for typography readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

        {/* Top-right Counter Pill */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1 text-white text-[10px] sm:text-[11px] font-mono tracking-widest uppercase rounded-sm border border-white/10">
          <span>{String(currentIndex + 1).padStart(2, '0')} / {String(awards.length).padStart(2, '0')}</span>
          <span className="text-neutral-400">· RECOGNITION</span>
        </div>

        {/* Bottom-left Award Caption Badge */}
        <div className="absolute bottom-4 left-4 z-10 max-w-[75%] bg-black/80 backdrop-blur-md px-3.5 py-2 border-l-2 border-white">
          <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-neutral-300 uppercase block mb-0.5">
            {current.subtitle}
          </span>
          <h4 className="text-xs sm:text-sm font-extrabold text-white tracking-tight leading-tight uppercase">
            {current.title}
          </h4>
        </div>

        {/* Navigation Chevrons on Hover */}
        <button
          onClick={handlePrev}
          aria-label="Previous Award Image"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md border border-white/10"
        >
          ‹
        </button>
        <button
          onClick={handleNext}
          aria-label="Next Award Image"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md border border-white/10"
        >
          ›
        </button>

        {/* Bottom-right Interactive Slide Dots */}
        <div className="absolute bottom-4 right-4 z-10 flex gap-1.5 items-center">
          {awards.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              aria-label={`Go to award image ${idx + 1}`}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                idx === currentIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <LightboxModal
          isOpen={lightboxOpen}
          currentIndex={currentIndex}
          images={awards.map((a) => ({
            src: a.src,
            alt: `${a.title} — ${a.subtitle}`
          }))}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setCurrentIndex((prev) => (prev === 0 ? awards.length - 1 : prev - 1))}
          onNext={() => setCurrentIndex((prev) => (prev + 1) % awards.length)}
        />
      )}
    </>
  );
};

export const AboutPage = () => {
  const { about } = siteContent;

  return (
    <PageTransition>
      {/* HERO SECTION */}
      <section className="w-full bg-white text-black overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[680px] w-full">
          
          <div className="lg:col-span-7 relative w-full h-[420px] lg:h-auto overflow-hidden bg-neutral-100">
            <ImageReveal className="w-full h-full">
              <img
                src={about.heroImage}
                alt="About Sumanth Photography"
                className="w-full h-full object-cover object-center select-none"
              />
            </ImageReveal>
          </div>

          <div className="lg:col-span-5 bg-white text-black flex flex-col justify-center px-8 sm:px-12 lg:px-14 py-14 lg:py-16">
            <ScrollReveal>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-black leading-[0.95] tracking-tight mb-6">
                {about.titleLine1}
                <br />
                {about.titleLine2}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-sm sm:text-base font-semibold text-black tracking-tight mb-8">
                {about.subheading}
              </p>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="w-full bg-white text-black py-20 px-6 sm:px-12 lg:px-20 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-none">
              {about.approachHeading}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-xs sm:text-sm text-neutral-800 leading-relaxed font-normal">
            <ScrollReveal delay={0.1}>
              <p>{about.approachBody1}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p>{about.approachBody2}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* EXPERIENCE / OVERSIZED NUMBERS SECTION (BLACK) */}
      <section className="bg-black text-white py-24 sm:py-32 px-6 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {about.stats.map((stat, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08} className="space-y-2">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none block">
                {stat.number}
              </span>
              <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase block">
                {stat.label}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY & AWARDS SHOWCASE SECTION */}
      <section className="w-full bg-white text-black py-20 px-6 sm:px-12 lg:px-20 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight leading-tight">
                {about.philosophyHeading}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-normal">
                {about.philosophyBody}
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 h-[380px] sm:h-[480px] overflow-hidden bg-neutral-100">
            <ImageReveal className="w-full h-full">
              <AwardShowcaseSlider awards={about.awards} />
            </ImageReveal>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-white text-black py-20 px-6 text-center border-t border-neutral-100">
        <div className="max-w-2xl mx-auto space-y-6">
          <ScrollReveal>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-black">
              {about.ctaTitle}
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Link
              to="/contact"
              className="inline-block text-base sm:text-lg font-extrabold uppercase tracking-tight text-black border-b-2 border-black py-2 cta-hover"
            >
              {about.buttonText}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
};
