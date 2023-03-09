importimportimport { combineReducers } from "redux";
import getMemberSlice from "./memberSlice";

const member= combineReducers({
    getMemberSlice,
});

export default member;
