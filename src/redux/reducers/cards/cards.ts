import { cardsActionTypes } from '../../action-types/cards';
import { CardsTypes, CardsState } from '../../types/cards';
import { ICard } from '../../types/common';

const initialState: CardsState = {
  loading: false,
  cards: [] as ICard[],
  error: null,
  searchText: null,
  itemCount: null,
};

const cardsReducer = (state = initialState, action: CardsTypes): CardsState => {
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
        lastKey: action.payload.lastKey,
        itemCount: action.payload.itemCount,
      };
    case cardsActionTypes.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case cardsActionTypes.LOAD_MORE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case cardsActionTypes.LOAD_MORE_SUCCESS:
      const newCards: ICard[] = action.payload.cards;
      const { cards } = state;
      return {
        ...state,
        loading: false,
        cards: [...cards, ...newCards],
        error: null,
        lastKey: action.payload.lastKey,
      };
    case cardsActionTypes.LOAD_MORE_FAILURE:
      return {
        ...state,
        loading: false,
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
