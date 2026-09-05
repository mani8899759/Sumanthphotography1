import React from 'react';
import { NavLink } from 'react-router-dom';
import { siteContent } from '../config/siteContent';

export const Header = () => {
  return (
    <header className="bg-black text-white py-3.5 w-full flex items-center justify-center border-b border-neutral-900 z-50 relative sticky top-0 backdrop-blur-md bg-black/90">
      <div className="container mx-auto px-4 flex items-center justify-center">
        {/* MINIMAL NAVIGATION MENU — PLAIN COMPACT HEADER */}
        <nav className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
          {siteContent.navLinks.map((link) => {
            const isQuote = link.path === '/build-your-quote';
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isQuote
                    ? `text-[10px] sm:text-xs font-extrabold uppercase tracking-wider py-1.5 px-3 rounded-full border transition-all duration-300 ${
                        isActive
                          ? 'bg-[#c0392b] text-white border-[#c0392b]'
                          : 'text-[#c0392b] border-[#c0392b]/40 hover:bg-[#c0392b] hover:text-white hover:border-[#c0392b]'
                      }`
                    : `text-[10px] sm:text-xs font-semibold uppercase tracking-wider py-1 transition-all duration-300 relative ${
                        isActive
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
  );
};
