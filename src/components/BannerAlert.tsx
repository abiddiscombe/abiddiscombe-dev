import { Typography } from './Typography';

interface BannerAlertProps {
  variant: string;
  children: React.ReactNode;
}

export function BannerAlert(p: BannerAlertProps) {
  switch (p.variant) {
    case 'info':
      return (
        <div className='mb-2 py-2 pl-2 text-sm rounded border-l-4 border-blue-400 bg-zinc-100 dark:bg-zinc-700'>
          {p.children}
        </div>
      );

    default:
      return null;
  }
}
