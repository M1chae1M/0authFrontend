import {legacy_createStore} from "redux";
import reducer from "./reducers";

export default legacy_createStore(reducer)