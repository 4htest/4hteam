import React from 'react';
import styles from './main.css';
import { connect } from 'react-redux';

import Header from '../../components/header/header';
import Postview from '../../components/postview/postview';
import Btn from '../../components/btn/btn';
import Wirte from '../../components/write/write';

class Main extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render(){
        return (
            <div className={styles.container}>
                <Header />
                <div className={styles.child}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main;
