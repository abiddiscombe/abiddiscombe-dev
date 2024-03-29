'use client';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0 }}
    >
      <header className='pb-6'>
        <h1 className='font-mono font-medium uppercase tracking-widest text-l3-light dark:text-l3-dark'>
          Archie Biddiscombe
          <span aria-hidden='true' className='animate-ping pl-1'>
            _
          </span>
        </h1>
      </header>
    </motion.div>
  );
}
