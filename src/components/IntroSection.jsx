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
          <p className="text-xs sm:text-sm md:text-sm text-neutral-300 font-normal leading-relaxed tracking-normal max-w-3xl mx-auto">
            {siteContent.introStatement.body}
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
};
