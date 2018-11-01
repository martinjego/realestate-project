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

export function likeListRequest() {
  return {
    type: 'LIKE_LIST_REQUEST'
  }
}

export function likeListSuccess() {
  return {
    type: 'LIKE_LIST_SUCCESS'
  }
}

export function likeListFailed() {
  return {
    type: 'LIKE_LIST_FAILED'
  }
}

export function like(list_id, api_token) {
  return dispatch => {
    dispatch(likeListRequest())
    console.log(`${API_KEY}/listings/${list_id}/like`)
    fetch(`${API_KEY}/listings/${list_id}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${api_token}`
      }
    })
    .then(response => response.json())
    .then(responsejson => {
      if (responsejson.code == 200) {
        dispatch(likeListSuccess(responsejson.data))
        ALERT.alert(
          responsejson.message, 
          'You have successfuly liked the post'
        )
        
      } else {
        console.log(responsejson)
        dispatch(likeListFailed())
        ALERT.alert(responsejson.message);
      }
    })
    .catch(error => {
      dispatch(likeListFailed())
      ALERT.alert('Server error. Please contact the admin.');
      console.log(error)
    })
  }
}

export function getLikeListingRequest() {
  return {
    type: 'GET_LIKE_LISTING_REQUEST'
  }
}

export function getLikeListingSuccess(listing) {
  return {
    type: 'GET_LIKE_LISTING_SUCCESS',
    payload: listing
  }
}

export function getLikeListingFailed() {
  return {
    type: 'GET_LIKE_LISTING_FAILED'
  }
}

export function get_likes_list(user_id, api_token) {
  return dispatch => {
    dispatch(getLikeListingRequest())
    console.log(`${API_KEY}/users/${user_id}/likedListings`)
    fetch(`${API_KEY}/users/${user_id}/likedListings`, {
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
        console.log(responsejson)
        dispatch(getLikeListingSuccess(responsejson.data))
      } else {
        console.log(responsejson)
        dispatch(getLikeListingFailed())
        ALERT.alert(responsejson.message);
      }
    })
    .catch(error => {
      dispatch(getLikeListingFailed())
      ALERT.alert('Server error. Please contact the admin.');
      console.log(error)
    })
  }
}


export function getAllListingRequest() {
  return {
    type: 'GET_ALL_LISTING_REQUEST'
  }
}

export function getAllListingSuccess(listing) {
  return {
    type: 'GET_ALL_LISTING_SUCCESS',
    payload: listing
  }
}

export function getAllListingFailed() {
  return {
    type: 'GET_ALL_LISTING_FAILED'
  }
}

export function get_all_list(user_id, api_token) {
  return dispatch => {
    dispatch(getAllListingRequest())
    fetch(`${API_KEY}/listings/`, {
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
        console.log(responsejson)
        dispatch(getAllListingSuccess(responsejson.data))
      } else {
        console.log(responsejson)
        dispatch(getAllListingFailed())
        ALERT.alert(responsejson.message);
      }
    })
    .catch(error => {
      dispatch(getAllListingFailed())
      ALERT.alert('Server error. Please contact the admin.');
      console.log(error)
    })
  }
}
