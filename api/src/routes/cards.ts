import express from 'express';
import { cardsHandler, singleCardByIdHandler } from '../handlers/cards';

export const cardsRouter = express.Router();

cardsRouter.get('/', cardsHandler);
cardsRouter.get('/:id', singleCardByIdHandler);
