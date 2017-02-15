import React from 'react';
import styles from './sidebar.component.css';
import update from 'react-addons-update';
import { SideNav, Nav } from 'react-sidenav';
import { Link } from 'react-router'
import CategoryListComponent from '../category-list/category-list.component';
import SideBarCreateComponent from './sidebar-create.component.js';
import SideBarDeleteComponent from './sidebar-delete.component.js';


export default class SideBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedKey: -1,
            data: this.props.data
        };
        this.onSelection= this.onSelection.bind(this);
        this.handleCreate= this.handleCreate.bind(this);
        this.handleDelete= this.handleDelete.bind(this);
        this.handleKey= this.handleKey.bind(this);
        console.log(this.state)
    }

    onSelection(selection) {
        this.setState({ selected: selection.title });
        //or trigger a dispatch here 
    }	

    handleKey(key) {
        this.setState({
            selectedKey: key
        })
    }

    handleCreate(contact) {
        this.setState({
            data: update(
                      this.state.data, 
                      {
                          $push: [contact]
                      })
        });  
    }    

    handleDelete() {
        if(this.state.selectedKey < 0) {
            return;
        }

        this.setState({
            data: update(
                this.state.data, 
                  {
                      $splice: [[this.state.selectedKey, 1]]
                  }),
            selectedKey: -1
        });  
    }

    render(){

        return ( 
	        	<div className={styles.sidebar}>
                    <CategoryListComponent list={this.state.data} onKey={this.handleKey}/>
                    <SideBarCreateComponent onCreate={this.handleCreate} />
                    <SideBarDeleteComponent onDelete={this.handleDelete} />
                    <ul>
                        <li><Link to="main">main</Link></li>
                        <li><Link to="detail">detail</Link></li>
                    </ul>
	        	</div>
        );
    }
}


