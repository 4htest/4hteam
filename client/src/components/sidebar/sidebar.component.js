import React from 'react';
import styles from './sidebar.component.css';
import { SideNav, Nav } from 'react-sidenav';
import CategoryListComponent from '../category-list/category-list.component';
import CategoryCreateComponent from '../category-create/category-create.component';

export default class SideBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: 'dashboard' }
        this.onSelection= this.onSelection.bind(this);
    }

    onSelection(selection) {
        this.setState({ selected: selection.id });
    }	

    render(){
        return ( 
        	<div className={styles.sidebar}>
                <ul>
                    <CategoryListComponent list={this.props.data} />
                </ul>
                <CategoryCreateComponent categoryInsert={this.props.categoryInsert} />
                {/*
                 <ul>
                    <li><Link to="main">main</Link></li>
                    <li><Link to="detail">detail</Link></li>
                </ul>
                */}
        	</div>
        );
    }
}
