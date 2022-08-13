import Table from '@components/Table';
import useAppCtx from '@hooks/useAppCtx';

export default function Content() {
  const { state } = useAppCtx();
  const { data, titles } = state;

  return (
    <section className="px-4 overflow-x-auto w-auto">
      <Table titles={titles} data={data} />
    </section>
  );
}
