'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const stats = [
  { value: 1339, suffix: '+', label: 'Businesses Funded' },
  { value: 18, suffix: '%', label: 'Lower Interest Rates' },
  { value: 26, prefix: '₹', suffix: 'Cr+', label: 'Disbursed This Quarter' },
  { value: 5.0, suffix: '★', label: 'Client Rating', decimals: 1 },
];

function CountUp({ target, prefix = '', suffix = '', decimals = 0, isInView, shouldReduce }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || shouldReduce) {
      setCount(target);
      return;
    }

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target, shouldReduce]);

  return (
    <span>
      {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}
    </span>
  );
}

export default function StatsStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-12 lg:py-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center p-6"
              initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.4 }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-700">
                <CountUp
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  isInView={isInView}
                  shouldReduce={shouldReduce}
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
