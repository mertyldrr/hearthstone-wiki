import express from 'express';

export const cardbacksRouter = express.Router();

cardbacksRouter.get('/');
cardbacksRouter.get('/:id');
