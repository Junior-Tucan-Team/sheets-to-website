import {
    ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE, SELECT_ITEM,
    REMOVE_SELECTED_ITEM, DELETE_ITEM_FAILURE,
    DELETE_ITEM_SUCCESS, ADD_ITEM_REQUEST, DELETE_ITEM_REQUEST,
    UPDATE_FIELD,
    UPDATE_STYLE
} from '../constants/actionTypes';

const INITIAL_STATE = {
    layoutItems: [],
    selectedElement: null
};

const editorReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case ADD_ITEM_REQUEST:
        case ADD_ITEM_SUCCESS: {
            const { item } = payload;
            return { ...state, layoutItems: [...state.layoutItems, item] };
        }
        case SELECT_ITEM: {
            const { selectedElement } = payload;
            return { ...state, selectedElement };
        }
        case REMOVE_SELECTED_ITEM: {
            return { ...state, selectedElement: null };
        }
        case DELETE_ITEM_REQUEST:
        case DELETE_ITEM_SUCCESS: {
            const { deletedIndex } = payload;
            return {
                ...state,
                 layoutItems: [
                     ...state.layoutItems.slice(0, deletedIndex),
                     ...state.layoutItems.slice(deletedIndex + 1)
                 ]
            };
        }
        case UPDATE_FIELD: {
            const { value, key } = payload;
            const foundItem = state.layoutItems.find((item) => item.id === state.selectedElement);
            const foundIndex = state.layoutItems
                .findIndex((item) => item.id === state.selectedElement);
            const updatedItem = { ...foundItem, [key]: value };
            return {
                ...state,
                 layoutItems: [
                     ...state.layoutItems.slice(0, foundIndex),
                     updatedItem,
                     ...state.layoutItems.slice(foundIndex + 1)
                 ]
            };
        }
        case UPDATE_STYLE: {
            const { value, key, name } = payload;
            const foundItem = state.layoutItems.find((item) => item.id === state.selectedElement);
            const foundIndex = state.layoutItems
                .findIndex((item) => item.id === state.selectedElement);
            const updatedItem = { ...foundItem, [name.concat(key)]: (name.toString() === 'fntSz' ? value.concat('px') : value) };
            return {
                ...state,
                 layoutItems: [
                     ...state.layoutItems.slice(0, foundIndex),
                     updatedItem,
                     ...state.layoutItems.slice(foundIndex + 1)
                 ]
            };
        }
        case DELETE_ITEM_FAILURE:
        case ADD_ITEM_FAILURE:
        default:
            return state;
    }
};

export default editorReducer;
