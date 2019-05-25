import {combineReducers} from "redux";
// import {reducer as formReducer } from "redux-form";
import todoReducers from './todoreducer';

export default combineReducers ({
    todos: todoReducers,
    // form: formReducer
});