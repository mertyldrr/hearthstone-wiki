import axios from 'axios';
import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  fetchCardsSuccess,
  fetchCardsFailure,
  fetchMoreCardsSuccess,
  fetchMoreCardsFailure,
} from '../../actions/cards/cards';
import { cardsActionTypes } from '../../action-types/cards';

const getCards = async (limit: number, lastKeyId?: any) => {
  let res;
  if (lastKeyId) {
    res = await axios.get(
      `http://localhost:8000/cards?limit=${limit}&lastKey=${lastKeyId}`
    );
  } else {
    res = await axios.get(`http://localhost:8000/cards?limit=${limit}`);
  }
  return res.data;
};

function* fetchCardsSaga(action: any): any {
  const limit = action.limit;
  const lastKey = action.lastKey;
  try {
    const data = yield call(getCards, limit, lastKey); // wait this call to finish before move on --> yield
    yield put(
      fetchCardsSuccess({
        cards: data.cards,
        lastKey: data.lastItem.cardId,
        itemCount: data.itemCount,
      })
    );
  } catch (error: any) {
    yield put(
      fetchCardsFailure({
        error: error.message,
      })
    );
  }
}

function* fetchMoreCardsSaga(action: any): any {
  const limit = action.limit;
  const lastKey = action.lastKey;
  try {
    const data = yield call(getCards, limit, lastKey);
    yield delay(750);
    yield put(
      fetchMoreCardsSuccess({
        cards: data.cards,
        lastKey: data.lastItem.cardId,
      })
    );
  } catch (error: any) {
    yield put(
      fetchMoreCardsFailure({
        error: error.message,
      })
    );
  }
}

function* cardsSaga() {
  yield takeLatest(cardsActionTypes.REQUEST, fetchCardsSaga);
  yield takeEvery(cardsActionTypes.LOAD_MORE_REQUEST, fetchMoreCardsSaga);
}

export default cardsSaga;
