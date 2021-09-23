import {
  CREATE_TODO,
  RETRIEVE_TODOS,
  UPDATE_TODO,
  DELETE_TODO,
  DELETE_ALL_TODOS,
} from "./todo.type";

import todoDataService from "../../services/TodoService";

export const createTutorial = (title, description) => async (dispatch) => {
  try {
    const res = await todoDataService.create({ title, description });

    dispatch({
      type: CREATE_TODO,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveTutorials = () => async (dispatch) => {
  try {
    const res = await todoDataService.getAll();

    dispatch({
      type: RETRIEVE_TODOS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateTutorial = (id, data) => async (dispatch) => {
  try {
    const res = await todoDataService.update(id, data);

    dispatch({
      type: UPDATE_TODO,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteTutorial = (id) => async (dispatch) => {
  try {
    await todoDataService.remove(id);

    dispatch({
      type: DELETE_TODO,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllTutorials = () => async (dispatch) => {
  try {
    const res = await todoDataService.removeAll();

    dispatch({
      type: DELETE_ALL_TODOS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findTutorialsByTitle = (title) => async (dispatch) => {
  try {
    const res = await todoDataService.findByTitle(title);

    dispatch({
      type: RETRIEVE_TODOS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
