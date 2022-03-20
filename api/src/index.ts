import express from 'express';
import cors from 'cors';
import { cardsRouter } from './routes/cards';
import { cardbacksRouter } from './routes/cardbacks';
import { rootRouter } from './routes/root';

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || '8000';

app.use('/', rootRouter);
app.use('/cards', cardsRouter);
app.use('/cardbacks', cardbacksRouter);

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
