import React from 'react';
import styles from './reply.component.css';
import Dropdown from '../dropdown/dropdown.component.js';
import DropdownItem from '../dropdown/dropdown-item.component';

export default class ReplyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value:'',
			clicked: false,
			updatedData: {
				index: 1, 
				item: {
					comment_no: 1,
					content: '',
					createdDate: '',
					post_no: 1
				} 
			}
		};
		
		this.handleChange = this.handleChange.bind(this);
  		this.toggleClick = this.toggleClick.bind(this);
		console.log(this.props.i.comment_no);
	}

	toggleClick() {
		this.setState({
			clicked: !(this.state.clicked)
		})
	}

	handleChange(event) {
	    this.setState({value: event.target.value});
	}

	delete(item) {
		console.log(item);
		this.props.replyDelete(item);
  	}

  	update(item) {
  		this.setState({
			updatedData: {
				index: this.props.data.indexOf(item),
				item: {
					comment_no: item.comment_no,
					content: this.state.value,
					createdDate: item.createdDate,
					post_no: item.post_no
				} 
			}
		},() => {
			this.props.replyUpdate(this.state.updatedData);
			this.toggleClick();
		});
  	}

	render() {
		const btn = "waves-effect waves-light btn " + styles.button;
		const dropdownBtn = "material-icons icon-button " + styles.iconButton;
		const rContent = "card-content " + styles.rContent; 
		const rAction = "card-action " + styles.rAction;

		const replyView = (
			<div className={styles.rbody}>
                <div className={styles.info}>
                    <a className={styles.username}>Anonymous</a><span className={styles.date}>{this.props.i.createdDate}</span>
                    <div className={styles.dropdown}>
                    	<Dropdown>
                    		<DropdownItem onClick = {this.delete.bind(this, this.props.i.comment_no)}>
                    			remove
                    		</DropdownItem>
                    		<DropdownItem onClick = {this.toggleClick}>
                    			update
                    		</DropdownItem>
                     	</Dropdown>
                    </div>
                </div>
                <div className={rContent}>
                    {this.props.i.content}
                </div>
                <hr className={styles.horizontal} />
            </div>
            
		);

		const editView = (
			<div className={styles.rbody}>
				<div className={rContent}>
					<textarea className="materialize-textarea" value={this.state.value} onChange={this.handleChange} />
					<div className={rAction}>
                        <a onClick={this.update.bind(this, this.props.i)}>확인</a>
                    </div>
				</div>
			</div>
		);

		
		return (
			<li>
				<div className={styles.reply}>
	            	{ this.state.clicked ? editView : replyView }
	        	</div>
	        </li>
		);
	}
}
