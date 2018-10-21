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
    fetch(`${API_KEY}/bldgs/1/listings`, {
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
