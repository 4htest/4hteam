import React from 'react';

export default class Category extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this)	
		console.log(this.props)
	}

	handleClick(index) {
		this.props.onKey(index)

		this.setState({
			selectedKey: index
		});
		// console.log(index)
	}

	render() {
		return (
			<div>
				<div onClick={() => this.handleClick(this.props.index)}>
					{this.props.title}
				</div>
			</div>
		);
	}
}
