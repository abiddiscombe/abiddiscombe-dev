import { ExternalLink } from '@/components/ExternalLink';
import { Typography } from '@/components/Typography';

export default function Literature() {
  return (
    <section>
      <Typography variant='body'>
        This is a collection of literature which has aided my learning journey. I&apos;m collating
        this for my records, but perhaps you&apos;ll find it useful too!
      </Typography>
      <Typography variant='h2'>Pastoral Development</Typography>
      <LiteratureCard
        href='https://www.taniarascia.com/everything-i-know-as-a-software-developer-without-a-degree/'
        date='2019'
        title='Everything I Know as a Software Developer Without a Degree'
        author='Tania Rascia'
      />
      <LiteratureCard
        href='https://www.youtube.com/watch?v=znYbn46Mies'
        date='2012'
        title='Choose Your Attitude'
        author='Debra Searle'
        format='YouTube Video'
      />
      <Typography variant='h2'>Start-Ups and Business</Typography>
      <LiteratureCard
        href='https://www.defmacro.org/2017/01/18/why-rethinkdb-failed.html'
        date='2017'
        title='RethinkDB: why we failed'
        author='Slava Akhmechet'
      />
      <Typography variant='h2'>Better Programming</Typography>
      <LiteratureCard
        href='https://boringtechnology.club'
        date='2015'
        title='Choose Boring Technology'
        author='Dan McKinley'
        format='Slides'
      />
      <LiteratureCard
        href='https://macwright.com/2021/02/17/the-naming-of-things.html'
        date='2021'
        title='Picking better names for variables, functions, and projects'
        author='Tom MacWright'
      />
      <Typography variant='h2'>Geospatial</Typography>
      <LiteratureCard
        href='https://macwright.com/lonlat/'
        title='lon lat lon lat'
        author='Tom MacWright'
        format='Cheetsheat'
      />
      <LiteratureCard
        href='https://macwright.com/2016/06/05/falsehoods-developers-believe-about-geojson.html'
        date='2016'
        title='Falsehoods developers believe about GeoJSON'
        author='Tom MacWright'
      />
      <Typography variant='h2'>CSS</Typography>
      <LiteratureCard
        href='https://1linelayouts.glitch.me/'
        title='One Line Layouts'
        author='Una Kravets'
        format='Browser Demo'
      />
      <LiteratureCard
        href='https://formcake.com/blog/why-we-love-tailwind'
        date='2020'
        title='Why We Love Tailwind'
        author='Joe Marshall @ Formcake'
      />
      <Typography variant='h2'>Web Infrastructure</Typography>
      <LiteratureCard
        href='https://deno.com/blog/the-future-of-web-is-on-the-edge'
        date='2022'
        title='The Future of the Web is on the Edge'
        author='Andy Jiang @ Deno'
      />
      <Typography variant='h2'>JavaScript (Including History)</Typography>
      <LiteratureCard
        href='https://deno.com/blog/commonjs-is-hurting-javascript'
        date='2022'
        title='CommonJS is hurting JavaScript'
        author='Andy Jiang @ Deno'
      />
      <Typography variant='body'>
        <i>FYI: I&apos;ll amend this list as articles become outdated and new ones are released.</i>
      </Typography>
    </section>
  );
}

interface LiteratureCardProps {
  href: string;
  date?: string;
  title: string;
  author: string;
  format?: string;
}

function LiteratureCard(p: LiteratureCardProps) {
  return (
    <article className='p-4 mb-4 bg-back-light dark:bg-back-dark shadow-sm hover:shadow rounded border border-fontLightest-light dark:border-fontLightest-dark'>
      <Typography variant='h3'>
        <ExternalLink href={p.href} message={p.title} />
      </Typography>
      <p className='text-sm text-fontLighter-light dark:text-fontLighter-dark'>
        {p.author}
        {p.date && ` (${p.date})`}. {p.format && <i>{p.format}.</i>}
      </p>
    </article>
  );
}
