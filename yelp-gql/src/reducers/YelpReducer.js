/**
 * Yelp Reducers
 */
import {
  GET_BUSINESSES,
  GET_BUSINESSES_SUCCESS,
  GET_BUSINESSES_FAILURE,
  TOGGLE_FAVORITE_BUSINESS
} from '../actions/types';

/**
 * initial onboarding state
 */
const INIT_STATE = {
  businesses: null,
  total: 0,
  error: null,
  favorites: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_BUSINESSES:
      return { ...state };
    case GET_BUSINESSES_SUCCESS:
      return {
        ...state,
        total: action.results.search.total,
        businesses: action.results.search.business.map(b => {
          return {
            ...b,
            favorite:
              state.favorites.filter(fav => fav.id === b.id).length === 1
                ? true
                : false
          };
        })
      };
    case GET_BUSINESSES_FAILURE:
      return { ...state, error: action.error };
    case TOGGLE_FAVORITE_BUSINESS:
      //check to see if its in the current business array and toggle if so

      const updatedBusinesses = state.businesses.map(
        business =>
          business.id === action.yelpBusinessID
            ? { ...business, favorite: !business.favorite }
            : business
      );

      let updatedFavorites = [...state.favorites];

      //check to see if its in the favorites array
      const favorite = state.favorites.filter(
        business => business.id === action.yelpBusinessID
      );

      //if in favorite array, then remove
      if (favorite.length === 1) {
        updatedFavorites = updatedFavorites.filter(
          fav => fav.id !== favorite[0].id
        );
      } else {
        const newFavorite = updatedBusinesses.filter(
          business => business.id === action.yelpBusinessID
        );

        updatedFavorites.push(...newFavorite);
      }

      updatedFavorites.sort((a, b) => a.name > b.name);

      return {
        ...state,
        businesses: updatedBusinesses,
        favorites: updatedFavorites
      };

    default:
      return { ...state };
  }
};
