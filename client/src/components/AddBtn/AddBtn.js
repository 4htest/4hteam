import React from 'react';
import styles from './AddBtn.css';

import Postview from '../Postview/Postview';
 
class AddBtn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show : false
        }
    }

    addPostview(){
        this.setState({
            show : true
        });
    }

    render(){
        return (
        	<div className={styles.addbtn}>
        		<button onClick={this.addPostview.bind(this)}>Postview Add!</button>      		
        		{this.state.show ? <Postview/> : ""}
        	</div>
        );
    }
}


 
export default AddBtn;