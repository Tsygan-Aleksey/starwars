import {LOAD_STATUSES, ITEMS_ACTIONS, ITEM_ACTIONS} from "./constants";
import { combineReducers } from "redux";

const INITIAL_ITEMS_STATE = {
    data: {},
    loadStatus: LOAD_STATUSES.UNKNOWN,
};
const itemsReducer = (state = INITIAL_ITEMS_STATE, action) => {
    switch (action.type) {
        default:
            return state;
        case ITEMS_ACTIONS.fetchStart: {
            return {
                data: state.data,
                loadStatus: LOAD_STATUSES.LOADING,
            };
        }
        case ITEMS_ACTIONS.fetchError: {
            return {
                data: {},
                loadStatus: LOAD_STATUSES.ERROR,
            };
        }
        case ITEMS_ACTIONS.fetchSuccess: {
            return {
                data: action.payload,
                loadStatus: LOAD_STATUSES.LOADED,
            };
        }
    }
    ;
}

const INITIAL_ITEM_STATE = {
    data: {},
    loadStatus: LOAD_STATUSES.UNKNOWN,
};

const itemReducer = (state = INITIAL_ITEM_STATE, action) => {
    switch (action.type) {
        default:
            return state;
        case ITEM_ACTIONS.fetchStart: {
            return {
                data: state.data,
                loadStatus: LOAD_STATUSES.LOADING,
            };
        }
        case ITEM_ACTIONS.fetchError: {
            return {
                data: {},
                loadStatus: LOAD_STATUSES.ERROR,
            };
        }
        case ITEM_ACTIONS.fetchSuccess: {
            return {
                data: action.payload,
                loadStatus: LOAD_STATUSES.LOADED,
            };
        }
    }
};

export const rootReducer = combineReducers({ itemsReducer, itemReducer });
