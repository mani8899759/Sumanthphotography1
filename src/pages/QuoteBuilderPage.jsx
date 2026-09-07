import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { QuoteBuilder } from '../components/quote/QuoteBuilder';
import { AdaptiveCoverImage } from '../components/quote/AdaptiveCoverImage';
import { brandConfig, quotePageConfig } from '../config/quoteConfig';
import { siteContent } from '../config/siteContent';

// ============================================================
// QUOTE BUILDER PAGE
// Hero → Info Blocks → Interactive Quote Builder
// White/light background — intentional inversion from dark portfolio
// ============================================================

const InfoBlock = ({ number, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    className="flex flex-col gap-3"
  >
    <span className="text-xs font-bold text-[#c0392b] uppercase tracking-[0.2em]">{number}</span>
    <h3 className="text-lg font-extrabold text-[#0f172a] leading-tight">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
  </motion.div>
);

export const QuoteBuilderPage = () => {
  return (
    <PageTransition>
      {/* ---- WHITE PAGE WRAPPER ---- */}
      <div className="min-h-screen bg-white text-[#0f172a]">

        {/* ===============================================================
            HERO SECTION
        ================================================================ */}
        <section className="w-full pt-16 pb-12 px-6 sm:px-12 border-b border-gray-100">
          <div className="max-w-5xl mx-auto">

            {/* Brand badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <Link
                to="/"
                className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#0f172a] transition-colors"
              >
                {siteContent.businessName}
              </Link>
              <span className="text-gray-200">|</span>
              <span className="text-xs font-semibold text-[#c0392b] uppercase tracking-wider">Quote Builder</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#0f172a] tracking-tight leading-[1.05] mb-6"
              style={{ letterSpacing: '-0.03em' }}
            >
              Ready To Build Your<br />
              Own{' '}
              <span
                className="relative inline-block"
                style={{ color: '#c0392b' }}
              >
                Photography Quote?
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -bottom-2 left-0 h-1 w-full rounded-full origin-left"
                  style={{ backgroundColor: '#c0392b', opacity: 0.2 }}
                />
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-sm sm:text-base text-gray-500 max-w-xl mb-10 leading-relaxed"
            >
              Create your package, choose the events you need, and instantly see your estimated photography cost.
              No commitment, just clarity.
            </motion.p>

            {/* Hero image — Adaptive Aspect Ratio Cover */}
            <AdaptiveCoverImage
              src={quotePageConfig.coverImage}
              alt={quotePageConfig.coverAlt}
              initialAspectRatio={quotePageConfig.aspectRatio}
              captionLeft="PREMIUM WEDDING PHOTOGRAPHY · HYDERABAD"
              captionRight="📸 500+ WEDDINGS DOCUMENTED"
            />
          </div>
        </section>

        {/* ===============================================================
            INFO BLOCKS (3 columns)
        ================================================================ */}
        <section className="w-full py-14 px-6 sm:px-12 border-b border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 sm:divide-x divide-gray-100">
              <InfoBlock
                number="01"
                title="Discover Our Services"
                description="Explore photography, cinematography, drone coverage, albums and more — all in one place."
                delay={0}
              />
              <div className="sm:pl-10">
                <InfoBlock
                  number="02"
                  title="Build Your Quote"
                  description="Select the services and events you love and watch your quote update instantly."
                  delay={0.1}
                />
              </div>
              <div className="sm:pl-10">
                <InfoBlock
                  number="03"
                  title="Save Your Date"
                  description="Submit your details and connect with our team to finalize your photography package."
                  delay={0.2}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===============================================================
            QUOTE BUILDER
        ================================================================ */}
        <section className="w-full py-16 px-6 sm:px-12">
          <div className="max-w-5xl mx-auto">

            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#c0392b] block mb-3">
                Interactive Quote Builder
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                Build Your Package
              </h2>
              <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-400">
                <span>✓ No registration required</span>
                <span>·</span>
                <span>✓ Instant pricing</span>
                <span>·</span>
                <span>✓ Fully customizable</span>
              </div>
            </motion.div>

            {/* Quote builder container */}
            <div
              className="rounded-3xl border border-gray-100 p-6 sm:p-10 lg:p-14"
              style={{ boxShadow: '0 4px 40px rgba(0,0,0,0.06), 0 1px 8px rgba(0,0,0,0.03)' }}
            >
              <QuoteBuilder />
            </div>
          </div>
        </section>

        {/* ===============================================================
            MINIMAL FOOTER (Quote page specific)
        ================================================================ */}
        <footer className="w-full py-10 px-6 border-t border-gray-100 text-center">
          <div className="max-w-5xl mx-auto space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
              {siteContent.businessName}
            </p>
            <div className="flex items-center justify-center gap-4 text-[11px] text-gray-400">
              <a href="#" className="hover:text-[#0f172a] transition-colors">Terms of Agreement</a>
              <span>·</span>
              <a href="#" className="hover:text-[#0f172a] transition-colors">Privacy Policy</a>
            </div>
            <p className="text-[11px] text-gray-300">
              Made with ❤️ · © {new Date().getFullYear()} {brandConfig.brandName} · {brandConfig.location}
            </p>
          </div>
        </footer>

      </div>
    </PageTransition>
  );
};
