'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Wallet, Factory, Store, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionWrap, FadeUp } from './MotionWrap';

const schemes = [
  {
    icon: Wallet,
    title: 'PMMY - MUDRA',
    badge: 'Popular',
    badgeColor: 'bg-green-100 text-green-700',
    amount: '₹50K – ₹10L',
    description: 'Pradhan Mantri Mudra Yojana for micro & small businesses. Shishu, Kishore, and Tarun categories based on your growth stage.',
  },
  {
    icon: Factory,
    title: 'PMFME',
    badge: 'Food Sector',
    badgeColor: 'bg-orange-100 text-orange-700',
    amount: '₹10L – ₹35L',
    description: 'PM Formalisation of Micro Food Processing Enterprises scheme with credit-linked subsidy for food processing units.',
  },
  {
    icon: Store,
    title: 'PMEGP',
    badge: 'Manufacturing',
    badgeColor: 'bg-purple-100 text-purple-700',
    amount: '₹25L – ₹50L',
    description: 'Prime Minister Employment Generation Programme offering margin money subsidy up to 35% for new manufacturing & service units.',
  },
];

export default function FundingSchemes() {
  const [active, setActive] = useState(0);
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrap className="text-center mb-12">
          <FadeUp>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
              Unlock funding from <span className="gradient-text">₹50k to ₹10Cr+</span>
            </h2>
          </FadeUp>
          <FadeUp custom={1}>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Government-backed schemes designed to fuel Indian businesses at every stage.
            </p>
          </FadeUp>
        </SectionWrap>

        <div className="grid md:grid-cols-3 gap-6">
          {schemes.map((scheme, i) => (
            <motion.div
              key={scheme.title}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col"
              initial={shouldReduce ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={shouldReduce ? {} : { y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                  <scheme.icon className="w-6 h-6 text-primary-600" />
                </div>
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${scheme.badgeColor}`}>
                  {scheme.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{scheme.title}</h3>
              <div className="mt-3 bg-primary-50 rounded-xl px-4 py-3 border border-primary-100">
                <p className="text-xs text-primary-600 font-medium">Funding Range</p>
                <p className="text-lg font-extrabold text-primary-800">{scheme.amount}</p>
              </div>
              <p className="mt-4 text-sm text-gray-600 flex-1">{scheme.description}</p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700">
                Apply Now <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Dot navigation */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {schemes.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === active ? 'bg-primary-600 w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
