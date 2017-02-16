import React from 'react';

export default class Category extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this)	
		console.log(this.props)
	}

	handleClick(title, index) {
		this.props.onKey(index)
		this.props.onData(title)

		this.setState({
			selectedKey: index
		});

		this.setState({
			selectedData: title
		})
	}

	render() {
		return (
			<div>
				<div onClick={() => this.handleClick(this.props.title, this.props.index)}>
					{this.props.title}
				</div>
			</div>
		);
	}
}