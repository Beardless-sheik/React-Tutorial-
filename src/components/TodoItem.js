import React from "react"; 

function ToDoItem(props) {
    return(
      <React.Fragment>
        <li>
          {props.todo.title}
        </li>
      </React.Fragment>
    )
}

export default ToDoItem;