import React from 'react';
import { connect } from 'react-redux';
import styles from './reply.component.css';

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
		this.props.replyDelete(this.props.data.indexOf(item));
  	}

  	update(item) {
  		/*this.setState({
			updatedData: {
				index: this.props.data.indexOf(item),
				item: {
					_id: item._id,
					content: this.state.value,
					createdDate: item.createdDate
				} 
			}
		})*/
  	
		this.state.updatedData.index = this.props.data.indexOf(item);
		this.state.updatedData.item.comment_no = item.comment_no;
		this.state.updatedData.item.content = this.state.value;
		this.state.updatedData.item.createdDate = item.createdDate;
		this.state.updatedData.item.post_no = item.post_no;
		this.props.replyUpdate(this.state.updatedData);
		this.toggleClick();
  	}


	render() {
		const btn = "waves-effect waves-light btn " + styles.button;
		const dropdownBtn = "material-icons icon-button " + styles.iconButton;
		const cardContent = "card-content " + styles.cardContent; 

		const replyView = (
			<div className="card">
                <div className={styles.info}>
                    <a className={styles.username}>Anonymous</a> {this.props.i.createdDate}
                    <div className={styles.optionbutton}>
		                <a className='dropdown-button' id={`dropdown-button-${this.props.i.comment_no}`} data-activates={`dropdown-${this.props.i.comment_no}`}>
		                    <i className={dropdownBtn}>more_vert</i>
		                </a>
		                <ul id={`dropdown-${this.props.i.comment_no}`} className='dropdown-content'>
		                    <li><a onClick={this.toggleClick}>Edit</a></li>
		                    <li><a onClick={this.delete.bind(this, this.props.i)}>Remove</a></li>
		                </ul>
		            </div>
                </div>
                <div className={cardContent}>
                    {this.props.i.content}
                </div>
            </div>
		);

		const editView = (
			<div className="card">
				<div className={cardContent}>
					<textarea className="materialize-textarea" value={this.state.value} onChange={this.handleChange} />
					<div className={styles.cardAction}>
                        <a onClick={this.update.bind(this, this.props.i)}>확인</a>
                    </div>
				</div>
			</div>
		);

		return (
			<div className={styles.reply}>
	            { this.state.clicked ? editView : replyView }
	        </div>
		);
	}

	componentDidUpdate() {
        // WHEN COMPONENT UPDATES, INITIALIZE DROPDOWN
        // (TRIGGERED WHEN LOGGED IN)
        $('#dropdown-button-'+this.props.i.comment_no).dropdown({
            belowOrigin: true // Displays dropdown below the button
        });
    }
 
    componentDidMount() {
        // WHEN COMPONENT MOUNTS, INITIALIZE DROPDOWN
        // (TRIGGERED WHEN REFRESHED)
        $('#dropdown-button-'+this.props.i.comment_no).dropdown({
            belowOrigin: true // Displays dropdown below the button
        });
    }
}
