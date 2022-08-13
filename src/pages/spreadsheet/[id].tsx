import Aside from '@containers/Aside';
import Content from '@containers/Content';
import { GetServerSideProps } from 'next';
import useAppCtx from '@hooks/useAppCtx';
import { useEffect } from 'react';

export default function SpreadSheet({ spreadsheetId }: ISpreadsheetProps) {
  const { setSpreadsheetId } = useAppCtx();

  useEffect(() => {
    setSpreadsheetId(spreadsheetId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="flex min-h-screen items-start">
      <Aside />
      <Content />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const spreadsheetId = params?.id;
  if (typeof spreadsheetId === 'string') {
    return {
      props: {
        spreadsheetId,
      },
    };
  }
  return {
    redirect: {
      permanent: false,
      destination: '/',
    },
  };
};
