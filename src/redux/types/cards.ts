import { cardsActionTypes } from '../action-types/cards';

export interface ICard {
  [key: string]: string;
}

export type CardsState = {
  loading: boolean;
  cards: ICard[];
  error: string | null;
  searchText: string | null;
  lastKey?: string;
  itemCount: number | null;
};

export type FetchCardsRequest = {
  type: typeof cardsActionTypes.REQUEST;
  limit: number;
  lastKey?: string;
};

export type FetchCardsSuccess = {
  type: typeof cardsActionTypes.SUCCESS;
  payload: FetchCardsSuccessPayload;
};

export type FetchCardsSuccessPayload = {
  cards: ICard[];
  lastKey?: string;
  itemCount: number;
};

export type FetchCardsFailure = {
  type: typeof cardsActionTypes.FAILURE;
  payload: FetchCardsFailurePayload;
};

export type FetchCardsFailurePayload = {
  error: string;
};

export type FetchMoreCardsRequest = {
  type: typeof cardsActionTypes.LOAD_MORE_REQUEST;
  limit: number;
  lastKey?: string;
};

export type FetchMoreCardsSuccess = {
  type: typeof cardsActionTypes.LOAD_MORE_SUCCESS;
  payload: FetchMoreCardsSuccessPayload;
};

export type FetchMoreCardsSuccessPayload = {
  cards: ICard[];
  lastKey?: string;
};

export type FetchMoreCardsFailure = {
  type: typeof cardsActionTypes.LOAD_MORE_FAILURE;
  payload: FetchMoreCardsFailurePayload;
};

export type FetchMoreCardsFailurePayload = {
  error: string;
};

export type SearchCardsByName = {
  type: typeof cardsActionTypes.SEARCH;
  payload: SearchCardsByNamePayload;
};

export type SearchCardsByNamePayload = {
  searchText: string;
};

export type CardsTypes =
  | FetchCardsRequest
  | FetchCardsSuccess
  | FetchCardsFailure
  | FetchMoreCardsRequest
  | FetchMoreCardsSuccess
  | FetchMoreCardsFailure
  | SearchCardsByName;
