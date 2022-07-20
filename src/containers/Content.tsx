import Table from '@components/Table';
import useAppCtx from '@hooks/useAppCtx';

export default function Content() {
  const { state } = useAppCtx();
  const { data, titles } = state;

  return (
    <section className="px-4 overflow-x-auto">
      <h1 className="text-red-400 text-3xl font-bold underline">Sales record!</h1>
      <Table titles={titles} data={data} />
    </section>
  );
}
