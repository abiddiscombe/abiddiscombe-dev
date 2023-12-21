import { Typography } from './Typography';
import { ExternalLink } from './ExternalLink';

interface ProjectCardProps {
  href: string;
  name: string;
  summary: React.ReactNode;
  isArchived: boolean;
  isWorkProject: boolean;
  tags: {
    href: string;
    name: string;
  }[];
}

export function ProjectCard(p: ProjectCardProps) {
  return (
    <article className='p-4 rounded border border-l1-light dark:border-l1-dark hover:border-l2-light hover:dark:border-l2-dark'>
      <Typography variant='h3'>
        <ExternalLink href={p.href} message={p.name} useArrow={true} />
      </Typography>
      <Typography variant='small'>
        {p.isArchived && <span className='text-amber-light dark:text-amber-dark'>Archived. </span>}
        {p.isWorkProject && (
          <span className='text-blue-light dark:text-blue-dark'>Work Project. </span>
        )}
        {p.summary}
      </Typography>
      <div className='mt-2 flex flex-wrap gap-2'>
        {p.tags.map((tag, i) => (
          <Typography variant='small' key={tag.href}>
            <ExternalLink href={tag.href} message={`${tag.name}`} />
            {i !== p.tags.length - 1 && <span className='ml-2'>-</span>}
          </Typography>
        ))}
      </div>
    </article>
  );
}
