import React from "react"; 
import ToDoItem from "./TodoItem";

const ToDoList = (props) => {
    return(
      <React.Fragment>
        <ul>
          {props.todos.map(todo => (
            <ToDoItem 
              key={todo.id} 
              todo={todo} 
              handleChangeProps={props.handleChangeProps}
              handleDeletionProps={props.handleDeletionProps}
              updateTitleProps={props.updateTitleProps}
            />
          ))}
        </ul>
      </React.Fragment>
    )
}

export default ToDoList;