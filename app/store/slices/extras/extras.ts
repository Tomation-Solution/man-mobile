import { combineReducers } from "@reduxjs/toolkit";
import members from "./members";

const extras = combineReducers({
  members,
});

export default extras;
