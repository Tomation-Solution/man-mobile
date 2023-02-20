import { combineReducers } from "@reduxjs/toolkit";
import login from "./loginSlice";

const authReducers = combineReducers({
  login,
});

export default authReducers;
