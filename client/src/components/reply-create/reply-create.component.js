import React from 'react';
import styles from './reply-create.component.css';

export default class ReplyCreateComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value:'',
			insertData: {
				content: '',
				post_no: 1,
				createdDate: '2017-02-22'
			}
		};

		this.handleChange = this.handleChange.bind(this);
  		this.handleSubmit = this.handleSubmit.bind(this);
  		this.getTimeStamp = this.getTimeStamp.bind(this);
  		this.leadingZeros = this.leadingZeros.bind(this);
	}

	handleChange(event) {
	    this.setState({value: event.target.value});
	}

	getTimeStamp() {
	  let d = new Date();

	    let stamp =
	      this.leadingZeros(d.getFullYear(), 4) + '-' +
	      this.leadingZeros(d.getMonth() + 1, 2) + '-' +
	      this.leadingZeros(d.getDate(), 2) + ' ' +

	      this.leadingZeros(d.getHours(), 2) + ':' +
	      this.leadingZeros(d.getMinutes(), 2) + ':' +
	      this.leadingZeros(d.getSeconds(), 2);

	  return stamp;
	}



	leadingZeros(n, digits) {
		let zero = '';
	  	n = n.toString();

		if (n.length < digits) {
		  for (let i = 0; i < digits - n.length; i++)
		    zero += '0';
		}
		return zero + n;
	}


  	handleSubmit(event) {
	    event.preventDefault();
	    this.setState({
	    	insertData: {
	    		content: this.state.value,
	    		post_no: 1,
	    		createdDate: this.getTimeStamp()
	    	}
	    }, () => {
	    	this.props.replyInsert(this.state.insertData);
			this.setState({value: ''});
	    })
	}

	render() {
		const btn = "waves-effect waves-light btn";

		return (
			<div className={styles.createReplyDiv}>
				<div className={styles.createText}>
		 	        <textarea value={this.state.value} onChange={this.handleChange} />
		        </div>
		        <div className={styles.createButton}>
		        	<input type="submit" value="submit" className={btn} onClick={this.handleSubmit} />
		        </div>
			</div>
		);
	}
}
