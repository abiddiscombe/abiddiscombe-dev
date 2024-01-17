interface MainProps {
  outlet: React.ReactNode;
}

export function Main(p: MainProps) {
  return (
    <main className='px-8 pt-4 pb-16'>
      <div className='mx-auto max-w-2xl'>{p.outlet}</div>
    </main>
  );
}
