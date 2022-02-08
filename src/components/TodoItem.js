import React from "react"; 
import styles from "./TodoItem.module.css";

class ToDoItem extends React.Component {
  state = {
    editing: false,
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    })
  }

  handleUpdatedDone = event => {
    if (event.key === "Enter") {
      this.setState({ editing: false })
    }
  }
  
  render() {
    let viewMode = {}
    let editMode = {}
    if (this.state.editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }

    const { completed, id, title } = this.props.todo
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
              this.props.updateTitleProps(e.target.value, id)
            }} 
            onKeyDown={this.handleUpdatedDone}
          />
          <div onDoubleClick={this.handleEditing} style={viewMode}>
            <input className={styles.checkbox}
              type="checkbox" 
              checked={completed}
              onChange={() => this.props.handleChangeProps(id)}
            />
            <button onClick={() => this.props.handleDeletionProps(id)}>Delete</button>
            <span style={completed ? completedStyle : null}>
              {title}
            </span>
          </div>
        </li>
      </div>
    )
  }
}

export default ToDoItem;