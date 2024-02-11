'use client';
import { useEffect, useState } from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

export function Container(p: ContainerProps) {
  const [width, setWidth] = useState(700);

  useEffect(() => {
    // https://erikmartinjordan.com/window-innerWidth-nextjs
    setWidth(window.innerWidth);
  }, []);

  if (width <= 600) {
    return p.children;
  }

  return <main className='max-w-xl'>{p.children}</main>;
}
