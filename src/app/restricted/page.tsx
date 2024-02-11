'use client';
import { useSearchParams } from 'next/navigation';
import { Typography } from '@/components/Typography';

export default function Restricted() {
  const sParams = useSearchParams();
  const ref = sParams.get('ref');
  const ets = getCurrentDateTime();
  return (
    <section>
      <Typography variant='h2'>Access Restricted</Typography>
      <Typography variant='body'>
        You&apos;re likely seeing this page because you did not have valid credentials to access one
        of my services. If this is a mistake, please reach out.
      </Typography>
      {ref && (
        <>
          <Typography variant='body'>The service reported the following metadata:</Typography>
          <code className='mb-6 block rounded border border-l1-light bg-l1-light/20 px-6 py-2 text-sm font-light tracking-tight dark:border-l1-dark dark:bg-l1-dark/20'>
            {ref}
          </code>
        </>
      )}
      <Typography variant='body'>
        <small>{ets}</small>
      </Typography>
    </section>
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
