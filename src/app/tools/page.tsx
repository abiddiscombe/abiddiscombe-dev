import { Shield } from '@/components/Shield';
import { Typography } from '@/components/Typography';
import { ExternalLink } from '@/components/ExternalLink';

export default function Uses() {
  return (
    <section>
      <Typography variant='body'>
        Inspired by <ExternalLink href='https://uses.tech' message='uses.tech' />, this is a list of
        providers, frameworks and tools I use most.
      </Typography>

      <Typography variant='h2'>Code</Typography>

      <div className='flex flex-wrap gap-4 sm:gap-2'>
        <Shield
          img='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=f7df1e'
          href='https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript'
          name='JavaScript'
        />
        <Shield
          img='https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=ffffff'
          href='https://www.typescriptlang.org/'
          name='TypeScript'
        />
        <Shield
          img='https://img.shields.io/badge/VS%20Code-204056?style=for-the-badge&logo=visualstudiocode&logoColor=ffffff'
          href='https://code.visualstudio.com/'
          name='VS Code'
        />
        <Shield
          img='https://img.shields.io/badge/Docker-0db7ed?style=for-the-badge&logo=docker&logoColor=ffffff'
          href='https://hub.docker.com/u/abiddiscombe'
          name='Docker'
        />
        <Shield
          img='https://img.shields.io/badge/Portainer%20CE-13BEF9?style=for-the-badge&logo=portainer&logoColor=ffffff'
          href='https://www.portainer.io'
          name='Portainer CE'
        />
      </div>

      <Typography variant='h2'>Code / Cloud</Typography>

      <div className='flex flex-wrap gap-4 sm:gap-2'>
        <Shield
          img='https://img.shields.io/badge/MS%20Azure-4285F4?style=for-the-badge&logo=microsoftazure&logoColor=ffffff'
          href='https://azure.microsoft.com'
          name='Microsoft Azure'
        />
        <Shield
          img='https://img.shields.io/badge/Cloudflare-f38020?style=for-the-badge&logo=cloudflare&logoColor=ffffff'
          href='https://www.cloudflare.com'
          name='Cloudflare'
        />
        {/* <Shield
          img='https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=ffffff'
          href='https://www.render.com'
          name='Render'
        /> */}
      </div>

      <Typography variant='h2'>Code / Frontend</Typography>

      <div className='flex flex-wrap gap-4 sm:gap-2'>
        <Shield
          img='https://img.shields.io/badge/React-2196f3?style=for-the-badge&logo=react&logoColor=ffffff'
          href='https://react.dev'
          name='React'
        />
        <Shield
          img='https://img.shields.io/badge/NextJS-000000?style=for-the-badge&logo=next.js&logoColor=ffffff'
          href='https://nextjs.org'
          name='NextJS'
        />
        <Shield
          img='https://img.shields.io/badge/Tailwind-0ea5e9?style=for-the-badge&logo=tailwindcss&logoColor=ffffff'
          href='https://tailwindcss.com/'
          name='TailwindCSS'
        />
        <Shield
          img='https://img.shields.io/badge/Emotion-b840bc?style=for-the-badge&logo=CSS3&logoColor=ffffff'
          href='https://emotion.sh/docs/introduction'
          name='Emotion'
        />
        <Shield
          img='https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=ffffff'
          href='https://leafletjs.com/'
          name='Leaflet'
        />
        <Shield
          img='https://img.shields.io/badge/MapLibre-3bb2d0?style=for-the-badge&logo=mapbox&logoColor=ffffff'
          href='https://maplibre.org/maplibre-gl-js-docs/api/'
          name='MapLibre GL JS'
        />
      </div>

      <Typography variant='h2'>Code / Backend</Typography>

      <div className='flex flex-wrap gap-4 sm:gap-2'>
        <Shield
          img='https://img.shields.io/badge/Deno-323330?style=for-the-badge&logo=deno&logoColor=ffffff'
          href='https://deno.com'
          name='Deno'
        />
        <Shield
          img='https://img.shields.io/badge/Hono-000022?style=for-the-badge'
          href='https://hono.dev'
          name='Hono'
        />
      </div>

      <Typography variant='h2'>Code / Databases</Typography>

      <div className='flex flex-wrap gap-4 sm:gap-2'>
        <Shield
          img='https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=ffffff'
          href='https://mongodb.com'
          name='MongoDB'
        />
        <Shield
          img='https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=ffffff'
          href='https://postgresql.org'
          name='PostgreSQL'
        />
      </div>

      <Typography variant='h2'>Productivity</Typography>

      <div className='flex flex-wrap gap-4 sm:gap-2'>
        <Shield
          img='https://img.shields.io/badge/Obsidian-483699?style=for-the-badge&logo=obsidian&logoColor=ffffff'
          href='https://obsidian.md'
          name='Obsidian'
        />
        <Shield
          img='https://img.shields.io/badge/PiHole-96060C?style=for-the-badge&logo=pihole&logoColor=ffffff'
          href='https://pi-hole.net'
          name='PiHole'
        />
        <Shield
          img='https://img.shields.io/badge/Bitwarden-175DDC?style=for-the-badge&logo=bitwarden&logoColor=ffffff'
          href='https://bitwarden.com'
          name='Bitwarden'
        />
      </div>
    </section>
  );
}
