import React from 'react';
 
class PostComponent extends React.Component {
	constructor(props) {
		super(props);
	}

    render(){
        return (
			<div>
				{this.props.i.content}
			</div>
        );
    }
}
 
export default PostComponent;