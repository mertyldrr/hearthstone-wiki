import { all, fork } from 'redux-saga/effects';

import cardsSaga from '../sagas/cards';

export function* rootSaga() {
  yield all([fork(cardsSaga)]);
}
