import { Request, Response } from 'express';
import { getCards } from './lib/cards/cards';

interface HelloResponse {
  hello: string;
}

type HelloBuilder = (name: string) => HelloResponse;

const helloBuilder: HelloBuilder = (name) => ({ hello: name });

export const rootHandler = (req: Request, res: Response) => {
  return res.send('API is working 🤓');
};

export const helloHandler = (_req: Request, res: Response) => {
  const { params } = _req;
  const { name = 'World' } = params;
  const response = helloBuilder(name);

  return res.json(response);
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
