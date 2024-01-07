'use client';
import Link from 'next/link';
import { Typography } from '../Typography';
import { Github, Linkedin } from 'react-bootstrap-icons';

export function Header() {
  const links = [
    {
      href: 'https://github.com/abiddiscombe',
      text: 'GitHub',
      content: <Github />,
      useNewTab: true,
    },
    {
      href: 'https://linkedin.com/in/archiebiddiscombe',
      text: 'LinkedIn',
      content: <Linkedin />,
      useNewTab: true,
    },
  ];

  return (
    <header className='pb-6 pt-10 md:pt-24 xl:pt-28'>
      <nav className='flex gap-6 sm:gap-4 items-center'>
        <Link
          href='/'
          className='flex-grow hover:underline underline-offset-2 decoration-l3-light dark:decoration-l3-dark'
        >
          <Typography variant='h1'>
            A<span className='hidden sm:inline'>rchie</span>
            <span className='inline sm:hidden'>.</span> Biddiscombe
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
