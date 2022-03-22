import { singleCardActionTypes } from '../action-types/cards';

export interface ICard {
  [key: string]: string;
}

export type SingleCardState = {
  loading: boolean;
  card: ICard;
  error: string | null;
};

export type FetchSingleCardRequest = {
  type: typeof singleCardActionTypes.REQUEST;
  id: string;
};

export type FetchSingleCardSuccess = {
  type: typeof singleCardActionTypes.SUCCESS;
  payload: FetchSingleCardSuccessPayload;
};

export type FetchSingleCardFailure = {
  type: typeof singleCardActionTypes.FAILURE;
  payload: FetchSingleCardFailurePayload;
};

export type FetchSingleCardSuccessPayload = {
  card: ICard;
};

export type FetchSingleCardFailurePayload = {
  error: string;
};

export type SingleCardTypes =
  | FetchSingleCardRequest
  | FetchSingleCardSuccess
  | FetchSingleCardFailure;
