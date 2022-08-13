import useAppCtx from '@hooks/useAppCtx';
export default function SheetsList() {
  const { state, setActiveSheet } = useAppCtx();
  const { sheets, activeSheet } = state;
  return (
    <ul className="flex flex-col gap-1">
      {sheets.map((sheet, index) => (
        <li
          key={`sheet-${index}`}
          className={`flex flex-col ${
            activeSheet === sheet ? 'font-semibold bg-gray-200 dark:bg-emerald-500' : ''
          } hover:bg-gray-200 dark:hover:bg-emerald-500`}
        >
          <button className="text-left p-1 px-2" onClick={() => setActiveSheet(sheet)}>
            {sheet}
          </button>
        </li>
      ))}
    </ul>
  );
}
