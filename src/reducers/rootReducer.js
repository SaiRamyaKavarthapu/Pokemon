import valuesReducer from "./valuesReducer";
import { combineReducers } from "redux";

export default combineReducers({
    event:valuesReducer
})

