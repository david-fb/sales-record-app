import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useTheme } from 'next-themes';
import Head from 'next/head';

const Home: NextPage = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = (): void => {
    if (theme === 'light' || resolvedTheme === 'light') {
      setTheme('dark');
      return;
    }
    setTheme('light');
  };

  return (
    <>
      <Head>
        <title>Sales Record App</title>
        <meta name="description" content="Sales record app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white dark:bg-black">
        <h1 className="text-red-400 text-3xl font-bold underline">Hello world!</h1>
        <button className="text-black dark:text-white" onClick={toggleTheme}>
          Change theme
        </button>
      </main>

      <footer></footer>
    </>
  );
};

export default Home;
