interface MainProps {
  outlet: React.ReactNode;
}

export function Main(p: MainProps) {
  return <main>{p.outlet}</main>;
}
