import React, { Component } from 'react';
import TodoItem from './todoitem';

class Todos extends Component {
   


  render() {
    let todoItems;
    if(this.props.todos){
        todoItems  = this.props.todos.map(todo => {
      
            return (
                <TodoItem key={todo.title} todo={todo} />
            );
        });
    }

    return (
      <div className="Todos">
        Todos 
        {todoItems}
      </div>
    );
  }
}

export default Todos;
