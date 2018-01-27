import * as types from './types';
import Api from '../lib/api';

function setSearchedClients({ searchedClients }) {
  return {
    type: types.FETCHING_CLIENTS_SUCCESS,
    searchedClients
  }
}

export function fetchClients(name) {
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

const sampleClientList = [
  {id: 1, name: 'Penong\'s Mintal', balance: 5000},
  {id: 2, name: 'Penong\'s Toril', balance: 5000},
  {id: 3, name: 'Penong\'s Matina', balance: 5000},
  {id: 4, name: 'Penong\'s Ponciano', balance: 5000},
  {id: 5, name: 'Penong\'s Santa ana', balance: 5000},
  {id: 6, name: 'Penong\'s Buhangin', balance: 5000},
  {id: 7, name: 'Penong\'s Lanang', balance: 5000},
  {id: 8, name: 'Penong\'s GMALL', balance: 5000},
  {id: 9, name: 'Penong\'s adsa', balance: 5000},
  {id: 10, name: 'Penong\'s asdsad', balance: 5000},
  {id: 11, name: 'Penong\'s asdasd', balance: 5000},
];
