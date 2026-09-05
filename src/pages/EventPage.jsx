import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../config/siteContent';
import { ScrollReveal, ImageReveal } from '../components/ScrollReveal';
import { EditorialGallery } from '../components/EditorialGallery';
import { PageTransition } from '../components/PageTransition';

export const EventPage = () => {
  const { events } = siteContent;

  return (
    <PageTransition>
      {/* HERO SECTION — MASTER DESIGN SYSTEM */}
      <section className="w-full bg-white text-black overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[680px] w-full">
          
          <div className="lg:col-span-7 relative w-full h-[420px] lg:h-auto overflow-hidden bg-neutral-100">
            <ImageReveal className="w-full h-full">
              <img
                src={events.heroImage}
                alt="Event Photography"
                className="w-full h-full object-cover object-center select-none"
              />
            </ImageReveal>
          </div>

          <div className="lg:col-span-5 bg-white text-black flex flex-col justify-center px-8 sm:px-12 lg:px-14 py-14 lg:py-16">
            <ScrollReveal>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-black leading-[0.95] tracking-tight mb-6">
                {events.titleLine1}
                <br />
                {events.titleLine2}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-sm sm:text-base font-semibold text-black tracking-tight mb-6">
                {events.subheading}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-normal max-w-md">
                {events.intro}
              </p>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 30-IMAGE EDITORIAL GALLERY GRID */}
      <EditorialGallery images={events.gallery} />

      {/* ENDING CTA — MASTER DESIGN SYSTEM */}
      <section className="bg-white text-black py-20 px-6 text-center border-t border-neutral-100">
        <div className="max-w-2xl mx-auto space-y-6">
          <ScrollReveal>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-black">
              {events.ctaHeading}
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Link
              to="/contact"
              className="inline-block text-base sm:text-lg font-extrabold uppercase tracking-tight text-black border-b-2 border-black py-2 cta-hover"
            >
              {events.buttonText}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
};
