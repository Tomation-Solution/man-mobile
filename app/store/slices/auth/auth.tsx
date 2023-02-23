import { combineReducers } from "@reduxjs/toolkit";
import login from "./loginSlice";
import validateUser from "./validateUserSlice";

const authReducers = combineReducers({
  login,
  validateUser,
});

export default authReducers;
