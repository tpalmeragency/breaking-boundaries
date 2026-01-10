'use client';
import { motion } from 'framer-motion';

export default function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }} // Triggers 100px before it enters view
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
