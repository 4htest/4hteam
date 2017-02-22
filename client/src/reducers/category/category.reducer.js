import * as types from '../../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    insert: {
        status: 'INIT',
        error: -1
    },
    list: {
        status: 'INIT',
        data: [
            {title: 'category 1'},
            {title: 'category 2'},
            {title: 'category 3'},
            {title: 'category 4'},
            {title: 'category 5'}
        ]
    }
};

export default function category(state, action) {
    if(typeof state === "undefined") {
        state = initialState;
    }

    switch(action.type) {
    case types.CATEGORY_INSERT:
        return update(state, {
            insert: {
                status: { $set: 'WAITING' },
                error: { $set: -1 }
            }
        });
    case types.CATEGORY_INSERT_SUCCESS:
        // return update(state, {
        //     insert: {
        //         status: { $set: 'SUCCESS' }
        //     }
        // });
        state.list.data = [...state.list.data, action.data];
        // return state;
    case types.CATEGORY_INSERT_FAILURE:
        return update(state, {
            insert: {
                status: { $set: 'FAILURE' },
                error: { $set: action.error }
            }
        });
    case types.CATEGORY_LIST:
        return update(state, {
            list: {
                status: { $set: 'WAITING' },
            }
        });
    case types.CATEGORY_LIST_SUCCESS: 
        if(action.isInitial) {
            return update(state, {
                list: {
                    status: { $set: 'SUCCESS' },
                    data: { $set: action.data }
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
                        data: { $push: action.data }
                    }
                });    
            }
        }
    case types.CATEGORY_LIST_FAILURE:
        return update(state, {
            list: {
                status: { $set: 'FAILURE' }
            }
        })
    default:
            return state;
    }
}