import { all, fork } from 'redux-saga/effects';
import cardsSaga from '../sagas/cards/cards';
import singleCardSaga from '../sagas/cards/singleCard';
import cardbacksSaga from '../sagas/cardbacks/cardbacks';

// so code after all-effect (see comments in above code) is executed when all children sagas complete

/*
There is another popular pattern when designing root saga: nesting fork effects in an all effect. 
By doing so, you can get an array of task descriptors, and the code after the all effect will be 
executed immediately because each fork effect is non-blocking and synchronously returning 
a task descriptor.
*/

export function* rootSaga() {
  yield all([fork(cardsSaga), fork(singleCardSaga), fork(cardbacksSaga)]);
}
