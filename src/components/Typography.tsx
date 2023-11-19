interface TypographyProps {
  variant: string;
  children: React.ReactNode;
}

export function Typography(p: TypographyProps) {
  switch (p.variant) {
    case 'h1':
      return (
        <h1 className='text-lg uppercase tracking-wider leading-tight font-semibold'>
          {p.children}
        </h1>
      );

    case 'h2':
      return <h2 className='pt-4 pb-2 tracking-wider font-semibold'>{p.children}</h2>;

    case 'h3':
      return (
        <h3 className={'flex items-center tracking-wider leading-relaxed font-normal'}>
          <span className='mr-1 hover:mr-2 hover:font-semibold duration-200'>{p.children}</span>
          <ProjectLinkIcon />
        </h3>
      );

    case 'body':
      return <p className='pb-6 tracking-wide leading-relaxed font-normal'>{p.children}</p>;

    case 'bodyLesser':
      return (
        <p className='tracking-wide leading-relaxed font-normal text-fontLighter-light dark:text-fontLighter-dark'>
          {p.children}
        </p>
      );
  }
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
      className='h-4 text-fontLighter-light dark:text-fontLighter-dark feather feather-arrow-up-right'
    >
      <line x1='7' y1='17' x2='17' y2='7'></line>
      <polyline points='7 7 17 7 17 17'></polyline>
    </svg>
  );
}
