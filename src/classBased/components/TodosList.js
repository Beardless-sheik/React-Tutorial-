import React from "react"; 
import ToDoItem from "./TodoItem";

class ToDoList extends React.Component {
  render() {
    return(
      <React.Fragment>
        <ul>
          {this.props.todos.map(todo => (
            <ToDoItem 
              key={todo.id} 
              todo={todo} 
              handleChangeProps={this.props.handleChangeProps}
              handleDeletionProps={this.props.handleDeletionProps}
              updateTitleProps={this.props.updateTitleProps}
            />
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

export default ToDoList;