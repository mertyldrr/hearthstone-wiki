import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchCardsSuccess, fetchCardsFailure } from '../actions/cards';
import { cardsActionTypes } from '../action-types/cards';
import { ICard } from '../types/cards';

const getCards = () => {
  axios.get<ICard[]>('');
};

function* fetchCardsSaga(): any {
  try {
    const response = yield call(getCards);
    yield put(fetchCardsSuccess(response.data));
  } catch (error: any) {
    yield put(fetchCardsFailure(error.message));
  }
}

function* cardsSaga() {
  yield all([takeLatest(cardsActionTypes.REQUEST, fetchCardsSaga)]);
}

export default cardsSaga;
