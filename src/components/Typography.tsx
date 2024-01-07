interface TypographyProps {
  variant: string;
  noSpace?: boolean;
  children: React.ReactNode;
}

export function Typography(p: TypographyProps) {
  switch (p.variant) {
    case 'h1':
      return (
        <h1 className='uppercase tracking-widest text-l3-light dark:text-l3-dark font-bold'>
          {p.children}
        </h1>
      );

    case 'h2':
      return (
        <h2 className='pb-4 pt-6 tracking-wider text-l3-light dark:text-l3-dark font-semibold'>
          {p.children}
        </h2>
      );

    case 'h3':
      return (
        <h3 className='pb-1 tracking-wider leading-relaxed text-l3-light dark:text-l3-dark font-normal'>
          {p.children}
        </h3>
      );

    case 'subtitle':
      return (
        <p className={'tracking-wide font-light text-l2-light dark:text-l2-dark'}>{p.children}</p>
      );

    case 'body':
      return (
        <p
          className={
            'mb-4 leading-relaxed tracking-wide font-light text-l3-light dark:text-l3-dark'
          }
        >
          {p.children}
        </p>
      );

    case 'small':
      return (
        <p className='tracking-wide text-sm leading-relaxed font-light text-l2-light dark:text-l2-dark'>
          {p.children}
        </p>
      );
  }
}
