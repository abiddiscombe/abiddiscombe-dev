import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/blocks/Header';
import { Main } from '@/components/blocks/Main';
import { Nav } from '@/components/blocks/Nav';

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

      <body>
        <Nav />
        <Header />
        <Main outlet={p.children} />
      </body>
    </html>
  );
}
