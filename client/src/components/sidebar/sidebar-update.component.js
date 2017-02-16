import React from 'react';
import update from 'react-addons-update'

export default class SideBarUpdateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isUpdate: false,
            selectedData: ''
        };
        this.onSelection = this.onSelection.bind(this);
        this.handleChange= this.handleChange.bind(this);   
        this.handleClick = this.handleClick.bind(this); 
        // this.handleKey = this.handleKey.bind(this);  
    }

    onSelection(selection) {
        this.setState({ selected: selection.title });
        //or trigger a dispatch here 
    }	  

    handleChange(e) {
        this.setState({
            selectedData: e.target.value
        });
    }    

    // handleKey(key) {
    //     this.props.onKey(key)
    //     this.setState({
    //         selectedKey: key
    //     })
    // }

    handleClick() {
        if(!this.state.isUpdate) {
            this.setState({
                selectedData: this.props.onSelectedData
            });
            this.props.onEdit(this.state.selectedData);
        } else {
            this.handleEdit();
        }
        this.props.onUpdate();
    }

    render(){

        const edit = (
            <div>
                <input 
                    type="text"
                    name="selectedData"
                    placeholder="input new title name"
                    value={this.state.selectedData}
                    onChange={this.handleChange}
                />
            </div>
        )

        return ( 
	        	<div>
                    {this.props.isUpdate ? edit : ''}
                    <button onClick={this.handleClick}>
                        {this.props.isUpdate ? 'ok' : 'update'}
                    </button>
	        	</div>
        );
    }
}

