import * as types from '../../actions/actionTypes';
import update from 'react-addons-update';

const initialState = {
    insert: {
        status: 'INIT',
        error: -1
    },
    delete: {
        status: 'INIT',
        error: -1
    },
    update: {
        status: 'INIT',
        error: -1
    },
    list: {
        status: 'INIT',
        data: [
            /*{
                "comment_no": "1",
                "content": "blablabla111",
                "createdDate": "2017-02-21 13:33:23",
                "post_no": "1"
            },
            {
                "comment_no": "2",
                "content": "blablabla222",
                "createdDate": "2017-02-22 13:33:24",
                "post_no": "1"
            },
            {
                "comment_no": "3",
                "content": "blablabla333",
                "createdDate": "2017-02-23 13:33:25",
                "post_no": "1"
            },
            {
                "comment_no": "4",
                "content": "blablabla444",
                "createdDate": "2017-02-24 13:33:26",
                "post_no": "1"
            },
            {
                "comment_no": "5",
                "content": "blablabla555",
                "createdDate": "2017-02-25 13:33:27",
                "post_no": "1"
            }*/
        ]
    }
};

export default function reply(state, action) {
    if(typeof state === "undefined") {
        state = initialState;
    }


    switch(action.type) {
    case types.REPLY_INSERT:
        return {
            ...state,
            insert: {
                status: 'WAITING',
                error: -1
            }
        };
    case types.REPLY_INSERT_SUCCESS:
        return {
            ...state,
            insert: {
                status: 'SUCCESS',
                error: -1
            }, 
            list: {
                status: 'SUCCESS',
                data: [
                    ...state.list.data,
                    action.data
                ]
            }
        };
    case types.REPLY_INSERT_FAILURE:
        return {
            ...state,
            insert: {
                status: 'FAILURE',
                error: action.error
            }
        };
    case types.REPLY_LIST:
        return {
            ...state,
            list: {
                ...state.list,
                status: 'WAITING'
            }
        };
    case types.REPLY_LIST_SUCCESS:
        return {
            ...state,
            list: {
                status: 'SUCCESS',
                data: action.data.list
                /*data: [
                    ...state.list.data
                ]*/
            }
        };
    case types.REPLY_LIST_FAILURE:
        return {
            ...state,
            list: {
                ...state.list,
                status: 'FAILURE'
            }
        };
    case types.REPLY_DELETE:
        return {
            ...state,
            delete: {
                status: 'WAITING',
                error: -1
            }
        };
    case types.REPLY_DELETE_SUCCESS:
        return {
            ...state,
            delete: {
                status: 'SUCCESS',
                error: -1
            },
            list: {
                status: 'SUCCESS',
                data: state.list.data.filter(data => data.comment_no !== action.data)
            }
        }
    case types.REPLY_DELETE_FAILURE:
        return {
            ...state,
            update: {
                status: 'FAILURE',
                error: action.error
            }
        };
    case types.REPLY_UPDATE:
        return {
            ...state,
            update: {
                status: 'WAITING',
                error: -1
            }
        };
    case types.REPLY_UPDATE_SUCCESS:
        return {
            ...state,
            update: {
                status: 'SUCCESS',
                error: -1
            },
            list: {
                ...state.list,
                status: 'SUCCESS',
                ...state.list.data.splice(action.data.index, 1, action.data.item)
            }
        }

    case types.REPLY_UPDATE_FAILURE:
        return {
            ...state,
            update: {
                status: 'FAILURE',
                error: action.error
            }
        };
    default:
            return state;
    }
}

