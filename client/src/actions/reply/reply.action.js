import * as types from '../actionTypes';
import axios from 'axios';

function replyInsert() {
    return {
        type: types.REPLY_INSERT
    };
}

function replyInsertSuccess(data) {
    return {
        type: types.REPLY_INSERT_SUCCESS,
        data
    };
}

function replyInsertFailure(error) {
    return {
        type: types.REPLY_INSERT_FAILURE,
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

function replyDelete() {
    return {
        type: types.REPLY_DELETE
    };
}

function replyDeleteSuccess(data) {
    return {
        type: types.REPLY_DELETE_SUCCESS,
        data
    };
}

function replyDeleteFailure(error) {
    return {
        type: types.REPLY_DELETE_FAILURE,
        error
    };
}

/* reply DELETE */
export function replyDeleteRequest(state) {
    return ((dispatch) => {
            dispatch(replyDelete());
            dispatch(replyDeleteSuccess(state));
            // return axios.reply('/api/delete/comment', state)
            // .then((response) => {
            //     dispatch(replyDeleteSuccess(index));
            // }).catch((error) => {
            //     dispatch(replyDeleteFailure(error.response.data.code));
            // });
        });
}


function replyUpdate() {
    return {
        type: types.REPLY_UPDATE
    };
}

function replyUpdateSuccess(data) {
    return {
        type: types.REPLY_UPDATE_SUCCESS,
        data
    };
}

function replyUpdateFailure(error) {
    return {
        type: types.REPLY_UPDATE_FAILURE,
        error
    };
}

/* reply UPDATE */
export function replyUpdateRequest(state) {
    return ((dispatch) => {
            dispatch(replyUpdate());
            dispatch(replyUpdateSuccess(state));
            // return axios.reply('/api/update/comment', state)
            // .then((response) => {
            //     dispatch(replyUpdateSuccess(data));
            // }).catch((error) => {
            //     dispatch(replyUpdateFailure(error.response.data.code));
            // });
        });
}


/*
    Parameter:
        - isInitial: whether it is for initial loading
        - listType:  OPTIONAL; loading 'old' reply or 'new' reply
        - id:        OPTIONAL; reply id (one at the bottom or one at the top)
*/
export function replyListRequest(isInitial?, listType, id) {
    return (dispatch) => {
        dispatch(replyList());
        let url = '/api/get/comments?id=' + 1;
        //url = isInitial ? url : url + '/' + listType + '/' + id;
        
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
        type: types.REPLY_LIST
    };
}

function replyListSuccess(data, isInitial, listType) {
    return {
        type: types.REPLY_LIST_SUCCESS,
        data,
        isInitial,
        listType
    };
}

function replyListFailure(error) {
    return {
        type: types.REPLY_LIST_FAILURE,
        error
    };
}
 