import { singleCardActionTypes } from '../action-types/cards';
import { SingleCardActions, SingleCardState } from '../types/singleCard';

const initialState: SingleCardState = {
  loading: false,
  card: {},
  error: null,
};

const singleCardReducer = (state = initialState, action: SingleCardActions) => {
  switch (action.type) {
    case singleCardActionTypes.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case singleCardActionTypes.SUCCESS:
      return {
        ...state,
        loading: false,
        card: action.payload.card,
        error: null,
      };
    case singleCardActionTypes.FAILURE:
      return {
        ...state,
        loading: false,
        card: { cardId: '', name: '', img: '', imgGold: '', type: '', flavor: '' },
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default singleCardReducer;
