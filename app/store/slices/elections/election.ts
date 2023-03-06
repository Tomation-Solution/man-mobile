import { combineReducers } from "redux";
import getelectionSlice from "./getelectionSlice";

const election = combineReducers({
    getelectionSlice,
});

export default election;
