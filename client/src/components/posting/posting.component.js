import React from 'react';
import styles from './posting.component.css';
import DetailComponent from '../detail/detail.component.js';

export default class PostingComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.postingArea}>
				<DetailComponent />
			</div>
		);
	}
}
