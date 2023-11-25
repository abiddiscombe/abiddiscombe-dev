import { Typography } from '../Typography';
import { SocialLink } from '../SocialLink';

export function Header() {
  return (
    <header className='px-8 pt-10 md:pt-24 xl:pt-28 pb-2'>
      <div className='mx-auto max-w-3xl flex items-center justify-between'>
        <Typography variant='h1'>
          Archie
          <br />
          Biddiscombe
        </Typography>

        <nav className='flex items-center gap-6 md:gap-5'>
          <SocialLink type='email' />
          <SocialLink type='github' />
          <SocialLink type='linkedin' />
        </nav>
      </div>
    </header>
  );
}
