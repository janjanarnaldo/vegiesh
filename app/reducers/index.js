import { combineReducers } from 'redux';
import { nav } from './nav'
import { auth } from './auth'
import * as clientsReducer from './clients';

export default combineReducers(Object.assign(
  nav,
  auth,
  clientsReducer,
));
