import { useState, useEffect } from "react";

const initialState: IinitialState = {
  spreadsheetId: '',
  sheets: [],
  activeSheet: '',
  titles: [],
  data: [],
};

export default function useInitialState(): IuseInitialState {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if(state.spreadsheetId === '') return;
    const getData = async () => {
      const resSheets = await fetch(`/api/data/sheets?spreadsheetId=${state.spreadsheetId}`);
      const sheets: sheetsType = await resSheets.json();
      const resTitles = await fetch(`/api/data/titles?spreadsheetId=${state.spreadsheetId}&sheet=${sheets[0]}`);
      let titles: titlesType = await resTitles.json();
      if ('error' in titles) {
        titles = [];
      }
      setState({...state, titles: titles, sheets: sheets, activeSheet: sheets[0]});
    };
    getData();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.spreadsheetId]);

  useEffect(() => {
    if(state.spreadsheetId === '' && state.activeSheet === '') return;

    const getData = async () => {
      const res = await fetch(`/api/data/all?spreadsheetId=${state.spreadsheetId}&sheet=${state.activeSheet}`);
      let allData: dataType | errorObject = await res.json();
      if ('error' in allData) {
        allData = [];
      }
      setState({...state, data: allData});
    };
    getData();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.activeSheet]);

  const setSpreadsheetId = (id: spreadsheetIdType) => {
    setState({...state, spreadsheetId: id});
  };

  return {
    state,
    setSpreadsheetId,
  };
}
