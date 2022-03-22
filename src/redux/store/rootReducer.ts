import { combineReducers } from 'redux';
import cardbacksReducer from '../reducers/cardbacks/cardbacks';
import cardsReducer from '../reducers/cards/cards';
import singleCardReducer from '../reducers/cards/singleCard';

const rootReducer = combineReducers({
  cards: cardsReducer,
  card: singleCardReducer,
  cardbacks: cardbacksReducer,
});

export type GlobalState = ReturnType<typeof rootReducer>;

export default rootReducer;
