import { Alert, AlertIOS, Platform, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { storeData, retrieveData, removeData } from '../utils/storage';
import { API_KEY } from  '../config/api';

const ALERT = (Platform.OS === 'ios') ? AlertIOS : Alert;

export function getBuildingRequest() {
  return {
    type: 'GET_BUILDING_REQUEST'
  }
}

export function getBuildingSuccess(bldgs) {
  return {
    type: 'GET_BUILDING_SUCCESS',
    payload: bldgs,
  }
}

export function getBuildingFailed() {
  return {
    type: 'GET_BUILDING_FAILED'
  }
}

export function get_buildings(access_token) {
  return dispatch => {
    dispatch(getBuildingRequest())
    fetch(`${API_KEY}/bldgs/`, {
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
        dispatch(getBuildingSuccess(responsejson.data))
      } else {
        console.log(responsejson)
        dispatch(getBuildingFailed())
        ALERT.alert(responsejson.message);
      }
    })
    .catch(error => {
      dispatch(getBuildingFailed())
      ALERT.alert('Server error. Please contact the admin.');
      console.log(error)
    })
  }
}
