import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchCardsSuccess, fetchCardsFailure } from '../actions/cards';
import { cardsActionTypes } from '../action-types/cards';

const getCards = async (page: number, limit: number, lastKeyId?: any) => {
  let res;
  if (lastKeyId) {
    res = await axios.get(
      `http://localhost:8000/cards?page=${page}&limit=${limit}&lastKey=${lastKeyId.cardId}`
    );
  } else {
    res = await axios.get(
      `http://localhost:8000/cards?page=${page}&limit=${limit}`
    );
  }
  return res.data;
};

function* fetchCardsSaga(action: any): any {
  //const lastKey = action.lastKey.cardId;
  const lastKey = action.lastKey;
  let page = 1;
  let limit = 5;
  try {
    const data = yield call(getCards, page, limit, lastKey); // wait this call to finish before move on --> yield
    yield put(
      fetchCardsSuccess({
        cards: data.cards,
        next: data.next,
        previous: data.previous,
        lastKey: data.lastItem,
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

function* cardsSaga() {
  yield all([takeLatest(cardsActionTypes.REQUEST, fetchCardsSaga)]);
}

export default cardsSaga;
