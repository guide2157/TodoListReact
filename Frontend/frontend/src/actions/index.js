import {DELETE_TODO, CREATE_TODO, FETCH_TODO, FETCH_TODOS, EDIT_TODO} from "./types";
import history from '../history';
import backend from "../apis/backend";


export const createTodo =  formValues => async (dispatch, getState) => {
    const response = await backend.post('/todos/', formValues);
    dispatch({ type: CREATE_TODO, payload: response.data });
    history.push('/');
};

export const fetchTodos = () => async dispatch => {
    const response = await backend.get('/todos/');
    dispatch({type: FETCH_TODOS, payload: response.data});
};

export const fetchTodo = (id) => async dispatch => {
    const response = await backend.get(`/todos/${id}/`);
    dispatch({type: FETCH_TODO, payload: response.data});
};

export const editTodo = (id, formValues) => async dispatch => {
    const response = await backend.patch(`/todos/${id}/`, formValues);
    dispatch({ type: EDIT_TODO, payload: response.data });
    history.push('/');
};

export const deleteTodo = id => async dispatch => {
    await backend.delete(`/todo/${id}/`);
    dispatch({ type: DELETE_TODO, payload: id });
    history.push('/');
};

