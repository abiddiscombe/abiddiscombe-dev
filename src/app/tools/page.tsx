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
          img='JavaScript'
          name='JavaScript'
          href='https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript'
        />
        <Shield img='TypeScript' name='TypeScript' href='https://www.typescriptlang.org/' />
        <Shield img='VSCode' name='VS Code' href='https://code.visualstudio.com/' />
      </div>

      <Typography variant='h2'>Code / Infra</Typography>

      <div className='flex flex-wrap gap-4 sm:gap-2'>
        <Shield img='Cloudflare' name='Cloudflare' href='https://www.cloudflare.com' />
        <Shield img='Render' name='Render' href='https://www.render.com' />
        <Shield img='Docker' name='Docker' href='https://hub.docker.com/u/abiddiscombe' />
        <Shield img='PortainerCE' name='Portainer CE' href='https://www.portainer.io' />
        <Shield img='Proxmox' name='Proxmox' href='https://www.proxmox.com' />
        <Shield img='MSAzure' name='Microsoft Azure' href='https://azure.microsoft.com' />
      </div>

      <Typography variant='h2'>Code / Frontend</Typography>

      <div className='flex flex-wrap gap-4 sm:gap-2'>
        <Shield img='React' name='React' href='https://react.dev' />
        <Shield img='NextJS' name='NextJS' href='https://nextjs.org' />
        <Shield img='Tailwind' name='TailwindCSS' href='https://tailwindcss.com/' />
        <Shield img='Emotion' name='Emotion' href='https://emotion.sh/docs/introduction' />
        <Shield img='Leaflet' name='Leaflet' href='https://leafletjs.com/' />
        <Shield
          img='MapLibre'
          name='MapLibre GL JS'
          href='https://maplibre.org/maplibre-gl-js-docs/api/'
        />
      </div>

      <Typography variant='h2'>Code / Backend</Typography>

      <div className='flex flex-wrap gap-4 sm:gap-2'>
        <Shield img='Deno' name='Deno' href='https://deno.com' />
        <Shield img='Hono' name='Hono' href='https://hono.dev' />
        <Shield img='Koa' name='KoaJS' href='https://koajs.com' />
      </div>

      <Typography variant='h2'>Code / Databases</Typography>

      <div className='flex flex-wrap gap-4 sm:gap-2'>
        <Shield img='MongoDB' name='MongoDB' href='https://mongodb.com' />
        <Shield img='PostgreSQL' name='PostgreSQL' href='https://postgresql.org' />
      </div>

      <Typography variant='h2'>Productivity</Typography>

      <div className='flex flex-wrap gap-4 sm:gap-2'>
        <Shield img='Obsidian' name='Obsidian' href='https://obsidian.md' />
        <Shield img='PiHole' name='Pi-Hole' href='https://pi-hole.net' />
        <Shield img='Bitwarden' name='Bitwarden' href='https://bitwarden.com' />
      </div>
    </section>
  );
}
