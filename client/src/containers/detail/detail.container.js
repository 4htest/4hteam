import React from 'react';
import {PostingComponent, ReplyListComponent} from '../../components';
import styles from './detail.container.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { onCreate } from '../../actions/reply/reply.action';
import { onDelete } from '../../actions/reply/reply.action';
import { onUpdate } from '../../actions/reply/reply.action';

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
					onCreate={this.props.onCreate}
					onDelete={this.props.onDelete}
					onUpdate={this.props.onUpdate}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        reply: state.reply
    };
};

/*let mapStateToProps = (state) => {
    return {
        data: state.reply.data
    };
}*/

let mapDispatchToProps = (dispatch) => {
    return {
        onCreate: (item) => dispatch(onCreate(item)),
        onDelete: (item) => dispatch(onDelete(item)),
        onUpdate: (item) => dispatch(onUpdate(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);