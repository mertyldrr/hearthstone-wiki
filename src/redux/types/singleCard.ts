import { singleCardActionTypes } from '../action-types/cards';

export interface ICard {
  cardId: string;
  name: string;
  img: string;
  type: string;
}

export interface SingleCardState {
  loading: boolean;
  card: ICard;
  error: string | null;
}

export interface FetchSingleCardRequest {
  type: typeof singleCardActionTypes.REQUEST;
  id: string;
}

export type FetchSingleCardSuccess = {
  type: typeof singleCardActionTypes.SUCCESS;
  payload: FetchSingleCardSuccessPayload;
};

export type FetchSingleCardFailure = {
  type: typeof singleCardActionTypes.FAILURE;
  payload: FetchSingleCardFailurePayload;
};

export interface FetchSingleCardSuccessPayload {
  card: ICard;
}

export interface FetchSingleCardFailurePayload {
  error: string;
}

export type SingleCardActions =
  | FetchSingleCardRequest
  | FetchSingleCardSuccess
  | FetchSingleCardFailure;
