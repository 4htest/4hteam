import * as types from '../actionTypes';
import axios from 'axios';


/* reply INSERT */
export function replyInsertRequest(state) {
    return ((dispatch) => {
            dispatch(replyInsert());
            //dispatch(replyInsertSuccess(state));
            return axios.post('/api/insert/comment', state)
            .then((response) => {
                state.comment_no = response.data.comment_no;
                dispatch(replyInsertSuccess(state));
            }).catch((error) => {
                dispatch(replyInsertFailure(error.response.data.code));
            });
        });
}

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



/* reply DELETE */
export function replyDeleteRequest(state) {
    return ((dispatch) => {
            dispatch(replyDelete());
            //dispatch(replyDeleteSuccess(state));
            return axios.post('/api/delete/comment', { comment_no: state })
            .then((response) => {
                dispatch(replyDeleteSuccess(state));
            }).catch((error) => {
                dispatch(replyDeleteFailure(error.response.data.code));
            });
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


/* reply UPDATE */
export function replyUpdateRequest(state) {
    return ((dispatch) => {
            dispatch(replyUpdate());
            //dispatch(replyUpdateSuccess(state));
            return axios.post('/api/modify/comment', state.item)
            .then((response) => {
                dispatch(replyUpdateSuccess(state));
            }).catch((error) => {
                dispatch(replyUpdateFailure(error.response.data.code));
            });
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


/* reply LIST */
export function replyListRequest(state) {
    return (dispatch) => {
        dispatch(replyList());
        let url = '/api/get/comments?id=' + state;
        
        return axios.get(url)
                .then((response) => {
                    dispatch(replyListSuccess(response.data));
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

function replyListSuccess(data) {
    
    return {
        type: types.REPLY_LIST_SUCCESS,
        data
    };
}

function replyListFailure(error) {
    return {
        type: types.REPLY_LIST_FAILURE,
        error
    };
}
 