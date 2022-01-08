import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchCardsSuccess, fetchCardsFailure } from '../actions/cards';
import { cardsActionTypes } from '../action-types/cards';

const getCards = async () => {
  const res = await axios.get('http://localhost:8000/cards');
  return res.data.Items;
};

function* fetchCardsSaga(): any {
  try {
    const data = yield call(getCards); // wait this call to finish before move on --> yield
    yield put(
      fetchCardsSuccess({
        cards: data,
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
