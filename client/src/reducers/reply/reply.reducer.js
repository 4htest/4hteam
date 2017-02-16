import * as types from '../../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    data: [
            {id: '1', content: 'reply 1'},
            {id: '2', content: 'reply 2'},
            {id: '3', content: 'reply 3'},
            {id: '4', content: 'reply 4'},
            {id: '5', content: 'reply 5'}
        ]
};

export default function reply(state, action) {
    if(typeof state === "undefined") {
        state = initialState;
    }

    switch(action.type) {
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