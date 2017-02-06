import React from 'react';
import styles from './sidebar.component.css';

import { SideNav, Nav } from 'react-sidenav';
 
class SideBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: 'dashboard' }
        this.onSelection= this.onSelection.bind(this);
    }

    onSelection(selection) {
        this.setState({ selected: selection.id });
        //or trigger a dispatch here 
    }	

    render(){
		let navi = [
		    { id: 'dashboard', icon: 'fa fa-dashboard' , text: 'Dashboard'},
		    { id: 'products', icon: 'fa fa-cube', text: 'Products' ,
		        navlist: [
		          { icon: 'fa fa-desktop', id: 'manage' ,text: 'Manage Product' },
		          { icon: 'fa fa-cog', id: 'suppliers' ,text: 'Suppliers' }
		        ]
		    },
		    { id: 'inventory', icon: 'fa fa-database' ,text: 'Inventory'},
		    { id: 'deliveries', icon: 'fa fa-truck' ,text: 'Deliveries'},
		    { id: 'reports', icon: 'fa fa-bar-chart' ,text: 'Reports' }
		];

        return ( 
	        	<div className={styles.sidebar}>
					<SideNav selected={this.state.selected} navs={navi} onSelection={this.onSelection}/>
	        	</div>
        );
    }
}
 
export default SideBarComponent;