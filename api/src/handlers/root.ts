import { Request, Response } from 'express';

export const rootHandler = (req: Request, res: Response) => {
  return res.send('API is working 🤓');
};
