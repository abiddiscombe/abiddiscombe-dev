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
      className='duration-200 underline underline-offset-2 active:decoration-2 decoration-l2-light dark:decoration-l2-dark hover:decoration-l3-light hover:text-l3-light hover:dark:decoration-l3-dark hover:dark:text-l3-dark'
    >
      {p.message}
    </a>
  );
}
