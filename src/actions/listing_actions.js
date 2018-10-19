import { Alert, AlertIOS, Platform, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { storeData, retrieveData, removeData } from '../utils/storage';
import { API_KEY } from  '../config/api';

const ALERT = (Platform.OS === 'ios') ? AlertIOS : Alert;

export function getListingRequest() {
  return {
    type: 'GET_LISTING_REQUEST'
  }
}

export function getListingSuccess(listings) {
  return {
    type: 'GET_LISTING_SUCCESS',
    payload: bldgs,
  }
}

export function getListingFailed() {
  return {
    type: 'GET_LISTING_FAILED'
  }
}

export function get_listings(access_token) {
  return dispatch => {
    dispatch(getListingRequest())
    fetch(`${API_KEY}/bldgs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${access_token}`
      }
    })
    .then(response => response.json())
    .then(responsejson => {
      if (responsejson.code == 200) {
        dispatch(getListingSuccess(responsejson.data))
        ALERT.alert(responsejson.message);
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
