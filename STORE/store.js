import {combineReducers, createStore, legacy_createStore} from "redux";
import CRUD_reducer from "./CRUD/reducers"
import auth_reducer from './auth/reducers'

export default legacy_createStore(combineReducers({
    crud: CRUD_reducer,
    auth: auth_reducer,
}));