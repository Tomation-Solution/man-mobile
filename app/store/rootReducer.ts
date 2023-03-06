import { combineReducers } from "redux";
import authReducers from "./slices/auth/auth";
import profileReducers from "./slices/profile/profile";
import electionReducers from "./slices/elections/election";

export default combineReducers({
  authReducers,
  profileReducers,
  electionReducers,
});
