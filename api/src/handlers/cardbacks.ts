import { Request, Response } from 'express';
import { getCardbacks, getCardbackById } from '../lib/cardbacks';

interface Results {
  cardbacks: object;
  lastItem?: object;
}

export const cardbacksHandler = async (req: Request, res: Response) => {
  try {
    const limit = +req.query.limit;
    const lastKey = req.query.lastKey;
    const cardbacks = await getCardbacks(limit, lastKey as string);
    const results: Results = {
      cardbacks: cardbacks.Items,
      lastItem: cardbacks.LastEvaluatedKey,
    };
    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

export const singleCardbackHandler = async (req: Request, res: Response) => {
  const cardbackId = req.params.id;
  try {
    const cardback = await getCardbackById(cardbackId);
    res.json(cardback);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};
