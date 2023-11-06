interface CodeSnippetProps {
  children: React.ReactNode;
}

export function CodeSnippet(p: CodeSnippetProps) {
  return (
    <code className='py-2 px-4 block text-sm rounded bg-zinc-100 border border-zinc-200 dark:border-zinc-500 dark:bg-zinc-700'>
      {p.children}
    </code>
  );
}
