import React from 'react';
import { Link } from 'react-router-dom';
import { categoryTree } from '../data/galleryData';
import { ScrollReveal, ImageReveal } from '../components/ScrollReveal';
import { PageTransition } from '../components/PageTransition';

export const BabyBumpPage = () => {
  const { parentTitle, subcategories } = categoryTree.babyMaternity;

  return (
    <PageTransition>
      {/* HERO SECTION — MASTER DESIGN SYSTEM */}
      <section className="w-full bg-white text-black overflow-hidden border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16 sm:py-24 text-center">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-black tracking-tight leading-none mb-6">
              {parentTitle}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-sm sm:text-base font-semibold text-black tracking-tight max-w-2xl mx-auto">
              A quiet celebration of motherhood, connection, and new beginnings across three curated visual archives.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SUBCATEGORY EDITORIAL PREVIEW CARDS */}
      <section className="w-full bg-white text-black py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto space-y-20">
          {subcategories.map((sub, idx) => (
            <div key={sub.id} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : ''} w-full h-[360px] sm:h-[480px] overflow-hidden bg-neutral-100`}>
                <ImageReveal className="w-full h-full">
                  <Link to={sub.path} className="block w-full h-full group">
                    <img
                      src={sub.heroImage}
                      alt={sub.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </Link>
                </ImageReveal>
              </div>

              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-1' : ''} space-y-5`}>
                <ScrollReveal>
                  <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase block mb-1">
                    SUBCATEGORY 0{idx + 1} · 32+ PHOTOGRAPHS
                  </span>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight">
                    {sub.name}
                  </h3>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-md">
                    {sub.desc}
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.15} className="pt-2">
                  <Link
                    to={sub.path}
                    className="inline-block text-xs font-extrabold uppercase tracking-widest text-black border-b-2 border-black py-1.5 cta-hover"
                  >
                    EXPLORE GALLERY →
                  </Link>
                </ScrollReveal>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* MASTER ENDING CTA */}
      <section className="bg-white text-black py-20 px-6 text-center border-t border-neutral-100">
        <div className="max-w-2xl mx-auto space-y-6">
          <ScrollReveal>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-black">
              Expecting a new story?
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Link
              to="/contact"
              className="inline-block text-base sm:text-lg font-extrabold uppercase tracking-tight text-black border-b-2 border-black py-2 cta-hover"
            >
              RESERVE YOUR SESSION →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
};
