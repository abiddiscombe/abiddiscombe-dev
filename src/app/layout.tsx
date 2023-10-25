import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header/Header';
import { NavBar } from '@/components/NavBar/NavBar';
import { Footer } from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Archie Biddiscombe',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(p: RootLayoutProps) {
  const metaDescription =
    'Archie is an Associate Software Engineer with a specialism in geospatial.';
  return (
    <html lang='en'>
      <head>
        <meta name='theme-color' content='#222' />
        <meta name='description' content={metaDescription} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://abiddiscombe.dev/' />
        <meta property='og:title' content="Archie Biddiscombe's Site" />
        <meta property='og:description' content={metaDescription} />
        <meta property='og:image' content='./media/archie.png' />
        <link rel='icon' href='./favicon/favicon.ico' />
        <link rel='icon' type='image/png' sizes='32x32' href='./favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='./favicon/favicon-16x16.png' />
      </head>

      <body className='overflow-y-scroll text-zinc-700 dark:text-zinc-200 dark:bg-zinc-800 h-screen grid grid-rows-[auto,_auto,_1fr,_auto]'>
        <Header />
        <NavBar />

        <main className='p-8 pt-2'>
          <div className='mx-auto max-w-2xl'>{p.children}</div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
