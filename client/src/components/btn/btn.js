import React from 'react';
import styles from './btn.css';

import Postview from '../postview/postview';
 
class Btn extends React.Component {
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

    deletePostview(){
        this.setState({
            show : false
        });
    }

    render(){
        return (
        	<div>
        		<button className={styles.addbtn} onClick={this.addPostview.bind(this)}>Postview Add!</button> 
                <button className={styles.delebtn} onClick={this.deletePostview.bind(this)}>Delete!</button>      		
        		{this.state.show ? <Postview/> : ""}
        	</div>
        );
    }
}


 
export default Btn;