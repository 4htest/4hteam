import * as types from '../../actions/actionTypes';
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
                "post_no": "1",
                "content": "post1",
                "createdDate": "2017-02-24 13:33:26",
            },
                        {
                "post_no": "2",
                "content": "post2",
                "createdDate": "2017-02-24 13:33:27",
            },
                        {
                "post_no": "3",
                "content": "post3",
                "createdDate": "2017-02-24 13:33:28",
            },
                        {
                "post_no": "4",
                "content": "post4",
                "createdDate": "2017-02-24 13:33:29",
            },
                        {
                "post_no": "5",
                "content": "post5",
                "createdDate": "2017-02-24 13:33:30",
            },
            {
                "post_no": "6",
                "content": "post6",
                "createdDate": "2017-02-25 13:33:31",
            }
        ],
        isLast: false
    }
};

export default function post(state, action) {
    if(typeof state === "undefined") {
        state = initialState;
    }

    switch(action.type) {
    case types.POST_INSERT:
        return update(state, {
            insert: {
                status: { $set: 'WAITING' },
                error: { $set: -1 }
            }
        });
    case types.POST_INSERT_SUCCESS:
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
    case types.POST_INSERT_FAILURE:
        return update(state, {
            insert: {
                status: { $set: 'FAILURE' },
                error: { $set: action.error }
            }
        });
    case types.POST_LIST:
        return update(state, {
            list: {
                status: { $set: 'WAITING' },
            }
        });
    case types.POST_LIST_SUCCESS: 
        if(action.isInitial) {
            return update(state, {
                list: {
                    status: { $set: 'SUCCESS' },
                    data: { $set: action.data },
                    // isLast: { $set: action.data.length < 6 }
                }
            })
        } else {
            if(action.listType === 'new') {
                return update(state, {
                    list: {
                        status: { $set: 'SUCCESS' },
                        data: { $unshift: action.data },
                    }
                });
            } else {
                return update(state, {
                    list: {
                        status: { $set: 'SUCCESS' },
                        data: { $push: action.data },
                        // isLast: { $set: action.data.length < 6 }
                    }
                });    
            }
        }
    case types.POST_LIST_FAILURE:
        return update(state, {
            list: {
                status: { $set: 'FAILURE' }
            }
        })
    default:
            return state;
    }
}