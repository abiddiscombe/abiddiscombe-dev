'use client';
import { motion } from 'framer-motion';
import { LinkButton } from './LinkButton';
import { GitHub } from './icons/GitHub';
import { LinkedIn } from './icons/LinkedIn';

export function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -14 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay: 0.4 }}
    >
      <footer className='mt-6 flex items-center gap-4'>
        <LinkButton
          href='https://linkedin.com/in/archiebiddiscombe'
          icon={<LinkedIn />}
          label='LinkedIn'
        />
        <LinkButton href='https://github.com/abiddiscombe' icon={<GitHub />} label='GitHub' />
      </footer>
    </motion.div>
  );
}
