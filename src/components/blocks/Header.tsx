import Link from 'next/link';
import { Typography } from '../Typography';

export function Header() {
  return (
    <header className='px-8 pb-4 pt-14 md:pt-16'>
      <div className='mx-auto max-w-2xl '>
        <Link
          href='/'
          className='hover:underline underline-offset-2 decoration-l3-light dark:decoration-l3-dark'
        >
          <h1 className='pb-2 uppercase tracking-widest text-l3-light dark:text-l3-dark font-bold'>
            Archie Biddiscombe
          </h1>
        </Link>
        <Typography variant='subtitle'>
          Assoc. Software Engineer
          <br />
          United Kingdom
        </Typography>
      </div>
    </header>
  );
}
