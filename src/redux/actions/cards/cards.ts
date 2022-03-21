import { cardsActionTypes } from '../../action-types/cards';
import {
  FetchCardsRequest,
  FetchCardsSuccess,
  FetchCardsFailure,
  FetchCardsSuccessPayload,
  FetchCardsFailurePayload,
  FetchMoreCardsRequest,
  FetchMoreCardsSuccess,
  FetchMoreCardsFailure,
  FetchMoreCardsSuccessPayload,
  FetchMoreCardsFailurePayload,
  SearchCardsByName,
  SearchCardsByNamePayload,
} from '../../types/cards';

export const fetchCardsRequest = (
  limit: number,
  lastKey?: string
): FetchCardsRequest => {
  return {
    type: cardsActionTypes.REQUEST,
    limit,
    lastKey,
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

export const fetchMoreCardsRequest = (
  limit: number,
  lastKey?: string
): FetchMoreCardsRequest => {
  return {
    type: cardsActionTypes.LOAD_MORE_REQUEST,
    limit,
    lastKey,
  };
};

export const fetchMoreCardsSuccess = (
  payload: FetchMoreCardsSuccessPayload
): FetchMoreCardsSuccess => {
  return {
    type: cardsActionTypes.LOAD_MORE_SUCCESS,
    payload,
  };
};

export const fetchMoreCardsFailure = (
  payload: FetchMoreCardsFailurePayload
): FetchMoreCardsFailure => {
  return {
    type: cardsActionTypes.LOAD_MORE_FAILURE,
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
