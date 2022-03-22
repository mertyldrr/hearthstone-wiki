import { cardbacksActionTypes } from '../../action-types/cardbacks';
import {
  FetchCardbacksRequest,
  FetchCardbacksSuccess,
  FetchCardbacksFailure,
  FetchCardbacksSuccessPayload,
  FetchCardbacksFailurePayload,
  FetchMoreCardbacksRequest,
  FetchMoreCardbacksSuccess,
  FetchMoreCardbacksFailure,
  FetchMoreCardbacksSuccessPayload,
  FetchMoreCardbacksFailurePayload,
  SearchCardbacksByName,
  SearchCardbacksByNamePayload,
} from '../../types/cardbacks';

export const fetchCardbacksRequest = (
  limit: number,
  lastKey?: string
): FetchCardbacksRequest => {
  return {
    type: cardbacksActionTypes.REQUEST,
    limit,
    lastKey,
  };
};

export const fetchCardbacksSuccess = (
  payload: FetchCardbacksSuccessPayload
): FetchCardbacksSuccess => {
  return {
    type: cardbacksActionTypes.SUCCESS,
    payload,
  };
};

export const fetchCardbacksFailure = (
  payload: FetchCardbacksFailurePayload
): FetchCardbacksFailure => {
  return {
    type: cardbacksActionTypes.FAILURE,
    payload,
  };
};

export const fetchMoreCardbacksRequest = (
  limit: number,
  lastKey?: string
): FetchMoreCardbacksRequest => {
  return {
    type: cardbacksActionTypes.LOAD_MORE_REQUEST,
    limit,
    lastKey,
  };
};

export const fetchMoreCardbacksSuccess = (
  payload: FetchMoreCardbacksSuccessPayload
): FetchMoreCardbacksSuccess => {
  return {
    type: cardbacksActionTypes.LOAD_MORE_SUCCESS,
    payload,
  };
};

export const fetchMoreCardbacksFailure = (
  payload: FetchMoreCardbacksFailurePayload
): FetchMoreCardbacksFailure => {
  return {
    type: cardbacksActionTypes.LOAD_MORE_FAILURE,
    payload,
  };
};

export const searchByCardbackName = (
  payload: SearchCardbacksByNamePayload
): SearchCardbacksByName => {
  return {
    type: cardbacksActionTypes.SEARCH,
    payload,
  };
};
