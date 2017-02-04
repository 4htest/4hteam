import React from 'react';
import styles from './app.container.css';

import { HeaderComponent, SideBarComponent } from '../../components';
import DetailContainer from '../detail/detail.container';
import { Link } from 'react-router'

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <SideBarComponent />
                <div className={styles.appFrame}>
                    <HeaderComponent />
                    <div className={styles.appChild}>
                        <ul>
                            <li><Link to="main">main</Link></li>
                            <li><Link to="detail">detail</Link></li>
                        </ul>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default AppContainer;
