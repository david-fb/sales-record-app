// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSheets } from '@services/api/spreadsheet';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  const {spreadsheetId} = req.query;
  if(typeof spreadsheetId === 'string') {
    const data = await getSheets(spreadsheetId);
    return res.status(200).json(data);
  }
  return res.status(400).json({message: 'bad request'});
}
