import React from 'react';
import { connect } from 'react-redux';


class ReplyComponent extends React.Component {
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

	delete(item) {
		console.log(item);
		this.props.onDelete(item);
  	}

  	update(item) {
		this.state.item.index = item;
		this.state.item.content = this.state.value;
		this.props.onUpdate(this.state.item);
  	}

	render() {
		const item = data => {
			return data.map(i => {
				return (
					<ul>
						<li>
							{i.content}
							<button type="button" onClick={this.delete.bind(this, i)}>Delete</button>
							<button type="button" onClick={this.update.bind(this, i)}>Update</button>
						</li>
					</ul>
				);
			});
		};

		return (
			<div>
				{item(this.props.data)}
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
			</div>
		);
	}
}


/*let mapStateToProps = (state) => {
    return {
        data: state.reply.data
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        onCreate: (item) => dispatch(onCreate(item)),
        onDelete: (item) => dispatch(onDelete(item)),
        onUpdate: (item) => dispatch(onUpdate(item))
    }
}
 
ReplyComponent = connect(mapStateToProps, mapDispatchToProps)(ReplyComponent);
 
export default ReplyComponent;*/