import React from 'react';

export default class CategoryCreateComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			clicked: false,
			value: ''
		};

		this.toggleClick = this.toggleClick.bind(this);
		this.addCategory = this.addCategory.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	toggleClick() {
		this.setState({
			clicked: !(this.state.clicked)
		});
	}

	addCategory() {
		this.props.categoryInsert({title: this.state.value});
		this.setState({
			value: ''
		})
		this.toggleClick();
	}

	handleChange(e) {
		this.setState({
			value: e.target.value
		})
	}

	render() {
		const addCategory = (<div>
								<input type="text" onChange={this.handleChange} required/>
								<button onClick={this.addCategory}>submit</button>
						  </div>);
		const plusBtn = (<button onClick={this.toggleClick}>+</button>);

		return (
			<div>
				{this.state.clicked ? addCategory : plusBtn}
			</div>
		);
	}
}
