import React from 'react';
import { Link } from 'react-router'

export default class PreviewPost extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const url = `/${this.props.title}`;
		return (
			<div>
				<li>
					<Link to={url}>{this.props.title}</Link>
				</li>
			</div>
		);
	}
}
