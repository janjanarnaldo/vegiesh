import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const searchedRecipes = createReducer({}, {
  [types.FETCHING_JEDI_SUCCESS](state, action) {
    return state;
  },
});
