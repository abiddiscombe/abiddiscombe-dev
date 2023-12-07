import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/blocks/Header';
import { Footer } from '@/components/blocks/Footer';
import { Navigation } from '@/components/blocks/Navigation';

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

      <body className='min-h-screen md:overflow-y-scroll bg-gradient-to-b from-back-light/40 to-back-light dark:from-back-dark/30 dark:to-back-dark'>
        <Header />
        <Navigation />
        <main className='px-8'>
          <div className='mx-auto max-w-2xl'>{p.children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
