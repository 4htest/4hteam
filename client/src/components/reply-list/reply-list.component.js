import React from 'react';
import { connect } from 'react-redux';
import styles from './reply-list.component.css';
import Reply from '../../components/reply/reply.component';
import ReplyCreate from '../../components/reply-create/reply-create.component';

export default class ReplyListComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const item = data => {
			return data.map(i => {
				return (
					<Reply i={i}
						   data={this.props.data}
						   replyDelete={this.props.replyDelete}
					       replyUpdate={this.props.replyUpdate} />
				);
			});
		};

		return (
			<div className={styles.replyArea}>
				<ul>
					{item(this.props.data)}
				</ul>
				<ReplyCreate replyInsert={this.props.replyInsert} />
			</div>
		);
	}
}
