'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();
  const linkItems = [
    {
      href: '/',
      title: 'Home',
    },
    {
      href: '/literature',
      title: 'Literature',
    },
  ];
  return (
    <nav className='px-8 pt-2 pb-8'>
      <div className='mx-auto max-w-3xl'>
        <ul className='flex gap-6 items-center'>
          {linkItems.map((linkItem) => (
            <li key={linkItem.href}>
              <Link
                href={linkItem.href}
                className={`uppercase tracking-wider leading-tight font-normal underline-offset-4 decoration-2 ${
                  pathname == linkItem.href
                    ? 'text-font-light dark:text-font-dark underline decoration-font-light dark:decoration-font-dark'
                    : 'text-fontLighter-light dark:text-fontLighter-dark hover:underline'
                }`}
              >
                {linkItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
