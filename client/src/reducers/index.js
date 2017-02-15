import post from './post/post.reducer';
import reply from './reply/reply.reducer';
import { combineReducers } from 'redux';

export default combineReducers({
	post,
	reply
});