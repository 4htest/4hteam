import React from 'react';
import styles from './sidebar.component.css';
import update from 'react-addons-update';
import { SideNav, Nav } from 'react-sidenav';
import { Link } from 'react-router'
import CategoryListComponent from '../category-list/category-list.component';
import SideBarCreateComponent from './sidebar-create.component.js';

export default class SideBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props;
        // this.state = { selected: 'dashboard' }
        this.onSelection= this.onSelection.bind(this);
        this.handleCreate= this.handleCreate.bind(this);
    }

    onSelection(selection) {
        this.setState({ selected: selection.title });
        //or trigger a dispatch here 
    }	

    handleCreate(contact) {
        this.setState({
            data: update(
                      this.state.data, 
                      {
                          $push: [contact]
                      })
        });
        console.log(this.state)     
    }    

    render(){

        return ( 
	        	<div className={styles.sidebar}>
                    <CategoryListComponent 
                        list={this.state.data}
                    />
                    <SideBarCreateComponent onCreate={this.handleCreate} />
                    <ul>
                        <li><Link to="main">main</Link></li>
                        <li><Link to="detail">detail</Link></li>
                    </ul>
	        	</div>
        );
    }
}


