import React from 'react';
import { connect } from 'react-redux';
import styles from './reply.component.css';
import { replyInsertRequest } from '../../actions/reply/reply.action';

class ReplyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value:'',
			item: [
				{index: '', content: ''}
			],
			clicked: false
		};
		this.handleChange = this.handleChange.bind(this);
  		this.handleSubmit = this.handleSubmit.bind(this);
  		/*this.toggleClick = this.toggleClick.bind(this);
  		this.delete = this.delete.bind(this);
  		this.update = this.update.bind(this);*/
  		
	}

	toggleClick() {
		this.setState({
			clicked: !(this.state.clicked)
		})
	}

	handleChange(event) {
	    this.setState({value: event.target.value});
	}

	handleSubmit(event) {
	    event.preventDefault();
	    this.props.replyInsert({content: this.state.value});
	    //{this.props.onCreate(this.state.value)}
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
				
							<div className={styles.reply}>
				                <div className="card">
				                    <div className={styles.info}>
				                        <a className={styles.username}>Writer</a> 2017-02-22 17:47:33
				                        <div className={styles.optionbutton}>
				                            <a className='dropdown-button' id={`dropdown-button-${data._id}`} data-activates={`dropdown-${data._id}`}>
				                                <i className="material-icons icon-button">more_vert</i>
				                            </a>
				                            <ul id={`dropdown-${data._id}`} className='dropdown-content'>
				                                <li><a>Edit</a></li>
				                                <li><a>Remove</a></li>
				                            </ul>
				                        </div>
				                    </div>
				                    <div className="card-content">
				                        {i.content}
				                    </div>
				                    <div className={styles.footer}>
				                        <i className="material-icons log-footer-icon star icon-button">star</i>
				                        <span className="star-count">0</span>
				                    </div>
				                </div>
							{/*<button type="button" onClick={this.toggleClick}>Delete</button>
							<button type="button" onClick={this.delete(i)}>Delete</button>
							<button type="button" onClick={this.update(i)}>Update</button>*/} 
				            </div>
				
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
 */

const mapStateToProps = (state) => {
    return {
        data: state.reply.list
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        replyInsert: (state) => {
            return dispatch(replyInsertRequest(state));
        }
    }
}
ReplyComponent = connect(mapStateToProps, mapDispatchToProps)(ReplyComponent);
 
export default ReplyComponent;