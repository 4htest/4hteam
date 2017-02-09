import React from 'react';
import styles from './sidebar.component.css';
import { Link } from 'react-router'

class SideBarComponent extends React.Component {
    render(){
        return (
        	<div className={styles.sidebar}>
        		<ul>
                    <li><Link to="main">main</Link></li>
                    <li><Link to="detail">detail</Link></li>
                </ul>
        	</div>
        );
    }
}
 
export default SideBarComponent;