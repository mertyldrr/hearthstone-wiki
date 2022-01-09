import express from 'express';
import cors from 'cors';
import { rootHandler, cardsHandler, singleCardByIdHandler } from './handlers';

const app = express();
app.use(cors());
const port = process.env.PORT || '8000';

app.get('/', rootHandler);
app.get('/cards', cardsHandler);
app.get('/cards/:id', singleCardByIdHandler);

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
