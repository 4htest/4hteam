import React from 'react';

export default class SideBarCreateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        	title: '' 
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            title: e.target.value
        });
    }    

    handleClick() {
    	const contact = {
    		title : this.state.title
    	};

    	this.props.onCreate(contact);

    	this.setState({
    		title: ''
    	});

    }

    render(){

        return ( 
	        	<div>
                    <input 
                    	type="text"
                    	name="title"
                    	placeholder="input title name"
                    	value={this.state.title}
                    	onChange={this.handleChange}
                	/>
                    <button onClick={this.handleClick}>create</button>
	        	</div>
        );
    }
}

