import React from "react";
import './todo.css';


const Todo = (props) => {
  return (
    <div className="todo-container">
        <li id={props.id}>
          {props.name} 
          <button className="removebtn" 
                  onClick={() => props.removeTodo(props.id)}>
              x
          </button>
        </li>
    </div>
  )
}

export default Todo;