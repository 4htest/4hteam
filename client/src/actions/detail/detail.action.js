import * as types from '../actionTypes';
import axios from 'axios';

function detailInsert() {
    return {
        type: types.DETAIL_INSERT
    };
}

function detailInsertSuccess() {
    return {
        type: types.DETAIL_INSERT_SUCCESS
    };
}

function detailInsertFailure(error) {
    return {
        type: types.DETAIL_INSERT_FAILURE,
        error
    };
}

/* DETAIL INSERT */
export function detailInsetRequest(state) {
    return (dispatch) => {
        dispatch(DETAILInsert());
        return axios.DETAIL('/api/insert/detail', state)
        .then((response) => {
            dispatch(DETAILInsertSuccess());
        }).catch((error) => {
            dispatch(DETAILInsertFailure(error.response.data.code));
        });
    };
}

/*
    Parameter:
        - isInitial: whether it is for initial loading
        - listType:  OPTIONAL; loading 'old' DETAIL or 'new' DETAIL
        - id:        OPTIONAL; DETAIL id (one at the bottom or one at the top)
*/
export function detailListRequest(isInitial, listType, id) {
    return (dispatch) => {
        dispatch(DETAILList());
        let url = '/api/get/detail';
        
        url = isInitial ? url : url + '/' + listType + '/' + id;
        
        return axios.get(url)
        .then((response) => {
            dispatch(DETAILListSuccess(response.data, isInitial, listType));
        }).catch((error) => {
            dispatch(DETAILListFailure(error.response.data.code));
        });
    };
}

function detailList() {
    return {
        type: types.DETAIL_LIST
    };
}

function detailListSuccess(data, isInitial, listType) {
    return {
        type: types.DETAIL_LIST_SUCCESS,
        data,
        isInitial,
        listType
    };
}

function detailListFailure(error) {
    return {
        type: types.DETAIL_LIST_FAILURE,
        error
    };
}

