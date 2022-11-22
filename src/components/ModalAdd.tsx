import useAppCtx from '@hooks/useAppCtx';
import React, { Dispatch, SetStateAction } from 'react';

interface ModalAddProps {
  handleClose: Dispatch<SetStateAction<boolean>>;
  isEdit?: boolean;
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert('Submitted');
  const data = new FormData(e.currentTarget);
  const formProps = Object.fromEntries(data);
  console.log({ formProps });
};

export default function ModalAdd({ handleClose, isEdit = false }: ModalAddProps) {
  const { state } = useAppCtx();
  const { titles } = state;

  return (
    <div className="fixed z-10 bg-black/60 backdrop-blur-sm top-0 left-0 w-full min-h-screen grid place-items-center">
      <section className="bg-slate-50 min-w-[500px] text-black rounded py-5 px-8 relative">
        <button className="absolute right-2 top-2" onClick={() => handleClose(false)}>
          X
        </button>
        <h3 className="text-red-600 text-2xl font-bold uppercase text-center mb-8">{isEdit ? 'Editar' : 'Agregar'}</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {titles.map((title, index) => (
            <label key={`input-${title}-${index}`} className="flex justify-end gap-4 items-center capitalize">
              <span className="text-right">{title}:</span>
              <input className="p-2" name={`${title}`} type="text" autoComplete="off" />
            </label>
          ))}
          <div className='flex gap-2 w-full justify-center mt-4'>
            <button type='button' className='uppercase bg-red-400 self-center py-2 px-8 font-semibold text-white rounded' onClick={() => handleClose(false)}> Cancel </button>
            <button
              className="uppercase bg-emerald-400 self-center py-2 px-8 font-semibold text-white rounded"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
