'use client';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { Typography } from '@/components/Typography';
import { ExternalLink } from '@/components/ExternalLink';

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0 }}
      >
        <Typography variant='body'>
          Hey! I&apos;m an Associate Software Engineer, working for{' '}
          <ExternalLink href='https://www.os.uk' message='Ordnance Survey' />.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Typography variant='body'>
          I&apos;m interested in crafting <ExternalLink href='https://react.dev' message='React' />
          -based web applications, exploring new geospatial technologies, and designing APIs or
          other backend things. Currently deploying to{' '}
          <ExternalLink href='https://azure.com' message='Azure' />,{' '}
          <ExternalLink href='https://cloudflare.com' message='Cloudflare' />, or with{' '}
          <ExternalLink href='https://docker.com' message='Docker' /> on my home server.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <Typography variant='body'>
          Away from the desk, I love cooking and exploring new places. I have a BSc in Geography
          from{' '}
          <ExternalLink
            href='https://www.durham.ac.uk/departments/academic/geography/'
            message='Durham University'
          />{' '}
          where I specialised in GIS and Glaciology.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <Typography variant='h2'>Recent Projects</Typography>
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2'>
          {projects.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </div>
      </motion.div>
    </>
  );
}

interface ProjectCardProps {
  href: string;
  name: string;
  summary: React.ReactNode;
  isArchived: boolean;
  isWorkProject: boolean;
  tags: {
    href: string;
    name: string;
  }[];
}

function ProjectCard(p: ProjectCardProps) {
  return (
    <article className='p-4 bg-back-light dark:bg-back-dark rounded border border-fontLightest-light dark:border-fontLightest-dark hover:border-fontLighter-light hover:dark:border-fontLighter-dark'>
      <Typography variant='h3'>
        <ExternalLink href={p.href} message={p.name} useArrow={true} />
      </Typography>
      <Typography variant='small'>
        {p.isArchived && <span className='text-amber-light dark:text-amber-dark'>Archived. </span>}
        {p.isWorkProject && (
          <span className='text-purple-light dark:text-purple-dark'>Work Project. </span>
        )}
        {p.summary}
      </Typography>
      <div className='mt-2 flex flex-wrap gap-2'>
        {p.tags.map((tag, i) => (
          <Typography variant='small' key={tag.href}>
            <ExternalLink href={tag.href} message={`${tag.name}`} />
            {i !== p.tags.length - 1 && <span className='ml-2'>-</span>}
          </Typography>
        ))}
      </div>
    </article>
  );
}
