import { cardsActionTypes } from '../action-types/cards';

export interface ICard {
  [key: string]: string;
}

export interface CardsState {
  loading: boolean;
  cards: ICard[];
  error: string | null;
  searchText: string | null;
  lastKey?: object;
}

export interface FetchCardsRequest {
  type: typeof cardsActionTypes.REQUEST;
  lastKey?: object;
}

export type FetchCardsSuccess = {
  type: typeof cardsActionTypes.SUCCESS;
  payload: FetchCardsSuccessPayload;
};

export interface FetchCardsSuccessPayload {
  cards: ICard[];
  next?: object;
  previous?: object;
  lastKey?: object;
  itemCount: number;
}

export type FetchCardsFailure = {
  type: typeof cardsActionTypes.FAILURE;
  payload: FetchCardsFailurePayload;
};

export interface FetchCardsFailurePayload {
  error: string;
}

export type SearchCardsByName = {
  type: typeof cardsActionTypes.SEARCH;
  payload: SearchCardsByNamePayload;
};

export interface SearchCardsByNamePayload {
  searchText: string;
}

export type CardsActions =
  | FetchCardsRequest
  | FetchCardsSuccess
  | FetchCardsFailure
  | SearchCardsByName;
