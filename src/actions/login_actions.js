import { Alert, AlertIOS, Platform, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { storeData, retrieveData, removeData } from '../utils/storage';
import { API_LOGIN_KEY, API_KEY } from  '../config/api';

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

export function sign_up(state) {
  return dispatch => {
    dispatch(sessionRequest())
    fetch(`${API_LOGIN_KEY}`, {
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
  return dispatch => {
    dispatch(sessionRequest())
    fetch(`${API_LOGIN_KEY}/login`, {
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

        if (responsejson.data.type === "1") {
          dispatch(NavigationActions.navigate({ routeName: 'Admin' }));
        } else {
          dispatch(NavigationActions.navigate({ routeName: 'Member' }));
        }
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

export function updateContactRequest() {
  return {
    type: 'UPDATE_CONTACT_REQUEST'
  }
}

export function updateContactSuccess() {
  return {
    type: 'UPDATE_CONTACT_SUCCESS'
  }
}

export function updateContactFailed() {
  return {
    type: 'UPDATE_CONTACT_FAILED'
  }
}

export function update_contact(state, user) {
  return dispatch => {
    dispatch(updateContactRequest())
    fetch(`${API_KEY}/users/${user.user_id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.api_token}`
      },
      body: JSON.stringify({
        mobile: state.mobile,
        email: state.email,
        firstname: user.firstname,
        lastname: user.lastname,
      }),
    })
    .then(response => response.json())
    .then(responsejson => {
      console.log(responsejson)
      if (responsejson.code == 200) {
        dispatch(updateContactSuccess(responsejson));
      } else {
        dispatch(updateContactFailed())
        ALERT.alert(responsejson.message);
      }
    })
    .catch(error => {
      dispatch(updateContactFailed())
      ALERT.alert('Server error. Please contact the admin.');
      console.log(error)
    })
  }
}

export function updatePasswordRequest() {
  return {
    type: 'UPDATE_CONTACT_REQUEST'
  }
}

export function updatePasswordSuccess() {
  return {
    type: 'UPDATE_CONTACT_SUCCESS'
  }
}

export function updatePasswordFailed() {
  return {
    type: 'UPDATE_CONTACT_FAILED'
  }
}

export function update_password(state, user) {
  return dispatch => {
    dispatch(updateContactRequest())
    fetch(`${API_KEY}/users/${user.user_id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.api_token}`
      },
      body: JSON.stringify({
        mobile: state.mobile,
        email: state.email,
        firstname: user.firstname,
        lastname: user.lastname,
      }),
    })
    .then(response => response.json())
    .then(responsejson => {
      console.log(responsejson)
      if (responsejson.code == 200) {
        dispatch(updateContactSuccess(responsejson));
      } else {
        dispatch(updateContactFailed())
        ALERT.alert(responsejson.message);
      }
    })
    .catch(error => {
      dispatch(updateContactFailed())
      ALERT.alert('Server error. Please contact the admin.');
      console.log(error)
    })
  }
}
