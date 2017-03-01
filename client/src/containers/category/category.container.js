import React from 'react';

import { PostViewComponent } from '../../components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { postInsertRequest, postListRequest } from '../../actions/post/post.action';

class CategoryContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// console.log(this.state)
		return (
			<div>
				CategoryContainer
				<PostViewComponent 
					data={this.props.post.data}
					postInsert={this.props.postInsert} 
				/>
			</div>
		);
	}
}


const mapStateToProps = (state) => {
    return {
        post: state.post.list
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        postInsert: (state) => {
            return dispatch(postInsertRequest(state));
        },
        postList: (state) => {
        	return dispatch(postListRequest(state));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);