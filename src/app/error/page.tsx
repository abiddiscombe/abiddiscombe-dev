'use client';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { Typography } from '@/components/Typography';

export default function Error() {
  const sParams = useSearchParams();
  const ref = sParams.get('ref');
  const ets = getCurrentDateTime();
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <Typography variant='h2'>Uh oh - that&apos;s an error.</Typography>
      <Typography variant='body'>
        Something went wrong whilst trying to access one of my online services.
        <br />
        If this keeps happening, please reach out.
      </Typography>
      {ref && (
        <>
          <Typography variant='body'>The service reported the following information:</Typography>
          <code className='mb-6 block rounded border border-l1-light bg-l1-light/20 px-6 py-2 text-sm font-light tracking-tight dark:border-l1-dark dark:bg-l1-dark/20'>
            {ref}
          </code>
        </>
      )}
      <Typography variant='body'>
        <small>{ets}</small>
      </Typography>
    </motion.div>
  );
}

function getCurrentDateTime() {
  // Function Source: ChatGPT
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  return formattedDateTime;
}
