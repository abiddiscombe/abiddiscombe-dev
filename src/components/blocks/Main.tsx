interface MainProps {
  outlet: React.ReactNode;
}

export function Main(p: MainProps) {
  return <main className='pb-8'>{p.outlet}</main>;
}
