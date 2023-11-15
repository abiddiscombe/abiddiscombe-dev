interface ExternalLinkProps {
  href: string;
  message: string;
}

export function ExternalLink(p: ExternalLinkProps) {
  return (
    <a
      href={p.href}
      target='_blank'
      aria-label={`${p.message} (Opens in a New Tab)`}
      className='underline underline-offset-2 decoration-frontDimmed-light dark:decoration-frontDimmed-dark hover:decoration-front-light hover:dark:decoration-front-dark duration-200'
    >
      {p.message}
    </a>
  );
}
