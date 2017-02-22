import { CREATE, DELETE, UPDATE } from '../../actions/reply/reply.action';
import update from 'react-addons-update';

const initialState = {
    insert: {
        status: 'INIT',
        error: -1
    },
    list: {
        status: 'INIT',
        data: [
            {
                "_id": "1",
                "content": "blablabla111",
                "createdDate": "2017-02-22 13:33:23"
            },
            {
                "_id": "2",
                "content": "blablabla222",
                "createdDate": "2017-02-22 13:33:24"
            },
            {
                "_id": "3",
                "content": "blablabla333",
                "createdDate": "2017-02-22 13:33:25"
            },
            {
                "_id": "4",
                "content": "blablabla444",
                "createdDate": "2017-02-22 13:33:26"
            },
            {
                "_id": "5",
                "content": "blablabla555",
                "createdDate": "2017-02-22 13:33:27"
            }
        ]
    }
};

export default function reply(state, action) {
    if(typeof state === "undefined") {
        state = initialState;
    }

    switch(action.type) {
    case types.reply_INSERT:
        return {
            ...state,
            insert: {
                status: 'WAITING',
                error: -1
            }
        };
    case types.reply_INSERT_SUCCESS:
        return {
            ...state,
            list: {
                status: 'SUCCESS',
                data: [
                    ...state.list.data,
                    action.data
                ]
            }
        };
    case types.reply_INSERT_FAILURE:
        return {
            ...state,
            insert: {
                status: 'FAILURE',
                error: action.error
            }
        };
    case types.reply_LIST:
        return {
            ...state,
            list: {
                ...state.list,
                status: 'WAITING'
            }
        };
    case types.reply_LIST_SUCCESS: 
        return {
            ...state,
            list: {
                status: 'SUCCESS',
                data: [
                    ...state.list.data,
                    action.data
                ]
            }
        };
    case types.reply_LIST_FAILURE:
        return {
            ...state,
            list: {
                ...state.list,
                status: 'FAILURE'
            }
        };
    default:
            return state;
    }
}

 
/*export default function reply (state = initialState, action) {
    switch(action.type) {
        case CREATE:
            return update(state, {
               data: {
                        $push: [{content: action.content}]
                    }
            });
        case DELETE:
            return update(state, {
               data: {
                        $splice: [[state.data.indexOf(action.index), 1]]
                    }
            });
        case UPDATE:
            return update(state, {
               data: {
                        [state.data.indexOf(action.index)]: {
                            content: { $set: action.content }
                        }
                    }
            });    
        default:
            return state;
    }
};
*/