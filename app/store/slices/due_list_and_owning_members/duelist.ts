import { combineReducers } from "redux";
import getDuelistSlice from "./getDuelistSlice";

const duelist = combineReducers({
    getDuelistSlice,
});

export default duelist;
