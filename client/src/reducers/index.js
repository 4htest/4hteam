import post from './post/post.reducer';
import detail from './detail/detail.reducer';
import { combineReducers } from 'redux';

export default combineReducers({
	post, detail
});