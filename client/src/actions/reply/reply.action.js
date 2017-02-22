/*export const CREATE = 'CREATE';
export const DELETE = 'DELETE';
export const UPDATE = 'UPDATE';*/
import * as types from '../actionTypes';
import axios from 'axios';

function replyInsert() {
    return {
        type: types.reply_INSERT
    };
}

function replyInsertSuccess(data) {
    return {
        type: types.reply_INSERT_SUCCESS,
        data
    };
}

function replyInsertFailure(error) {
    return {
        type: types.reply_INSERT_FAILURE,
        error
    };
}

/* reply INSERT */
export function replyInsertRequest(state) {
    return ((dispatch) => {
            dispatch(replyInsert());
            dispatch(replyInsertSuccess(state));
            // return axios.reply('/api/insert/reply', state)
            // .then((response) => {
            //     dispatch(replyInsertSuccess());
            // }).catch((error) => {
            //     dispatch(replyInsertFailure(error.response.data.code));
            // });
        });
}

/*
    Parameter:
        - isInitial: whether it is for initial loading
        - listType:  OPTIONAL; loading 'old' reply or 'new' reply
        - id:        OPTIONAL; reply id (one at the bottom or one at the top)
*/
export function replyListRequest(isInitial, listType, id) {
    return (dispatch) => {
        dispatch(replyList());
        let url = '/api/get/reply';
        
        url = isInitial ? url : url + '/' + listType + '/' + id;
        
        return axios.get(url)
        .then((response) => {
            dispatch(replyListSuccess(response.data, isInitial, listType));
        }).catch((error) => {
            dispatch(replyListFailure(error.response.data.code));
        });
    };
}

function replyList() {
    return {
        type: types.reply_LIST
    };
}

function replyListSuccess(data, isInitial, listType) {
    return {
        type: types.reply_LIST_SUCCESS,
        data,
        isInitial,
        listType
    };
}

function replyListFailure(error) {
    return {
        type: types.reply_LIST_FAILURE,
        error
    };
}
 
/*export function onCreate(item) {
    return {
        type: CREATE,
        content: item
    };
}
 
export function onDelete(item) {
    return {
        type: DELETE,
        index: item
    };
}
 
export function onUpdate(item) {
    return {
        type: UPDATE,
        index: item.index,
        content: item.content
    };
}
*/