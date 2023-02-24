import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ProductReducer from "./ProductReducer";

export default combineReducers({
    AuthReducer,
    ProductReducer
})