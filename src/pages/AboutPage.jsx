import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../config/siteContent';
import { ScrollReveal, ImageReveal } from '../components/ScrollReveal';
import { PageTransition } from '../components/PageTransition';

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

      {/* PHILOSOPHY SECTION */}
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
              <img
                src={siteContent.portrait.image}
                alt="Photography Philosophy"
                className="w-full h-full object-cover object-center"
              />
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
