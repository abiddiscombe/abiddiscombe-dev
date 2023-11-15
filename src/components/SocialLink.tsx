interface SocialLinkProps {
  type: string;
}

export function SocialLink(p: SocialLinkProps) {
  const email = 'mailto://hello@abiddiscombe.dev';
  const github = 'https://github.com/abiddiscombe';
  const linkedin = 'https://linkedin.com/in/archiebiddiscombe';
  const literature = 'https://github.com/abiddiscombe/literature';

  const genericClasses =
    'text-frontDimmed-light dark:text-frontDimmed-dark hover:text-front-light dark:hover:text-front-dark';

  switch (p.type) {
    case 'email':
      return (
        <a href={email} target='_blank' className={genericClasses}>
          <EmailIcon />
        </a>
      );

    case 'github':
      return (
        <a href={github} target='_blank' className={genericClasses}>
          <GithubIcon />
        </a>
      );

    case 'linkedin':
      return (
        <a href={linkedin} target='_blank' className={genericClasses}>
          <LinkedinIcon />
        </a>
      );

    case 'literature':
      return (
        <a href={literature} target='_blank' className={genericClasses}>
          <LiteratureIcon />
        </a>
      );

    default:
      return null;
  }
}

function EmailIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='feather feather-at-sign h-5'
    >
      <circle cx='12' cy='12' r='4'></circle>
      <path d='M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94'></path>
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='feather feather-github h-5'
    >
      <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='feather feather-linkedin h-5'
    >
      <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
      <rect x='2' y='9' width='4' height='12'></rect>
      <circle cx='4' cy='4' r='2'></circle>
    </svg>
  );
}

function LiteratureIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='feather feather-book h-5'
    >
      <path d='M4 19.5A2.5 2.5 0 0 1 6.5 17H20'></path>
      <path d='M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z'></path>
    </svg>
  );
}
