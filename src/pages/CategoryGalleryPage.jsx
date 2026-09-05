import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categoryTree, galleryData } from '../data/galleryData';
import { SubCategoryNav } from '../components/SubCategoryNav';
import { EditorialGallery } from '../components/EditorialGallery';
import { ScrollReveal, ImageReveal } from '../components/ScrollReveal';
import { PageTransition } from '../components/PageTransition';

export const CategoryGalleryPage = () => {
  const { subId } = useParams();

  // Find parent category group and current subcategory info
  let parentGroup = null;
  let currentSub = null;
  let subIndex = -1;

  for (const groupKey of Object.keys(categoryTree)) {
    const group = categoryTree[groupKey];
    const foundIdx = group.subcategories.findIndex((s) => s.id === subId);
    if (foundIdx !== -1) {
      parentGroup = group;
      currentSub = group.subcategories[foundIdx];
      subIndex = foundIdx;
      break;
    }
  }

  // Fallback if subcategory is not found
  if (!parentGroup || !currentSub) {
    return (
      <PageTransition>
        <div className="py-32 text-center text-black bg-white">
          <h2 className="text-3xl font-extrabold mb-4">Gallery Subcategory Not Found</h2>
          <Link to="/" className="text-xs font-mono underline uppercase tracking-widest">
            RETURN TO HOME
          </Link>
        </div>
      </PageTransition>
    );
  }

  const items = galleryData[subId] || [];
  const prevSub = subIndex > 0 ? parentGroup.subcategories[subIndex - 1] : null;
  const nextSub = subIndex < parentGroup.subcategories.length - 1 ? parentGroup.subcategories[subIndex + 1] : null;

  return (
    <PageTransition>
      {/* SUB-CATEGORY NAVIGATION BAR */}
      <SubCategoryNav subcategories={parentGroup.subcategories} />

      {/* CATEGORY TITLE REVEAL HERO */}
      <section className="w-full bg-white text-black py-14 sm:py-20 px-6 text-center border-b border-neutral-100">
        <div className="max-w-5xl mx-auto space-y-4">
          <ScrollReveal>
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
              {parentGroup.parentTitle} · {items.length} PHOTOGRAPHS
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-black tracking-tight leading-none uppercase">
              {currentSub.name}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal max-w-xl mx-auto">
              {currentSub.desc}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 32-IMAGE EDITORIAL GALLERY GRID ENGINE */}
      <EditorialGallery images={items} />

      {/* PREVIOUS / NEXT SUBCATEGORY NAVIGATION */}
      <section className="w-full bg-white text-black py-12 px-6 sm:px-12 border-t border-b border-neutral-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div>
            {prevSub ? (
              <Link
                to={prevSub.path}
                className="group flex flex-col items-start space-y-1 text-left"
              >
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                  ← PREVIOUS CHAPTER
                </span>
                <span className="text-sm sm:text-base font-extrabold text-black group-hover:underline">
                  {prevSub.name}
                </span>
              </Link>
            ) : <div />}
          </div>

          <div>
            {nextSub ? (
              <Link
                to={nextSub.path}
                className="group flex flex-col items-end space-y-1 text-right"
              >
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                  NEXT CHAPTER →
                </span>
                <span className="text-sm sm:text-base font-extrabold text-black group-hover:underline">
                  {nextSub.name}
                </span>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* MASTER ENDING CTA */}
      <section className="bg-white text-black py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <ScrollReveal>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-black">
              Ready to document your story?
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Link
              to="/contact"
              className="inline-block text-base sm:text-lg font-extrabold uppercase tracking-tight text-black border-b-2 border-black py-2 cta-hover"
            >
              BUILD YOUR QUOTE →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
};
