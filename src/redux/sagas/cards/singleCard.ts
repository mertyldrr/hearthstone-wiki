import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchSingleCardSuccess,
  fetchSingleCardFailure,
} from '../../actions/cards/singleCard';
import { singleCardActionTypes } from '../../action-types/cards';

const getCard = async (cardId: string) => {
  const res = await axios.get(`http://localhost:8000/cards/${cardId}`);
  return res.data.Item;
};

function* fetchCardByIdSaga(action: any): any {
  const id = action.id;
  try {
    const data = yield call(getCard, id);
    yield put(
      fetchSingleCardSuccess({
        card: data,
      })
    );
  } catch (error: any) {
    yield put(
      fetchSingleCardFailure({
        error: error.message,
      })
    );
  }
}

function* singleCardSaga() {
  yield all([takeLatest(singleCardActionTypes.REQUEST, fetchCardByIdSaga)]);
}

export default singleCardSaga;
