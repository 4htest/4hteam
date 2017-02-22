import React from 'react';
import Category from '../category/category.component';

export default class CategoryListComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const item = data => {
			return data.map(i => {
				return <Category title={i.title}/>
			});
		};

		return (
			<div>{item(this.props.list)}</div>
		);
	}
}
