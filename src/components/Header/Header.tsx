import { HeaderLogo } from './HeaderLogo';
import { HeaderSocial } from './HeaderSocial';

export function Header() {
  return (
    <header className='px-8 bg-[#222] text-white'>
      <div className='mx-auto max-w-2xl py-6 flex gap-4 items-center justify-between'>
        <HeaderLogo />
        <HeaderSocial />
      </div>
    </header>
  );
}
