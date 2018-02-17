import createReducer from '../lib/createReducer';

export const number = createReducer(0, {
  increment(state, action) {
    return state + 1;
  },
});
