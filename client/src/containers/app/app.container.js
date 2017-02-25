import React from 'react';
import styles from './app.container.css';

import { HeaderComponent, SideBarComponent, ContextComponent } from '../../components';
import DetailContainer from '../detail/detail.container';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <SideBarComponent data={this.props.category.data} />
                <div className={styles.appFrame}>
                    <HeaderComponent />
                    <div className={styles.appChild}>
                        {this.props.children}
                    </div>
                </div>
                <ContextComponent />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        category: state.category
    };
};

export default connect(mapStateToProps)(AppContainer);
