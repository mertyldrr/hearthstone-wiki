import express from 'express';
import { rootHandler } from '../handlers/root';

export const rootRouter = express.Router();

rootRouter.get('/', rootHandler);
