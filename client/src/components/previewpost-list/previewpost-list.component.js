import React from 'react';
import PreviewPost from '../previewpost/previewpost.component';

export default class PreviewPostListComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const item = data => {
			return data.map(i => {
				return <PreviewPost title={i.title}/>
			});
		};

		return (
			<div>{item(this.props.list)}</div>
		);
	}
}
