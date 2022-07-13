import { endPoints } from ".";

const getAllData = async (spreadsheetId: spreadsheetIdType, sheet: sheetType): Promise<dataType | errorObject> => {
    const res = await fetch(endPoints.getAllData(spreadsheetId, sheet));
    return await res.json();
};

const getSheetTitles = async(spreadsheetId: spreadsheetIdType, sheet: sheetType): Promise<titlesType | errorObject> => {
  const res = await fetch(endPoints.getSheetTitles(spreadsheetId, sheet));
  return await res.json();
};

const getSheets =async (spreadsheetId:spreadsheetIdType): Promise<sheetsType> => {
  const res = await fetch(endPoints.getSheets(spreadsheetId));
  return await res.json();
};

const getActiveSheet = async(spreadsheetId: spreadsheetIdType): Promise<activeSheetType> => {
  const res = await fetch(endPoints.getActiveSheet(spreadsheetId));
  const data = await res.json();

  if(data.error) {
    throw new Error("spreadsheet id doesn't exist");
  }
  return data.active;
};

export { getAllData, getSheetTitles, getSheets, getActiveSheet };

