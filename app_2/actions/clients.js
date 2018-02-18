import * as types from './types';
import Api from '../lib/api';
import { find } from 'lodash';
import { NavigationActions } from 'react-navigation';

export const goToClient = () => {
  return (dispatch) => dispatch(NavigationActions.navigate({ routeName: 'Client' }));
}

export const goToClientDetails = () => {
  return (dispatch) => dispatch(NavigationActions.navigate({ routeName: 'ClientDetail' }));
}

export const setSearchText = (str) => {
  return {
    type: types.SET_SEARCH_TEXT,
    str,
  }
}

const setSearchedClients = ({ searchedClients }) => {
  return {
    type: types.FETCHING_CLIENTS_SUCCESS,
    searchedClients,
  };
}

export const fetchClients = (name) => {
  return (dispatch, getState) => Api.get(`clients?name=${name}`).then(resp => {
    dispatch({
      type: types.FETCHING_CLIENTS_SUCCESS,
      searchedClients: resp.clients,
    });
  }).catch( (ex) => {
    console.log(ex, 'ex');
  });
};

export const clientDetails = (_id) => {
  return (dispatch, getState) => Api.get(`client/${_id}`).then(resp => {
    dispatch({
      type: types.FETCHING_CLIENT_DETAIL_SUCCESS,
      client: resp.client,
    });
  }).catch( (ex) => {
    console.log(ex, 'ex');
  });
  // return {
  //   type: types.FETCHING_CLIENT_DETAIL_SUCCESS,
  //   client,
  // };
}

export const updateClientDetail = (data) => {
  return {
    type: types.UPDATE_CLIENT_DETAIL,
    data
  }
}

export const saveClientDetail = (data) => {
  // // TEMP: change the sampleClientList data
  // sampleClientList = sampleClientList.map((obj) => {
  //   let newObj = obj;
  //   if (newObj.id === data.id) {
  //     newObj = data;
  //   }
  //   return newObj;
  // });

  return (dispatch, getState) => Api.put(`client/${data._id}`, data).then(resp => {
    dispatch({
      type: types.SAVE_CLIENT_DETAIL,
      data
    });
  }).catch( (ex) => {
    console.log(ex, 'ex');
  });

  // return {
  //   type: types.SAVE_CLIENT_DETAIL,
  //   data
  // }
}
