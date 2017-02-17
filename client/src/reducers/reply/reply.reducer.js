import { CREATE, DELETE, UPDATE } from '../../actions/reply/reply.action';
import update from 'react-addons-update';

const initialState = {
    data: [
            {content: 'reply 1'},
            {content: 'reply 2'},
            {content: 'reply 3'},
            {content: 'reply 4'},
            {content: 'reply 5'}
        ]
};

 
export default function reply (state = initialState, action) {
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
