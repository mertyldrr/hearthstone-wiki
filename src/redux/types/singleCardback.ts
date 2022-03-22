import { singleCardbackActionTypes } from '../action-types/cardbacks';
import { ICardback } from './common';

export interface SingleCardbackState {
  loading: boolean;
  cardback: ICardback;
  error: string | null;
}

export type FetchSingleCardbackRequest = {
  type: typeof singleCardbackActionTypes.REQUEST;
  id: string;
};

export type FetchSingleCardbackSuccess = {
  type: typeof singleCardbackActionTypes.SUCCESS;
  payload: FetchSingleCardbackSuccessPayload;
};

export type FetchSingleCardbackFailure = {
  type: typeof singleCardbackActionTypes.FAILURE;
  payload: FetchSingleCardbackFailurePayload;
};

export type FetchSingleCardbackSuccessPayload = {
  cardback: ICardback;
};

export type FetchSingleCardbackFailurePayload = {
  error: string;
};

export type SingleCardbackTypes =
  | FetchSingleCardbackRequest
  | FetchSingleCardbackSuccess
  | FetchSingleCardbackFailure;
