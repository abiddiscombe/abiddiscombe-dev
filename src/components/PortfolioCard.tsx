interface PortfolioCardProps {
  img: string;
  title: string;
  summary: React.ReactNode;
  isArchived?: boolean;
  isWorkProject?: boolean;
  links?: {
    href: string;
    title: string;
  }[];
}

export function PortfolioCard(p: PortfolioCardProps) {
  return (
    <article className='rounded overflow-hidden shadow-sm hover:shadow border border-zinc-300 dark:border-zinc-500'>
      <img
        alt='Non-Essential Image. Screenshot of project demo.'
        src={`./media/p-${p.img}.png`}
        aria-hidden='true'
        className='w-full aspect-[10/6] object-cover border-b border-zinc-300 dark:border-zinc-500'
      />
      <div className='p-4'>
        <h3 className='mb-2 text-md font-semibold'>{p.title}</h3>
        <div className='mb-2 flex flex-wrap gap-2 items-stretch'>
          {p.links &&
            p.links.map((link) => (
              <a
                key={link.href}
                target='_blank'
                href={link.href}
                aria-label={`${link.title} (Opens in a New Tab)`}
                className='px-4 py-2 md:px-2 md:py-1 cursor-select rounded text-xs border hover:shadow hover:border-zinc-300 dark:hover:bg-zinc-600'
              >
                {link.title}
              </a>
            ))}
        </div>
        <p className='font-light leading-relaxed text-sm'>
          {p.isArchived && <span className=' text-orange-400'>Archived.&nbsp;</span>}
          {p.isWorkProject && <span className=' text-blue-400 '>Work Project.&nbsp;</span>}
          {p.summary}
        </p>
      </div>
    </article>
  );
}
