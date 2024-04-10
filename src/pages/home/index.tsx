import { Menu } from '@/components/menu';

export function Home() {
  return (
    <>
      <Menu />

      <main className={`h-full bg-red dark:bg-green`}>
        <h1 className='text-3xl font-bold underline'>welcome</h1>
      </main>
    </>
  );
}
