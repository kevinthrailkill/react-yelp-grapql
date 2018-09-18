/**
 * Yelp Actions
 *
 */
import {
  GET_BUSINESSES,
  GET_BUSINESSES_SUCCESS,
  GET_BUSINESSES_FAILURE,
  TOGGLE_FAVORITE_BUSINESS
} from './types';

/**
 * Redux Action To Get Yelp Businesses
 */
export const getYelpBusinesses = searchParameters => ({
  type: GET_BUSINESSES,
  searchParameters
});

/**
 * Redux Action To Get Yelp Businesses Success
 */
export const getYelpBusinessesSuccess = results => ({
  type: GET_BUSINESSES_SUCCESS,
  results
});

/**
 * Redux Action To Get Yelp Businesses Failure
 */
export const getYelpBusinessesFailure = error => ({
  type: GET_BUSINESSES_FAILURE,
  error
});

/**
 * Redux Action To Toggle Favorite Yelp Businesses
 */
export const toggleFavoriteBusiness = yelpBusinessID => ({
  type: TOGGLE_FAVORITE_BUSINESS,
  yelpBusinessID
});
