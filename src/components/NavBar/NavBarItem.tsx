import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavBarItemProps {
  href: string;
  title: string;
}

export function NavBarItem(p: NavBarItemProps) {
  const pathname = usePathname();
  return (
    <li>
      <Link
        href={p.href}
        className={`block pb-2 sm:pb-1 uppercase text-sm tracking-wide underline-offset-4 decoration-2 hover:duration-200 hover:underline
            ${pathname === p.href && 'text-zinc-900 dark:text-white underline'}
          `}
      >
        {p.title}
      </Link>
    </li>
  );
}
