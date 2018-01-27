import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
    constructor(){
        super();
        this.state = {
            newproject:{

            }
        }
    }
   static defaultProps = {
       categories: ['Web Design','Web Dev','Mobile Dev']
   }
    
    handleSubmit(e){
        if (this.refs.title.value === ''){
            alert("Specify a value");
        }
        else
            this.setState({newproject:{
                id : uuid.v4(),
                title : this.refs.title.value,
                category: this.refs.category.value
            }}, function (){
                this.props.AddProject(this.state.newproject);
            }
        
        );
       e.preventDefault();
    }
  render() {
    let categoryoptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>

    });

   
    return (
        <div>
            <h3>Add Project</h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label> Title</label><br/>
                    <input type="text" ref="title"/>
                </div>
                <div>
                    <label> Title</label><br/>
                    <select ref="category">
                        {categoryoptions}
                    </select>
                </div>
                <input type="submit" value="send" />
            </form>
        </div>
    );
  }
}

export default AddProject;
