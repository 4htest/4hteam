import React from 'react';
import styles from './Main.css';

import Header from '../Header/Header';
import Postview from '../Postview/Postview';
import AddBtn from '../AddBtn/AddBtn';

class Main extends React.Component {
    render(){
        return (
            <div className={styles.container}>
                <div className={styles.main}>
                    MainContainer
                </div>
                <Header/>
                
                <AddBtn/>
            </div>
        );
    }
}
 
export default Main;