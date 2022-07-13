import Aside from '@containers/Aside';
import Content from '@containers/Content';
import { getSheetTitles, getActiveSheet } from '@services/api/spreadsheet';
import { GetServerSideProps } from 'next';

interface Props {
  spreadsheetId: spreadsheetIdType;
  titles: titlesType;
  activeSheet: activeSheetType;
  error: errorObject['error'];
}

export default function SpreadSheet({ titles, spreadsheetId, activeSheet, error }: Props) {
  if (error) return <p>{error}</p>;

  return (
    <main className="flex min-h-screen">
      <Aside spreadsheetId={spreadsheetId} activeSheet={activeSheet} />
      <Content spreadsheetId={spreadsheetId} titles={titles} activeSheet={activeSheet} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const spreadsheetId = params?.id;
  if (typeof spreadsheetId === 'string') {
    try {
      const activeSheet = await getActiveSheet(spreadsheetId);
      let titles = await getSheetTitles(spreadsheetId, activeSheet);
      if ('error' in titles) {
        titles = [];
      }

      return {
        props: {
          titles,
          spreadsheetId,
          activeSheet,
        },
      };
    } catch (error) {
      if (error instanceof Error) {
        return {
          props: {
            error: error.message,
          },
        };
      }
    }
  }
  return {
    redirect: {
      permanent: false,
      destination: '/',
    },
  };
};
