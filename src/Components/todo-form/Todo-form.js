import React, { useState } from "react";
import './todo-form.css';

const TodoForm = (props) => {
  const INITIAL_STATE = { name: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(formData);
    setFormData(INITIAL_STATE);
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }))
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Todo:</label>
      <input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <button id="btn">Add todo</button>
    </form>
  )
}



export default TodoForm