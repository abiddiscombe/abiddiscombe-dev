'use client';
import { useSearchParams } from 'next/navigation';
import { Typography } from '@/components/Typography';
import { CodeSnippet } from '@/components/CodeSnippet';

export default function Restricted() {
  const sParams = useSearchParams();
  const ref = sParams.get('ref');
  const ets = getCurrentDateTime();
  return (
    <section>
      <Typography variant='body'>
        <small>Error @ {ets}</small>
      </Typography>
      <Typography variant='h2'>Access Restricted</Typography>
      <Typography variant='body'>
        You&apos;re likely seeing this page because you did not have valid credentials to access one
        of my services. If you believe this to be a mistake, please reach out.
      </Typography>
      {ref && (
        <>
          <Typography variant='body'>The service reported the following metadata:</Typography>
          <CodeSnippet>{ref}</CodeSnippet>
        </>
      )}
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
