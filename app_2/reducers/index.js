import { combineReducers } from 'redux';
import { nav } from './nav';
import { auth } from './auth';
import * as clientsReducer from './clients';

const AppReducer = combineReducers({
  nav,
  auth,
  clientsReducer
});

export default AppReducer;