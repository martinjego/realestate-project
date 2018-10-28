import { Alert, AlertIOS, Platform, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { storeData, retrieveData, removeData } from '../utils/storage';
import { API_KEY } from  '../config/api';

const ALERT = (Platform.OS === 'ios') ? AlertIOS : Alert;

export function updateSortType(type) {
  return {
    type: 'UPDATE_SORT_TYPE',
    payload: type
  }
}

export function getListingRequest() {
  return {
    type: 'GET_LISTING_REQUEST'
  }
}

export function getListingSuccess(listings) {
  return {
    type: 'GET_LISTING_SUCCESS',
    payload: listings,
  }
}

export function getListingFailed() {
  return {
    type: 'GET_LISTING_FAILED'
  }
}

export function get_bldg_listings(bldg_id, api_token) {
  return dispatch => {
    dispatch(getListingRequest())
    fetch(`${API_KEY}/bldgs/${bldg_id}/listings`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${api_token}`
      }
    })
    .then(response => response.json())
    .then(responsejson => {
      if (responsejson.code == 200) {
        dispatch(getListingSuccess(responsejson.data))
      } else {
        console.log(responsejson)
        dispatch(getListingFailed())
        ALERT.alert(responsejson.message);
      }
    })
    .catch(error => {
      dispatch(getListingFailed())
      ALERT.alert('Server error. Please contact the admin.');
      console.log(error)
    })
  }
}

export function updateActiveListRequest() {
  return {
    type: 'UPDATE_ACTIVE_LIST_REQUEST'
  }
}

export function updateActiveListSuccess(list) {
  return {
    type: 'UPDATE_ACTIVE_LIST_SUCCESS',
    payload: list  
  }
}

export function updateActiveListFailed() {
  return {
    type: 'UPDATE_ACTIVE_LIST_FAILED'
  }
}

export function update_active_list(list_id, api_token) {
  return dispatch => {
    console.log(api_token, list_id)
    dispatch(getListingRequest())
    fetch(`${API_KEY}/listings/${list_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${api_token}`
      }
    })
    .then(response => response.json())
    .then(responsejson => {
      if (responsejson.code == 200) {
        dispatch(updateActiveListSuccess(responsejson.data))
      } else {
        console.log(responsejson)
        dispatch(updateActiveListFailed())
        ALERT.alert(responsejson.message);
      }
    })
    .catch(error => {
      dispatch(updateActiveListFailed())
      ALERT.alert('Server error. Please contact the admin.');
      console.log(error)
    })
  }
}
