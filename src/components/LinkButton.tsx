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
      className='flex grow items-center justify-center gap-2 rounded border border-l1-light px-6 py-2 text-l2-light duration-150 hover:border-l2-light hover:bg-l1-light/20 hover:text-l3-light dark:border-l1-dark dark:text-l2-dark hover:dark:border-l2-dark hover:dark:bg-l1-dark/20 hover:dark:text-l3-dark sm:grow-0'
    >
      {p.icon}
      {p.label}
    </a>
  );
}
