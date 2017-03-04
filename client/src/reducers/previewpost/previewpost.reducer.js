import * as types from '../../actions/actionTypes';
import update from 'react-addons-update';

const itialState = {
    insert: {
        status: 'INIT',
        error: -1
    },
    list: {
        status: 'INIT',
data: [
            {title: 'PREVIEWPOST1'},
            {title: 'PREVIEWPOST2'},
            {title: 'PREVIEWPOST3'},
            {title: 'PREVIEWPOST4'},
            {title: 'PREVIEWPOST5'}
        ]
    }
};

export default function previewpost(state, action) {
    if(typeof state === "undefined") {
        state = initialState;
    }

    switch(action.type) {
    case types.PREVIEWPOST_INSERT:
        return {
            ...state,
            insert: {
                status: 'WAITING',
                error: -1
            }
        };
    case types.PREVIEWPOST_INSERT_SUCCESS:
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
    case types.PREVIEWPOST_INSERT_FAILURE:
        return {
            ...state,
            insert: {
                status: 'FAILURE',
                error: action.error
            }
        };
    case types.PREVIEWPOST_LIST:
        return {
            ...state,
            list: {
                ...state.list,
                status: 'WAITING'
            }
        };
    case types.PREVIEWPOST_LIST_SUCCESS: 
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
    case types.PREVIEWPOST_LIST_FAILURE:
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