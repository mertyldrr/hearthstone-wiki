import { cardsActionTypes } from '../action-types/cards';

export interface ICard {
  cardId: string;
  name: string;
  img: string;
}

export interface CardsState {
  loading: boolean;
  cards: ICard[];
  error: string | null;
}

/* export interface FetchCardsSuccessPayload {
  cards: ICard[];
}

export interface FetchCardsFailurePayload {
  error: string;
} */

export interface FetchCardsRequest {
  type: typeof cardsActionTypes.REQUEST;
}

export interface FetchCardsSuccess {
  type: typeof cardsActionTypes.SUCCESS;
  cards: ICard[];
}

export interface FetchCardsFailure {
  type: typeof cardsActionTypes.FAILURE;
  error: string;
}

export type CardsActions =
  | FetchCardsRequest
  | FetchCardsSuccess
  | FetchCardsFailure;
