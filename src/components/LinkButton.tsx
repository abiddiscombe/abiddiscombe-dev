interface LinkButtonProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export function LinkButton(p: LinkButtonProps) {
  return (
    <a
      href={p.href}
      target='_blank'
      aria-label={`${p.label} (Opens in a New Tab)`}
      className='grow sm:grow-0 px-6 py-2 flex gap-2 items-center justify-center duration-150 rounded text-l2-light border border-l1-light dark:text-l2-dark dark:border-l1-dark hover:border-l2-light hover:bg-l1-light/20 hover:dark:bg-l1-dark/20 hover:text-l3-light hover:dark:border-l2-dark hover:dark:text-l3-dark'
    >
      {p.icon}
      {p.label}
    </a>
  );
}
