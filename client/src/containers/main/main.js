import React from 'react';
import styles from './main.css';

import Header from '../../components/header/header';
import SideBar from '../../components/sidebar/sidebar';

class Main extends React.Component {
    render(){
        return (
            <div className={styles.container}>
                <div className={styles.main}/>
                <Header/>
                <SideBar/>
            </div>
        );
    }
}
 
export default Main;