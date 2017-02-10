import React from 'react';
import styles from './header.component.css';
 
class HeaderComponent extends React.Component {
    render(){
        return (
        	<div className={styles.header}>
        		<div className={styles.headerContent}>
        			4H's blog
        		</div>
        	</div>
        );
    }
}
 
export default HeaderComponent;