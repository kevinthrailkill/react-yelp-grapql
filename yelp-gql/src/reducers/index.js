/**
 * App Reducers
 */
import { combineReducers } from 'redux';
import yelpReducer from './YelpReducer';

const reducers = combineReducers({
  yelp: yelpReducer
});

export default reducers;
