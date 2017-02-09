import React from 'react';

export default class ReplyComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{this.props.index} : bla bla bla
			</div>
		);
	}
}
