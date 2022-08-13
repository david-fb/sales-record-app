import { useTheme } from 'next-themes';

export default function ToggleTheme() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light' || resolvedTheme === 'light') {
      setTheme('dark');
      return;
    }
    setTheme('light');
  };
  return (
    <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer mt-auto">
      <input
        type="checkbox"
        value=""
        id="default-toggle"
        className="sr-only peer"
        onChange={toggleTheme}
        checked={theme === 'dark' || resolvedTheme === 'dark'}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 dark:peer-focus:ring-emerald-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Change theme</span>
    </label>
  );
}
