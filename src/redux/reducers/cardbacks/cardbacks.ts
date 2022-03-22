import { cardbacksActionTypes } from '../../action-types/cardbacks';
import { CardbacksTypes, CardbacksState } from '../../types/cardbacks';
import { ICardback } from '../../types/common';

const initialState: CardbacksState = {
  loading: false,
  cardbacks: [] as ICardback[],
  error: null,
  searchText: null,
};

const cardbacksReducer = (
  state = initialState,
  action: CardbacksTypes
): CardbacksState => {
  switch (action.type) {
    case cardbacksActionTypes.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case cardbacksActionTypes.SUCCESS:
      return {
        ...state,
        cardbacks: action.payload.cardbacks,
        loading: false,
        error: null,
      };
    case cardbacksActionTypes.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case cardbacksActionTypes.LOAD_MORE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case cardbacksActionTypes.LOAD_MORE_SUCCESS:
      const newCardbacks: ICardback[] = action.payload.cardbacks;
      const { cardbacks } = state;
      return {
        ...state,
        loading: false,
        cardbacks: [...cardbacks, ...newCardbacks],
        error: null,
        lastKey: action.payload.lastKey,
      };
    case cardbacksActionTypes.SEARCH:
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

export default cardbacksReducer;
