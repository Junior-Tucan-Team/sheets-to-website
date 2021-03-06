import { ADD_ITEM_REQUEST, DELETE_ITEM_REQUEST, REMOVE_SELECTED_ITEM, SELECT_ITEM, UPDATE_FIELD, UPDATE_STYLE, CHANGE_MODE_REQUEST } from '../constants/actionTypes';

export const addLayoutItem = (item) => ({
  type: ADD_ITEM_REQUEST,
  payload: { item }
});

export const selectLayoutItem = (selectedElement) => ({
  type: SELECT_ITEM,
  payload: { selectedElement }
});

export const removeSelectedLayoutItem = () => ({
  type: REMOVE_SELECTED_ITEM,
});

export const deleteLayoutItem = (deletedIndex) => ({
  type: DELETE_ITEM_REQUEST,
  payload: { deletedIndex }
});

export const updateField = (value, key) => ({
  type: UPDATE_FIELD,
  payload: { value, key }
});

export const updateStyle = (value, key, name) => ({
  type: UPDATE_STYLE,
  payload: { value, key, name }
});

export const changeMode = () => ({
  type: CHANGE_MODE_REQUEST
});

