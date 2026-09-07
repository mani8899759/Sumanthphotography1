import React from 'react';
import { siteContent } from '../config/siteContent';
import { ScrollReveal } from './ScrollReveal';

export const IntroSection = () => {
  return (
    <section className="bg-black text-white pt-16 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 w-full border-t border-neutral-900 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-6 sm:px-12">

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

      </div>

      {/* Dedicated About Section Feature Image — Full Edge-to-Edge Screen Width */}
      <ScrollReveal delay={0.25} className="w-full mt-4">
        <div className="w-full overflow-hidden bg-neutral-950 border-y border-neutral-900 shadow-2xl group cursor-pointer">
          <img
            src={siteContent.aboutFeatureImage || "/assets/about_feature.jpg"}
            alt="Sumanth Photography — About Feature"
            className="w-full h-auto block object-cover sm:object-contain max-h-[85vh] transition-transform duration-700 ease-out group-hover:scale-[1.01] select-none mx-auto"
            loading="eager"
          />
        </div>
      </ScrollReveal>
    </section>
  );
};
