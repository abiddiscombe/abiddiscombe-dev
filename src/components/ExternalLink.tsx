interface ExternalLinkProps {
  href: string;
  message: string;
  useArrow?: boolean;
}

export function ExternalLink(p: ExternalLinkProps) {
  return (
    <a
      href={p.href}
      target='_blank'
      aria-label={`${p.message} (Opens in a New Tab)`}
      className='underline decoration-l2-light underline-offset-2 duration-200 hover:text-l3-light hover:decoration-l3-light active:decoration-2 dark:decoration-l2-dark hover:dark:text-l3-dark hover:dark:decoration-l3-dark'
    >
      {p.message}
    </a>
  );
}
