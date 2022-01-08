import { cardsActionTypes } from '../action-types/cards';

export interface ICard {
  cardId: string;
  name: string;
  img: string;
  type: string;
}

export interface CardsState {
  loading: boolean;
  cards: ICard[];
  error: string | null;
}

export interface FetchCardsRequest {
  type: typeof cardsActionTypes.REQUEST;
}

export type FetchCardsSuccess = {
  type: typeof cardsActionTypes.SUCCESS;
  payload: FetchCardsSuccessPayload;
};

export type FetchCardsFailure = {
  type: typeof cardsActionTypes.FAILURE;
  payload: FetchCardsFailurePayload;
};

export interface FetchCardsSuccessPayload {
  cards: ICard[];
}

export interface FetchCardsFailurePayload {
  error: string;
}

export type CardsActions =
  | FetchCardsRequest
  | FetchCardsSuccess
  | FetchCardsFailure;
