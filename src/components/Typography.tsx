interface TypographyProps {
  variant: string;
  children: React.ReactNode;
}

export function Typography(p: TypographyProps) {
  switch (p.variant) {
    case 'h2':
      return (
        <h2 className='py-4 font-semibold tracking-wider text-l3-light dark:text-l3-dark'>
          {p.children}
        </h2>
      );
    case 'body':
      return (
        <p className='mb-4 font-light leading-relaxed tracking-wide text-l2-light dark:text-l2-dark'>
          {p.children}
        </p>
      );
  }
}
