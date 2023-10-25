import { Typography } from '@/components/Typography';
import { PortfolioCard } from '@/components/PortfolioCard';

export default function Portfolio() {
  const projects = [
    {
      id: 'denofinder',
      title: 'Deno Finder',
      isArchived: false,
      isWorkProject: false,
      summary: <>A public utility for identifying one&apos;s nearest Deno Deploy edge region.</>,
      links: [
        {
          href: 'https://github.com/abiddiscombe/deno-finder',
          title: 'GitHub',
        },
        {
          href: 'https://finder.deno.dev',
          title: 'Demo',
        },
      ],
    },
    {
      id: 'whereabouts',
      title: 'Whereabouts API',
      isArchived: false,
      isWorkProject: false,
      summary: <>A GeoJSON Point Feature API with support for custom datasets and filtering.</>,
      links: [
        {
          href: 'https://github.com/abiddiscombe/whereabouts',
          title: 'GitHub',
        },
        {
          href: 'https://whereabouts.demo.archiebiddiscombe.net',
          title: 'Demo',
        },
      ],
    },
    {
      id: 'countries',
      title: 'Countries API',
      isArchived: true,
      isWorkProject: false,
      summary: <>An API for returning country metadata, ISO codes and geometry.</>,
      links: [
        {
          href: 'https://github.com/abiddiscombe/countries',
          title: 'GitHub',
        },
        {
          href: 'https://countries.demo.archiebiddiscombe.net',
          title: 'Demo',
        },
      ],
    },
    {
      id: 'osdatahub-js',
      title: 'OS Data Hub - JS SDK',
      isArchived: false,
      isWorkProject: true,
      summary: <>A JavaScript package making OS&apos; APIs accessible to developers.</>,
      links: [
        {
          href: 'https://github.com/OrdnanceSurvey/osdatahub-js',
          title: 'GitHub',
        },
        {
          href: 'https://www.npmjs.com/package/osdatahub/v/0.1.1',
          title: 'NPM',
        },
      ],
    },
    {
      id: 'postmangeojson',
      title: 'PostmanGeoJSON',
      isArchived: false,
      isWorkProject: true,
      summary: <>A Leaflet-based GeoJSON plugin for Postman&apos;s Visualizer tool.</>,
      links: [
        {
          href: 'https://github.com/OrdnanceSurvey/PostmanGeoJSON',
          title: 'GitHub',
        },
      ],
    },
  ];
  return (
    <section>
      <Typography variant='body'>
        Here&apos;s a list of public things I&apos;ve been working on recently.
      </Typography>
      <div className='my-4 grid gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3'>
        {projects.map((project) => (
          <PortfolioCard
            key={project.id}
            img={project.id}
            title={project.title}
            summary={project.summary}
            isArchived={project.isArchived}
            isWorkProject={project.isWorkProject}
            links={project.links}
          />
        ))}
      </div>
    </section>
  );
}
