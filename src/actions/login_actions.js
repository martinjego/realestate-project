import { Alert, AlertIOS, Platform, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { storeData, retrieveData, removeData } from '../utils/storage';
import { API_KEY } from  '../config/api';

const ALERT = (Platform.OS === 'ios') ? AlertIOS : Alert;

export function sessionRequest() {
  return {
    type: 'SESSION_REQUEST'
  }
}

export function loginSuccess(user) {
  return {
    type: 'LOGIN_SUCCESS',
    payload: user,
  }
}

export function sessionSuccess() {
  return {
    type: 'SESSION_SUCCESS'
  }
}

export function sessionFailed() {
  return {
    type: 'SESSION_FAILED'
  }
}

export function logoutRequest() {
  return {
    type: 'USER_LOGOUT'
  }
}

export function updateCustomerLocation(coords) {
  return {
    type: 'UPDATE_CUSTOMER_LOCATION',
    payload: coords
  }
}

export function sign_up(state) {
  return dispatch => {
    dispatch(sessionRequest())
    fetch(`${API_KEY}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: state.username,
        email: state.email,
        password: state.password,
        password_confirmation: state.password_confirmation,
        mobile: state.mobile,
      }),
    })
    .then(response => response.json())
    .then(responsejson => {
      if (responsejson.status == 200) {
        dispatch(sessionSuccess())
        ALERT.alert('Successfuly Registered');
      } else {
        dispatch(sessionFailed())
        ALERT.alert('Please fill all the fields');
      }
    })
    .catch(error => {
      dispatch(sessionFailed())
      ALERT.alert('Server error. Please contact the admin.');
      console.log(error)
    })
  }
}

export function login(state) {
  console.log('email', state.email)
  console.log('password', state.password)
  return dispatch => {
    dispatch(sessionRequest())
    fetch(`${API_KEY}/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: state.email,
        password: state.password,
      }),
    })
    .then(response => response.json())
    .then(responsejson => {
      console.log(responsejson)
      if (responsejson.code !== 200) {
        dispatch(sessionFailed())
        ALERT.alert(responsejson.message);
      } else {
        dispatch(loginSuccess(responsejson));

        storeData('email', state.email);
        storeData('password', state.password);

        dispatch(NavigationActions.navigate({ routeName: 'Home' }));
      }
    })
    .catch(error => {
      dispatch(sessionFailed())
      ALERT.alert('Server error. Please contact the admin.');
      console.log(error)
    })
  }
}

export function logout(auth) {
  return dispatch => {
    removeData('username');
    removeData('password');
    dispatch(NavigationActions.navigate({ routeName: 'Login' }));
  }
}

