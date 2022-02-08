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
          {props.todo.title}
        </li>
      </React.Fragment>
    )
}

export default ToDoItem;