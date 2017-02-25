import post from './post/post.reducer';
import { combineReducers } from 'redux';
import category from './category/category.reducer';

export default combineReducers({
	post,
	category
});