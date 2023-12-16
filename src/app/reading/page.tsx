'use client';
import { motion } from 'framer-motion';
import { ExternalLink } from '@/components/ExternalLink';
import { Typography } from '@/components/Typography';
import { reading } from '@/data/reading';

export default function Literature() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0 }}
      >
        <Typography variant='body'>
          This is a collection of literature I&apos;ve discovered on my learning journey. I&apos;m
          collating this list for my own reflection, perhaps you&apos;ll find it useful too!
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {reading.map((section, i) => (
          <div key={section.label}>
            <Typography variant='h2'>{section.label}</Typography>
            {section.entries.map((entry) => (
              <article
                key={entry.href}
                className='mb-4 p-4 bg-back-light dark:bg-back-dark rounded border border-fontLightest-light dark:border-fontLightest-dark hover:border-fontLighter-light hover:dark:border-fontLighter-dark'
              >
                <Typography variant='h3'>
                  <ExternalLink href={entry.href} message={entry.title} useArrow={true} />
                </Typography>
                <p className='text-sm text-fontLighter-light dark:text-fontLighter-dark'>
                  {entry.author}
                  {entry.date && ` (${entry.date})`}.{' '}
                  {entry.format !== 'article' && <i>{entry.format}.</i>}
                </p>
              </article>
            ))}
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <Typography variant='body'>
          <i>
            FYI: I&apos;ll amend this list as articles become outdated and new ones are released.
          </i>
        </Typography>
      </motion.div>
    </>
  );
}
