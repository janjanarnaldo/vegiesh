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
  // uncomment after api is done
  /*return (dispatch, getState) => {
    return Api.get(`clients?name=${name}`).then(resp => {
      dispatch(setSearchedClients({clients: resp}));
    }).catch( (ex) => {
      console.log(ex, 'ex');
    })
  };*/
  return setSearchedClients({searchedClients: sampleClientList});
};

export const clientDetails = (id, navigate) => {
  const client = find(sampleClientList, obj => obj.id === id) || {};
  return {
    type: types.FETCHING_CLIENT_DETAIL_SUCCESS,
    client,
  };
}

export const updateClientDetail = (data) => {
  return {
    type: types.UPDATE_CLIENT_DETAIL,
    data
  }
}

export const saveClientDetail = (data) => {
  // TEMP: change the sampleClientList data
  sampleClientList = sampleClientList.map((obj) => {
    let newObj = obj;
    if (newObj.id === data.id) {
      newObj = data;
    }
    return newObj;
  });

  // @TODO: need to call save api
  return {
    type: types.SAVE_CLIENT_DETAIL,
    data
  }
}

let sampleClientList = [
  {id: 1, name: 'Penong\'s Mintal', address: 'Davao City', telNum: '3006068', balance: 1000},
  {id: 2, name: 'Penong\'s Toril', address: 'Davao City', telNum: '3006068', balance: 2000},
  {id: 3, name: 'Penong\'s Matina', address: 'Davao City', telNum: '3006068', balance: 3000},
  {id: 4, name: 'Penong\'s Ponciano', address: 'Davao City', telNum: '3006068', balance: 4000},
  {id: 5, name: 'Penong\'s Santa ana', address: 'Davao City', telNum: '3006068', balance: 5000},
  {id: 6, name: 'Penong\'s Buhangin', address: 'Davao City', telNum: '3006068', balance: 6000},
  {id: 7, name: 'Penong\'s Lanang', address: 'Davao City', telNum: '3006068', balance: 7000},
  {id: 8, name: 'Penong\'s GMALL', address: 'Davao City', telNum: '3006068', balance: 8000},
  {id: 9, name: 'Penong\'s adsa', address: 'Davao City', telNum: '3006068', balance: 9000},
  {id: 10, name: 'Penong\'s asdsad', address: 'Davao City', telNum: '3006068', balance: 10000},
  {id: 11, name: 'Penong\'s asdasd', address: 'Davao City', telNum: '3006068', balance: 11000},
];
