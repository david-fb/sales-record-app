import type { NextPage } from 'next';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Home: NextPage = () => {
  const [text, setText] = useState<string>('');
  const router = useRouter();
  const handleClick = () => {
    if (text) router.push(`/spreadsheet/${text}`);
  };

  const createHandleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setText(evt.target.value);
  };

  return (
    <>
      <Head>
        <title>Sales Record App</title>
        <meta name="description" content="Sales record app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="bg-stone-50 w-full min-h-screen dark:bg-stone-900
      flex flex-col"
      >
        <label htmlFor="spreadsheet">Insert Spreadsheet id</label>
        <input type="text" name="spreadsheet" value={text} onChange={createHandleChange} />
        <button onClick={handleClick}>Open</button>
      </main>

      <footer></footer>
    </>
  );
};

export default Home;
