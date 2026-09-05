import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { formatPrice, brandConfig } from '../../config/quoteConfig';

// ============================================================
// CUSTOMER DETAILS FORM — Step 6
// Final details collection before submission
// ============================================================

const FormField = ({ label, required, error, children }) => (
  <div className="space-y-1.5">
    <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500">
      {label}{required && <span className="text-[#c0392b] ml-0.5">*</span>}
    </label>
    {children}
    <AnimatePresence>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          className="text-xs text-[#c0392b] font-medium"
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);

const inputClass = (hasError) =>
  `w-full border-b-2 ${hasError ? 'border-[#c0392b]' : 'border-gray-200'} bg-transparent px-0 py-3 text-sm text-[#0f172a] placeholder-gray-300 outline-none focus:border-[#c0392b] transition-colors duration-200`;

const referralSources = [
  'Instagram', 'Google', 'Friend / Family Referral', 'Previous Client', 'Facebook', 'Wedding Fair', 'Other'
];

export const CustomerForm = ({ onSubmit, totalPrice }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventDate: '',
    location: '',
    notes: '',
    instagram: '',
    referral: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your full name.';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (!/^[+\d\s\-()]{8,}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.eventDate) newErrors.eventDate = 'Please select your event date.';
    if (!formData.location.trim()) newErrors.location = 'Please enter the event location.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to first error
      const firstField = document.getElementById(`field-${Object.keys(validationErrors)[0]}`);
      firstField?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    setIsSubmitting(true);
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 800));
    onSubmit(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-xl mx-auto"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-3">
          Almost There — <span style={{ color: '#c0392b' }}>Let's Save Your Date</span>
        </h2>
        <p className="text-sm text-gray-500 max-w-md mx-auto">
          Share your details and we'll reach out to confirm your photography package.
        </p>

        {/* Estimated total reminder */}
        <div className="inline-flex items-center gap-2 bg-[#0f172a] text-white rounded-xl px-5 py-2.5 mt-5">
          <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Your Estimate:</span>
          <span className="text-sm font-extrabold tabular-nums">{formatPrice(totalPrice)}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-7" noValidate>
        {/* Name + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField label="Full Name" required error={errors.name}>
            <input
              id="field-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ananya Sharma"
              className={inputClass(!!errors.name)}
              aria-required="true"
              aria-invalid={!!errors.name}
            />
          </FormField>

          <FormField label="Phone Number" required error={errors.phone}>
            <input
              id="field-phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className={inputClass(!!errors.phone)}
              aria-required="true"
              aria-invalid={!!errors.phone}
            />
          </FormField>
        </div>

        {/* Email */}
        <FormField label="Email Address" required error={errors.email}>
          <input
            id="field-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ananya@example.com"
            className={inputClass(!!errors.email)}
            aria-required="true"
            aria-invalid={!!errors.email}
          />
        </FormField>

        {/* Date + Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField label="Event / Wedding Date" required error={errors.eventDate}>
            <input
              id="field-eventDate"
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              className={inputClass(!!errors.eventDate)}
              aria-required="true"
              aria-invalid={!!errors.eventDate}
              style={{ colorScheme: 'light' }}
            />
          </FormField>

          <FormField label="Event Location" required error={errors.location}>
            <input
              id="field-location"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Hyderabad / Venue Name"
              className={inputClass(!!errors.location)}
              aria-required="true"
              aria-invalid={!!errors.location}
            />
          </FormField>
        </div>

        {/* Notes */}
        <FormField label="Additional Notes" error={errors.notes}>
          <textarea
            id="field-notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Tell us anything specific — special requirements, moments you want captured, your vision..."
            rows={4}
            className={`${inputClass(false)} resize-none`}
          />
        </FormField>

        {/* Optional fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
          <FormField label="Instagram Handle (optional)">
            <input
              type="text"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              placeholder="@yourhandle"
              className={inputClass(false)}
            />
          </FormField>

          <FormField label="How did you find us?">
            <select
              name="referral"
              value={formData.referral}
              onChange={handleChange}
              className={`${inputClass(false)} cursor-pointer`}
              style={{ appearance: 'none' }}
            >
              <option value="">Select source...</option>
              {referralSources.map((src) => (
                <option key={src} value={src}>{src}</option>
              ))}
            </select>
          </FormField>
        </div>

        {/* Submit */}
        <div className="pt-4">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={!isSubmitting ? { scale: 1.01, y: -2 } : {}}
            whileTap={!isSubmitting ? { scale: 0.99 } : {}}
            className="w-full py-4 px-8 rounded-xl font-extrabold text-sm uppercase tracking-widest text-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c0392b] focus-visible:ring-offset-2 disabled:opacity-70"
            style={{
              background: isSubmitting
                ? '#666'
                : 'linear-gradient(135deg, #c0392b 0%, #a93226 100%)',
              boxShadow: isSubmitting ? 'none' : '0 4px 20px rgba(192,57,43,0.35)',
            }}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending your quote...
              </span>
            ) : (
              'Send My Quote →'
            )}
          </motion.button>

          <p className="text-center text-xs text-gray-400 mt-3">
            By submitting, you agree to our{' '}
            <a href="#" className="underline hover:text-gray-600 transition-colors">Terms of Agreement</a>{' '}
            &{' '}
            <a href="#" className="underline hover:text-gray-600 transition-colors">Privacy Policy</a>.
          </p>
        </div>
      </form>
    </motion.div>
  );
};
