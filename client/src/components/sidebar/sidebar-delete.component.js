import React from 'react';
import update from 'react-addons-update'

export default class SideBarDeleteComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        	title: '' 
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onDelete();
    }

    render(){

        return ( 
	        	<div>
                    <button onClick={this.handleClick}>delete</button>
	        	</div>
        );
    }
}

