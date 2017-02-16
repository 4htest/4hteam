import React from 'react';
import styles from './reply-list.component.css';
import Reply from '../../components/reply/reply.component';

export default class ReplyListComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value:'',
			data: this.props.data
		};

		this.handleChange = this.handleChange.bind(this);
  		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(event) {
	    this.setState({value: event.target.value});
	}

  	handleSubmit(event) {
	    alert('A content was submitted: ' + this.state.value);
	    event.preventDefault();
	}

	delete(item) {
    	const newState = this.state.data;
  		newState.splice(newState.indexOf(item), 1);
  		this.setState({data: newState});
  	}

  	update(item) {
  		const newState = this.state.data;
  		console.log(newState[newState.indexOf(item)]);
  		newState[newState.indexOf(item)].content = 'hi';
  		this.setState({data: newState});
  	}


	render() {
		const item = data => {
			return data.map(i => {
				return (
					<div key={i.id}>
						<Reply content={i.content}/>
						<button onClick={this.delete.bind(this, i)}>Delete</button>
						<button onClick={this.update.bind(this, i)}>Update</button>
					</div>
				);
			});
		};

		return (
			<div>{item(this.state.data)}
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
