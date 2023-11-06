import { Typography } from '@/components/Typography';
import { ExternalLink } from '@/components/ExternalLink';
import { InternalLink } from '@/components/InternalLink';

export default function Home() {
  return (
    <section>
      <img
        src='./media/archie.png'
        alt='Panorama Image of Archie Biddiscombe. Background contains cliffs and ocean.'
        className='hidden sm:block mb-6 rounded shadow-sm opacity-90'
      />

      <img
        src='./media/archieMobile.png'
        alt='Image of Archie Biddiscombe. Background contains cliffs and ocean.'
        className='block sm:hidden mb-6 rounded shadow-sm opacity-90 w-full h-60 object-cover'
      />

      <Typography variant='body'>
        <i>Hey there!</i> I&apos;m an Associate Software Engineer, currently working at{' '}
        <ExternalLink href='https://www.ordnancesurvey.co.uk' message='Ordnance Survey' />.{' '}
        <br className='hidden sm:inline' />I help to build APIs and web solutions which in turn
        underpin critical national services.
      </Typography>

      <Typography variant='body'>
        My <InternalLink href='./tools' message='tech stack' /> is focused on JavaScript and
        TypeScript. I mostly use NodeJS and React for frontend work though I prefer to use Deno to
        build REST APIs and microservices. I&apos;m often exploring new technologies (especially
        those with a geospatial theme) and different ways of doing things by code.
      </Typography>

      <Typography variant='body'>
        Away from the desk, I love cooking, delving into Spotify&apos;s Release Radar, and exploring
        new places. I have a BSc in Geography from{' '}
        <ExternalLink
          href='https://www.durham.ac.uk/departments/academic/geography/'
          message='Durham University'
        />{' '}
        where I specialised in GIS and Glaciology. My socials are listed at the top of this page,
        feel free to also get in touch directly:
      </Typography>

      <Typography variant='body'>hello [at] abiddiscombe [dot] dev</Typography>
    </section>
  );
}
