import { singleCardActionTypes } from '../../action-types/cards';
import {
  FetchSingleCardRequest,
  FetchSingleCardSuccess,
  FetchSingleCardFailure,
  FetchSingleCardSuccessPayload,
  FetchSingleCardFailurePayload,
} from '../../types/singleCard';

export const fetchSingleCardRequest = (id: string): FetchSingleCardRequest => {
  return {
    type: singleCardActionTypes.REQUEST,
    id,
  };
};

export const fetchSingleCardSuccess = (
  payload: FetchSingleCardSuccessPayload
): FetchSingleCardSuccess => {
  return {
    type: singleCardActionTypes.SUCCESS,
    payload,
  };
};

export const fetchSingleCardFailure = (
  payload: FetchSingleCardFailurePayload
): FetchSingleCardFailure => {
  return {
    type: singleCardActionTypes.FAILURE,
    payload,
  };
};
