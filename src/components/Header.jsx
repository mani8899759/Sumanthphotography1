import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { siteContent, getActiveNavLinks, contactInfo } from '../config/siteContent';

export const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const navLinks = getActiveNavLinks();

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  return (
    <>
      {/* ─── DESKTOP HEADER (md and above) ───────────────────────────────────── */}
      <header className="hidden md:flex bg-black text-white py-3.5 w-full items-center justify-center border-b border-neutral-900 z-50 relative sticky top-0 backdrop-blur-md bg-black/90">
        <div className="container mx-auto px-4 flex items-center justify-center">
          {/* MINIMAL NAVIGATION MENU — PLAIN COMPACT HEADER */}
          <nav className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
            {navLinks.map((link) => {
              const isQuote = link.path === '/build-your-quote';
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    isQuote
                      ? `text-[10px] sm:text-xs font-extrabold uppercase tracking-wider py-1.5 px-3 rounded-full border transition-all duration-300 ${isActive
                        ? 'bg-[#c0392b] text-white border-[#c0392b]'
                        : 'text-[#c0392b] border-[#c0392b]/40 hover:bg-[#c0392b] hover:text-white hover:border-[#c0392b]'
                      }`
                      : `text-[10px] sm:text-xs font-semibold uppercase tracking-wider py-1 transition-all duration-300 relative ${isActive
                        ? "text-white opacity-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-white"
                        : "text-neutral-400 opacity-80 hover:opacity-100 hover:text-white"
                      }`
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>
        </div>
      </header>

      {/* ─── MOBILE HEADER (below md) ────────────────────────────────────────── */}
      <header className="md:hidden sticky top-0 z-50 w-full bg-black/95 backdrop-blur-md border-b border-neutral-900">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo / Brand */}
          <NavLink to="/" className="flex flex-col leading-none">
            <span className="text-white text-[11px] font-extrabold tracking-[0.22em] uppercase">
              SUMANTH
            </span>
            <span className="text-neutral-400 text-[8px] font-semibold tracking-[0.3em] uppercase">
              PHOTOGRAPHY
            </span>
          </NavLink>

          {/* Three-dot menu button */}
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
            className="w-10 h-10 flex items-center justify-center text-white rounded-full active:bg-neutral-800 transition-colors"
          >
            <span className="text-2xl leading-none font-bold tracking-tighter">⋮</span>
          </button>
        </div>
      </header>

      {/* ─── MOBILE NAVIGATION DRAWER ────────────────────────────────────────── */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm md:hidden"
              onClick={() => setDrawerOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              key="mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[80vw] max-w-[320px] bg-black flex flex-col md:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-900">
                <div className="flex flex-col leading-none">
                  <span className="text-white text-[11px] font-extrabold tracking-[0.22em] uppercase">SUMANTH</span>
                  <span className="text-neutral-500 text-[8px] font-semibold tracking-[0.3em] uppercase">PHOTOGRAPHY</span>
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close navigation"
                  className="w-9 h-9 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors rounded-full"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 overflow-y-auto py-6 px-6 space-y-1">
                {navLinks.map((link, idx) => {
                  const isQuote = link.path === '/build-your-quote';
                  if (isQuote) return null; // Quote gets its own CTA below
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + idx * 0.04, duration: 0.3 }}
                    >
                      <NavLink
                        to={link.path}
                        onClick={() => setDrawerOpen(false)}
                        className={({ isActive }) =>
                          `block py-3.5 text-sm font-bold uppercase tracking-widest border-b border-neutral-900 transition-colors ${
                            isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                          }`
                        }
                      >
                        {link.name}
                      </NavLink>
                    </motion.div>
                  );
                })}
              </nav>

              {/* CTA Footer */}
              <div className="px-6 pb-8 pt-4 border-t border-neutral-900 space-y-3">
                <NavLink
                  to="/build-your-quote"
                  onClick={() => setDrawerOpen(false)}
                  className="block w-full text-center py-4 bg-[#c0392b] text-white font-extrabold text-xs uppercase tracking-widest rounded-none transition-opacity hover:opacity-90 active:opacity-80"
                >
                  BUILD YOUR QUOTE →
                </NavLink>
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 border border-neutral-800 text-neutral-300 text-xs font-semibold uppercase tracking-widest hover:border-neutral-500 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
