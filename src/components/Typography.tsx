interface TypographyProps {
  variant: string;
  children: React.ReactNode;
}

export function Typography(p: TypographyProps) {
  switch (p.variant) {
    case 'h1':
      return (
        <h1 className='text-lg uppercase leading-tight tracking-wide font-semibold'>
          {p.children}
        </h1>
      );

    case 'h2':
      return <h2 className='pt-4 pb-2 tracking-wide font-semibold'>{p.children}</h2>;

    case 'h3':
      return <h3 className='mb-2 leading-relaxed tracking-wide font-medium'>{p.children}</h3>;

    case 'body':
      return <p className='mb-4 leading-relaxed font-light'>{p.children}</p>;

    case 'bodyLesser':
      return (
        <p className='leading-relaxed font-light text-frontDimmed-light dark:text-frontDimmed-dark'>
          {p.children}
        </p>
      );
  }
}
