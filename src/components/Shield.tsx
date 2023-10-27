interface ShieldProps {
  img: string;
  name: string;
  href: string;
}

export function Shield(p: ShieldProps) {
  const ariaLabel = `${p.name} (Opens in a New Tab)`;
  return (
    <a href={p.href} target='_blank' aria-label={ariaLabel}>
      <img src={`./shields/${p.img}.svg`} alt={p.name} className='h-6 rounded hover:shadow-sm' />
    </a>
  );
}
