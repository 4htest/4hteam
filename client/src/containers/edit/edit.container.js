import React from 'react';
import {PostingComponent, ReplyListComponent, PreveiwPostComponent, PreviewPostListComponent} from '../../components';
import styles from './detail.container.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { replyDeleteRequest, replyInsertRequest, replyUpdateRequest, replyListRequest } from '../../actions/reply/reply.action';


class DetailContainer extends React.Component {
	constructor(props) {
		super(props);
		this.props.replyList(1);
	}

	/*componentDidUpdate() {
		console.log(this.props.params.categoryName)
	}*/

	render() {
		return (
			<div className={styles.detail}>
				<h2>detail container</h2>
				<ul>
                    <PreviewPostComponent list={this.props.data} />
                </ul>
			</div>
		);
	}
}

let mapDispatchToProps = (dispatch) => {
    return {
        replyDelete: (state) => {
            return dispatch(previewpostDeleteRequest(state));
        },
        replyUpdate: (state) => {
            return dispatch(previewpostUpdateRequest(state));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);