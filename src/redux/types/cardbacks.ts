import { cardbacksActionTypes } from '../action-types/cardbacks';
import { ICardback } from './common';

export type CardbacksState = {
  loading: boolean;
  cardbacks: ICardback[];
  error: string | null;
  searchText: string | null;
  lastKey?: string;
};

export type FetchCardbacksRequest = {
  type: typeof cardbacksActionTypes.REQUEST;
  limit: number;
  lastKey?: string;
};

export type FetchCardbacksSuccess = {
  type: typeof cardbacksActionTypes.SUCCESS;
  payload: FetchCardbacksSuccessPayload;
};

export type FetchCardbacksSuccessPayload = {
  cardbacks: ICardback[];
  lastKey?: string;
};

export type FetchCardbacksFailure = {
  type: typeof cardbacksActionTypes.FAILURE;
  payload: FetchCardbacksFailurePayload;
};

export type FetchCardbacksFailurePayload = {
  error: string;
};

export type FetchMoreCardbacksRequest = {
  type: typeof cardbacksActionTypes.LOAD_MORE_REQUEST;
  limit: number;
  lastKey?: string;
};

export type FetchMoreCardbacksSuccess = {
  type: typeof cardbacksActionTypes.LOAD_MORE_SUCCESS;
  payload: FetchMoreCardbacksSuccessPayload;
};

export type FetchMoreCardbacksSuccessPayload = {
  cardbacks: ICardback[];
  lastKey?: string;
};

export type FetchMoreCardbacksFailure = {
  type: typeof cardbacksActionTypes.LOAD_MORE_FAILURE;
  payload: FetchMoreCardbacksFailurePayload;
};

export type FetchMoreCardbacksFailurePayload = {
  error: string;
};

export type SearchCardbacksByName = {
  type: typeof cardbacksActionTypes.SEARCH;
  payload: SearchCardbacksByNamePayload;
};

export type SearchCardbacksByNamePayload = {
  searchText: string;
};

export type CardbacksTypes =
  | FetchCardbacksRequest
  | FetchCardbacksSuccess
  | FetchCardbacksFailure
  | FetchMoreCardbacksRequest
  | FetchMoreCardbacksSuccess
  | FetchMoreCardbacksFailure
  | SearchCardbacksByName;
