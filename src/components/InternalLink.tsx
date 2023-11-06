interface InternalLinkProps {
  href: string;
  message: string;
}

export function InternalLink(p: InternalLinkProps) {
  return (
    <a
      href={p.href}
      aria-label={`${p.message} (Opens in Same Tab)`}
      className='inline-flex flex-wrap items-center underline hover:text-fuchsia-600'
    >
      {p.message}
    </a>
  );
}
