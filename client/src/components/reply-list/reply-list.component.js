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
		const item = data => {
			return data.map(i => {
				return (
					<div>
						<Reply content={i.content}/>
						<ReplyDelete i={i}/>
						<ReplyUpdate i={i}/><br/>
					</div>
				);
			});
		};

		return (
			<div>
				{item(this.props.data)}
				<ReplyCreate/>
			</div>
			
		);
	}
}

let mapStateToProps = (state) => {
    return {
        data: state.reply.data
    };
}

export default connect(mapStateToProps)(ReplyListComponent);
