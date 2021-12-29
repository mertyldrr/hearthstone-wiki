import { cardsActionTypes } from '../action-types/cards';
import { CardsActions, CardsState } from '../types/cards';

const initialState: CardsState = {
  loading: false,
  cards: [],
  error: null,
};

const cardsReducer = (state = initialState, action: CardsActions) => {
  switch (action.type) {
    case cardsActionTypes.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case cardsActionTypes.SUCCESS:
      return {
        ...state,
        loading: false,
        cards: action.cards,
        error: null,
      };
    case cardsActionTypes.FAILURE:
      return {
        ...state,
        loading: false,
        cards: [],
        error: action.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default cardsReducer;
