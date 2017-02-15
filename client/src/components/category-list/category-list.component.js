import React from 'react';
import Category from '../category/category.component';

export default class CategoryListComponent extends React.Component {
	constructor(props) {
		super(props);
		this.handleKey= this.handleKey.bind(this);
		console.log(this.props)
	}

    handleKey(key) {
    	this.props.onKey(key)
        this.setState({
            selectedKey: key
        })
    }

	render() {

		const item = data => {
			return data.map((obj, i) => {
				return (<Category  
					title={obj.title} 
				    index={i}
				    onKey={this.handleKey}					
				/>)
				this.props.onKey(i)
			});
		};

		return (
				<div>{item(this.props.list)}</div>
		);
	}
}
