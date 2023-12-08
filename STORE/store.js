import {combineReducers,legacy_createStore} from "redux";
import reducer from "./reducers";

const appStore=legacy_createStore(reducer)

export default appStore