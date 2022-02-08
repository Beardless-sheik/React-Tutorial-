import React from "react"; 

function ToDoItem(props) {
    return(
      <React.Fragment>
        <li>
          <input 
            type="checkbox" 
            checked={props.todo.completed}
            onChange={() => props.handleChangeProps(props.todo.id)}
          />
          <button onClick={() => props.handleDeletionProps(props.todo.id)}>Delete</button>
          {props.todo.title}
        </li>
      </React.Fragment>
    )
}

export default ToDoItem;