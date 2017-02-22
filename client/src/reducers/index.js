import post from './post/post.reducer';
import { combineReducers } from 'redux';
import reply from './reply/reply.reducer';

export default combineReducers({
	post,
	reply
});