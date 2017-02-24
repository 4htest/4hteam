import React from 'react';
import {PostingComponent, ReplyListComponent} from '../../components';
import styles from './detail.container.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { replyDeleteRequest, replyInsertRequest, replyUpdateRequest, replyListRequest } from '../../actions/reply/reply.action';

class DetailContainer extends React.Component {
	constructor(props) {
		super(props);
		this.props.replyList();
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
        replyDelete: (state) => {
            return dispatch(replyDeleteRequest(state));
        },
        replyUpdate: (state) => {
            return dispatch(replyUpdateRequest(state));
        },
        replyInsert: (state) => {
            return dispatch(replyInsertRequest(state));
        },
        replyList: (state) => {
        	return dispatch(replyListRequest(state));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);