import React from 'react';
import { Link } from 'react-router'

export default class Category extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<li>
					<Link to={this.props.title}>{this.props.title}</Link>
				</li>
			</div>
		);
	}
}
