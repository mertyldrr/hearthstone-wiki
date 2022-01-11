import { cardsActionTypes } from '../action-types/cards';
import {
  FetchCardsRequest,
  FetchCardsSuccess,
  FetchCardsFailure,
  FetchCardsSuccessPayload,
  FetchCardsFailurePayload,
  SearchCardsByName,
  SearchCardsByNamePayload,
} from '../types/cards';

export const fetchCardsRequest = (): FetchCardsRequest => {
  return {
    type: cardsActionTypes.REQUEST,
  };
};

export const fetchCardsSuccess = (
  payload: FetchCardsSuccessPayload
): FetchCardsSuccess => {
  return {
    type: cardsActionTypes.SUCCESS,
    payload,
  };
};

export const fetchCardsFailure = (
  payload: FetchCardsFailurePayload
): FetchCardsFailure => {
  return {
    type: cardsActionTypes.FAILURE,
    payload,
  };
};

export const searchCardsByName = (
  payload: SearchCardsByNamePayload
): SearchCardsByName => {
  return {
    type: cardsActionTypes.SEARCH,
    payload,
  };
};
