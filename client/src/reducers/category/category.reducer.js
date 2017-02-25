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
            {title: 'category1'},
            {title: 'category2'},
            {title: 'category3'},
            {title: 'category4'},
            {title: 'category5'}
        ]
    }
};

export default function category(state, action) {
    if(typeof state === "undefined") {
        state = initialState;
    }

    switch(action.type) {
    case types.CATEGORY_INSERT:
        return {
            ...state,
            insert: {
                status: 'WAITING',
                error: -1
            }
        };
    case types.CATEGORY_INSERT_SUCCESS:
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
    case types.CATEGORY_INSERT_FAILURE:
        return {
            ...state,
            insert: {
                status: 'FAILURE',
                error: action.error
            }
        };
    case types.CATEGORY_LIST:
        return {
            ...state,
            list: {
                ...state.list,
                status: 'WAITING'
            }
        };
    case types.CATEGORY_LIST_SUCCESS: 
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
    case types.CATEGORY_LIST_FAILURE:
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