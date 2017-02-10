import React from 'react';
import styles from './reply-list.component.css';
import Reply from '../../components/reply/reply.component';

export default class ReplyListComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const test = data => {
			return data.map(i => {
				return (
					<Reply key={i.toString()} index={i} />
				);
			});
		};

		return (
			<div className={styles.replyList}>
				{test([1,2,3,4,5])}
			</div>
		);
	}
}
