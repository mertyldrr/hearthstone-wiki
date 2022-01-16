import { Request, Response } from 'express';
import { getCards, getCardById, getTableLength } from './lib/cards/cards';

export const rootHandler = (req: Request, res: Response) => {
  return res.send('API is working 🤓');
};

interface Results {
  cards: object;
  next?: object;
  previous?: object;
  lastItem?: object;
  itemCount: number;
}

export const cardsHandler = async (req: Request, res: Response) => {
  try {
    const page = +req.query.page;
    const pageSize = +req.query.limit;
    const lastKey = req.query.lastKey as object;
    const itemCount = await getTableLength();
    const cards = await getCards(page, pageSize, lastKey);
    const results: Results = {
      cards: cards,
      itemCount: itemCount,
    };
    results.next = {
      page: page + 1,
      pageSize: pageSize,
    };
    results.previous = {
      page: page - 1,
      pageSize: pageSize,
    };
    results.lastItem = cards.LastEvaluatedKey;
    results.cards = cards.Items;
    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

export const singleCardByIdHandler = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const card = await getCardById(id);
    res.json(card);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};
