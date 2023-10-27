import { ExternalLink } from '../ExternalLink';

export function Footer() {
  return (
    <footer className='px-8 py-4 bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400'>
      <div className='mx-auto max-w-2xl flex flex-wrap gap-2 items-center justify-between'>
        <small>&copy; Archie Biddiscombe 2023</small>
        <small>
          <ExternalLink
            href='https://github.com/abiddiscombe/abiddiscombe-dev'
            message='View Source'
          />
        </small>
      </div>
    </footer>
  );
}
