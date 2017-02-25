import React, { Component, PropTypes } from 'react';


export default class DetailComponent extends React.Component {
	constructor(...args) {
		super(...args);
		this.state = {
			hidden: false,
		};
		this.onClickButton = this.onClickButton.bind(this);
	}



	onClickButton() {
		if (this.state.hidden === true){
			this.setState({ hidden: false });	
		} else {
			this.setState({ hidden: true });
		}
		
	}

	addClickButton() {
		this.setState({ text: textfromRe});
	}

	render() {
		return (
			<div>
				{!this.state.hidden && <span>{this.props.birth}년에 태어났습니다.</span>}
				<button onClick={this.onClickButton}>숨기기</button>
				{<span>{this.props.text} 쓴글.</span>}
				<button onClick={this.addClickButton}>입력</button>
			</div>
		);
	}



}
	DetailComponent.PropTypes = {
		textfromRe: PropTypes.string,
	};

	DetailComponent.defaultProps = {
		birth: '1985',
	};


