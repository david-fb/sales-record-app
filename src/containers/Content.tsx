import { useEffect, useState } from 'react';
import Table from '@components/Table';

interface Props {
  spreadsheetId: spreadsheetIdType;
  titles: titlesType;
  activeSheet: activeSheetType;
}

export default function Content({ spreadsheetId, titles, activeSheet }: Props) {
  const [data, setData] = useState<dataType>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`/api/data/all?spreadsheetId=${spreadsheetId}&sheet=${activeSheet}`);
      const allData: dataType | errorObject = await res.json();
      if ('error' in allData) {
        setData([]);
      } else {
        setData(allData);
      }
    };
    getData();
  }, [spreadsheetId, activeSheet]);

  return (
    <section className="px-4 overflow-x-auto">
      <h1 className="text-red-400 text-3xl font-bold underline">Sales record!</h1>
      <Table titles={titles} data={data} />
    </section>
  );
}
