import React from 'react';
import {PostingComponent, ReplyListComponent} from '../../components';
import styles from './detail.container.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { replyDeleteRequest, replyInsertRequest, replyUpdateRequest } from '../../actions/reply/reply.action';

class DetailContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className={styles.detail}>
				<h2>detail container</h2>
				<PostingComponent />
				<ReplyListComponent 
					data={this.props.reply.data}
					replyDelete={this.props.replyDelete}
					replyUpdate={this.props.replyUpdate}
					replyInsert={this.props.replyInsert} 
					/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        reply: state.reply.list
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        replyDelete: (index) => {
            return dispatch(replyDeleteRequest(index));
        },
        replyUpdate: (data) => {
            return dispatch(replyUpdateRequest(data));
        },
        replyInsert: (state) => {
            return dispatch(replyInsertRequest(state));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);