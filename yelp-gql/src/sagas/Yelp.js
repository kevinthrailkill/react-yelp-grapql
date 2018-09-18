/**
 * Yelp Sagas
 */
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { GET_BUSINESSES } from '../actions/types';

import { getYelpBusinessesSuccess, getYelpBusinessesFailure } from '../actions';

import query from '../queries/query';

/**
 * Get Businesses at Yelp
 */
function* getBusinesses({ searchParameters }) {
  try {
    console.log(searchParameters);

    let searchResults = null;
    let e = null;

    yield axios
      .post('/graphql', query(searchParameters))
      .then(response => {
        // console.log(response.data.data);
        searchResults = response.data.data;
      })
      .catch(error => {
        e = error;
      });

    if (e) {
      yield put(getYelpBusinessesFailure(e));
    } else {
      yield put(getYelpBusinessesSuccess(searchResults));
    }
  } catch (error) {
    yield put(getYelpBusinessesFailure(error));
  }
}

/**
 * watch get businesses
 */
export function* watchGetBusinesses() {
  yield takeEvery(GET_BUSINESSES, getBusinesses);
}

/**
 * Yelp Root Saga
 */
export default function* rootSaga() {
  yield all([fork(watchGetBusinesses)]);
}
