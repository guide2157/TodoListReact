import {DELETE_TODO, CREATE_TODO, FETCH_TODO, FETCH_TODOS, EDIT_TODO} from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
    switch(action.type) {
        case DELETE_TODO|| CREATE_TODO|| EDIT_TODO|| FETCH_TODO:
            return {...state, [action.payload.id]:action.payload};
        case FETCH_TODOS:
            return {...state, ...action.payload};
        case DELETE_TODO:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}