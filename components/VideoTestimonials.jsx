'use client';

import { useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';
import { SectionWrap, FadeUp } from './MotionWrap';

const testimonials = [
  { id: 1, badge: 'SHORTS', title: 'How I got ₹25L Business Loan', category: 'Success Story' },
  { id: 2, badge: 'PMEGP', title: 'PMEGP helped me start my factory', category: 'Scheme Guide' },
  { id: 3, badge: 'SEED FUND', title: 'Startup India funded my dream', category: 'Startup' },
  { id: 4, badge: 'DPIIT', title: 'DPIIT registration in 7 days', category: 'Registration' },
  { id: 5, badge: 'SHORTS', title: 'From zero to ₹1Cr revenue', category: 'Success Story' },
  { id: 6, badge: 'CGTMSE', title: 'Unsecured loan without collateral', category: 'Scheme' },
  { id: 7, badge: 'PMEGP', title: 'Rural business transformation', category: 'Rural' },
  { id: 8, badge: 'SEED FUND', title: 'EdTech startup funding journey', category: 'Startup' },
  { id: 9, badge: 'SHORTS', title: 'My MSME loan experience', category: 'Success Story' },
];

const badgeColors = {
  SHORTS: 'bg-red-500',
  PMEGP: 'bg-green-500',
  'SEED FUND': 'bg-purple-500',
  DPIIT: 'bg-blue-500',
  CGTMSE: 'bg-orange-500',
};

export default function VideoTestimonials() {
  const [activeIndex, setActiveIndex] = useState(3);
  const shouldReduce = useReducedMotion();
  const containerRef = useRef(null);

  const prev = () => setActiveIndex((i) => (i > 0 ? i - 1 : testimonials.length - 1));
  const next = () => setActiveIndex((i) => (i < testimonials.length - 1 ? i + 1 : 0));

  return (
    <section className="py-16 lg:py-24 bg-gray-50 overflow-hidden" id="success">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrap className="text-center mb-12">
          <FadeUp>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
              Proof in Every <span className="gradient-text">Short.</span>
            </h2>
          </FadeUp>
          <FadeUp custom={1}>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Real entrepreneurs. Real funding. Watch their stories of success with our guidance.
            </p>
          </FadeUp>
          <FadeUp custom={2} className="flex items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-sm font-medium text-gray-700">4.9/5</span>
            </div>
            <span className="text-sm text-gray-500">5,000+ Happy Businesses</span>
            <span className="text-sm text-gray-500">₹100Cr+ Funds Raised</span>
          </FadeUp>
        </SectionWrap>
      </div>

      {/* Carousel */}
      <div className="relative" ref={containerRef}>
        <div className="flex items-center justify-center gap-4 py-8">
          {testimonials.map((item, index) => {
            const offset = index - activeIndex;
            const isActive = index === activeIndex;
            const absOffset = Math.abs(offset);

            if (absOffset > 3) return null;

            return (
              <motion.div
                key={item.id}
                className="relative flex-shrink-0 cursor-pointer"
                animate={shouldReduce ? {} : {
                  scale: isActive ? 1 : Math.max(0.7, 1 - absOffset * 0.12),
                  rotateY: offset * -5,
                  z: isActive ? 50 : -absOffset * 30,
                  opacity: absOffset > 2 ? 0.4 : 1,
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                onClick={() => setActiveIndex(index)}
                style={{ zIndex: 10 - absOffset }}
              >
                <div
                  className={`relative w-48 h-72 sm:w-56 sm:h-80 rounded-3xl overflow-hidden shadow-xl ${
                    isActive ? 'ring-4 ring-primary-400/50' : ''
                  }`}
                >
                  {/* Placeholder gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to-gray-900" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Play className="w-5 h-5 text-white fill-white" />
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-md text-[10px] font-bold text-white ${badgeColors[item.badge] || 'bg-gray-500'}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-sm font-medium leading-tight">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <span className="text-sm font-medium text-gray-500">
            {String(activeIndex + 1).padStart(2, '0')}/{String(testimonials.length).padStart(2, '0')}
          </span>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
