import { cardsActionTypes } from '../action-types/cards';
import { CardsActions, CardsState } from '../types/cards';

const initialState: CardsState = {
  loading: false,
  cards: [],
  error: null,
  searchText: null,
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
        cards: action.payload.cards,
        error: null,
        next: action.payload.next,
        previous: action.payload.previous,
        lastKey: action.payload.lastKey,
        itemCount: action.payload.itemCount,
      };
    case cardsActionTypes.FAILURE:
      return {
        ...state,
        loading: false,
        cards: [],
        error: action.payload.error,
      };
    case cardsActionTypes.SEARCH:
      return {
        ...state,
        searchText: action.payload.searchText,
      };
    default:
      return {
        ...state,
      };
  }
};

export default cardsReducer;
