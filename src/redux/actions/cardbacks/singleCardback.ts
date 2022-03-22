import { singleCardbackActionTypes } from '../../action-types/cardbacks';
import {
  FetchSingleCardbackRequest,
  FetchSingleCardbackSuccess,
  FetchSingleCardbackFailure,
  FetchSingleCardbackSuccessPayload,
  FetchSingleCardbackFailurePayload,
} from '../../types/singleCardback';

export const fetchSingleCardbackRequest = (
  id: string
): FetchSingleCardbackRequest => {
  return {
    type: singleCardbackActionTypes.REQUEST,
    id,
  };
};

export const fetchSingleCardbackSuccess = (
  payload: FetchSingleCardbackSuccessPayload
): FetchSingleCardbackSuccess => {
  return {
    type: singleCardbackActionTypes.SUCCESS,
    payload,
  };
};

export const fetchSingleCardbackFailure = (
  payload: FetchSingleCardbackFailurePayload
): FetchSingleCardbackFailure => {
  return {
    type: singleCardbackActionTypes.FAILURE,
    payload,
  };
};
