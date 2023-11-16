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
      className='duration-200 underline underline-offset-3 decoration-fontLightest-light dark:decoration-fontLightest-dark hover:decoration-font-light hover:text-font-light hover:dark:decoration-font-dark hover:dark:text-font-dark'
    >
      {p.message}
    </a>
  );
}
