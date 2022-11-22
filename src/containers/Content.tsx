import Table from '@components/Table';
import useAppCtx from '@hooks/useAppCtx';
import ButtonToggleModal from '@components/ButtonToggleModal';
import ModalAdd from '@components/ModalAdd';

export default function Content() {
  const { state, toggleModal } = useAppCtx();
  const { data, titles, showModal } = state;

  return (
    <section className="flex flex-col min-w-0 items-center gap-2 px-4 py-8 flex-1">
      <ButtonToggleModal handle={toggleModal} state={showModal} />
      {showModal && <ModalAdd handleClose={toggleModal}/>}
      <Table titles={titles} data={data} />
    </section>
  );
}
