import { combineReducers } from "redux";
import toggleButtonReducer from "./toggleButtonReducer";
import fetchDataReducer from "./fetchUserData";

const rootReducer = combineReducers({
  toggle: toggleButtonReducer,
  fetchUserData: fetchDataReducer,
});

export default rootReducer;
