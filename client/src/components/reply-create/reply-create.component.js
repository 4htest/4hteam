import React from 'react';
import { connect } from 'react-redux';
import styles from './reply-create.component.css';

export default class ReplyCreateComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value:''
		};

		this.handleChange = this.handleChange.bind(this);
  		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
	    this.setState({value: event.target.value});
	}

  	handleSubmit(event) {
	    event.preventDefault();
	    this.props.replyInsert({content: this.state.value,
	    						comment_no: 6,
	    						createdDate: "2017-02-22 13:35:34",
	    						post_no: 1 });
	}

	render() {
		const btn = "waves-effect waves-light btn " + styles.button;

		return (
			<div className={styles.createReplyDiv}>
				<br />
				<form className={styles.createForm} onSubmit={this.handleSubmit}>
			        <label className={styles.createLabel}>
			          comment:
			          <textarea value={this.state.value} onChange={this.handleChange} />
			        </label>
			        <input className={btn} type="submit" value="Submit" />
		     	</form>
			</div>
		);
	}
}
