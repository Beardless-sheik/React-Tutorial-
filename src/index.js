import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./functionBased/components/TodoContainer"
import "./functionBased/app.css"

ReactDOM.render(
  <React.StrictMode>
      <TodoContainer />
  </React.StrictMode>, 
  document.getElementById("root"))