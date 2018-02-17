import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialAuthState = { isLoggedIn: false };

export const auth = createReducer(initialAuthState, {
  [types.AUTH_IS_LOGIN](state, action) {
    return { ...state, isLoggedIn: true };
  },
  [types.AUTH_IS_LOGOUT](state, action) {
    return { ...state, isLoggedIn: false };
  },
});