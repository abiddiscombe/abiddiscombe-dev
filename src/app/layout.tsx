import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Typography } from '@/components/Typography';
import { SocialLink } from '@/components/SocialLink';
import { ExternalLink } from '@/components/ExternalLink';

export const metadata: Metadata = {
  title: 'Archie Biddiscombe',
  description:
    'Archie is an Associate Software Engineer with a specialism in geospatial technologies.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(p: RootLayoutProps) {
  return (
    <html lang='en'>
      <head>
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://abiddiscombe.dev/' />
        <meta property='og:title' content="Archie Biddiscombe's Site" />
        <meta property='og:description' content={metadata.description || ''} />
        <link rel='icon' href='./favicon/favicon.ico' />
        <link rel='icon' type='image/png' sizes='32x32' href='./favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='./favicon/favicon-16x16.png' />
      </head>

      <body className='h-screen grid grid-rows-[auto,_1fr,_auto]'>
        <header className='px-8'>
          <div className='mx-auto max-w-3xl pb-8 pt-10 md:pt-24 xl:pt-28 flex items-center justify-between'>
            <Typography variant='h1'>
              <Link href='./'>
                Archie
                <br />
                <span className='text-fontLighter-light dark:text-fontDimmed-dark'>
                  Biddiscombe
                </span>
              </Link>
            </Typography>

            <nav className='flex items-center gap-5 md:gap-4'>
              <SocialLink type='email' />
              <SocialLink type='github' />
              <SocialLink type='linkedin' />
              <SocialLink type='literature' />
            </nav>
          </div>
        </header>

        <main className='px-8'>
          <div className='mx-auto max-w-3xl'>{p.children}</div>
        </main>

        <footer className='px-8'>
          <div className='mx-auto max-w-3xl pt-12 pb-8 flex flex-wrap gap-2 items-center justify-between'>
            <small className='text-fontLightest-light dark:text-fontLightest-dark'>
              &copy; Archie Biddiscombe
            </small>
            <small className='text-fontLightest-light dark:text-fontLightest-dark'>
              <ExternalLink
                href='https://github.com/abiddiscombe/abiddiscombe-dev'
                message='View Source'
              />
            </small>
          </div>
        </footer>
      </body>
    </html>
  );
}
