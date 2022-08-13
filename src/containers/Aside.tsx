import Link from 'next/link';
import SheetsList from '@components/SheetsList';
import ToggleTheme from '@components/ToggleTheme';
import HomeIcon from '@assets/icons/HomeIcon';

export default function Aside() {
  return (
    <aside className="border-r-2 border-emerald-400 w-72 hidden md:flex md:flex-col gap-2 p-8 sticky top-0 min-h-screen">
      <h1 className="text-red-400 dark:text-emerald-500 text-2xl font-bold">Sales record!</h1>
      <nav className="flex flex-col">
        <Link href="/" passHref>
          <a
            href="home"
            className="p-1 px-2 flex items-center gap-2 text-lg hover:bg-gray-200 dark:hover:bg-emerald-500"
          >
            <HomeIcon width={16} height={16} />
            Home
          </a>
        </Link>
      </nav>
      <SheetsList />
      <ToggleTheme />
    </aside>
  );
}
