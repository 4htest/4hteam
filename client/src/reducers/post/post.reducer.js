import * as types from '../../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    post: {
        status: 'INIT',
        error: -1
    },
    list: {
        status: 'INIT',
        data: [],
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
        return update(state, {
            insert: {
                status: { $set: 'SUCCESS' }
            }
        });
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