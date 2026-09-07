import React from 'react';
import { siteContent } from '../config/siteContent';
import { ScrollReveal } from './ScrollReveal';

export const IntroSection = () => {
  return (
    <section className="bg-black text-white py-16 sm:py-24 lg:py-28 px-6 sm:px-12 w-full border-t border-neutral-900">
      <div className="max-w-4xl mx-auto text-center">

        {/* Short Introductory Statement */}
        <ScrollReveal>
          <h2 className="text-sm sm:text-base md:text-lg font-semibold tracking-normal text-white mb-6">
            {siteContent.introStatement.heading}
          </h2>
        </ScrollReveal>

        {/* Brand Narrative Copy */}
        <ScrollReveal delay={0.15}>
          <p className="text-xs sm:text-sm md:text-sm text-neutral-300 font-normal leading-relaxed tracking-normal max-w-3xl mx-auto mb-10 sm:mb-14">
            {siteContent.introStatement.body}
          </p>
        </ScrollReveal>

        {/* Dedicated About Section Feature Image — Preserved exact landscape ratio across all devices */}
        <ScrollReveal delay={0.25}>
          <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-sm bg-neutral-950 border border-neutral-900 shadow-2xl group cursor-pointer">
            <img
              src={siteContent.aboutFeatureImage || "/assets/about_feature.jpg"}
              alt="Sumanth Photography — About Feature"
              className="w-full h-auto block object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02] select-none"
              loading="eager"
            />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
