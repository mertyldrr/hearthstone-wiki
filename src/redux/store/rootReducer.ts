import { combineReducers } from 'redux';
import cardsReducer from '../reducers/cards';
import singleCardReducer from '../reducers/singleCard';

const rootReducer = combineReducers({
  cards: cardsReducer,
  card: singleCardReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
