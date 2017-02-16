import React from 'react';

export default class ReplyComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>{this.props.content}</div>
		);
	}
}
