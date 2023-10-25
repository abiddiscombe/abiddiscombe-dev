interface TypographyProps {
  variant: string;
  children: React.ReactNode;
}

export function Typography(p: TypographyProps) {
  switch (p.variant) {
    case 'h2':
      return (
        <h2 className='mt-8 mb-4 pb-2 border-b border-zinc-300 dark:border-zinc-500 text-2xl font-semibold'>
          {p.children}
        </h2>
      );

    case 'h3':
      return <h3 className='mt-4 mb-2 text-lg font-semibold'>{p.children}</h3>;

    case 'body':
      return <p className='mb-4 leading-relaxed font-light'>{p.children}</p>;
  }
}
