import { combineReducers } from "@reduxjs/toolkit";
import news from "./newsSlice";
import publication from "./publicationSlice";

const newsPublication = combineReducers({
  news,
  publication,
});

export default newsPublication;
