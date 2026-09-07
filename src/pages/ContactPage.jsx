import React, { useState } from 'react';
import { siteContent, contactInfo } from '../config/siteContent';
import { ScrollReveal } from '../components/ScrollReveal';
import { PageTransition } from '../components/PageTransition';

export const ContactPage = () => {
  const { contact } = siteContent;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Wedding',
    date: '',
    location: '',
    story: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageTransition>
      {/* HERO SECTION */}
      <section className="w-full bg-white text-black py-16 sm:py-24 px-6 sm:px-12 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto space-y-4">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-black tracking-tight leading-tight">
              {contact.heroTitleLine1}
              <br />
              {contact.heroTitleLine2}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-normal max-w-xl">
              {contact.subheading}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CONTACT INFO & FORM SECTION */}
      <section className="w-full bg-white text-black py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left Column: Contact Information */}
          <div className="lg:col-span-4 space-y-10">
            <ScrollReveal className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400">STUDIO LOCATION</h3>
              <p className="text-sm font-bold text-black">{contact.studio}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.08} className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400">TELEPHONE</h3>
              <p className="text-sm font-bold text-black">
                <a href={contactInfo.phoneHref} className="hover:underline">
                  {contactInfo.phone}
                </a>
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.12} className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400">EMAIL ENQUIRIES</h3>
              <p className="text-sm font-bold text-black">
                <a href={`mailto:${contact.email}`} className="hover:underline">
                  {contact.email}
                </a>
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.16} className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400">SOCIAL CONNECTIONS</h3>
              <div className="flex items-center gap-4">
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-neutral-300 flex items-center justify-center text-black hover:border-black transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-neutral-300 flex items-center justify-center text-black hover:border-black transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Editorial Contact Form */}
          <div className="lg:col-span-8">
            {submitted ? (
              <ScrollReveal className="p-8 border border-black bg-black text-white text-center space-y-4">
                <h3 className="text-2xl font-extrabold tracking-tight">ENQUIRY RECEIVED</h3>
                <p className="text-xs text-neutral-300 leading-relaxed max-w-md mx-auto">
                  Thank you for reaching out. We have received your message and will respond with availability and quote details within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-block text-xs font-semibold uppercase tracking-widest text-white border-b border-white pt-4 cursor-pointer"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </ScrollReveal>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <ScrollReveal className="space-y-1">
                    <label className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ananya Sharma"
                      className="w-full bg-white border border-neutral-300 focus:border-black px-4 py-3 text-xs text-black outline-none rounded-none transition-colors"
                    />
                  </ScrollReveal>

                  {/* Email */}
                  <ScrollReveal delay={0.05} className="space-y-1">
                    <label className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. ananya@example.com"
                      className="w-full bg-white border border-neutral-300 focus:border-black px-4 py-3 text-xs text-black outline-none rounded-none transition-colors"
                    />
                  </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <ScrollReveal delay={0.1} className="space-y-1">
                    <label className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-white border border-neutral-300 focus:border-black px-4 py-3 text-xs text-black outline-none rounded-none transition-colors"
                    />
                  </ScrollReveal>

                  {/* Event Type Dropdown */}
                  <ScrollReveal delay={0.15} className="space-y-1">
                    <label className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">
                      EVENT / SHOOT TYPE *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full bg-white border border-neutral-300 focus:border-black px-4 py-3 text-xs text-black outline-none rounded-none cursor-pointer transition-colors"
                    >
                      {contact.eventTypes.map((type, idx) => (
                        <option key={idx} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Date */}
                  <ScrollReveal delay={0.2} className="space-y-1">
                    <label className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">
                      PREFERRED DATE
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-white border border-neutral-300 focus:border-black px-4 py-3 text-xs text-black outline-none rounded-none transition-colors"
                    />
                  </ScrollReveal>

                  {/* Location */}
                  <ScrollReveal delay={0.25} className="space-y-1">
                    <label className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">
                      EVENT LOCATION / DESTINATION
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Hyderabad / Goa"
                      className="w-full bg-white border border-neutral-300 focus:border-black px-4 py-3 text-xs text-black outline-none rounded-none transition-colors"
                    />
                  </ScrollReveal>
                </div>

                {/* Message / Story */}
                <ScrollReveal delay={0.3} className="space-y-1">
                  <label className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">
                    TELL US ABOUT YOUR STORY *
                  </label>
                  <textarea
                    name="story"
                    required
                    rows="5"
                    value={formData.story}
                    onChange={handleChange}
                    placeholder="Share details about your celebration, session vision, or specific coverage requirements..."
                    className="w-full bg-white border border-neutral-300 focus:border-black p-4 text-xs text-black outline-none rounded-none resize-none transition-colors"
                  ></textarea>
                </ScrollReveal>

                {/* Submit Button */}
                <ScrollReveal delay={0.35} className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-4 bg-black text-white font-extrabold text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors cursor-pointer rounded-none"
                  >
                    SEND ENQUIRY →
                  </button>
                </ScrollReveal>
              </form>
            )}
          </div>

        </div>
      </section>
    </PageTransition>
  );
};
