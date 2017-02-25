import React from 'react';
import styles from './context.component.css';
import update from 'react-addons-update';

import ContextCreateComponent from './context-create.component.js';

 
class ContextComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [
            	{context: "test1"},
            	{context: "test2"}
            ]
        };		
        this.handleCreate= this.handleCreate.bind(this);
    }

    handleCreate(contact) {
        this.setState({
            data: update(
	              this.state.data, 
	              {
	                  $push: [contact]
	              })
        });  
        console.log(this.state)
    }       


    render(){
        return (
			<div>
				{this.state.data[0].context}
                <ContextCreateComponent onCreate={this.handleCreate} />
			</div>
        );
    }
}
 
export default ContextComponent;