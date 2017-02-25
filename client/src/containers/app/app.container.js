import React from 'react';
import styles from './app.container.css';

import { HeaderComponent, SideBarComponent } from '../../components';
import { categoryInsertRequest } from '../../actions/category/category.action';
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
                <SideBarComponent 
                    data={this.props.category.data}
                    categoryInsert={this.props.categoryInsert}
                />
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

const mapStateToProps = (state) => {
    return {
        category: state.category.list
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        categoryInsert: (state) => {
            return dispatch(categoryInsertRequest(state));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
