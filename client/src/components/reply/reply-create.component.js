import React from 'react';
import { connect } from 'react-redux';
import { onCreate } from '../../actions/reply/reply.action';
 

class ReplyCreateComponent extends React.Component {
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
	    {this.props.onCreate(this.state.value)}
	}

	render() {
		return (
			<div>
				<br/><br/><h5>Create Reply at a below textarea</h5>
				<form onSubmit={this.handleSubmit}>
			        <label>
			          content:
			          <textarea value={this.state.value} onChange={this.handleChange} />
			        </label>
			        <input type="submit" value="Submit" />
		     	</form>
			</div>
		);
	}
}

let mapDispatchToProps = (dispatch) => {
    return {
        onCreate: (item) => dispatch(onCreate(item))
    }
}
 
ReplyCreateComponent = connect(undefined, mapDispatchToProps)(ReplyCreateComponent);
 
export default ReplyCreateComponent;