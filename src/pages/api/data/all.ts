import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllData } from '@services/api/spreadsheet';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  const {spreadsheetId, sheet} = req.query;

  if (typeof spreadsheetId === 'string' && typeof sheet === 'string') {
    const data = await getAllData(spreadsheetId, sheet);
    return res.status(200).json(data);
  }
  return res.status(400).json({message: 'bad request'});
}
