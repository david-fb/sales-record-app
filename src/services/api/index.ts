const getTitlesScript = process.env.GET_TITLES_SHEET_SCRIPT;
const getActiveSheetScript = process.env.GET_ACTIVE_SHEET_SCRIPT;
const getDataScript = process.env.GET_DATA_SCRIPT;
const getSheetsScript = process.env.GET_SHEETS_SCRIPT;

export const endPoints = {
  getAllData: (spreadsheetId: spreadsheetIdType, sheet: sheetType) => `${getDataScript}?spreadsheetId=${spreadsheetId}&sheet=${sheet}`,
  getSheetTitles: (spreadsheetId: spreadsheetIdType, sheet: sheetType) => `${getTitlesScript}?spreadsheetId=${spreadsheetId}&sheet=${sheet}`,
  getActiveSheet: (spreadsheetId: spreadsheetIdType) => `${getActiveSheetScript}?spreadsheetId=${spreadsheetId}`,
  getSheets: (spreadsheetId: spreadsheetIdType) => `${getSheetsScript}?spreadsheetId=${spreadsheetId}`,
};
