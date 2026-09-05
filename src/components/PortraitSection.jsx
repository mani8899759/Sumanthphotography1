import React from 'react';
import { siteContent } from '../config/siteContent';
import { ScrollReveal, ImageReveal } from './ScrollReveal';

export const PortraitSection = () => {
  return (
    <section id="portraits" className="w-full bg-white text-black py-16 sm:py-24 lg:py-28 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Massive Centered Heading */}
        <ScrollReveal className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-black tracking-tight leading-none">
            {siteContent.portrait.heading}
          </h2>
        </ScrollReveal>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Descriptive Text */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 text-black">
            <ScrollReveal delay={0.1}>
              <p className="text-xs sm:text-sm md:text-base font-medium leading-relaxed text-black">
                {siteContent.portrait.text1}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed text-neutral-800">
                {siteContent.portrait.text2}
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column: Dominant Portrait Photography Image */}
          <div className="lg:col-span-7 w-full h-[400px] sm:h-[500px] lg:h-[560px] overflow-hidden bg-neutral-100">
            <ImageReveal className="w-full h-full">
              <img
                src={siteContent.portrait.image}
                alt="Portrait Photography"
                className="w-full h-full object-cover object-center select-none"
              />
            </ImageReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
