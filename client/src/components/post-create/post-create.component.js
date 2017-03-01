import React from 'react';
 
class PosteCreateComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value:''
		};

  		this.handleCreate = this.handleCreate.bind(this);		
	}

  	handleCreate(event) {
	    event.preventDefault();
	    this.props.postInsert({ comment_no: 7,
	    						content: "new post",
	    						createdDate: "2017-02-22 13:35:40",
	    						post_no: 1 });
	}	

    render(){

    	const createbtn = (<button onClick={this.handleCreate}>post create</button>);
        return (
			<div>
				{createbtn}
			</div>
        );
    }
}
 
export default PosteCreateComponent;