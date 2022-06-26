import { combineReducers } from "redux";
import AuthReducer from "./auth";
import JobReducer from "./job";

export default combineReducers({
    AuthReducer, JobReducer

})