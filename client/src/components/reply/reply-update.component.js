import React from 'react';
import { connect } from 'react-redux';
import { onUpdate } from '../../actions/reply/reply.action';

class ReplyUpdateComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value:'',
			item: [
				{index: '', content: ''}
			]
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

	update(item) {
		this.state.item.index = item;
		this.state.item.content = this.state.value;
		this.props.onUpdate(this.state.item);
  	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
			        <label>
			          content:
			          <textarea value={this.state.value} onChange={this.handleChange} />
			        </label>
		     	</form>
				<button type="button" onClick={this.update.bind(this, this.props.i)}>Update</button>
			</div>
		);
	}
}

let mapDispatchToProps = (dispatch) => {
    return {
        onUpdate: (item) => dispatch(onUpdate(item))
    }
}
 
ReplyUpdateComponent = connect(undefined, mapDispatchToProps)(ReplyUpdateComponent);
 
export default ReplyUpdateComponent;