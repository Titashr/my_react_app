import { combineReducers } from 'redux';
import AgeReducer from "./AgeReducer";
import UserReducer from "./UserReducer";

const rootReducer = combineReducers({AgeReducer, UserReducer});

export default rootReducer;