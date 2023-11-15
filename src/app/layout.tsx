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
        <meta property='og:image' content='./media/archie.png' />
        <link rel='icon' href='./favicon/favicon.ico' />
        <link rel='icon' type='image/png' sizes='32x32' href='./favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='./favicon/favicon-16x16.png' />
      </head>

      <body className='px-8 mx-auto max-w-3xl h-screen grid grid-rows-[auto,_1fr,_auto]'>
        <header className='pb-8 md:pb-4 pt-10 md:pt-24 flex items-center justify-between'>
          <Typography variant='h1'>
            <Link href='./'>
              Archie
              <br />
              <span className='text-frontDimmed-light dark:text-frontDimmed-dark'>Biddiscombe</span>
            </Link>
          </Typography>

          <nav className='flex items-center gap-4'>
            <SocialLink type='email' />
            <SocialLink type='github' />
            <SocialLink type='linkedin' />
          </nav>
        </header>

        <main className='py-2'>{p.children}</main>

        <footer className='pt-12 pb-8 flex flex-wrap gap-2 items-center justify-between text-frontDimmed-light dark:text-frontDimmed-dark '>
          <small>&copy; Archie Biddiscombe</small>
          <small>
            <ExternalLink
              href='https://github.com/abiddiscombe/abiddiscombe-dev'
              message='View Source'
            />
          </small>
        </footer>
      </body>
    </html>
  );
}
