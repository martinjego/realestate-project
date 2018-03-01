import { createStore, applyMiddleware } from 'redux';
import AppReducer from './reducers'
import thunk from "redux-thunk";
import logger from 'redux-logger';
import getRootReducer from "./reducers";
import {
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

let middleware = [thunk];

const additional_middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

if (__DEV__) {
  middleware = [...middleware, logger];
} else {
  middleware = [...middleware, additional_middleware];
}


const store = createStore(AppReducer, 
  undefined, 
  applyMiddleware(...middleware)
);

export default store;
