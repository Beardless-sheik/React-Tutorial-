import React, { useState } from "react"; 
import styles from "./TodoItem.module.css";
import { FaTrash } from "react-icons/fa";

const ToDoItem = (props) => {
  const [editing, setEditing] = useState(false)

  const handleEditing = () => {
    setEditing(true)
  }

  const handleUpdatedDone = event => {
    if (event.key === "Enter") {
      setEditing(false)
    }
  }

    let viewMode = {}
    let editMode = {}
    if (editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }

    const { completed, id, title } = props.todo
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    return(
      <div>
        <li className={styles.item}>
          <input type="text" className={styles.textInput} style={editMode} 
            value={title}
            onChange={e => {
              props.updateTitleProps(e.target.value, id)
            }} 
            onKeyDown={handleUpdatedDone}
          />
          <div onDoubleClick={handleEditing} style={viewMode}>
            <input className={styles.checkbox}
              type="checkbox" 
              checked={completed}
              onChange={() => props.handleChangeProps(id)}
            />
            <button onClick={() => props.handleDeletionProps(id)}>
              <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
            </button>
            <span style={completed ? completedStyle : null}>
              {title}
            </span>
          </div>
        </li>
      </div>
    )
};

export default ToDoItem;