import { combineReducers } from "redux";
import fundProjectSlice from "./fundSlice";

const fundProject= combineReducers({
    fundProjectSlice,
});

export default fundProject;
