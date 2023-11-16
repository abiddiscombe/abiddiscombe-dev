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
      return <h3 className='tracking-wide leading-relaxed font-semibold'>{p.children}</h3>;

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
