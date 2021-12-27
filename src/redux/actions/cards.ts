import { cardsActionTypes } from '../action-types/cards';
import {
  FetchCardsRequest,
  FetchCardsSuccess,
  FetchCardsFailure,
  /*   FetchCardsSuccessPayload,
  FetchCardsFailurePayload, */
  ICard,
} from '../types/cards';

export const fetchCardsRequest = (): FetchCardsRequest => {
  return {
    type: cardsActionTypes.REQUEST,
  };
};

export const fetchCardsSuccess = (cards: ICard[]): FetchCardsSuccess => {
  return {
    type: cardsActionTypes.SUCCESS,
    cards,
  };
};

export const fetchCardsFailure = (error: string): FetchCardsFailure => {
  return {
    type: cardsActionTypes.FAILURE,
    error,
  };
};
