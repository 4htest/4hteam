import * as types from '../actionTypes';
import axios from 'axios';

function postInsert() {
    return {
        type: types.POST_INSERT
    };
}

function postInsertSuccess(data) {
    return {
        type: types.POST_INSERT_SUCCESS,
        data
    };
}

function postInsertFailure(error) {
    return {
        type: types.POST_INSERT_FAILURE,
        error
    };
}

/* POST INSERT */
export function postInsertRequest(state) {
    return (dispatch) => {
        dispatch(postInsert());
        dispatch(postInsertSuccess(state));
        // return axios.post('/api/insert/post', state)
        // .then((response) => {
        //     dispatch(postInsertSuccess());
        // }).catch((error) => {
        //     dispatch(postInsertFailure(error.response.data.code));
        // });
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

function postList() {
    return {
        type: types.POST_LIST
    };
}

function postListSuccess(data, isInitial, listType) {
    return {
        type: types.POST_LIST_SUCCESS,
        data,
        isInitial,
        listType
    };
}

function postListFailure(error) {
    return {
        type: types.POST_LIST_FAILURE,
        error
    };
}

