'use client';

import { motion, useReducedMotion } from 'framer-motion';

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export function SectionWrap({ children, className = '', delay = 0 }) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function FadeUp({ children, className = '', custom = 0, as = 'div' }) {
  const shouldReduce = useReducedMotion();
  const Component = motion[as] || motion.div;

  if (shouldReduce) {
    const Tag = as || 'div';
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={className}
      variants={fadeUpVariants}
      custom={custom}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {children}
    </Component>
  );
}

export function ButtonMotion({ children, className = '', onClick, type = 'button' }) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return (
      <button type={type} className={className} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <motion.button
      type={type}
      className={className}
      onClick={onClick}
      whileHover={{ scale: 1.03, boxShadow: '0 10px 40px rgba(59,130,246,0.3)' }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
}

export function CardMotion({ children, className = '', custom = 0 }) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={fadeUpVariants}
      custom={custom}
      whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
