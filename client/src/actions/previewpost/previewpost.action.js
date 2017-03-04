import * as types from '../actionTypes';
import axios from 'axios';

function previewpostInsert() {
    return {
        type: types.PREVIEWPOST_INSERT
    };
}

function previewpostInsertSuccess(data) {
    return {
        type: types.PREVIEWPOST_INSERT_SUCCESS,
        data
    };
}

function previewpostInsertFailure(error) {
    return {
        type: types.PREVIEWPOST_INSERT_FAILURE,
        error
    };
}

/* previewpost INSERT */
export function previewpostInsertRequest(state) {
    return ((dispatch) => {
            dispatch(previewpostInsert());
            dispatch(previewpostInsertSuccess(state));
            // return axios.previewpost('/api/insert/previewpost', state)
            // .then((response) => {
            //     dispatch(previewpostInsertSuccess());
            // }).catch((error) => {
            //     dispatch(previewpostInsertFailure(error.response.data.code));
            // });
        });
}

/*
    Parameter:
        - isInitial: whether it is for initial loading
        - listType:  OPTIONAL; loading 'old' previewpost or 'new' previewpost
        - id:        OPTIONAL; previewpost id (one at the bottom or one at the top)
*/
export function previewpostListRequest(isInitial, listType, id) {
    return (dispatch) => {
        dispatch(previewpostList());
        let url = '/api/get/previewpost';
        
        url = isInitial ? url : url + '/' + listType + '/' + id;
        
        return axios.get(url)
        .then((response) => {
            dispatch(previewpostListSuccess(response.data, isInitial, listType));
        }).catch((error) => {
            dispatch(previewpostListFailure(error.response.data.code));
        });
    };
}

function previewpostList() {
    return {
        type: types.PREVIEWPOST_LIST
    };
}

function previewpostListSuccess(data, isInitial, listType) {
    return {
        type: types.PREVIEWPOST_LIST_SUCCESS,
        data,
        isInitial,
        listType
    };
}

function previewpostListFailure(error) {
    return {
        type: types.PREVIEWPOST_LIST_FAILURE,
        error
    };
}

