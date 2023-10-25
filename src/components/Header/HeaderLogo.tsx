import Link from 'next/link';
export function HeaderLogo() {
  return (
    <Link href='./'>
      <h1 className='text-sm font-light uppercase leading-none tracking-wide'>
        Archie
        <br aria-hidden='true' />
        Biddiscombe
      </h1>
    </Link>
  );
}
