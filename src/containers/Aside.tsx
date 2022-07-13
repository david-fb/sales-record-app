import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';
import Link from 'next/link';

interface Props {
  spreadsheetId: spreadsheetIdType;
  activeSheet: activeSheetType;
}

export default function Aside({ spreadsheetId, activeSheet }: Props) {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [sheets, setSheets] = useState<sheetsType>([]);

  const toggleTheme = () => {
    if (theme === 'light' || resolvedTheme === 'light') {
      setTheme('dark');
      return;
    }
    setTheme('light');
  };

  useEffect(() => {
    const getSheets = async () => {
      const res = await fetch(`/api/data/sheets?spreadsheetId=${spreadsheetId}`);
      setSheets(await res.json());
    };
    getSheets();
    setMounted(true);
  }, [spreadsheetId]);

  if (!mounted) return null;

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
            {sheet}
          </li>
        ))}
      </ul>
    </aside>
  );
}
