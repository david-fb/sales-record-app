/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import useInitialState from '@hooks/useInitialState';

const defaultValues: IuseInitialState = {
  state: {
    spreadsheetId: '',
    sheets: [],
    activeSheet: '',
    titles: [],
    data: [],
    showModal: false,
  },
  setSpreadsheetId: (id: spreadsheetIdType) => { },
  setActiveSheet: (sheet: sheetType) => { },
  toggleModal: () => { },
};

export const AppCtx = createContext<IuseInitialState>(defaultValues);

export const AppProvider = ({ children }: IContextProps): JSX.Element => {
  const initialState = useInitialState();
  return <AppCtx.Provider value={initialState}> {children} </AppCtx.Provider>;
};
