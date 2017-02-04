import React from 'react';
import styles from './main.css';

import Header from '../../components/header/header';
import Postview from '../../components/postview/postview';
import Btn from '../../components/btn/btn';
import Wirte from '../../components/write/write';

class Main extends React.Component {
    render(){
        return (
            <div className={styles.container}>
                <div className={styles.main}>
                    MainContainer
                </div>
                <Header/>
                <Btn/>
                <Wirte/>
            </div>
        );
    }
}
 
export default Main;