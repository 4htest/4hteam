import React from 'react';
import styles from './dropdown.component.css'

export default class DropdownComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false
		}
	}

	render() {
		const dropListView = (
			<ul className={styles.dropList}>
				<li><span onClick={() => { 
					this.props.delete();
					this.setState({
						clicked: !(this.state.clicked)
					});
				}}>
					Remove
				</span></li>
  				<li><span onClick={this.props.toggleClick}>Edit</span></li>
            </ul>
        );

		return (
			<div className={styles.dropContainer}>
				<span className={styles.iconButton} onClick={() => {
					this.setState({
						clicked: !(this.state.clicked)
					})
				}}>...</span>
				{ this.state.clicked ? dropListView : <div></div> }
			</div>	
		);
	}
}
