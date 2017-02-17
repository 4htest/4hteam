import React from 'react';
import {PostingComponent, ReplyListComponent} from '../../components';
import styles from './detail.container.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class DetailContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.detail}>
				<h2>detail container</h2>
				<PostingComponent />
				<ReplyListComponent data={this.props.reply.data}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        reply: state.reply
    };
};

export default connect(mapStateToProps)(DetailContainer);