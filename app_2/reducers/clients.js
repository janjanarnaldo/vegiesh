import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const searchText = createReducer('', {
  [types.SET_SEARCH_TEXT](state, action) {
    return action.str;
  },
});

export const searchedClients = createReducer({}, {
  [types.FETCHING_CLIENTS_SUCCESS](state, action) {
    return action.searchedClients;
  },
});

export const clientDetail = createReducer({}, {
  [types.FETCHING_CLIENT_DETAIL_SUCCESS](state, action) {
    return action.client;
  },
  [types.UPDATE_CLIENT_DETAIL](state, action) {
    return { ...state, ...action.data };
  },
  [types.SAVE_CLIENT_DETAIL](state, action) {
    return { ...state, ...action.data };
  },
});
