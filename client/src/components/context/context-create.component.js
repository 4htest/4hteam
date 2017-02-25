import React from 'react';

export default class ContextCreateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        	data: '' 
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        console.log(this.state)
        console.log(this.props)
    }

    handleChange(e) {
        this.setState({
            data: e.target.value
        });
    }    

    handleClick() {
    	const contact = {
    		data : this.state.data
    	};

    	this.props.onCreate(contact);

    	this.setState({
    		data: ''
    	});

    }

    render(){

        return ( 
	        	<div>
                    <input 
                    	type="text"
                    	name="data"
                    	placeholder="input data name"
                    	value={this.state.data}
                    	onChange={this.handleChange}
                	/>
                    <button onClick={this.handleClick}>create</button>
	        	</div>
        );
    }
}

