import { ADD_ITEM_REQUEST, DELETE_ITEM_REQUEST, REMOVE_SELECTED_ITEM, SELECT_ITEM } from '../constants/actionTypes';

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
