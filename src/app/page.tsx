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
      summary: <>Archived. An API for returning country metadata, distances, and geometry.</>,
    },
  ];

  return (
    <>
      <Typography variant='body'>
        Hi there! I&apos;m an Associate Software Engineer currently working at{' '}
        <ExternalLink
          href='https://www.ordnancesurvey.co.uk'
          message='Ordnance Survey'
          noArrow={true}
        />
        , where I help to build APIs and web solutions that underpin critical national services.
      </Typography>

      <Typography variant='body'>
        <em className='pr-4'>Currently practising:</em>{' '}
        <ExternalLink href='https://react.dev' message='React' noArrow={true} />,{' '}
        <ExternalLink href='https://tailwindcss.com/' message='Tailwind' noArrow={true} />, and{' '}
        <ExternalLink
          href='https://emotion.sh/docs/introduction'
          message='Emotion'
          noArrow={true}
        />{' '}
        on the frontend, alongside geo utils such as{' '}
        <ExternalLink
          href='https://maplibre.org/maplibre-gl-js/docs/'
          message='MapLibre'
          noArrow={true}
        />{' '}
        and <ExternalLink href='https://turfjs.org/' message='Turf' noArrow={true} />. For APIs and
        backend things I&apos;m mostly using{' '}
        <ExternalLink
          href='https://hub.docker.com/u/abiddiscombe'
          message='Docker'
          noArrow={true}
        />
        , <ExternalLink href='https://deno.com' message='Deno' noArrow={true} />, and{' '}
        <ExternalLink href='https://hono.dev' message='Hono' noArrow={true} />, alongside{' '}
        <ExternalLink href='https://mongodb.com' message='MongoDB' noArrow={true} /> or{' '}
        <ExternalLink href='https://postgresql.org' message='Postgres' noArrow={true} />. I usually
        deploy to <ExternalLink href='https://www.render.com' message='Render' noArrow={true} />,{' '}
        <ExternalLink href='https://azure.microsoft.com' message='Azure' noArrow={true} />, or my
        home server.
      </Typography>

      <Typography variant='body'>
        <em className='pr-4'>Away from the desk:</em> I love cooking and exploring new places. I
        have a BSc in Geography from{' '}
        <ExternalLink
          href='https://www.durham.ac.uk/departments/academic/geography/'
          message='Durham University'
          noArrow={true}
        />{' '}
        where I specialised in GIS and Glaciology.
      </Typography>

      <Typography variant='h2'>Recent Projects</Typography>

      <div className='grid gap-4 grid-cols-1 sm:grid-cols-3'>
        {projects.map((project) => (
          <ProjectCard key={project.href} {...project} />
        ))}
      </div>
    </>
  );
}

interface ProjectCardProps {
  href: string;
  name: string;
  summary: React.ReactNode;
}

function ProjectCard(p: ProjectCardProps) {
  return (
    <div className='p-[1px] shadow-sm hover:shadow rounded bg-fontLightest-light dark:bg-fontLightest-dark hover:bg-gradient-to-tr from-[#E55D87] to-[#5FC3E4]'>
      <article className='p-4 bg-back-light dark:bg-back-dark rounded'>
        <Typography variant='h3'>
          <ExternalLink href={p.href} message={p.name} />
        </Typography>
        <p className='mt-2 tracking-wide leading-relaxed text-sm text-fontLighter-light dark:text-fontLighter-dark'>
          {p.summary}
        </p>
      </article>
    </div>
  );
}
