import { combineReducers } from "redux";
import personasReducer from './personasReducer';
import validacionReducer from './validacionReducer';

export default combineReducers({
    personas: personasReducer,
    error: validacionReducer
});