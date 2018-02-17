import { combineReducers } from 'redux';
import { nav } from './nav';
import { auth } from './auth';
import * as clientsReducer from './clients';

export default combineReducers({
  nav,
  auth,
  ...clientsReducer
});
