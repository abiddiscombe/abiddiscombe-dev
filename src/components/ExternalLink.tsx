interface ExternalLinkProps {
  href: string;
  message: string;
  useArrow?: boolean;
}

export function ExternalLink(p: ExternalLinkProps) {
  return (
    <a
      href={p.href}
      target='_blank'
      aria-label={`${p.message} (Opens in a New Tab)`}
      className={`${
        p.useArrow && 'inline-flex items-center'
      } duration-200 underline underline-offset-3 decoration-fontLightest-light dark:decoration-fontLightest-dark hover:decoration-font-light hover:text-font-light hover:dark:decoration-font-dark hover:dark:text-font-dark`}
    >
      <span className={`${p.useArrow && 'mr-1 hover:mr-2 duration-200'}`}>{p.message}</span>
      {p.useArrow && <ProjectLinkIcon />}
    </a>
  );
}

function ProjectLinkIcon() {
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
      className='h-4 shrink-0 text-fontLighter-light dark:text-fontLighter-dark feather feather-arrow-up-right'
    >
      <line x1='7' y1='17' x2='17' y2='7'></line>
      <polyline points='7 7 17 7 17 17'></polyline>
    </svg>
  );
}
