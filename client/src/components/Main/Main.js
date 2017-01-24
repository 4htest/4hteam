import React from 'react';
import styles from './Main.css';

import Header from '../Header/Header';

 
class Main extends React.Component {
    componentWillMount() {
    }
    
    render(){
        return (
            <div className={styles.container}>
                <div className={styles.main}>
                    MainContainer
                </div>
                <Header/>
            </div>
        );
    }
}
 
export default Main;