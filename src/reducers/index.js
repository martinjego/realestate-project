import { combineReducers } from "redux";
import NavigationReducer from "./reducer_navigation";
import UserReducer from "./reducer_user";
import BuildingReducer from "./reducer_building";
import ListingReducer from "./reducer_listing";

const AppReducer = combineReducers({
  nav: NavigationReducer,
  auth: UserReducer,
  bldgs: BuildingReducer,
  listings: ListingReducer
});

export default AppReducer;
