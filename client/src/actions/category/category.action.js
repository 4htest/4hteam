import * as types from '../actionTypes';
import axios from 'axios';

function categoryInsert() {
    return {
        type: types.CATEGORY_INSERT
    };
}

function categoryInsertSuccess(data) {
    return {
        type: types.CATEGORY_INSERT_SUCCESS,
        data
    };
}

function categoryInsertFailure(error) {
    return {
        type: types.CATEGORY_INSERT_FAILURE,
        error
    };
}

/* CATEGORY INSERT */
export function categoryInsertRequest(state) {
    return ((dispatch) => {
            dispatch(categoryInsert());
            dispatch(categoryInsertSuccess(state));
            // return axios.category('/api/insert/category', state)
            // .then((response) => {
            //     dispatch(categoryInsertSuccess());
            // }).catch((error) => {
            //     dispatch(categoryInsertFailure(error.response.data.code));
            // });
        });
}

/*
    Parameter:
        - isInitial: whether it is for initial loading
        - listType:  OPTIONAL; loading 'old' category or 'new' category
        - id:        OPTIONAL; category id (one at the bottom or one at the top)
*/
export function categoryListRequest(isInitial, listType, id) {
    return (dispatch) => {
        dispatch(categoryList());
        let url = '/api/get/category';
        
        url = isInitial ? url : url + '/' + listType + '/' + id;
        
        return axios.get(url)
        .then((response) => {
            dispatch(categoryListSuccess(response.data, isInitial, listType));
        }).catch((error) => {
            dispatch(categoryListFailure(error.response.data.code));
        });
    };
}

function categoryList() {
    return {
        type: types.CATEGORY_LIST
    };
}

function categoryListSuccess(data, isInitial, listType) {
    return {
        type: types.CATEGORY_LIST_SUCCESS,
        data,
        isInitial,
        listType
    };
}

function categoryListFailure(error) {
    return {
        type: types.CATEGORY_LIST_FAILURE,
        error
    };
}

