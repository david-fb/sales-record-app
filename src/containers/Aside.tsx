import useAppCtx from '@hooks/useAppCtx';

import { useTheme } from 'next-themes';
import Link from 'next/link';

export default function Aside() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { state } = useAppCtx();
  const { sheets, activeSheet } = state;

  const toggleTheme = () => {
    if (theme === 'light' || resolvedTheme === 'light') {
      setTheme('dark');
      return;
    }
    setTheme('light');
  };

  return (
    <aside className="bg-red-200 w-60 hidden md:block">
      <button className="text-black dark:text-white" onClick={toggleTheme}>
        Change theme
      </button>
      <nav>
        <Link href="/">Home</Link>
      </nav>
      <ul>
        {sheets.map((sheet, index) => (
          <li key={`sheet-${index}`} className={`${activeSheet === sheet ? 'font-semibold' : ''}`}>
            <button>{sheet}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
