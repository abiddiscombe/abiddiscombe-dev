import { GitHub } from '../icons/GitHub';
import { LinkedIn } from '../icons/LinkedIn';

export function Nav() {
  const links = [
    {
      href: 'https://github.com/abiddiscombe',
      text: 'GitHub',
      icon: <GitHub />,
    },
    {
      href: 'https://linkedin.com/in/archiebiddiscombe',
      text: 'LinkedIn',
      icon: <LinkedIn />,
    },
  ];

  return (
    <nav className='px-8 py-4 border-b border-dashed border-l1-light dark:border-l1-dark'>
      <div className='mx-auto max-w-2xl flex items-center gap-6 sm:gap-4'>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target='_blank'
            aria-label={`${link.text} (Opens in a New Tab)`}
            className='text-l2-light dark:text-l2-dark hover:text-l3-light dark:hover:text-l3-dark'
          >
            {link.icon}
          </a>
        ))}
      </div>
    </nav>
  );
}
