import { Typography } from '@/components/Typography';
import { ExternalLink } from '@/components/ExternalLink';

export default function Home() {
  const projects = [
    {
      name: 'Deno Finder',
      href: 'https://finder.deno.dev',
      summary: (
        <>A public utility for identifying one&apos;s nearest Deno Deploy edge compute region.</>
      ),
    },
    {
      name: 'Whereabouts',
      href: 'https://github.com/abiddiscombe/whereabouts',
      summary: <>A Bring-Your-Own-Dataset geospatial point feature API with textual search.</>,
    },
    {
      name: 'OS Data Hub JS SDK',
      href: 'https://github.com/OrdnanceSurvey/osdatahub-js',
      summary: <>A JavaScript package making Ordnance Survey APIs accessible to developers.</>,
    },
    {
      name: 'Postman GeoJSON',
      href: 'https://github.com/OrdnanceSurvey/PostmanGeoJSON',
      summary: <>A Leaflet-based GeoJSON map plugin for Postman&apos;s Visualizer tool.</>,
    },
    {
      name: 'Countries API',
      href: 'https://github.com/abiddiscombe/countries',
      summary: <>An API for returning country metadata, ISO codes and geometry. Archived.</>,
    },
  ];

  return (
    <>
      <Typography variant='body'>
        I&apos;m an Associate Software Engineer, currently working at{' '}
        <ExternalLink href='https://www.ordnancesurvey.co.uk' message='Ordnance Survey' /> where I
        help to build APIs and web solutions which in turn underpin critical national services.
      </Typography>

      <Typography variant='body'>
        I use <ExternalLink href='https://react.dev' message='React' />,{' '}
        <ExternalLink href='https://nextjs.org' message='NextJS' />,{' '}
        <ExternalLink href='https://tailwindcss.com/' message='Tailwind' />, and{' '}
        <ExternalLink href='https://emotion.sh/docs/introduction' message='Emotion' /> on the
        frontend, and <ExternalLink href='https://deno.com' message='Deno' />,{' '}
        <ExternalLink href='https://hono.dev' message='Hono' />, and{' '}
        <ExternalLink href='https://hub.docker.com/u/abiddiscombe' message='Docker' /> to build REST
        APIs which talk to <ExternalLink href='https://mongodb.com' message='MongoDB' /> and{' '}
        <ExternalLink href='https://postgresql.org' message='Postgres' />. I&apos;m currently
        deploying to <ExternalLink href='https://www.render.com' message='Render' />,{' '}
        <ExternalLink href='https://www.cloudflare.com' message='Cloudflare' />,{' '}
        <ExternalLink href='https://azure.microsoft.com' message='Azure' />, or my home server. My
        creativity is fueled by a mix of coffee and Spotify playlists.
      </Typography>

      <Typography variant='body'>
        Away from the desk, I love cooking and exploring new places. I have a BSc in Geography from{' '}
        <ExternalLink
          href='https://www.durham.ac.uk/departments/academic/geography/'
          message='Durham University'
        />{' '}
        where I specialised in GIS, Climate Change, and Glaciology.
      </Typography>

      <Typography variant='h2'>Recent Projects</Typography>

      <div className='my-3 grid gap-5 grid-cols-1 sm:grid-cols-3'>
        {projects.map((project) => (
          <article key={project.href}>
            <Typography variant='h3'>
              <ExternalLink href={project.href} message={project.name} />
            </Typography>
            <Typography variant='bodyLesser'>{project.summary}</Typography>
          </article>
        ))}
      </div>
    </>
  );
}
