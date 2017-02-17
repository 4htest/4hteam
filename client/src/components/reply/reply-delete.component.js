import React from 'react';
import { connect } from 'react-redux';
import { onDelete } from '../../actions/reply/reply.action';

class ReplyDeleteComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	delete(item) {
		console.log(item);
		this.props.onDelete(item);
  	}

	render() {
		return (
			<div>
				<button type="button" onClick={this.delete.bind(this, this.props.i)}>Delete</button>
			</div>
		);
	}
}

let mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (item) => dispatch(onDelete(item))
    }
}
 
ReplyDeleteComponent = connect(undefined, mapDispatchToProps)(ReplyDeleteComponent);
 
export default ReplyDeleteComponent;