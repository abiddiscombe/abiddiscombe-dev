'use client';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { Typography } from '@/components/Typography';
import { ProjectCard } from '@/components/ProjectCard';
import { ExternalLink } from '@/components/ExternalLink';

export default function Home() {
  return (
    <>
      <section>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0 }}
        >
          <Typography variant='h2'>Hello</Typography>
          <Typography variant='body'>
            I&apos;m an Associate Software Engineer, currently working at{' '}
            <ExternalLink href='https://www.os.uk' message='Ordnance Survey' />.
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Typography variant='body'>
            I&apos;m interested in crafting{' '}
            <ExternalLink href='https://react.dev' message='React' />
            -based web applications, exploring new geospatial technologies, and developing APIs or
            other backend things. Currently deploying to{' '}
            <ExternalLink href='https://azure.com' message='Azure' />,{' '}
            <ExternalLink href='https://cloudflare.com' message='Cloudflare' />, and with{' '}
            <ExternalLink href='https://docker.com' message='Docker' /> directly on my homelab.
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Typography variant='body'>
            Away from the desk, I love cooking and exploring new places. I have a BSc in Geography
            from{' '}
            <ExternalLink
              href='https://www.durham.ac.uk/departments/academic/geography/'
              message='Durham University'
            />{' '}
            where I specialised in GIS, climate change, and Glaciology.
          </Typography>
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Typography variant='h2'>Recently</Typography>
          <div className='py-2 grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2'>
            {projects.map((project) => (
              <ProjectCard key={project.href} {...project} />
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
