import React from 'react';
import { connect } from 'react-redux';
import styles from './reply-list.component.css';
import Reply from '../../components/reply/reply.component';
import ReplyCreate from '../../components/reply/reply-create.component';
import ReplyDelete from '../../components/reply/reply-delete.component';
import ReplyUpdate from '../../components/reply/reply-update.component';

class ReplyListComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Reply data={this.props.data}/>
			</div>
			
		);
	}
}

let mapStateToProps = (state) => {
    return {
        data: state.reply.data
    };
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        onCreate: (item) => dispatch(onCreate(item)),
        onDelete: (item) => dispatch(onDelete(item)),
        onUpdate: (item) => dispatch(onUpdate(item))
    }
}*/

export default connect(mapStateToProps)(ReplyListComponent);
