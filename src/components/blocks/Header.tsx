'use client';
import Link from 'next/link';
import { Typography } from '../Typography';
import { GitHub } from '../icons/GitHub';
import { LinkedIn } from '../icons/LinkedIn';

export function Header() {
  const links = [
    {
      href: 'https://github.com/abiddiscombe',
      text: 'GitHub',
      content: <GitHub />,
      useNewTab: true,
    },
    {
      href: 'https://linkedin.com/in/archiebiddiscombe',
      text: 'LinkedIn',
      content: <LinkedIn />,
      useNewTab: true,
    },
  ];

  return (
    <header className='py-10 md:pt-24 xl:pt-28'>
      <nav className='mb-2 flex gap-6 items-center'>
        <Link
          href='/'
          className='flex-grow hover:underline underline-offset-2 decoration-l3-light dark:decoration-l3-dark'
        >
          <Typography variant='h1'>
            Archie <br className='sm:hidden' />
            Biddiscombe
          </Typography>
        </Link>
        {links.map((link) => (
          <a
            key={link.href}
            target={link.useNewTab ? '_blank' : ''}
            aria-label={`${link.text} (Opens in a New Tab)`}
            href={link.href}
            className='text-xl text-l2-light hover:text-l3-light dark:text-l2-dark dark:hover:text-l3-dark'
          >
            {link.content}
          </a>
        ))}
      </nav>
      <Typography variant='subtitle'>
        Assoc. Software Engineer
        <br />
        United Kingdom
      </Typography>
    </header>
  );
}
