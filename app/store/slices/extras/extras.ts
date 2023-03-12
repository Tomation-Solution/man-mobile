import { combineReducers } from "@reduxjs/toolkit";
import members from "./members";
import extrasSlice from "./extrasSlice";

const extras = combineReducers({
  members,
  extrasSlice,
});

export default extras;
