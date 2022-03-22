import express from 'express';
import { cardbacksHandler, singleCardbackHandler } from '../handlers/cardbacks';

export const cardbacksRouter = express.Router();

cardbacksRouter.get('/', cardbacksHandler);
cardbacksRouter.get('/:id', singleCardbackHandler);
