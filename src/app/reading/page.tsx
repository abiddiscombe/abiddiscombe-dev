import { ExternalLink } from '@/components/ExternalLink';
import { Typography } from '@/components/Typography';
import { reading } from '@/data/reading';

export default function Literature() {
  return (
    <section>
      <Typography variant='body'>
        This is a collection of literature I&apos;ve come across which has aided my learning
        journey. I&apos;m collating this list for my own reflection, but perhaps you&apos;ll find it
        useful too!
      </Typography>
      {reading.map((section) => (
        <div key={section.label}>
          <Typography variant='h2'>{section.label}</Typography>
          {section.entries.map((entry) => (
            <article
              key={entry.href}
              className='mb-4 p-4 bg-back-light dark:bg-back-dark rounded border border-fontLightest-light dark:border-fontLightest-dark hover:border-fontLighter-light hover:dark:border-fontLighter-dark'
            >
              <Typography variant='h3'>
                <ExternalLink href={entry.href} message={entry.title} useArrow={true} />
              </Typography>
              <p className='text-sm text-fontLighter-light dark:text-fontLighter-dark'>
                {entry.author}
                {entry.date && ` (${entry.date})`}.{' '}
                {entry.format !== 'article' && <i>{entry.format}.</i>}
              </p>
            </article>
          ))}
        </div>
      ))}
      <Typography variant='body'>
        <i>FYI: I&apos;ll amend this list as articles become outdated and new ones are released.</i>
      </Typography>
    </section>
  );
}
