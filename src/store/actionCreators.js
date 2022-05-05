import { ITEMS_ACTIONS, ITEM_ACTIONS } from "./constants";
import { fetchItems } from "../api";

const fetchStart = () => ({ type: ITEMS_ACTIONS.fetchStart });
const fetchError = () => ({ type: ITEMS_ACTIONS.fetchError });
const fetchSuccess = (result) => ({
    type: ITEMS_ACTIONS.fetchSuccess,
    payload: result,
});

export const fetchResources = (endpoint, search) => {
    return async (dispatch) => {
        try {
            dispatch(fetchStart());
            const result = await fetchItems(endpoint, search);
            if(endpoint === 'films'){
                const filteredResult = result.results.filter(item => item.title.toLowerCase().includes(search));
                dispatch(fetchSuccess(filteredResult));
            }
            else{
                const filteredResult = result.results.filter(item => item.name.toLowerCase().includes(search));
                dispatch(fetchSuccess(filteredResult));
            }

        } catch {
            dispatch(fetchError());
        }
    };
};

export const fetchItemStart = () => ({ type: ITEM_ACTIONS.fetchStart });
const fetchItemError = () => ({ type: ITEM_ACTIONS.fetchError });
const fetchItemSuccess = (result) => ({
    type: ITEM_ACTIONS.fetchSuccess,
    payload: result,
});



export const fetchItem = (endpoint, id) =>{
    return async (dispatch) => {
        try {
            dispatch(fetchItemStart());
            const result = await fetchItems(endpoint);

            const findItem = result.results.find((_,index) => ((index + 1).toString() === id));
            dispatch(fetchItemSuccess(findItem));
        } catch {
            dispatch(fetchItemError());
        }
    };
}
