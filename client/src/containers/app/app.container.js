import React from 'react';
import styles from './app.container.css';

import { HeaderComponent, SideBarComponent } from '../../components';
import DetailContainer from '../detail/detail.container';

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
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default AppContainer;
