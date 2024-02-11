'use client';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0 }}
    >
      <header className='pb-6'>
        <h1 className='uppercase font-mono font-medium tracking-widest text-l3-light dark:text-l3-dark'>
          Archie Biddiscombe
          <span aria-hidden='true' className='pl-1 animate-ping'>
            _
          </span>
        </h1>
      </header>
    </motion.div>
  );
}
