import React from 'react';
import { Link } from 'redux';
import { CreatePageContainer } from '../../containers';
 
class PosteCreateComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value:''
		};

  		// this.handleCreate = this.handleCreate.bind(this);		
	}

 //  	handleCreate(event) {
	//     event.preventDefault();
	//     // this.props.postInsert({ comment_no: 7,
	//     // 						content: "new post",
	//     // 						createdDate: "2017-02-22 13:35:40",
	//     // 						post_no: 1 });
	//     <Link to={url}>{this.props.title}</Link>
	// }	

    render(){

    	const createbtn = (
    		<button>
	   			<Link to={CreatePageContainer}>create</Link>
    		</button>
    	);
        return (
			<div>
				{createbtn}
			</div>
        );
    }
}
 
export default PosteCreateComponent;