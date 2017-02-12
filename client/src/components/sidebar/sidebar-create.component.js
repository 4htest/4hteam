import React from 'react';

export default class SideBarCreateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        	// selected: 'category 1',
        	title: '' 
        };
        this.onSelection = this.onSelection.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    onSelection(selection) {
        this.setState({ selected: selection.title });
        //or trigger a dispatch here 
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

