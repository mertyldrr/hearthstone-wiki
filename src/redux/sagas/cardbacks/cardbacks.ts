import axios from 'axios';
import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  fetchCardbacksSuccess,
  fetchMoreCardbacksFailure,
  fetchMoreCardbacksSuccess,
  fetchCardbacksFailure,
} from '../../actions/cardbacks/cardbacks';
import { cardbacksActionTypes } from '../../action-types/cardbacks';

const getCardbacks = async (limit: number, lastKeyId?: any) => {
  let res;
  if (lastKeyId) {
    res = await axios.get(
      `http://localhost:8000/cardbacks?limit=${limit}&lastKey=${lastKeyId}`
    );
  } else {
    res = await axios.get(`http://localhost:8000/cardbacks?limit=${limit}`);
  }
  return res.data;
};

function* fetchCardbacksSaga(action: any): any {
  const limit = action.limit;
  const lastKey = action.lastKey;
  try {
    const data = yield call(getCardbacks, limit, lastKey); // wait this call to finish before move on --> yield
    yield put(
      fetchCardbacksSuccess({
        cardbacks: data.cardbacks,
        lastKey: data.lastItem.cardbackId,
      })
    );
  } catch (error: any) {
    yield put(
      fetchCardbacksFailure({
        error: error.message,
      })
    );
  }
}

function* fetchMoreCardbacksSaga(action: any): any {
  const limit = action.limit;
  const lastKey = action.lastKey;
  try {
    const data = yield call(getCardbacks, limit, lastKey);
    yield delay(750);
    yield put(
      fetchMoreCardbacksSuccess({
        cardbacks: data.cardbacks,
        lastKey: data.lastItem.cardbackId,
      })
    );
  } catch (error: any) {
    yield put(
      fetchMoreCardbacksFailure({
        error: error.message,
      })
    );
  }
}

function* cardbacksSaga() {
  yield takeLatest(cardbacksActionTypes.REQUEST, fetchCardbacksSaga);
  yield takeEvery(
    cardbacksActionTypes.LOAD_MORE_REQUEST,
    fetchMoreCardbacksSaga
  );
}

export default cardbacksSaga;
