import { combineReducers } from "redux";
import NavigationReducer from "./navigation_reducer";

const AppReducer = combineReducers({
  nav: NavigationReducer 
});

export default AppReducer;
