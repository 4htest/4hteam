import React from 'react';
import * as postAction from '../../actions/post/post.action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
    }

	render() {
		return (
			<div>
                <h2>MainContainer</h2>
            </div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        insertStatus: state.post.insert,
        postData: state.post.list.data,
        listStatus: state.post.list.status,
        // isLast: state.post.list.isLast,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        postAction: bindActionCreators(postAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);