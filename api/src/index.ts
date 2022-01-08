import express from 'express';
import cors from 'cors';
import { rootHandler, helloHandler, cardsHandler } from './handlers';

const app = express();
app.use(cors());
const port = process.env.PORT || '8000';

app.get('/', rootHandler);
app.get('/hello/:name', helloHandler);
app.get('/cards', cardsHandler);

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
