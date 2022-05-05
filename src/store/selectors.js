import { LOAD_STATUSES } from "./constants.js";

export const getResourses = (state) => state.itemsReducer.data;
export const getLoadStatus = (state) => state.itemsReducer.loadStatus;

export const isLoading = (state) =>
    getLoadStatus(state) === LOAD_STATUSES.LOADING;
export const isError = (state) => getLoadStatus(state) === LOAD_STATUSES.ERROR;
export const isLoaded = (state) =>
    getLoadStatus(state) === LOAD_STATUSES.LOADED;





export const getItem = (state) => state.itemReducer.data;
export const getItemLoadStatus = (state) => state.itemReducer.loadStatus;

export const isItemLoading = (state) =>
    getItemLoadStatus(state) === LOAD_STATUSES.LOADING;
export const isItemError = (state) => getItemLoadStatus(state) === LOAD_STATUSES.ERROR;
export const isItemLoaded = (state) =>
    getItemLoadStatus(state) === LOAD_STATUSES.LOADED;
