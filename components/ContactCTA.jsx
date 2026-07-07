'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MessageCircle, Phone, Clock, Shield, Star, Send } from 'lucide-react';
import { SectionWrap, FadeUp, ButtonMotion } from './MotionWrap';

const services = [
  'Business Loan',
  'MSME Funding',
  'Startup Seed Fund',
  'CGTMSE Loan',
  'DPIIT Registration',
  'PMEGP Scheme',
  'Working Capital',
  'Other',
];

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', service: '', message: '',
  });
  const shouldReduce = useReducedMotion();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-navy-900 to-gray-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side */}
          <SectionWrap className="space-y-6">
            <FadeUp>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Let&apos;s Get Your Business <span className="text-primary-400">Funded</span>
              </h2>
            </FadeUp>
            <FadeUp custom={1}>
              <p className="text-gray-300">
                Fill in the form and our funding specialists will get back to you within 2 hours with a personalized recommendation.
              </p>
            </FadeUp>

            {/* Trust badges */}
            <FadeUp custom={2} className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium">
                <Shield className="w-3.5 h-3.5" /> 100% Confidential
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium">
                <Star className="w-3.5 h-3.5" /> 5.0 Rated
              </span>
            </FadeUp>

            {/* Quick connect */}
            <FadeUp custom={3} className="space-y-4 pt-4">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-600/20 rounded-xl p-4 border border-green-500/30 hover:bg-green-600/30 transition-colors"
              >
                <MessageCircle className="w-6 h-6 text-green-400" />
                <div>
                  <p className="text-white font-semibold text-sm">WhatsApp Us</p>
                  <p className="text-gray-400 text-xs">+91 98765 43210</p>
                </div>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 bg-blue-600/20 rounded-xl p-4 border border-blue-500/30 hover:bg-blue-600/30 transition-colors"
              >
                <Phone className="w-6 h-6 text-blue-400" />
                <div>
                  <p className="text-white font-semibold text-sm">Call Us</p>
                  <p className="text-gray-400 text-xs">+91 98765 43210</p>
                </div>
              </a>
            </FadeUp>

            <FadeUp custom={4} className="flex items-center gap-2 text-gray-400 text-sm">
              <Clock className="w-4 h-4" />
              Mon–Sat, 9:00 AM – 7:00 PM IST
            </FadeUp>
          </SectionWrap>

          {/* Right side - Form */}
          <motion.div
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl"
            initial={shouldReduce ? {} : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Get Free Funding Advice</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                />
              </div>
              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm text-gray-500"
                >
                  <option value="">Select Service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your funding needs..."
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm resize-none"
                />
              </div>
              <ButtonMotion
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold shadow-lg"
              >
                Submit Request <Send className="w-4 h-4" />
              </ButtonMotion>
              <p className="text-xs text-gray-400 text-center">
                Your information is 100% secure and will never be shared.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
