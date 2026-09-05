import React from 'react';
import { siteContent } from '../config/siteContent';
import { ImageReveal } from './ScrollReveal';

export const HeroSection = () => {
  return (
    <section id="home" className="w-full bg-white text-black overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px] md:min-h-[540px] lg:min-h-[600px] w-full items-center">
        
        {/* LEFT COLUMN: Editorial Photography */}
        <div className="lg:col-span-7 relative w-full h-[380px] sm:h-[480px] lg:h-auto overflow-hidden bg-neutral-100">
          <ImageReveal className="w-full h-full">
            <img
              src={siteContent.hero.image}
              alt="Sumanth Photography Studio"
              className="w-full h-full object-cover object-center select-none"
            />
          </ImageReveal>
        </div>

        {/* RIGHT COLUMN: Video Player with background matching the clean white website color */}
        <div className="lg:col-span-5 bg-white text-black flex items-center justify-center p-6 sm:p-8 lg:p-10 w-full">
          <div className="w-full max-w-[440px] aspect-square relative overflow-hidden bg-white flex items-center justify-center">
            <video
              src="/assets/hero_video.mp4"
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover object-center select-none pointer-events-none bg-white"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
