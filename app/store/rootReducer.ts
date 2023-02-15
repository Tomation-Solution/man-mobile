import { combineReducers } from "redux";
import authReducers from "./slices/auth/auth";
import profileReducers from "./slices/profile/profile";

export default combineReducers({
  authReducers,
  profileReducers,
});
