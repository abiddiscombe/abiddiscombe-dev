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
      return <h2 className='py-6 tracking-wider font-semibold'>{p.children}</h2>;

    case 'h3':
      return <h3 className='pb-1 tracking-wider leading-relaxed font-normal'>{p.children}</h3>;

    case 'body':
      return <p className='pb-4 tracking-wide leading-relaxed font-normal'>{p.children}</p>;

    case 'small':
      return (
        <p className='tracking-wide text-sm leading-relaxed font-normal text-fontLighter-light dark:text-fontLighter-dark'>
          {p.children}
        </p>
      );
  }
}
