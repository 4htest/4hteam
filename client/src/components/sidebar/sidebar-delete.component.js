import React from 'react';
import update from 'react-addons-update'

export default class SideBarDeleteComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        	title: '' 
        };
        this.onSelection = this.onSelection.bind(this);
        this.handleClick = this.handleClick.bind(this);
        console.log(this.props)
    }

    onSelection(selection) {
        this.setState({ selected: selection.title });
        //or trigger a dispatch here 
    }	  

    handleClick() {
        this.setState({
            // selectedKey: index
        });

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

