'use client';

import { motion, useReducedMotion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionWrap, FadeUp, ButtonMotion } from './MotionWrap';

const steps = [
  { number: '01', label: 'Free Consultation', desc: 'Discuss your needs with our experts' },
  { number: '02', label: 'Profile Assessment', desc: 'We evaluate your eligibility & docs' },
  { number: '03', label: 'Scheme Matching', desc: 'Best funding schemes identified' },
  { number: '04', label: 'Application Filed', desc: 'Complete application submitted' },
  { number: '05', label: 'Funds Disbursed', desc: 'Money credited to your account' },
];

export default function FiveStepJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-16 lg:py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrap className="text-center mb-12">
          <FadeUp>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider">
              How It Works
            </span>
          </FadeUp>
          <FadeUp custom={1}>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
              Your Funding Journey in 5 Steps
            </h2>
          </FadeUp>
        </SectionWrap>

        {/* Stepper */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gray-200">
            <motion.div
              className="h-full bg-primary-500 origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView && !shouldReduce ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="flex flex-col items-center text-center"
                initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2 + 0.3, duration: 0.4 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-white border-2 border-primary-500 flex items-center justify-center shadow-md relative z-10"
                  initial={shouldReduce ? {} : { scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.2 + 0.3, type: 'spring', stiffness: 200 }}
                >
                  <span className="text-lg font-bold text-primary-700">{step.number}</span>
                </motion.div>
                <h4 className="mt-3 text-sm font-bold text-gray-900">{step.label}</h4>
                <p className="mt-1 text-xs text-gray-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <FadeUp custom={3} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 bg-white rounded-2xl p-6 shadow-md border border-gray-100">
          <p className="text-gray-700 font-medium">Ready to start your journey?</p>
          <ButtonMotion className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-600 text-white font-semibold shadow-md">
            Start Free Consultation <ArrowRight className="w-4 h-4" />
          </ButtonMotion>
        </FadeUp>
      </div>
    </section>
  );
}
