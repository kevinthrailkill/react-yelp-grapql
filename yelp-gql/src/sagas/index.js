/**
 * Root Sagas
 */
import { all } from 'redux-saga/effects';

// sagas
import yelpSagas from './Yelp';

export default function* rootSaga(getState) {
  yield all([yelpSagas()]);
}
