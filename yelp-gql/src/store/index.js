/**
 * Redux Store
 */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';

import RootSaga from '../sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export default createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(RootSaga);
