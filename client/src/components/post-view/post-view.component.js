import React from 'react';
import PostComponent from '../../components/post/post.component';
import PostCreateComponent from '../../components/post-create/post-create.component';

 
class PostViewComponent extends React.Component {
	constructor(props) {
		super(props);
	}

    render(){
		const item = data => {
			return data.map(i => {
				return (
					<PostComponent i={i}
						   		   data={this.props.data} />
				);
			});
		};

        return (
			<div>
				<ul>
					{item(this.props.data)}
				</ul>
				<PostCreateComponent postInsert={this.props.postInsert} />
			</div>
        );
    }
}
 
export default PostViewComponent;