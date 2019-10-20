import { combineReducers } from "redux";
import personasReducer from './personasReducer';

export default combineReducers({
    personas: personasReducer
});