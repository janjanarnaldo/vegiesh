import * as types from './types';
import Api from '../lib/api';

function setSearchedJedi({ jedis }) {
  return {
    type: types.FETCHING_JEDI_SUCCESS,
    jedis
  }
}

export function fetchJedi() {
  return (dispatch, getState) => {
    return Api.get().then(resp => {
      dispatch(setSearchedJedi({jedis: resp}));
    }).catch( (ex) => {
      console.log(ex, 'ex');
    })
  };
};
