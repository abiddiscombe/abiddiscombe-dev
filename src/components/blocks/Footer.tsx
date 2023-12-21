'use client';
import { motion } from 'framer-motion';
import { Typography } from '../Typography';

export function Footer() {
  return (
    <footer className='pt-10 pb-6'>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0 }}
      >
        <Typography variant='small'>&copy; Archie Biddiscombe</Typography>
      </motion.div>
    </footer>
  );
}
