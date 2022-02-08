import React from "react"; 
import styles from "./TodoItem.module.css";

function ToDoItem(props) {
  const { completed, id, title } = props.todo
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  return(
    <React.Fragment>
      <li className={styles.item}>
        <input className={styles.checkbox}
          type="checkbox" 
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button onClick={() => props.handleDeletionProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </li>
    </React.Fragment>
  )
}

export default ToDoItem;