import { Request, Response } from 'express';
import { getCards, getCardById, getTableLength } from '../lib/cards';

interface Results {
  cards: object;
  lastItem?: object;
  itemCount: number;
}

export const cardsHandler = async (req: Request, res: Response) => {
  try {
    const limit = +req.query.limit;
    const lastKey = req.query.lastKey;
    const itemCount = await getTableLength();
    const cards = await getCards(limit, lastKey as string);
    const results: Results = {
      cards: cards.Items,
      lastItem: cards.LastEvaluatedKey,
      itemCount: itemCount,
    };
    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

export const singleCardByIdHandler = async (req: Request, res: Response) => {
  const cardId = req.params.id;
  try {
    const card = await getCardById(cardId);
    res.json(card);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};
