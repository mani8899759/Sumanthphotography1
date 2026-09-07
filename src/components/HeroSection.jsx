import React from 'react';
import { siteContent } from '../config/siteContent';
import { ImageReveal } from './ScrollReveal';

export const HeroSection = () => {
  return (
    <section id="home" className="w-full bg-white text-black overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px] md:min-h-[540px] lg:min-h-[600px] w-full items-center">

        {/* MOBILE HERO IMAGE ONLY: Appears on mobile screens (< 640px) */}
        <div className="block sm:hidden relative w-full h-auto aspect-[602/1024] overflow-hidden bg-white">
          <ImageReveal className="w-full h-full">
            <img
              src={siteContent.hero.mobileImage || '/assets/mobile_hero.jpg'}
              alt="Sumanth Photography Mobile Hero"
              className="w-full h-full object-contain object-center select-none"
            />
          </ImageReveal>
        </div>

        {/* DESKTOP/LAPTOP/TABLET HERO: Appears on sm+ (>= 640px) — 100% Untouched Original */}
        <div className="hidden sm:block lg:col-span-7 relative w-full h-[480px] lg:h-auto overflow-hidden bg-neutral-100">
          <ImageReveal className="w-full h-full">
            <img
              src={siteContent.hero.image}
              alt="Sumanth Photography Studio"
              className="w-full h-full object-cover object-center select-none"
            />
          </ImageReveal>
        </div>

        {/* RIGHT COLUMN: Video Player — Video Project 11 (Square 1:1 aspect ratio) */}
        <div className="lg:col-span-5 bg-white text-black hidden lg:flex items-center justify-center p-6 sm:p-8 lg:p-10 w-full">
          <div className="w-full max-w-[440px] aspect-square relative overflow-hidden bg-white flex items-center justify-center">
            <video
              src={siteContent.hero.video || "/assets/video_project_11.mp4"}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-contain object-center select-none pointer-events-none bg-white"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
