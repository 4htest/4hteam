import React from 'react';
import styles from './header.css';
 
class Header extends React.Component {
    render(){
        return (
        	<div className={styles.header}>
        		4H's blog
        	</div>
        );
    }
}
 
export default Header;