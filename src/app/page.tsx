'use client';
import { motion } from 'framer-motion';
import { Typography } from '@/components/Typography';
import { ExternalLink } from '@/components/ExternalLink';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -14 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay: 0.2 }}
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
    </motion.div>
  );
}
