import { Typography } from '@/components/Typography';
import { ExternalLink } from '@/components/ExternalLink';

export default function Home() {
  const projects = [
    {
      name: 'Deno Finder',
      href: 'https://finder.deno.dev',
      summary: <>A utility for identifying one&apos;s nearest Deno Deploy edge compute region.</>,
    },
    {
      name: 'Whereabouts',
      href: 'https://github.com/abiddiscombe/whereabouts',
      summary: <>A Bring-Your-Own-Data Geospatial Point Feature API with textual search.</>,
    },
    {
      name: 'OS Data Hub JS SDK',
      href: 'https://github.com/OrdnanceSurvey/osdatahub-js',
      summary: (
        <>A JavaScript SDK for Ordnance Survey APIs, making them accessible to developers.</>
      ),
    },
    {
      name: 'Postman GeoJSON',
      href: 'https://github.com/OrdnanceSurvey/PostmanGeoJSON',
      summary: <>A map (via Leaflet) GeoJSON response plugin for Postman&apos;s Visualizer tool.</>,
    },
    {
      name: 'Countries API',
      href: 'https://github.com/abiddiscombe/countries',
      summary: (
        <>
          {' '}
          An API for returning country metadata and geometry. <em>Archived.</em>
        </>
      ),
    },
  ];

  return (
    <>
      <Typography variant='body'>
        Hi there! I&apos;m an Associate Software Engineer currently working at{' '}
        <ExternalLink href='https://www.ordnancesurvey.co.uk' message='Ordnance Survey' />, where I
        help to build APIs and web solutions that underpin critical national services.
      </Typography>

      <Typography variant='body'>
        <em className='pr-4'>Currently practising:</em>{' '}
        <ExternalLink href='https://react.dev' message='React' />,{' '}
        <ExternalLink href='https://tailwindcss.com/' message='Tailwind' />, and{' '}
        <ExternalLink href='https://emotion.sh/docs/introduction' message='Emotion' /> on the
        frontend, alongside geo utils such as{' '}
        <ExternalLink href='https://maplibre.org/maplibre-gl-js/docs/' message='MapLibre' /> and{' '}
        <ExternalLink href='https://turfjs.org/' message='Turf' />. For APIs and backend things
        I&apos;m mostly using{' '}
        <ExternalLink href='https://hub.docker.com/u/abiddiscombe' message='Docker' />,{' '}
        <ExternalLink href='https://deno.com' message='Deno' />, and{' '}
        <ExternalLink href='https://hono.dev' message='Hono' />, alongside{' '}
        <ExternalLink href='https://mongodb.com' message='MongoDB' /> or{' '}
        <ExternalLink href='https://postgresql.org' message='Postgres' />. I usually deploy to{' '}
        <ExternalLink href='https://www.render.com' message='Render' />,{' '}
        <ExternalLink href='https://azure.microsoft.com' message='Azure' />, or my home server.
      </Typography>

      <Typography variant='body'>
        <em className='pr-4'>Away from the desk:</em> I love cooking and exploring new places. I
        have a BSc in Geography from{' '}
        <ExternalLink
          href='https://www.durham.ac.uk/departments/academic/geography/'
          message='Durham University'
        />{' '}
        where I specialised in GIS and Glaciology.
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
