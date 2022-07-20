import { createContext } from 'react';
import useInitialState from '@hooks/useInitialState';

const defaultValues: IuseInitialState = {
  state: {
    spreadsheetId: '',
    sheets: [],
    activeSheet: '',
    titles: [],
    data: [],
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  setSpreadsheetId: (id: spreadsheetIdType) => {},
};

export const AppCtx = createContext<IuseInitialState>(defaultValues);

export const AppProvider = ({ children }: IContextProps): JSX.Element => {
  const initialState = useInitialState();
  return <AppCtx.Provider value={initialState}> {children} </AppCtx.Provider>;
};
