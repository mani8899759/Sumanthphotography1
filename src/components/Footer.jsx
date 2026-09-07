import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent, getActiveNavLinks } from '../config/siteContent';
import { ScrollReveal } from './ScrollReveal';

export const Footer = () => {
  const navLinks = getActiveNavLinks();

  return (
    <footer className="bg-black text-white pt-16 pb-20 px-6 w-full border-t border-neutral-900">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-10">

        {/* Studio Branding */}
        <ScrollReveal className="space-y-2">
          <h3 className="text-sm font-extrabold uppercase tracking-widest text-white">
            {siteContent.footer.brandName}
          </h3>
        </ScrollReveal>

        {/* Global Navigation Links */}
        <ScrollReveal delay={0.05} className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </ScrollReveal>

        {/* Contact Info */}
        <ScrollReveal delay={0.1} className="flex flex-col items-center space-y-2 text-xs text-neutral-300">
          <p className="font-medium text-white">{siteContent.footer.location}</p>
          <p>Phone: <a href={`tel:${siteContent.footer.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">{siteContent.footer.phone}</a></p>
          <p>Email: <a href={`mailto:${siteContent.footer.email}`} className="hover:text-white transition-colors">{siteContent.footer.email}</a></p>

          {/* Social Minimal Line Icons */}
          <div className="flex items-center justify-center gap-4 pt-3">
            {/* Instagram Icon */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* WhatsApp Icon */}
            <a
              href={`https://wa.me/${siteContent.footer.phone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
          </div>
        </ScrollReveal>

        {/* Thin Horizontal Line */}
        <div className="w-full max-w-2xl border-t border-neutral-900 my-4" />

        {/* Copyright */}
        <ScrollReveal delay={0.15}>
          <p className="text-[10px] text-neutral-500 tracking-wider uppercase">
            {siteContent.footer.copyright}
          </p>
        </ScrollReveal>

      </div>
    </footer>
  );
};
