'use client';
import { NavBarItem } from './NavBarItem';

export function NavBar() {
  return (
    <nav className='px-8 pt-4 pb-6'>
      <div className='mx-auto max-w-2xl'>
        <ul className='text-zinc-500 flex gap-6 items-center'>
          <NavBarItem href='/' title='Hello' />
          <NavBarItem href='/tools' title='Tools' />
          <NavBarItem href='/portfolio' title='Portfolio' />
        </ul>
      </div>
    </nav>
  );
}
