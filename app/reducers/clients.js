import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const searchedClients = createReducer({}, {
  [types.FETCHING_CLIENTS_SUCCESS](state, action) {
    return action.searchedClients;
  },
});
