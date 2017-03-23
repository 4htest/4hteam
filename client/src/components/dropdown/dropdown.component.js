import React from 'react';
import styles from './dropdown.component.css'

export default class DropdownComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false
		}
	}

	droplist() {
		return this.props.children.map(item => item);
	};

	render() {
        const dropListView = (
			<ul className={styles.dropList} 
				onClick={() => {
					this.setState({ 
						clicked: !(this.state.clicked) 
					});
				}}>
				{this.droplist()}
            </ul>
        );

		return (
			<div className={styles.dropContainer}>
				<span className={styles.iconButton} 
					  onClick={() => { 
						  this.setState({
						  	  clicked: !(this.state.clicked)
						  });
					  }}>
					...
				</span>
				{ this.state.clicked ? dropListView : <div></div> }
			</div>	
		);
	}
}
