import React from 'react';
import {PostingComponent, ReplyListComponent} from '../../components';
import styles from './detail.container.css';

export default class DetailContainer extends React.Component {
	render() {
		return (
			<div className={styles.detail}>
				<h2>detail container</h2>
				<PostingComponent />
				<ReplyListComponent />
			</div>
		);
	}
}