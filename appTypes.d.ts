interface errorObject {
  error: string;
}

type dataType = Array<Record<string, unknown>>;

type titlesType = string[];

type sheetsType = string[];

type activeSheetType = string;

type spreadsheetIdType = string;

type sheetType = string;

interface ISpreadsheetProps {
  spreadsheetId: spreadsheetIdType;
  titles: titlesType;
  activeSheet: activeSheetType;
  error: errorObject['error'];
}

interface IContextProps {
  children: JSX.Element;
}

interface IinitialState {
  spreadsheetId: spreadsheetIdType;
  sheets: sheetsType;
  activeSheet: activeSheetType;
  titles: titlesType;
  data: dataType;
}

interface IuseInitialState {
  state: IinitialState;
  setSpreadsheetId: (id: spreadsheetIdType) => void
  setActiveSheet: (sheet: sheetType) => void
}
