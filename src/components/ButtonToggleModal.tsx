type props = {
  state: boolean,
  handle: (state:boolean) => void,
}

export default function ButtonToggleModal({handle, state}:props) {

  return (
    <button onClick={() => handle(!state)}
      className="bg-emerald-400 py-2 px-4 font-bold text-white"
    >Add</button>
  );
}
