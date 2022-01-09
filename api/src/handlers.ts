import { Request, Response } from 'express';
import { getCards, getCardById } from './lib/cards/cards';

export const rootHandler = (req: Request, res: Response) => {
  return res.send('API is working 🤓');
};

export const cardsHandler = async (req: Request, res: Response) => {
  try {
    const cards = await getCards();
    res.json(cards);
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
