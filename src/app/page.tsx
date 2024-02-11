'use client';
import { motion } from 'framer-motion';
import { Typography } from '@/components/Typography';
import { LinkButton } from '@/components/LinkButton';
import { ExternalLink } from '@/components/ExternalLink';
import { GitHub } from '@/components/icons/GitHub';
import { LinkedIn } from '@/components/icons/LinkedIn';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <Typography variant='body'>
        Hey there! I&apos;m an Associate Software Engineer based in the UK and currently working for{' '}
        <ExternalLink href='https://www.os.uk' message='Ordnance Survey' />.
      </Typography>

      <Typography variant='body'>
        My areas of specialism include building{' '}
        <ExternalLink href='https://react.dev' message='React' /> frontends with various styling
        libraries (e.g. <ExternalLink href='https://tailwindcss.com' message='Tailwind' />,{' '}
        <ExternalLink href='https://emotion.sh' message='Emotion' />,{' '}
        <ExternalLink href='https://mui.com' message='MUI' />) and prototyping APIs (e.g.{' '}
        <ExternalLink href='https://hono.dev' message='Hono' />,{' '}
        <ExternalLink href='https://mongodb.com' message='MongoDB' />,{' '}
        <ExternalLink href='https://docker.com' message='Docker' />
        ), both with a focus on geospatial. I&apos;m currently deploying to{' '}
        <ExternalLink href='https://azure.com' message='Azure' />,{' '}
        <ExternalLink href='https://render.com' message='Render' />,{' '}
        <ExternalLink href='https://cloudflare.com' message='Cloudflare' />, and with{' '}
        <ExternalLink href='https://docker.com' message='Docker' /> on my homelab.
      </Typography>

      <Typography variant='body'>
        Away from the desk, I love cooking and adventuring to new places 🌄.
      </Typography>

      <nav className='mt-6 flex items-center gap-4'>
        <LinkButton
          href='https://linkedin.com/in/archiebiddiscombe'
          icon={<LinkedIn />}
          label='LinkedIn'
        />
        <LinkButton href='https://github.com/abiddiscombe' icon={<GitHub />} label='GitHub' />
      </nav>
    </motion.div>
  );
}
