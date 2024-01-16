import { ArrowUpRightIcon } from '@heroicons/react/16/solid';

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
      className={`${
        p.useArrow && 'inline-flex items-center'
      } duration-200 underline underline-offset-2 decoration-l2-light dark:decoration-l2-dark hover:decoration-l3-light hover:text-l3-light hover:dark:decoration-l3-dark hover:dark:text-l3-dark group`}
    >
      <span className={`${p.useArrow && 'mr-2 group-hover:mr-3 duration-200'}`}>{p.message}</span>
      {p.useArrow && (
        <ArrowUpRightIcon className='h-4 text-l1-light dark:text-l1-dark group-hover:text-l2-light group-hover:dark:text-l2-dark' />
      )}
    </a>
  );
}
