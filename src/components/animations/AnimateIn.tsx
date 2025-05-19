'use client';

import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

type AnimationVariant = 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'zoomIn' | 'staggered';

interface AnimateInProps extends MotionProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  staggerIndex?: number;
  className?: string;
}

const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  }
};

export function AnimateIn({
  children,
  variant = 'fadeIn',
  delay = 0,
  duration = 0.5,
  staggerIndex = 0,
  className = '',
  ...rest
}: AnimateInProps) {
  const getVariant = () => {
    if (variant === 'staggered') {
      return {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { delay: 0.1 * staggerIndex + delay } }
      };
    }
    return variants[variant];
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration, delay }}
      variants={getVariant()}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
