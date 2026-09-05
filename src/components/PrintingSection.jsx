import React from 'react';
import { siteContent } from '../config/siteContent';
import { ScrollReveal, ImageReveal } from './ScrollReveal';

export const PrintingSection = () => {
  return (
    <section id="product-photography" className="w-full bg-black text-white py-16 sm:py-24 lg:py-28 px-6 sm:px-12 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Top Centered Large Heading */}
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-none">
            {siteContent.printing.heading}
          </h2>
        </ScrollReveal>

        {/* Large Centered Rectangular Image with Generous Whitespace */}
        <div className="w-full max-w-4xl h-[300px] sm:h-[420px] lg:h-[480px] overflow-hidden mb-14 bg-neutral-950">
          <ImageReveal className="w-full h-full">
            <img
              src={siteContent.printing.image}
              alt="High Quality Photo Printing"
              className="w-full h-full object-cover object-center select-none"
            />
          </ImageReveal>
        </div>

        {/* Compact Editorial Text Block Below Image */}
        <div className="max-w-xl text-center flex flex-col items-center">
          <ScrollReveal delay={0.1}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight mb-4">
              {siteContent.printing.subheadingLine1}
              <br />
              {siteContent.printing.subheadingLine2}
            </h3>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
              {siteContent.printing.body}
            </p>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
