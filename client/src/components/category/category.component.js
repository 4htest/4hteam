import React from 'react';

export default class Category extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div>
					{this.props.title}
				</div>
			</div>
		);
	}
}
