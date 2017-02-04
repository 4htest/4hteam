import * as types from '../actionTypes';
import axios from 'axios';

export function postInsert() {
    return {
        type: types.POST_INSERT
    };
}

export function postInsertSuccess() {
    return {
        type: types.POST_INSERT_SUCCESS
    };
}

export function postInsertFailure(error) {
    return {
        type: types.POST_INSERT_FAILURE,
        error
    };
}

/* POST INSERT */
export function postInsetRequest(state) {
    return (dispatch) => {
        dispatch(postInsert());
        return axios.post('/api/insert/post', state)
        .then((response) => {
            dispatch(postInsertSuccess());
        }).catch((error) => {
            dispatch(postInsertFailure(error.response.data.code));
        });
    };
}

/*
    Parameter:
        - isInitial: whether it is for initial loading
        - listType:  OPTIONAL; loading 'old' post or 'new' post
        - id:        OPTIONAL; post id (one at the bottom or one at the top)
*/
export function postListRequest(isInitial, listType, id) {
    return (dispatch) => {
        dispatch(postList());
        let url = '/api/get/post';
        
        url = isInitial ? url : url + '/' + listType + '/' + id;
        
        return axios.get(url)
        .then((response) => {
            dispatch(postListSuccess(response.data, isInitial, listType));
        }).catch((error) => {
            dispatch(postListFailure(error.response.data.code));
        });
    };
}

export function postList() {
    return {
        type: types.POST_LIST
    };
}

export function postListSuccess(data, isInitial, listType) {
    return {
        type: types.POST_LIST_SUCCESS,
        data,
        isInitial,
        listType
    };
}

export function postListFailure(error) {
    return {
        type: types.POST_LIST_FAILURE,
        error
    };
}

