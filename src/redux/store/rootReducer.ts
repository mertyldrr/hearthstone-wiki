import { combineReducers } from 'redux';
import cardsReducer from '../reducers/cards';
import singleCardReducer from '../reducers/singleCard';

const rootReducer = combineReducers({
  cards: cardsReducer,
  card: singleCardReducer,
});

export type GlobalState = ReturnType<typeof rootReducer>;

export default rootReducer;
